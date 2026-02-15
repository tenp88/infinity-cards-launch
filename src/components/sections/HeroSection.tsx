import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import OrderFormDialog from "@/components/OrderFormDialog";

const HeroSection = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
          <div className="mb-6">
            <img 
              src="https://cdn.poehali.dev/files/IMG_20260107_195930_589.png" 
              alt="Infinity Cards Logo" 
              className="w-32 h-32 mx-auto object-contain"
            />
          </div>
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <Icon name="Factory" size={18} />
            <span>Прямые поставки от завода-производителя</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
            Изготовление пластиковых карт без наценок рекламных агентств
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-2">
            Идеально для торговых сетей, заправок АЗС и спорт-клубов
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto pt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-accent">-20%</div>
              <div className="text-xs sm:text-sm mt-1">Цена ниже рынка</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-accent">10-14</div>
              <div className="text-xs sm:text-sm mt-1">Дней доставка</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-accent">1 год</div>
              <div className="text-xs sm:text-sm mt-1">Гарантия</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-accent">500+</div>
              <div className="text-xs sm:text-sm mt-1">Минимум шт</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6"
              onClick={() => setFormOpen(true)}
            >
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6" asChild>
              <a href="tel:+996222308088">
                <Icon name="Phone" className="mr-2" size={20} />
                +996 222 308 088
              </a>
            </Button>
          </div>
        </div>
      </div>

      <OrderFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </section>
  );
};

export default HeroSection;
