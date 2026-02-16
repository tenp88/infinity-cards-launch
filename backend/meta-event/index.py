import json
import os
import time
import hashlib
import requests

def handler(event: dict, context) -> dict:
    """
    Отправляет события в Meta Conversion API
    """
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    if event.get('httpMethod') != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    body = json.loads(event.get('body', '{}'))
    
    event_name = body.get('event_name', 'Lead')
    user_data = body.get('user_data', {})
    custom_data = body.get('custom_data', {})
    event_source_url = body.get('event_source_url', '')
    
    access_token = os.environ.get('META_ACCESS_TOKEN')
    pixel_id = os.environ.get('META_PIXEL_ID')
    
    if not access_token or not pixel_id:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'META_ACCESS_TOKEN or META_PIXEL_ID not configured'})
        }
    
    hashed_user_data = {}
    if user_data.get('email'):
        hashed_user_data['em'] = hashlib.sha256(user_data['email'].lower().strip().encode()).hexdigest()
    if user_data.get('phone'):
        phone = ''.join(filter(str.isdigit, user_data['phone']))
        hashed_user_data['ph'] = hashlib.sha256(phone.encode()).hexdigest()
    if user_data.get('first_name'):
        hashed_user_data['fn'] = hashlib.sha256(user_data['first_name'].lower().strip().encode()).hexdigest()
    if user_data.get('last_name'):
        hashed_user_data['ln'] = hashlib.sha256(user_data['last_name'].lower().strip().encode()).hexdigest()
    
    source_ip = event.get('requestContext', {}).get('identity', {}).get('sourceIp', '')
    user_agent = event.get('headers', {}).get('User-Agent', '')
    
    if source_ip:
        hashed_user_data['client_ip_address'] = source_ip
    if user_agent:
        hashed_user_data['client_user_agent'] = user_agent
    
    payload = {
        'data': [{
            'event_name': event_name,
            'event_time': int(time.time()),
            'action_source': 'website',
            'event_source_url': event_source_url,
            'user_data': hashed_user_data,
            'custom_data': custom_data
        }],
        'access_token': access_token
    }
    
    url = f'https://graph.facebook.com/v18.0/{pixel_id}/events'
    
    response = requests.post(url, json=payload)
    
    if response.status_code == 200:
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True, 'response': response.json()})
        }
    else:
        return {
            'statusCode': response.status_code,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': response.text})
        }
