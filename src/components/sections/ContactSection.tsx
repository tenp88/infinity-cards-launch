import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import OrderFormDialog from "@/components/OrderFormDialog";

interface ContactSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  isVisible: boolean;
}

const ContactSection = ({ sectionRef, isVisible }: ContactSectionProps) => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section 
      ref={sectionRef}
      className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-secondary to-secondary/90 text-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 px-2">Готовы обсудить ваш заказ?</h2>
          
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 sm:p-6 text-center">
                <Icon name="MapPin" size={32} className="mx-auto mb-3 text-accent" />
                <div className="font-semibold mb-1 text-white">Офис в Бишкеке</div>
                <div className="text-sm text-white/80">ул. Юсупа Абдрахманова 249</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 sm:p-6 text-center">
                <Icon name="Phone" size={32} className="mx-auto mb-3 text-accent" />
                <div className="font-semibold mb-1 text-white">Телефон</div>
                <a href="tel:+996222308088" className="text-sm text-white/80 hover:text-white transition-colors">+996 222 308 088</a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 sm:p-6 text-center">
                <Icon name="MessageCircle" size={32} className="mx-auto mb-3 text-accent" />
                <div className="font-semibold mb-1 text-white">Мессенджеры</div>
                <div className="text-sm text-white/80">WhatsApp / Telegram</div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
              onClick={() => setFormOpen(true)}
            >
              <Icon name="FileText" className="mr-2" size={20} />
              Оставить заявку
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto" asChild>
              <a href="https://wa.me/996222308088?text=Здравствуйте,%20узнал(а)%20о%20вас%20через%20сайт.%20Можете%20сделать%20просчет%20стоимости%20на%20карты?" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageSquare" className="mr-2" size={20} />
                Написать в WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      <OrderFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </section>
  );
};

export default ContactSection;
