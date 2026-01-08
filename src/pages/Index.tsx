import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Server',
      title: 'Облачные решения',
      description: 'Разработка и внедрение облачных инфраструктурных решений для государственных и коммерческих организаций'
    },
    {
      icon: 'Shield',
      title: 'Информационная безопасность',
      description: 'Комплексные решения по защите информационных систем и данных'
    },
    {
      icon: 'Database',
      title: 'Управление данными',
      description: 'Проектирование и поддержка систем хранения и обработки больших объемов данных'
    },
    {
      icon: 'Network',
      title: 'Сетевая инфраструктура',
      description: 'Построение и модернизация корпоративных сетей любой сложности'
    },
    {
      icon: 'Code',
      title: 'Разработка ПО',
      description: 'Создание специализированного программного обеспечения под ключ'
    },
    {
      icon: 'Headphones',
      title: 'Техническая поддержка',
      description: 'Круглосуточная поддержка ИТ-инфраструктуры и пользователей'
    }
  ];

  const news = [
    {
      date: '15 декабря 2025',
      title: 'Запуск новой облачной платформы',
      excerpt: 'Центр представил инновационное решение для государственных учреждений республики'
    },
    {
      date: '28 ноября 2025',
      title: 'Награда за цифровую трансформацию',
      description: 'ИТЦ получил признание на всероссийском форуме цифровизации'
    },
    {
      date: '10 ноября 2025',
      title: 'Модернизация ЦОД завершена',
      description: 'Успешно завершен проект по обновлению центра обработки данных'
    }
  ];

  const stats = [
    { value: '500+', label: 'Реализованных проектов' },
    { value: '150+', label: 'Специалистов в команде' },
    { value: '24/7', label: 'Техническая поддержка' },
    { value: '12', label: 'Лет на рынке' }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Building2" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-lg font-bold text-secondary leading-tight">ГБУ РБ "ИТЦ"</h1>
                <p className="text-xs text-muted-foreground">Информационно-технологический центр</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {['home', 'about', 'services', 'news', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О центре'}
                  {section === 'services' && 'Услуги'}
                  {section === 'news' && 'Новости'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-4" variant="secondary">Государственное бюджетное учреждение</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Информационно-технологический центр Республики Башкортостан
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Современные ИТ-решения для цифровой трансформации государственных и коммерческих организаций
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={() => scrollToSection('services')} className="gap-2">
                  <Icon name="ArrowRight" size={20} />
                  Наши услуги
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                  Связаться с нами
                </Button>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/2ad32ed5-05b4-4df2-9666-23d583abeb1c/files/3c16211d-f6e1-418b-9fc7-52d4ca5d599b.jpg" 
                  alt="Информационно-технологический центр" 
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-12">О центре</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Target" className="text-primary" size={24} />
                    </div>
                    <CardTitle>Наша миссия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Обеспечение надежной и современной информационно-технологической инфраструктуры для государственных 
                      учреждений и организаций Республики Башкортостан
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Award" className="text-primary" size={24} />
                    </div>
                    <CardTitle>Достижения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Лауреат премии "Цифровой прорыв 2024"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">500+ успешно реализованных проектов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Сертификаты ISO 9001 и ISO 27001</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 relative">
          <div className="absolute inset-0 opacity-5">
            <img 
              src="https://cdn.poehali.dev/projects/2ad32ed5-05b4-4df2-9666-23d583abeb1c/files/8556bd6d-f13e-42dd-8470-f628adb620e6.jpg" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-4">Наши услуги</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Комплексные ИТ-решения для организаций любого масштаба
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
                  >
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon name={service.icon} className="text-primary" size={28} />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="news" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-12">Новости</h2>
              <div className="space-y-6">
                {news.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                          <CardDescription>{item.excerpt || item.description}</CardDescription>
                        </div>
                        <Badge variant="outline" className="flex-shrink-0">
                          {item.date}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-12">Контакты</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="MapPin" className="text-primary" size={20} />
                        Адрес
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">г. Уфа, ул. Ленина, д. 1</p>
                      <p className="text-muted-foreground">Республика Башкортостан, 450000</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Phone" className="text-primary" size={20} />
                        Телефон
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">+7 (347) 123-45-67</p>
                      <p className="text-sm text-muted-foreground/70 mt-1">Пн-Пт: 9:00 - 18:00</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Mail" className="text-primary" size={20} />
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">info@itc-rb.ru</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Напишите нам</CardTitle>
                    <CardDescription>Мы ответим в течение 24 часов</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <Textarea placeholder="Сообщение" rows={4} />
                      </div>
                      <Button className="w-full">
                        Отправить
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Building2" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">ГБУ РБ "ИТЦ"</h3>
                  </div>
                </div>
                <p className="text-sm text-white/70">
                  Информационно-технологический центр Республики Башкортостан
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Навигация</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О центре</button></li>
                  <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Услуги</button></li>
                  <li><button onClick={() => scrollToSection('news')} className="hover:text-white transition-colors">Новости</button></li>
                  <li><button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Контакты</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>г. Уфа, ул. Ленина, д. 1</li>
                  <li>+7 (347) 123-45-67</li>
                  <li>info@itc-rb.ru</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
              <p>© 2026 ГБУ РБ "Информационно-технологический центр". Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}