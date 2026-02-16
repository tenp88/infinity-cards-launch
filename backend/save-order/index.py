import json
import os
import psycopg2
import urllib.request
import urllib.parse

def handler(event, context):
    """
    Сохраняет заявку клиента в базу данных
    """
    
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
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
    
    try:
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '').strip()
        card_type = body.get('cardType', '').strip()
        print_run = body.get('printRun', '').strip()
        phone = body.get('phone', '').strip()
        
        if not all([name, card_type, print_run, phone]):
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Все поля обязательны для заполнения'})
            }
        
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor()
        
        cur.execute(
            "INSERT INTO orders (name, card_type, print_run, phone) VALUES (%s, %s, %s, %s) RETURNING id",
            (name, card_type, print_run, phone)
        )
        
        order_id = cur.fetchone()[0]
        conn.commit()
        
        cur.close()
        conn.close()
        
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID')
        
        print(f"Telegram debug - bot_token_len: {len(bot_token) if bot_token else 0}, chat_id: '{chat_id}'")
        
        if bot_token and chat_id:
            chat_id_clean = chat_id.strip()
            try:
                chat_id_int = int(chat_id_clean)
            except ValueError:
                chat_id_int = chat_id_clean
            
            message = f"""🆕 Новая заявка на расчет!

👤 Имя: {name}
📱 Телефон: {phone}
🎴 Тип карты: {card_type}
📦 Тираж: {print_run} шт"""
            
            try:
                url = f"https://api.telegram.org/bot{bot_token.strip()}/sendMessage"
                payload = json.dumps({
                    'chat_id': chat_id_int,
                    'text': message
                }).encode('utf-8')
                
                req = urllib.request.Request(url, data=payload, method='POST')
                req.add_header('Content-Type', 'application/json')
                response = urllib.request.urlopen(req)
                print(f"Telegram sent: {response.status}")
            except Exception as e:
                try:
                    error_body = e.read().decode('utf-8') if hasattr(e, 'read') else ''
                    print(f"Telegram error: {str(e)} | Body: {error_body}")
                except:
                    print(f"Telegram error: {str(e)}")
        
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'success': True,
                'orderId': order_id,
                'message': 'Заявка успешно сохранена'
            })
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }