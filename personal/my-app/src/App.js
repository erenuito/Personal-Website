import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGraduationCap, FaCode, FaBriefcase, FaEnvelope, FaHome, FaSun, FaMoon, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import * as Accordion from '@radix-ui/react-accordion';
import './App.css';


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
      className="fixed bottom-4 right-4 w-16 h-8 flex items-center bg-blue-400 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 shadow-md"
    >
      <div
        className={`w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transform transition-transform duration-300 ${
          isDark ? 'translate-x-8' : ''
        }`}
      >
        {isDark ? <FaMoon className="text-cyan-400" /> : <FaSun className="text-yellow-500" />}
      </div>
    </button>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 px-6 py-3 flex justify-between items-center">
    <span className="text-xl font-bold text-blue-800 dark:text-white">Cemal Eren Karagül</span>
    <div className="flex items-center space-x-4 text-sm font-medium">
      {['Anasayfa', 'Hakkımda', 'Eğitim', 'Deneyim','Yetenekler', 'Projeler', 'İletişim'].map((text, i) => (
        <a
          key={i}
          href={`#${text.toLowerCase()}`}
          className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition cursor-pointer"
        >
          {text}
        </a>
      ))}
      <a href="https://github.com/erenuito" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600 dark:hover:text-white">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/cemalerenkaragul" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600 dark:hover:text-white">
        <FaLinkedin />
      </a>
      <a href="https://instagram.com/erennkaragul" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600 dark:hover:text-white">
        <FaInstagram />
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="anasayfa" className="h-screen flex items-center justify-center bg-blue-50 dark:bg-gray-800">
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center space-y-4"
    >
      <h1 className="text-5xl font-bold text-blue-800 dark:text-white">Merhaba, Ben Cemal Eren Karagül</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300">Yazılım Mühendisi • React | ML | CV</p>
    </motion.div>

  </section>
);

const Section = ({ id, title, icon, children }) => (
  <section id={id} className="my-20 px-6 max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center text-blue-800 dark:text-white">
        {icon} <span className="ml-2">{title}</span>
      </h2>
      {children}
    </motion.div>
  </section>
);

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{skill}</div>
    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mt-1">
      <motion.div
        className="bg-blue-600 h-3 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1 }}
      />
    </div>
  </div>
);

