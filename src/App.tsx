import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  Scale, 
  BookOpen, 
  Briefcase, 
  MessageCircle, 
  ShieldCheck, 
  Menu, 
  X,
  ChevronLeft
} from 'lucide-react';

const COLORS = {
  darkBlue: '#0A1931',
  darkGold: '#C5A059',
  lightGold: '#E8D399',
  white: '#FFFFFF',
  lightGray: '#F8F9FA',
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const text = `مرحباً، أود الاستفسار عن خدمة قانونية:
الاسم: ${name}
رقم الهاتف: ${phone}
الرسالة: ${message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/96566666354?text=${encodedText}`, '_blank');
  };

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  const services = [
    {
      title: 'القضايا المدنية والتجارية',
      description: 'تمثيل العملاء في المنازعات المدنية والتجارية والمطالبات المالية.',
      icon: <Briefcase size={32} color={COLORS.darkGold} />,
    },
    {
      title: 'قضايا الأحوال الشخصية',
      description: 'التعامل مع قضايا الأسرة، الطلاق، الحضانة، والنفقة بسرية واحترافية.',
      icon: <Scale size={32} color={COLORS.darkGold} />,
    },
    {
      title: 'الاستشارات القانونية',
      description: 'تقديم المشورة القانونية الدقيقة للشركات والأفراد في مختلف المجالات.',
      icon: <BookOpen size={32} color={COLORS.darkGold} />,
    },
    {
      title: 'صياغة العقود',
      description: 'إعداد ومراجعة العقود والاتفاقيات لضمان حماية حقوق الموكلين.',
      icon: <ShieldCheck size={32} color={COLORS.darkGold} />,
    },
  ];

  return (
    <div dir="rtl" className="font-sans text-gray-800 bg-gray-50 selection:bg-[#C5A059] selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0A1931] shadow-[0_4px_20px_rgba(0,0,0,0.2)] py-3' : 'bg-[#0A1931]/90 backdrop-blur-sm py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Scale size={36} color={COLORS.darkGold} />
              <div>
                <h1 className="text-white font-bold text-xl md:text-2xl tracking-wide">
                  المحامية عايشة العوضي
                </h1>
                <p className="text-[#C5A059] text-xs md:text-sm">المركز التنفيذي للمحاماة والاستشارات القانونية</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-white hover:text-[#C5A059] transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/96566666354" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#C5A059] hover:bg-[#b08d4b] text-white px-6 py-2 rounded-md transition-colors flex items-center gap-2 font-medium"
              >
                <MessageCircle size={18} />
                <span>استشارة مجانية</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0A1931] border-t border-gray-800 shadow-xl"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-[#C5A059] transition-colors font-medium border-b border-gray-800 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/96566666354" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#C5A059] text-white px-4 py-3 rounded-md text-center font-medium mt-2 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                <span>تواصل عبر الواتساب</span>
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0A1931]">
        {/* Background Pattern/Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1931] via-[#0A1931] to-[#C5A059] mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#C5A059]/20 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#C5A059] font-bold text-xl md:text-2xl mb-4 flex items-center gap-3">
                <span className="w-12 h-[2px] bg-[#C5A059]"></span>
                المركز التنفيذي للمحاماة والاستشارات القانونية
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                المحامية <br />
                <span className="text-[#C5A059]">عايشة العوضي</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                نقدم خدمات قانونية متكاملة باحترافية وموثوقية عالية. نسعى دائماً لحماية حقوق موكلينا وتحقيق أفضل النتائج في كافة القضايا والمنازعات.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:66666354" 
                  className="bg-[#C5A059] hover:bg-[#b08d4b] text-white px-8 py-4 rounded-md transition-colors flex items-center gap-3 font-bold text-lg"
                >
                  <Phone size={24} />
                  <span>اتصل الآن</span>
                </a>
                <a 
                  href="https://wa.me/96566666354" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white px-8 py-4 rounded-md transition-colors flex items-center gap-3 font-bold text-lg"
                >
                  <MessageCircle size={24} />
                  <span>واتساب</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Scale size={24} color={COLORS.darkGold} />
              <h3 className="text-[#C5A059] font-bold text-xl">من نحن</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1931] mb-6">
              المركز التنفيذي للمحاماة والاستشارات القانونية
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              المحامية عايشة العوضي، يمثل مكتبنا صرحاً قانونياً متميزاً يهدف إلى تقديم أرقى الخدمات القانونية والاستشارية في دولة الكويت. نحن نؤمن بأن العدالة هي أساس المجتمع، ونسعى جاهدين لضمان حصول موكلينا على حقوقهم كاملة.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              نتميز بالدقة، السرية التامة، والشفافية في التعامل مع كافة القضايا. فريقنا يضم نخبة من المستشارين القانونيين ذوي الخبرة الواسعة في مختلف فروع القانون الكويتي.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-right">
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-[#0A1931] p-3 rounded-full text-[#C5A059]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A1931] text-lg">حماية حقوقك</h4>
                  <p className="text-gray-500 text-sm">ندافع عن مصالحك بكل قوة</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-[#0A1931] p-3 rounded-full text-[#C5A059]">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A1931] text-lg">خبرة واسعة</h4>
                  <p className="text-gray-500 text-sm">معرفة عميقة بالقوانين</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-[#C5A059] font-bold text-xl mb-2">مجالات التخصص</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A1931] mb-6">خدماتنا القانونية</h2>
            <p className="text-gray-600 text-lg">
              نقدم مجموعة شاملة من الخدمات القانونية لتلبية احتياجات الأفراد والشركات بأعلى معايير الجودة والاحترافية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#0A1931] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A1931] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center text-[#C5A059] font-medium gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>اقرأ المزيد</span>
                  <ChevronLeft size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-[#0A1931] relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-[#C5A059] font-bold text-xl mb-2">تواصل معنا</h3>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">نحن هنا لمساعدتك</h2>
                <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                  لا تتردد في التواصل معنا لحجز استشارة قانونية أو للاستفسار عن خدماتنا. فريقنا مستعد للرد على كافة تساؤلاتك.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#C5A059]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={28} color={COLORS.darkGold} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">العنوان</h4>
                      <p className="text-gray-300 leading-relaxed">
                        ضاحية صباح السالم، قطعة 1، شارع 106<br />
                        مبنى 287، الدور العاشر<br />
                        خلف مستشفى الكويت
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#C5A059]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={28} color={COLORS.darkGold} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">الهاتف والواتساب</h4>
                      <a href="tel:66666354" className="text-gray-300 hover:text-[#C5A059] transition-colors block text-lg" dir="ltr">
                        6666 6354
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#C5A059]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram size={28} color={COLORS.darkGold} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">انستغرام</h4>
                      <a 
                        href="https://instagram.com/lawyer_aisha__" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#C5A059] transition-colors block text-lg" 
                        dir="ltr"
                      >
                        @lawyer_aisha__
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-[#0A1931] mb-6">أرسل لنا رسالة</h3>
                <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C5A059] focus:border-transparent outline-none transition-all"
                      placeholder="أدخل اسمك الكريم"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C5A059] focus:border-transparent outline-none transition-all"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">الرسالة أو الاستفسار</label>
                    <textarea 
                      id="message" 
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C5A059] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="كيف يمكننا مساعدتك؟"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[#0A1931] hover:bg-[#112647] text-white font-bold py-4 rounded-lg transition-colors flex justify-center items-center gap-2"
                  >
                    <MessageCircle size={20} />
                    <span>إرسال الطلب عبر الواتساب</span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050C18] py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Scale size={24} color={COLORS.darkGold} />
              <span className="text-white font-bold text-lg">المحامية عايشة العوضي</span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} المركز التنفيذي للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

