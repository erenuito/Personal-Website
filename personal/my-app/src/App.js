import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  FaGraduationCap, FaCode, FaBriefcase, FaEnvelope, FaHome, 
  FaSun, FaMoon, FaInstagram, FaLinkedin, FaGithub, FaDownload, FaChevronDown 
} from 'react-icons/fa';
import * as Accordion from '@radix-ui/react-accordion';
import './App.css';
import { useTranslation } from 'react-i18next';

// --- YARDIMCI BİLEŞENLER ---

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 dark:bg-sky-500 z-[60] origin-left" style={{ scaleX }} />;
};

const ToggleDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleMode}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full shadow-2xl border border-gray-100 dark:border-slate-700 transition-all hover:scale-110"
    >
      {isDark ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-slate-700 text-xl" />}
    </button>
  );
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // Mobil menü kontrolü
  
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr');
  };

  const menuIds = ['anasayfa', 'hakkimda', 'egitim', 'deneyim', 'yetenekler', 'projeler', 'iletisim'];
  const menuNames = t('nav', { returnObjects: true }); 

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm z-[100] px-6 md:px-12 py-4 flex justify-between items-center border-b border-gray-100 dark:border-slate-800">
        <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">CEK.</span>
        
        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-widest">
          {menuIds.map((id, i) => (
            <a key={id} href={`#${id}`} className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors">
              {Array.isArray(menuNames) ? menuNames[i] : id}
            </a>
          ))}
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-[10px] font-black border border-slate-200 dark:border-slate-700"
          >
            {i18n.language.toUpperCase()}
          </button>
        </div>

        {/* Mobil Sağ Taraf (Dil + Hamburger) */}
        <div className="flex md:hidden items-center space-x-4">
          <button onClick={toggleLanguage} className="text-[10px] font-black px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md">
            {i18n.language.toUpperCase()}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-white text-2xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Masaüstü Sosyal İkonlar */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/erenuito" target="_blank" rel="noreferrer" className="text-xl text-slate-400 hover:text-black dark:hover:text-white transition-all"><FaGithub /></a>
          <a href="https://linkedin.com/in/cemalerenkaragul" target="_blank" rel="noreferrer" className="text-xl text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"><FaLinkedin /></a>
        </div>
      </nav>

      {/* Mobil Menü Overlay (Açılır Menü) */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-[90] bg-white dark:bg-slate-950 pt-24 px-8 md:hidden"
        >
          <div className="flex flex-col space-y-6">
            {menuIds.map((id, i) => (
              <a 
                key={id} 
                href={`#${id}`} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2"
              >
                {Array.isArray(menuNames) ? menuNames[i] : id}
              </a>
            ))}
            <div className="flex space-x-6 pt-4">
              <a href="https://github.com/erenuito" className="text-3xl text-slate-400"><FaGithub /></a>
              <a href="https://linkedin.com/in/cemalerenkaragul" className="text-3xl text-slate-400"><FaLinkedin /></a>
              <a href="https://instagram.com/erennkaragul" className="text-3xl text-slate-400"><FaInstagram /></a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="anasayfa" className="relative h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center space-y-8 px-4">
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white">
          {t('heroTitle')} <br/>
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Cemal Eren</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 dark:text-gray-400 font-medium tracking-wide">
          {t('heroSub')}
        </p>
      </motion.div>
    </section>
  );
};

const Section = ({ id, title, icon, children }) => (
  <section id={id} className="py-20 px-5 md:px-10 max-w-6xl mx-auto">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="flex items-center space-x-4 mb-16">
        <div className="w-12 h-12 flex items-center justify-center bg-indigo-600 rounded-xl text-white shadow-xl shadow-indigo-500/20">
          {icon}
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h2>
      </div>
      {children}
    </motion.div>
  </section>
);

const SkillBar = ({ skill, level }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-bold text-slate-700 dark:text-gray-300">{skill}</span>
      <span className="text-sm font-mono text-indigo-600 dark:text-sky-200">{level}%</span>
    </div>
    <div className="w-full bg-slate-100 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
      <motion.div className="bg-indigo-600 h-full rounded-full" initial={{ width: 0 }} whileInView={{ width: `${level}%` }} transition={{ duration: 1, ease: "easeOut" }} />
    </div>
  </div>
);

// --- ANA APP BİLEŞENİ ---

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-500">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 dark:bg-indigo-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] rounded-full bg-blue-500/20 dark:bg-blue-600/20 blur-[100px] animate-pulse [animation-delay:2s]" />
      </div>

      <ScrollProgress />
      <Navbar />
      <Hero />

      {/* HAKKIMDA */}
      <Section id="hakkimda" title={t('nav.1')} icon={<FaHome />}>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-gray-400 space-y-6">
            <p>{t('about_text_1')}</p>
            <p>{t('about_text_2')}</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: "📍", label: t('info_loc_label'), val: "Eskişehir, TR" },
              { icon: "🎓", label: t('info_edu_label'), val: t('aboutInfo.eduValue') },
              { icon: "🚀", label: t('info_focus_label'), val: "AI, ML, CV & React" }
            ].map((item, i) => (
              <div key={i} className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 shadow-sm transition-all hover:scale-[1.02]">
                <span className="text-2xl mr-4">{item.icon}</span>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{item.label}</p>
                  <p className="text-sm font-bold text-indigo-900 dark:text-indigo-400">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* EĞİTİM */}
      <Section id="egitim" title={t('nav.2')} icon={<FaGraduationCap />}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 shadow-md">
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{t('edu_1_name')}</h3>
            <p className="text-indigo-600 dark:text-sky-200 font-bold mb-4 uppercase tracking-wider text-xs">{t('edu_1_sub')}</p>
            <div className="space-y-2 text-sm text-slate-500">
              <p>📅 2019 - 2024</p>
              <p className="font-bold text-slate-700 dark:text-slate-300">📈 {t('edu_gpa_label')}: 3.61</p>
              <p className="italic">{t('edu_1_thesis')}</p>
            </div>
          </div>
          <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 shadow-md">
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{t('edu_2_name')}</h3>
            <p className="text-indigo-600 dark:text-sky-200 font-bold mb-4 uppercase tracking-wider text-xs">{t('edu_2_sub')}</p>
            <div className="space-y-2 text-sm text-slate-500">
              <p>📅 2021 - 2025</p>
              <p className="font-bold text-slate-700 dark:text-slate-300">📈 {t('edu_gpa_label')}: 2.96</p>
            </div>
          </div>
        </div>
      </Section>

      {/* DENEYİM */}
      <Section id="deneyim" title={t('nav.3')} icon={<FaBriefcase />}>
        <div className="space-y-8">
          {t('experience_list', { returnObjects: true }).map((exp, i) => (
            <div key={i} className="p-6 md:p-8 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                  <p className="text-indigo-600 dark:text-sky-400 font-bold tracking-tight">{exp.company}</p>
                </div>
                <span className="mt-3 md:mt-0 self-start md:self-center px-4 py-1 bg-slate-50 dark:bg-slate-800 rounded-full text-[10px] md:text-xs font-bold border border-slate-200 dark:border-slate-700 uppercase text-slate-500 dark:text-slate-400">
                  {exp.date}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.details.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm md:text-base text-slate-600 dark:text-gray-400 leading-relaxed">
                    <span className="text-indigo-500 mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" /> 
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* YETENEKLER */}
      <Section id="yetenekler" title={t('nav.4')} icon={<FaCode />}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* 1. KART: AI & DATA SCIENCE */}
        <div className="p-6 md:p-8 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-slate-200 dark:border-gray-800 flex flex-col h-full shadow-sm transition-all hover:shadow-md">
          <div className="mb-6">
            <h4 className="text-xl font-bold text-indigo-600 dark:text-sky-200 mb-1">AI & Data Science</h4>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Model & Analiz</p>
          </div>
          <div className="space-y-4 mb-8 flex-grow">
            <SkillBar skill="TensorFlow & Keras" level={88} />
            <SkillBar skill="Scikit-Learn" level={90} />
            <SkillBar skill="PySpark (Big Data)" level={82} />
            <SkillBar skill="Deep Learning & CNN" level={85} />
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-gray-800">
            {["Veri Temizleme", "Veri Madenciliği", "Model Eğitimi", "Görselleştirme"].map(s => (
              <span key={s} className="px-3 py-1 bg-slate-50 dark:bg-gray-800 text-[10px] font-bold text-indigo-500 rounded-lg border border-slate-200 dark:border-indigo-900/50">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* 2. KART: SOFTWARE ENGINEERING (İNDİGO KART) */}
        <div className="p-6 md:p-8 bg-indigo-600 rounded-[2.5rem] text-white flex flex-col h-full shadow-xl shadow-indigo-500/20">
          <div className="mb-6">
            <h4 className="text-xl font-bold text-indigo-100 mb-1">Software Engineering</h4>
            <p className="text-xs text-indigo-300 font-bold uppercase tracking-widest">Diller & Frameworkler</p>
          </div>
          <div className="space-y-6 flex-grow">
            {[
              { label: 'Python', sub: 'Automation, ML, Scraper' },
              { label: 'JavaScript', sub: 'React, React Native, ES6+' },
              { label: 'SQL & Firebase', sub: 'Database Management' }
            ].map(lang => (
              <div key={lang.label}>
                <div className="flex justify-between items-end mb-1">
                  <span className="font-bold text-lg">{lang.label}</span>
                  <span className="text-[10px] text-indigo-200 uppercase font-bold">{lang.sub}</span>
                </div>
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-full" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-2 pt-6 border-t border-white/10">
            {['React.js', 'Expo', 'R Language', 'Tableau'].map(t => (
              <div key={t} className="flex items-center text-[11px] font-bold text-indigo-100">
                <div className="w-1.5 h-1.5 bg-indigo-300 rounded-full mr-2" /> {t}
              </div>
            ))}
          </div>
        </div>

        {/* 3. KART: TOOLS & SOFT SKILLS */}
        <div className="p-6 md:p-8 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-slate-200 dark:border-gray-800 flex flex-col h-full shadow-sm">
          <div className="mb-6">
            <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Tools & Soft Skills</h4>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Çalışma Disiplini</p>
          </div>
          
          <div className="mb-8">
            <p className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-tighter">Geliştirme Ortamı</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { n: 'Git / GitHub', i: <FaGithub /> },
                { n: 'VS Code', i: <FaCode /> },
                { n: 'Google Colab', i: '🚀' },
                { n: 'Jupyter', i: '📓' }
              ].map(item => (
                <div key={item.n} className="flex items-center p-3 bg-slate-50 dark:bg-gray-800/50 rounded-xl border border-slate-200 dark:border-gray-800 text-[11px] font-bold">
                  <span className="mr-2 text-indigo-500">{item.i}</span> {item.n}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-grow">
            <p className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-tighter">Profesyonel Yaklaşım</p>
            <div className="space-y-3">
              {[
                "Analitik Düşünme & Problem Çözme",
                "Ekip Çalışması & İletişim",
                "Zaman Yönetimi & Adaptasyon"
              ].map((skill) => (
                <div key={skill} className="flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400">
                  <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-md flex items-center justify-center mr-3 text-[10px] text-green-600 dark:text-green-400">✓</div>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>

      {/* PROJELER - Burası Eksikti, Geri Ekledim */}
      <Section id="projeler" title={t('nav.5')} icon={<FaBriefcase />}>
        <Accordion.Root type="multiple" className="space-y-4">
          {t('projects_list', { returnObjects: true }).map((proj, idx) => (
            <Accordion.Item key={idx} value={`item-${idx}`} className="bg-white dark:bg-gray-900 rounded-[2rem] border border-slate-200 dark:border-gray-800 shadow-sm overflow-hidden transition-all hover:border-indigo-200">
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between items-center w-full p-6 md:p-8 text-left group">
                  <div className="pr-4">
                    <span className="text-[10px] font-bold text-indigo-600 dark:text-sky-300 uppercase tracking-widest">{proj.tech}</span>
                    <h3 className="text-xl font-bold mt-1 group-hover:text-indigo-600 dark:text-sky-200 transition-colors leading-tight">{proj.title}</h3>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 group-data-[state=open]:rotate-180 transition-transform">
                    <FaChevronDown className="text-slate-400 group-data-[state=open]:text-indigo-600" />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 md:px-8 pb-8 text-slate-600 dark:text-gray-400 pt-2 border-t border-slate-50 dark:border-gray-800 overflow-hidden data-[state=open]:animate-slideDown">
                <p className="text-base leading-relaxed mb-6">{proj.desc}</p>
                <a href={proj.github} target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-indigo-600 text-white rounded-xl text-sm font-bold hover:shadow-lg w-full md:w-auto justify-center transition-all active:scale-95">
                  {t('github_btn')} <FaGithub className="ml-2" />
                </a>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Section>

      {/* İLETİŞİM */}
      <Section id="iletisim" title={t('nav.6')} icon={<FaEnvelope />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-indigo-50/50 dark:bg-indigo-950/20 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border border-indigo-100 dark:border-indigo-900/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900 dark:text-white leading-tight">{t('contact_title')}</h3>
            <p className="text-indigo-700/70 dark:text-slate-400 mb-8 text-sm md:text-base">{t('contact_sub')}</p>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-4 min-w-0 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-indigo-900/40 rounded-xl flex-shrink-0 flex items-center justify-center border border-indigo-100 shadow-sm"><FaEnvelope className="text-indigo-600 dark:text-sky-200"/></div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">E-Posta</p>
                  <span className="font-semibold text-sm md:text-base text-slate-700 dark:text-slate-200 block truncate">cemalerenkaragul@gmail.com</span>
                </div>
              </div>
              <a href="https://linkedin.com/in/cemalerenkaragul" target="_blank" rel="noreferrer" className="flex items-center space-x-4 min-w-0 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-blue-900/40 rounded-xl flex-shrink-0 flex items-center justify-center border border-blue-100 shadow-sm"><FaLinkedin className="text-blue-600 dark:text-blue-400"/></div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">LinkedIn</p>
                  <span className="font-semibold text-sm md:text-base text-slate-700 dark:text-slate-200 block truncate hover:text-indigo-600 transition-colors">cemalerenkaragul</span>
                </div>
              </a>
              <a href="https://github.com/erenuito" target="_blank" rel="noreferrer" className="flex items-center space-x-4 min-w-0 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-slate-800 rounded-xl flex-shrink-0 flex items-center justify-center border border-slate-200 shadow-sm"><FaGithub className="text-slate-900 dark:text-slate-100"/></div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">GitHub</p>
                  <span className="font-semibold text-sm md:text-base text-slate-700 dark:text-slate-200 block truncate hover:text-indigo-600 transition-colors">erenuito</span>
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center p-8 md:p-10 bg-white dark:bg-gray-900 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-200 dark:border-gray-800 text-center shadow-sm">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/40 mb-8"><FaDownload className="text-2xl md:text-3xl text-white" /></div>
            <h4 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">{t('cv_title')}</h4>
            <p className="text-slate-500 dark:text-gray-400 text-xs md:text-sm mb-8 max-w-[200px]">{t('cv_sub')}</p>
            <a href="/Cemal-Eren-Karagul-CV.pdf" download className="w-full md:w-auto px-10 py-4 bg-indigo-600 text-white rounded-xl md:rounded-2xl font-bold hover:bg-indigo-700 active:scale-95 shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center">{t('cv_btn')}</a>
          </div>
        </div>
      </Section>

      <footer className="py-12 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
        © {new Date().getFullYear()} Cemal Eren Karagül
      </footer>

      <ToggleDarkMode />
    </div>
  );
};

export default App;