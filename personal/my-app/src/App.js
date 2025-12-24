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
  
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr');
  };

  const menuIds = ['anasayfa', 'hakkimda', 'egitim', 'deneyim', 'yetenekler', 'projeler', 'iletisim'];
  
  // ÖNEMLİ: en.json ve tr.json içinde "nav" bir array olmalı.
  const menuNames = t('nav', { returnObjects: true }); 

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm z-50 px-6 py-4 flex justify-between items-center border-b border-gray-100 dark:border-slate-800">
      <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">CEK.</span>
      <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-widest">
        {menuIds.map((id, i) => (
          <a key={id} href={`#${id}`} className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors">
            {Array.isArray(menuNames) ? menuNames[i] : id}
          </a>
        ))}
        <button 
          onClick={toggleLanguage}
          className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-black border border-slate-200 dark:border-slate-700 transition-all hover:bg-indigo-50 dark:hover:bg-slate-700"
        >
          {i18n.language.toUpperCase()}
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <a href="https://github.com/erenuito" target="_blank" rel="noreferrer" className="text-xl text-slate-400 hover:text-black dark:hover:text-white transition-all"><FaGithub /></a>
        <a href="https://linkedin.com/in/cemalerenkaragul" target="_blank" rel="noreferrer" className="text-xl text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"><FaLinkedin /></a>
        <a href="https://instagram.com/erennkaragul" target="_blank" rel="noreferrer" className="text-xl text-slate-400 hover:text-pink-600 transition-all"><FaInstagram /></a>
      </div>
    </nav>
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
  <section id={id} className="py-24 px-6 max-w-6xl mx-auto">
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
    <div className="w-full bg-slate-100 dark:bg-gray-800 rounded-full h-1.5">
      <motion.div className="bg-indigo-600 h-full rounded-full" initial={{ width: 0 }} whileInView={{ width: `${level}%` }} transition={{ duration: 1 }} />
    </div>
  </div>
);

// --- ANA APP BİLEŞENİ ---

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-500">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 dark:bg-indigo-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] rounded-full bg-blue-500/20 dark:bg-blue-600/20 blur-[100px] animate-pulse [animation-delay:2s]" />
      </div>

      <ScrollProgress />
      <Navbar />
      <Hero />

      

      <Section id="hakkimda" title={t('nav.1')} icon={<FaHome />}>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-xl leading-relaxed text-slate-600 dark:text-gray-400 space-y-6">
            <p>{t('about_text_1')}</p>
            <p>{t('about_text_2')}</p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: "📍", label: t('info_loc_label'), val: "Eskişehir, TR" },
              { icon: "🎓", label: t('info_edu_label'), val: t('aboutInfo.eduValue') },
              { icon: "🚀", label: t('info_focus_label'), val: "AI, ML, CV & React" }
            ].map((item, i) => (
              <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-gray-900 rounded-2xl border border-slate-100 dark:border-gray-800">
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

      <Section id="egitim" title={t('nav.2')} icon={<FaGraduationCap />}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-slate-100 dark:border-gray-800 shadow-sm">
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{t('edu_1_name')}</h3>
            <p className="text-indigo-600 dark:text-sky-200 font-bold mb-4 uppercase tracking-wider text-xs">{t('edu_1_sub')}</p>
            <div className="space-y-2 text-sm text-slate-500">
              <p>📅 2019 - 2024</p>
              <p className="font-bold text-slate-700 dark:text-slate-300">📈 {t('edu_gpa_label')}: 3.61</p>
              <p className="italic">{t('edu_1_thesis')}</p>
            </div>
          </div>
          <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-slate-100 dark:border-gray-800 shadow-sm">
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{t('edu_2_name')}</h3>
            <p className="text-indigo-600 dark:text-sky-200 font-bold mb-4 uppercase tracking-wider text-xs">{t('edu_2_sub')}</p>
            <div className="space-y-2 text-sm text-slate-500">
              <p>📅 2021 - 2025</p>
              <p className="font-bold text-slate-700 dark:text-slate-300">📈 {t('edu_gpa_label')}: 2.96</p>
            </div>
          </div>
        </div>
      </Section>

    <Section id="deneyim" title={t('nav.3')} icon={<FaBriefcase />}>
        <div className="space-y-8">
          {t('experience_list', { returnObjects: true }).map((exp, i) => (
            <div key={i} className="p-8 bg-slate-50 dark:bg-gray-900 rounded-3xl border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-indigo-600 dark:text-sky-200 font-bold tracking-tight">{exp.company}</p>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1 bg-white dark:bg-gray-800 rounded-full text-xs font-bold shadow-sm border border-slate-100 dark:border-gray-700 uppercase">{exp.date}</span>
              </div>
              <ul className="space-y-2">
                {exp.details.map((item, idx) => (
                  <li key={idx} className="flex items-start text-slate-600 dark:text-gray-400">
                    <span className="text-indigo-500 mr-2">•</span> {item}
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
          
          {/* 1. KART: VERİ BİLİMİ & YAPAY ZEKA (CORE) */}
          <div className="p-8 bg-slate-50 dark:bg-gray-900 rounded-[2.5rem] border border-slate-100 dark:border-gray-800 flex flex-col h-full">
            <div className="mb-6">
              <h4 className="text-xl font-bold text-indigo-600 dark:text-sky-200 mb-1">AI & Data Science</h4>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t('skill_cat_1_sub')}</p>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <SkillBar skill="TensorFlow & Keras" level={88} />
              <SkillBar skill="Scikit-Learn" level={90} />
              <SkillBar skill="PySpark (Big Data)" level={82} />
              <SkillBar skill="Deep Learning & CNN" level={85} />
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-gray-800 dark:text-sky-200">
              {t('skill_tags_ai', { returnObjects: true }).map(s => (
                <span key={s} className="px-3 py-1 bg-white dark:bg-gray-800 text-[10px] font-bold text-indigo-500 rounded-lg border border-indigo-50 dark:border-indigo-900/50">
                  {s}
                </span>
              ))}
            </div>
          </div>

        {/* 2. KART: YAZILIM GELİŞTİRME (ECOSYSTEM) */}
        <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white flex flex-col h-full shadow-xl shadow-indigo-500/20">
          <div className="mb-6">
            <h4 className="text-xl font-bold text-indigo-100 mb-1">Software Engineering</h4>
            <p className="text-xs text-indigo-300 font-bold uppercase tracking-widest">{t('skill_cat_2_sub')}</p>
          </div>
          <div className="space-y-6 flex-grow">
            {[
              { label: 'Python', sub: 'Automation, ML, Scraper', color: 'bg-indigo-400' },
              { label: 'JavaScript', sub: 'React, React Native, ES6+', color: 'bg-indigo-400' },
              { label: 'SQL & Firebase', sub: 'Database Management', color: 'bg-indigo-400' }
            ].map(lang => (
              <div key={lang.label}>
                <div className="flex justify-between items-end mb-1">
                  <span className="font-bold text-lg">{lang.label}</span>
                  <span className="text-[10px] text-indigo-200 uppercase font-bold">{lang.sub}</span>
                </div>
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className={`${lang.color} h-full w-full`} />
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

        {/* 3. KART: ARAÇLAR & MİNDSET (LOGICAL) */}
        <div className="p-8 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-slate-100 dark:border-gray-800 flex flex-col h-full">
          <div className="mb-6">
            <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Tools & Soft Skills</h4>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t('skill_cat_3_sub')}</p>
          </div>
          
          <div className="mb-8">
            <p className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-tighter">{t('dev_env_label')}</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { n: 'Git / GitHub', i: <FaGithub /> },
                { n: 'VS Code', i: <FaCode /> },
                { n: 'Google Colab', i: '🚀' },
                { n: 'Jupyter', i: '📓' }
              ].map(item => (
                <div key={item.n} className="flex items-center p-2 bg-slate-50 dark:bg-gray-800/50 rounded-xl border border-slate-100 dark:border-gray-800 text-xs font-bold">
                  <span className="mr-2 text-indigo-500">{item.i}</span> {item.n}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-grow">
            <p className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-tighter">
              {t('soft_skills_label')}
            </p>
            <div className="space-y-3">
              {t('soft_skills_list', { returnObjects: true }).map((skill) => (
                <div key={skill} className="flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400">
                  <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-md flex items-center justify-center mr-3 text-[10px]">✓</div>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section id="projeler" title={t('nav.5')} icon={<FaBriefcase />}>
      <Accordion.Root type="multiple" className="space-y-6">
        {t('projects_list', { returnObjects: true }).map((proj, idx) => (
          <Accordion.Item key={idx} value={`item-${idx}`} className="bg-white dark:bg-gray-900 rounded-3xl border border-slate-100 dark:border-gray-800 shadow-sm overflow-hidden">
            <Accordion.Header>
              <Accordion.Trigger className="flex justify-between items-center w-full p-8 text-left group">
                <div>
                  <span className="text-xs font-bold text-indigo-600 dark:text-sky-200 uppercase tracking-widest">{proj.tech}</span>
                  <h3 className="text-2xl font-bold mt-1 group-hover:text-indigo-600 dark:text-sky-200 transition-colors">{proj.title}</h3>
                </div>
                <FaChevronDown className="text-slate-300 transition-transform group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-8 pb-8 text-slate-600 dark:text-gray-400 pt-2 border-t border-slate-50 dark:border-gray-800">
              <p className="text-lg leading-relaxed mb-6">{proj.desc}</p>
              <a href={proj.github} target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-2 bg-slate-900 dark:bg-indigo-600 text-white rounded-full text-sm font-bold hover:shadow-lg transition-all">
                {t('github_btn')} <FaGithub className="ml-2" />
              </a>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Section>

    {/* İLETİŞİM */}
    <Section id="iletisim" title={t('nav.6')} icon={<FaEnvelope />}>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Sol Kart: İletişim Bilgileri */}
        <div className="bg-indigo-50/50 dark:bg-indigo-950/20 p-10 rounded-[3.5rem] border border-indigo-100 dark:border-indigo-900/50 transition-all">
          <h3 className="text-3xl font-bold mb-4 text-indigo-900 dark:text-white">{t('contact_title')}</h3>
          <p className="text-indigo-700/70 dark:text-slate-400 mb-10 leading-relaxed">
            {t('contact_sub')}
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-white dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center shadow-sm border border-indigo-100 dark:border-indigo-800 transition-transform group-hover:scale-110">
                <FaEnvelope className="text-indigo-600 dark:text-sky-200 text-xl"/>
              </div>
              <div>
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">E-Posta</p>
                <span className="font-semibold text-slate-700 dark:text-slate-200">cemalerenkaragul@gmail.com</span>
              </div>
            </div>

            <a href="https://linkedin.com/in/cemalerenkaragul" target="_blank" rel="noreferrer" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-white dark:bg-blue-900/40 rounded-2xl flex items-center justify-center shadow-sm border border-blue-100 dark:border-blue-900 transition-transform group-hover:scale-110">
                <FaLinkedin className="text-blue-600 dark:text-blue-400 text-xl"/>
              </div>
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">LinkedIn</p>
                <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:text-sky-200 transition-colors">cemalerenkaragul</span>
              </div>
            </a>

            <a href="https://github.com/erenuito" target="_blank" rel="noreferrer" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-700 transition-transform group-hover:scale-110">
                <FaGithub className="text-slate-900 dark:text-slate-100 text-xl"/>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">GitHub</p>
                <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:text-sky-200 transition-colors">erenuito</span>
              </div>
            </a>
          </div>
        </div>

        {/* Sağ Kart: CV İndirme */}
        <div className="flex flex-col justify-center items-center p-10 bg-white dark:bg-gray-900 rounded-[3.5rem] border border-slate-100 dark:border-gray-800 text-center shadow-sm transition-all hover:shadow-xl hover:shadow-indigo-500/5">
          <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] flex items-center justify-center shadow-lg shadow-indigo-500/40 mb-8">
            <FaDownload className="text-3xl text-white" />
          </div>
          <h4 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{t('cv_title')}</h4>
          <p className="text-slate-500 dark:text-gray-400 text-sm mb-10 max-w-[250px]">
            {t('cv_sub')}
          </p>
          <a 
            href="/Cemal-Eren-Karagul-CV.pdf" 
            download 
            className="w-full max-w-[240px] py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center"
          >
            {t('cv_btn')}
          </a>
        </div>
      </div>
    </Section>

    <footer className="py-12 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
      © {new Date().getFullYear()} Cemal Eren Karagül
    </footer>

    <ToggleDarkMode />
  </div>
  );
}; // App fonksiyonu burada biter

export default App; // Export her zaman en dışta