const ProjectAccordion = () => (
  <Accordion.Root type="multiple" className="space-y-4" defaultValue={['item-0']}>
    {[
      {
        title: 'Futbolcuların Piyasa Değeri Tahmini',
        desc: 'Bu projede, erkek ve kadın futbolcuların FC25 oyunundaki ratinglerini kullanarak, futbolcuların piyasa değerlerini tahmin eden bir makine öğrenimi modeli geliştirdim. Özgün veri kümesi, oyuncu özellikleri (yaş, kulüp, milliyet, şut,pas özellikleri vb.) ve piyasa değerleri üzerineydi. Proje, Gradient Boosting ve Random Forest regresyon modelleri kullanarak yüksek doğruluk oranları elde etti.',
        github: 'https://github.com/erenuito/Football-Player-Value-Prediction-Project',
        tech: 'Python, BeautifulSoup, Bayesian Optimization, sklearn, seaborn, matplotlib.pyplot, pandas, numpy, Orange'
      },
      {
        title: 'Film Öneri Motoru',
        desc: 'Netflix veri kümesi üzerinde çalışan bu projede, kullanıcılar için öneri sistemleri geliştirdim. PySpark’ın Alternating Least Squares (ALS) algoritması ile kullanıcılar ve filmler arasında benzerlikleri analiz ettim ve kişisel film önerileri sağladım. Proje, büyük veri ile çalışarak öneri sistemlerinin ölçeklenebilirliğini test etti.',
        github: 'https://github.com/erenuito/Movie-Recommendation-Engine',
        tech: 'PySpark, ALS, Collaborative Filtering, pandas, numpy, seaborn, matplotlib.pyplot'
      },
      {
        title: 'Tıbbi Bitki Tanımlama',
        desc: 'Bu proje, Bangladeş’teki tıbbi bitkilerin tanımlanması için derin öğrenme modelleri geliştirdi. Farklı derin öğrenme mimarileri (CNN, VGG, Inception, DenseNet) kullanarak bitki yapraklarının sınıflandırılmasında yüksek doğruluk oranları elde ettim. Projede, veri artırma teknikleri ile modelin genelleme yeteneği güçlendirildi.',
        github: 'https://github.com/erenuito/Neural-Network-Models-for-Bangladeshi-Medicinal-Plant-Identification',
        tech: 'Tensorflow, CNN, VGG, DenseNet, Inception, Image Classification, matplotlib.pyplot, sklearn, numpy, keras, seaborn'
      },
      {
        title: 'Genetik Algoritma Feature Selection',
        desc: 'Bu projede, diyabet veri seti üzerinde genetik algoritmalarla özellik seçimi yaptım ve Random Forest sınıflayıcısını optimize ettim. Genetik algoritma, en iyi özellik setini seçerek modelin doğruluğunu arttırdı. Sonuçlar, modelin başarımını ve hesaplama verimliliğini önemli ölçüde iyileştirdi.',
        github: 'https://github.com/erenuito/Genetic-Algorithm-Feature-Selection',
        tech: 'Python, Genetic Algorithm, Random Forest, numpy, pandas, scikit-learn, joblib'
      },
      {
        title: 'Yüz Tespit ve Takip Sistemi',
        desc: 'Gerçek zamanlı yüz tespiti ve takibi yapmak için Arduino ve OpenCV kullanarak bir sistem geliştirdim. Yüz algılaması için Haar kaskadlarını kullanarak, algılanan yüzlerin konumlarına göre bir servo motoru ile yönlendirme gerçekleştirdim. Bu proje, makine görüsü ve donanım entegrasyonunun birleşiminde önemli bir adım oldu.',
        github: 'https://github.com/erenuito/Face-Detection-and-Tracking-with-Ardunio-and-OpenCV',
        tech: 'OpenCV, Arduino, Haar Cascade'
      },
      {
        title: 'Açı Bulucu',
        desc: 'Bu projede, görüntülerden açılar tespit etmek için OpenCV kullanarak bir algoritma geliştirdim. Geometrik şekillerin köşe noktalarını algılayarak, bu noktalar arasındaki açıları hesapladım. Proje, özellikle mühendislik ve geometri uygulamaları için kullanışlı bir araç olarak tasarlandı.',
        github: 'https://github.com/erenuito/Angle-Finder',
        tech: 'OpenCV, Python'
      },
      {
        title: 'Yapay Zeka tabanlı Seyahat Planlama Mobil Uygulaması',
        desc: 'Bu projede, seyahat planlamasını kolaylaştırmak için yapay zekâ destekli öneriler sunan AI Travel Planner adlı bir mobil uygulama geliştirdim. AI Travel Planner kullanıcıların seyahat tercihlerini yapay zeka yardımıyla analiz ederek, örneğin; bütçe, kişi sayısı vb. , kişiselleştirilmiş seyahat planları oluşturan bir mobil uygulamadır. .',
        github: 'https://github.com/erenuito/AI-Travel-Planner',
        tech: 'React-Native, Expo, Firebase (Authentication, Firestore), Gemini, OpenAI API, Google Maps API,'
      },
      {
        title: 'PDF Otomasyon Yazılımı',
        desc: 'Bu projede, bir elektrik firmasının proje onayı alması için sisteme yüklemesi gereken 6 sayfalık bir PDFin otomatik bir şekilde sisteme yüklemeye hazır hale gelmesini sağladım. Her PDF sayfasında, sayfanın farklı yerlerinde bulunan İsim, Tarih, Adres vb. bilgilerin tek inputla doldurulmasını sağladım. Ayrıca doldurduktan sonra kaydederken her sayfanın ayrı bir PDF olarak kaydedilmesini sağladım.',
        github: 'https://github.com/yourusername/genetic-algorithm-feature-selection',
        tech: 'Python, Tkinter, PyPDF2'
      }
    ].map((proj, idx) => (
      <Accordion.Item key={idx} value={`item-${idx}`} className="border-b pb-2">
        <Accordion.Header>
          <Accordion.Trigger className="text-lg font-semibold text-blue-700 dark:text-blue-300 hover:underline w-full text-left">
            {proj.title}
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="text-sm text-gray-700 dark:text-gray-300 mt-2">
          <p>{proj.desc}</p>
          <p className="font-semibold mt-2">Tech Stack: {proj.tech}</p>
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline mt-2 block"
          >
            GitHub Repo
          </a>
        </Accordion.Content>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

const App = () => (
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
    <Navbar />
    <Hero />

    <Section id="hakkımda" title="Hakkımda" icon={<FaHome />}>
    <p className="text-lg leading-relaxed">
    Merhaba, ben Cemal Eren Karagül.
    Bilgisayar mühendisliği serüvenime Aydın Adnan Menderes Üniversitesi’nde başladım ve bu yolculuğu yeni tamamladım.
    Eğitim hayatım boyunca yalnızca teorik bilgiyle yetinmedim; veri madenciliğinden yapay zekâya, bilgisayarlı görüden derin öğrenmeye kadar pek çok alanda kendimi geliştirdim. Bu teknik becerilerimin yanında, web ve mobil uygulama geliştirmeye de özel bir ilgi duyuyorum.
  </p>
  <p className="mt-4 text-lg leading-relaxed">
    Kendimi, sürekli öğrenmeye istekli, teknolojiyi tutkuyla takip eden ve ekip çalışmasına değer veren biri olarak tanımlıyorum. Yeni fikirlere açık, değişime hızlı uyum sağlayabilen ve gelişimden heyecan duyan bir yazılım geliştiriciyim. Her satır kodda daha iyisini hedefliyor, her projede kendime yeni bir şey katmaya çalışıyorum.


  </p>

    </Section>

    <Section id="eğitim" title="Eğitim" icon={<FaGraduationCap />}>
<div className="education-item">
    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">Aydın Adnan Menderes Üniversitesi</h3>
    <p className="text-lg text-gray-800 dark:text-gray-300">
      Bilgisayar Mühendisliği (İngilizce) <span className="text-sm text-gray-500 dark:text-gray-300">(2019 - 2024)</span>
    </p>
    <div className="mt-4">
      <p className="text-lg text-gray-700 dark:text-gray-300"><strong>GANO:</strong> <span className="font-bold text-blue-600 dark:text-blue-300">3.61</span></p>
      <p className="text-lg text-gray-700 dark:text-gray-300"><strong>Lisans Tezi:</strong> Makine Öğrenimi Modellerinde Hiperparametre Optimizasyonu</p>
    </div>
  </div>

  <div className="education-item mt-8">
    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">Anadolu Üniversitesi</h3>
    <p className="text-lg text-gray-800 dark:text-gray-300">
      Yönetim Bilişim Sistemleri <span className="text-sm text-gray-500 dark:text-gray-300">(2021 - Devam Ediyor)</span>
    </p>
    <div className="mt-4">
      <p className="text-lg text-gray-700 dark:text-gray-300"><strong>GANO:</strong> <span className="font-bold text-blue-600 dark:text-blue-300">2.84</span></p>
    </div>
  </div>
</Section>

<Section id="deneyim" title="Deneyim" icon={<FaBriefcase />}>
  <div className="experience-item">
    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">PUSAY Takımı - Yazılım Geliştirme Takım Lideri</h3>
    <p className="text-lg text-gray-800">
      <span className="text-sm text-gray-500 dark:text-gray-300">(Teknofest Combat UAV Yarışması) - 09/2023 - 09/2024</span>
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
      <li>Otonom sistemler için yazılım geliştirme ve entegrasyon süreçlerinde liderlik yaptım.</li>
      <li>Combat UAV sisteminin yazılım altyapısını geliştirmek için takım çalışması ve teknik çözümler sundum.</li>
      <li>Sistem optimizasyonu ve algoritma geliştirme üzerinde çalıştım.</li>
    </ul>
  </div>


  <div className="experience-item mt-8">
    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">Kale R&D - Yazılım Mühendisi Stajyer</h3>
    <p className="text-lg text-gray-800">
      <span className="text-sm text-gray-500 dark:text-gray-300 ">(Turbojet Motoru, ECU Yazılımı ve Arayüz) - 08/2024 - 09/2024</span>
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
      <li>Turbojet motoru yazılım ve donanım entegrasyonunda destek sağladım.</li>
      <li>ECU yazılımlarının optimizasyonu ve hata ayıklaması için testler gerçekleştirdim.</li>
      <li>Veri analizi ve yazılım dokümantasyonu hazırladım.</li>
    </ul>
  </div>


  <div className="experience-item mt-8">
    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">STM - Yapay Zeka Yazılım Mühendisi (Stajyer)</h3>
    <p className="text-lg text-gray-800">
      <span className="text-sm text-gray-500 dark:text-gray-300">(Yapay Zeka ve Görüntü İşleme Departmanı) - 07/2023</span>
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
      <li>Görüntü işleme ve nesne tespiti projelerinde OpenCV ve TensorFlow kullanarak yazılım geliştirdim.</li>
      <li>Yapay zeka algoritmalarını uygulayarak veri analizi ve modelleme çalışmaları gerçekleştirdim.</li>
      <li>Proje raporları ve teknik dökümantasyon hazırladım, takım içi iletişimi sağladım.</li>
    </ul>
  </div>

</Section>



    <Section id="yetenekler" title="Yetenekler" icon={<FaCode />}>
  <Accordion.Root type="multiple" className="space-y-4" defaultValue={['programlama']}>
    <Accordion.Item value="programlama">
      <Accordion.Header>
        <Accordion.Trigger className="text-lg font-semibold text-blue-700 dark:text-blue-300 hover:underline w-full text-left">
          Programlama Dilleri ve Araçlar
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="mt-2 space-y-2">
        <SkillBar skill="Python" level={90} />
        <SkillBar skill="SQL" level={80} />
        <SkillBar skill="R" level={70} />
        <SkillBar skill="Tableau" level={70} />
        <SkillBar skill="Excel" level={70} />
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="ml">
      <Accordion.Header>
        <Accordion.Trigger className="text-lg font-semibold text-blue-700 dark:text-blue-300 hover:underline w-full text-left">
          Makine Öğrenimi ve Derin Öğrenme
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="mt-2 space-y-2">
        <SkillBar skill="TensorFlow & Keras" level={85} />
        <SkillBar skill="Scikit-learn" level={80} />
        <SkillBar skill="PyTorch" level={75} />
        <SkillBar skill="Bayesian Optimizasyonu" level={75} />
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="veri-analizi">
      <Accordion.Header>
        <Accordion.Trigger className="text-lg font-semibold text-blue-700 dark:text-blue-300 hover:underline w-full text-left">
          Veri Analizi ve Görselleştirme
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="mt-2 space-y-2">
        <SkillBar skill="Pandas" level={90} />
        <SkillBar skill="NumPy" level={85} />
        <SkillBar skill="Matplotlib" level={80} />
        <SkillBar skill="Seaborn" level={75} />
        <SkillBar skill="Plotly" level={70} />
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="cv">
      <Accordion.Header>
        <Accordion.Trigger className="text-lg font-semibold text-blue-700 dark:text-blue-300 hover:underline w-full text-left">
          Görüntü İşleme ve Bilgisayarlı Görü
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="mt-2 space-y-2">
        <SkillBar skill="OpenCV" level={90} />
        <SkillBar skill="YOLO (Nesne Tespit)" level={75} />
        <SkillBar skill="Mask R-CNN" level={70} />
        <SkillBar skill="SiamMask" level={70} />
        <SkillBar skill="CVAT" level={70} />
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="wmd">
      <Accordion.Header>
        <Accordion.Trigger className="text-lg font-semibold text-blue-700 dark:text-blue-300 hover:underline w-full text-left">
          Web ve Mobil Geliştirme
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="mt-2 space-y-2">
        <SkillBar skill="CSS" level={90} />
        <SkillBar skill="HTML" level={75} />
        <SkillBar skill="Java Script" level={70} />
        <SkillBar skill="React" level={70} />
        <SkillBar skill="React-Native" level={70} />
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
</Section>

    <Section id="projeler" title="Projeler" icon={<FaBriefcase />}>
      <ProjectAccordion />
    </Section>

    <Section id="Iletisim" title="İletişim" icon={<FaEnvelope />}>
      <p>📧 cemalerenkaragul@gmail.com</p>
      <p>📱 +90 531 212 74 49</p>
      <p>📍 İstanbul, Türkiye</p>
    </Section>

    <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Cemal Eren Karagül. Tüm hakları saklıdır.
    </footer>

    <ToggleDarkMode />
  </div>
);

export default App;
