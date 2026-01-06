import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface MainSectionsProps {
  sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  visibleSections: Set<number>;
}

const MainSections = ({ sectionRefs, visibleSections }: MainSectionsProps) => {
  return (
    <>
      {/* Comparison Section */}
      <section 
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`py-12 sm:py-16 lg:py-20 bg-muted/30 transition-all duration-700 ${
          visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">Почему мы, а не рекламные агентства?</h2>
            <p className="text-muted-foreground text-base sm:text-lg px-2">Специализированный дилер vs широкий профиль</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Card className="border-2 border-muted hover-scale">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <Icon name="Store" size={24} className="text-muted-foreground" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">Рекламные агентства</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold">Высокая цена</div>
                        <div className="text-sm text-muted-foreground">Перепродают с наценкой на содержание офиса</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold">Местная печать</div>
                        <div className="text-sm text-muted-foreground">Струйные принтеры, краска стирается</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold">Низкая экспертиза</div>
                        <div className="text-sm text-muted-foreground">Не специализируются на картах</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary hover-scale shadow-lg">
                <CardContent className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Icon name="Factory" size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">INFINITY CARDS</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold">Прямая цена</div>
                        <div className="text-sm text-muted-foreground">Контракт с заводом, минимальная наценка</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold">Промышленный офсет</div>
                        <div className="text-sm text-muted-foreground">Ламинация, служит годами</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold">Специализация</div>
                        <div className="text-sm text-muted-foreground">Только карты, знаем все нюансы</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Technology */}
      <section 
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white transition-all duration-700 ${
          visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
              <Icon name="Factory" size={18} />
              <span>Промышленное производство</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">Почему завод лучше местного цеха?</h2>
            <p className="text-white/90 text-base sm:text-lg px-4 max-w-3xl mx-auto">Мы не печатаем карты "за час на коленке". Мы запускаем промышленную линию.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="hover-scale bg-white/15 backdrop-blur-md border-white/30 shadow-xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Icon name="Printer" size={32} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">Офсетная печать</h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">Идеальная цветопередача, которая не выцветает. Промышленное качество краски.</p>
              </CardContent>
            </Card>

            <Card className="hover-scale bg-white/15 backdrop-blur-md border-white/30 shadow-xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Icon name="Layers" size={32} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">Заводская ламинация</h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">Пластик спекается в монолит — карта не расслоится в кошельке через месяц.</p>
              </CardContent>
            </Card>

            <Card className="hover-scale bg-white/15 backdrop-blur-md border-white/30 shadow-xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Icon name="Scissors" size={32} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">Точная вырубка</h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">Края карты идеально гладкие, без заусенцев. Стандарт ISO 7810.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section 
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white transition-all duration-700 ${
          visibleSections.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
              <Icon name="Award" size={18} />
              <span>Нам доверяют</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">Компании Кыргызстана, которые выбрали качество</h2>
            <p className="text-white/90 text-base sm:text-lg px-2">Поставляем карты на регулярной основе</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mx-auto" style={{ maxWidth: '1400px' }}>
            {[
              { name: 'Puma', logo: 'https://cdn.poehali.dev/files/1767366288661.jpg' },
              { name: 'Anta Sports', logo: 'https://cdn.poehali.dev/files/1767365280673.jpg' },
              { name: 'Change Fitness', logo: 'https://cdn.poehali.dev/files/1767710776569.jpg' },
              { name: 'Bimar', logo: 'https://cdn.poehali.dev/files/1767367879080.jpg' },
              { name: 'Bishkek Petroleum', logo: 'https://cdn.poehali.dev/files/1767366417226.jpg' },
              { name: 'Bisport', logo: 'https://cdn.poehali.dev/files/1767366609198.jpg' },
              { name: 'Pulse Gym', logo: 'https://cdn.poehali.dev/files/1767365946130.jpg' },
              { name: 'Hyatt Regency', logo: 'https://cdn.poehali.dev/files/Gemini_Generated_Image_xuoynnxuoynnxuoy.png' }
            ].map((client, index) => (
              <div key={index} className="bg-white backdrop-blur-sm rounded-lg flex items-center justify-center hover-scale border border-border shadow-sm min-h-[100px] sm:min-h-[120px] md:min-h-[140px] overflow-hidden">
                <div className="text-center w-full h-full flex items-center justify-center p-3 sm:p-4 md:p-6">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-xs sm:text-sm md:text-base font-bold">{client.name}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12 px-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 shadow-lg w-full sm:w-auto" asChild>
              <a href="https://wa.me/996222308088?text=Здравствуйте%2C%20узнал(а)%20о%20вас%20через%20сайт.%20Можете%20сделать%20просчет%20стоимости%20на%20карты%3F" target="_blank" rel="noopener noreferrer">
                <Icon name="Calculator" className="mr-2" size={22} />
                Рассчитать стоимость
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Card Types */}
      <section 
        ref={(el) => (sectionRefs.current[3] = el)}
        className={`py-12 sm:py-16 lg:py-20 bg-white transition-all duration-700 ${
          visibleSections.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">Любые виды карт и персонализации</h2>
            <p className="text-muted-foreground text-base sm:text-lg px-2">От простых дисконтных до чиповых и банковских</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <Card className="hover-scale">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Type" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Эмбоссирование</h3>
                    <p className="text-sm text-muted-foreground">Выдавленные символы с типпингом золотом, серебром или черным. Премиальный вид.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CreditCard" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Магнитная полоса</h3>
                    <p className="text-sm text-muted-foreground">HiCo / LoCo любой силы. Кодировка магнитной полосы входит в стоимость.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Wifi" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">RFID чипы</h3>
                    <p className="text-sm text-muted-foreground">Em-Marine, Mifare (1K, Ultralight). Чип вшит внутри пластика, защищен от влаги.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="QrCode" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Штрих-коды и QR</h3>
                    <p className="text-sm text-muted-foreground">Любой формат (EAN-13, Code-128, QR). Печать под ламинатом — не стирается.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Именные карты</h3>
                    <p className="text-sm text-muted-foreground">ФИО, должность, фото. Индент-печать или термопечать переменных данных.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Landmark" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Банковские карты</h3>
                    <p className="text-sm text-muted-foreground">Стандарт ISO 7810. Идеальная геометрия, устойчивость к банкоматам.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section 
        ref={(el) => (sectionRefs.current[4] = el)}
        className={`py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white transition-all duration-700 ${
          visibleSections.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
                <Icon name="FileCheck" size={18} />
                <span>Прозрачные условия</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Условия работы</h2>
            </div>
            <Card className="border-2 border-white/30 bg-white/15 backdrop-blur-md shadow-xl">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name="Package" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-2 text-white">Минимальный заказ: от 500 штук</h3>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">Запуск офсетной машины на меньший тираж экономически нецелесообразен. Заказывая от 500 шт., вы получаете себестоимость карты в 2 раза ниже.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name="Clock" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-2 text-white">Срок доставки: 10-14 рабочих дней</h3>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">Производство и доставка в Бишкек. Доставим бесплатно до вашего офиса с полным пакетом документов.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name="FileText" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-2 text-white">Полный пакет документов</h3>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">Договор, счет на оплату, электронная счет-фактура. Для бухгалтерии все прозрачно.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section 
        ref={(el) => (sectionRefs.current[5] = el)}
        className={`py-12 sm:py-16 lg:py-20 bg-white transition-all duration-700 ${
          visibleSections.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">Схема работы: От макета до доставки</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: "FileCheck", title: "Заявка и макет", desc: "Проверяем ваш дизайн на соответствие ISO стандартам" },
                { icon: "Sparkles", title: "Производство прототипа по заданным требованиям", desc: "Создаем образец для утверждения перед массовым производством" },
                { icon: "FileSignature", title: "Договор с местным юр. лицом", desc: "Вы платите нам в сомах, мы решаем вопросы валютных переводов" },
                { icon: "Factory", title: "Производство", desc: "Запуск линии. Контроль качества на каждом этапе" },
                { icon: "Truck", title: "Доставка и документы", desc: "Привозим карты в офис вместе с закрывающими документами" }
              ].map((step, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-shrink-0 hidden sm:block">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon name={step.icon as any} size={24} className="text-primary sm:w-7 sm:h-7" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1">{step.title}</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">{step.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSections;