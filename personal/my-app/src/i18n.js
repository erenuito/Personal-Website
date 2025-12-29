import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: ["Home", "About", "Education", "Experience", "Skills", "Projects", "Contact"],
          heroTitle: "Hello, I am",
          heroSub: "Software Engineer | AI & Computer Vision Specialist",
          aboutInfo: {
            loc: "Location",
            edu: "Education",
            focus: "Focus",
            eduValue: "ADU Computer Science Eng.", // Burada ADU Computer Eng. yaptık
            },
            edu1: {
            name: "Aydin Adnan Menderes University", // University olarak güncellendi
            dept: "Computer Science and Engineering (English)",
            desc: "GPA: 3.61 (High Honor) | Thesis: Hyperparameter Optimization in ML Models"
            },
            edu2: {
            name: "Anadolu University", // University olarak güncellendi
            dept: "Management Information Systems",
            desc: "GPA: 2.96"
            },
          about_text_1: "I completed my computer engineering journey with a 3.61 GPA and high honor degree. I don't just develop with theoretical knowledge; I blend data mining, deep learning, and modern web technologies into my projects.",
          about_text_2: "I am an engineer who aims for the best in every line of code, producing solutions across a wide spectrum from autonomous systems to mobile applications.",
          info_loc_label: "Location",
          info_edu_label: "Education",
          info_focus_label: "Focus",
          edu_1_name: "Aydin Adnan Menderes University",
          edu_2_name: "Anadolu University",
          edu_gpa_label: "GPA",
          edu_1_sub: "Computer Science and Engineering (English)",
          edu_1_thesis: "Bachelor's Thesis: Hyperparameter Optimization in Machine Learning Models",
          edu_2_sub: "Management Information Systems",
          experience_list: [
            { 
              title: "PUSAY Team - Software Team Leader", 
              company: "Teknofest Combat UAV", 
              date: "09/2023 - 09/2024",
              details: [
                "Leadership in software integration processes for autonomous systems.",
                "Development of the software infrastructure of the UAV system.",
                "System optimization and algorithm development."
              ]
            },
            { 
              title: "Kale R&D - Intern Software Engineer", 
              company: "Turbojet Engine & ECU", 
              date: "08/2024 - 09/2024",
              details: [
                "Software and hardware integration support for turbojet engines.",
                "Optimization and debugging tests for ECU software.",
                "Data analysis and technical documentation."
              ]
            },
            { 
              title: "STM - Intern Computer Vision Engineer", 
              company: "AI & Image Processing", 
              date: "07/2023",
              details: [
                "Object detection projects using OpenCV and TensorFlow.",
                "Data modeling with artificial intelligence algorithms.",
                "Project reporting and technical documentation."
              ]
            }
          ],
          skill_cat_1_sub: "Model & Analysis",
          skill_cat_2_sub: "Languages & Frameworks",
          skill_cat_3_sub: "Work Discipline",
          dev_env_label: "Development Environment",
          soft_skills_label: "Professional Approach",
          soft_skills_list: [
            'Analytical Thinking & Problem Solving',
            'Teamwork & Communication',
            'Time Management & Adaptation'
          ],
          skill_tags_ai: ['Data Cleaning', 'Data Scraping', 'Model Training', 'Visualization'],
          projects_list: [
            { 
              title: 'Football Player Market Value Prediction', 
              tech: 'Python / ML / Bayesian Opt.', 
              desc: 'End-to-end machine learning project predicting market values with high accuracy using regression models (Random Forest, Gradient Boosting) on FC25 player data.',
              github: 'https://github.com/erenuito/Football-Player-Value-Prediction-Project' 
            },
            { 
              title: 'AI Based Travel Planner', 
              tech: 'React-Native / Gemini AI / Firebase', 
              desc: 'Mobile application that creates personalized, day-by-day travel itineraries using Gemini AI based on user budget and preferences, synchronized with Firebase.',
              github: 'https://github.com/erenuito/AI-Travel-Planner' 
            },
            { 
              title: 'Medicinal Plant Identification (Deep Learning)', 
              tech: 'CNN / Inception / Transfer Learning', 
              desc: 'Deep learning models using CNN, VGG, and ResNet architectures for identifying Bangladeshi medicinal plants from leaf images. 90%+ success rate.',
              github: 'https://github.com/erenuito/Neural-Network-Models-for-Bangladeshi-Medicinal-Plant-Identification' 
            },
            { 
              title: 'Movie Recommendation Engine', 
              tech: 'PySpark / ALS / Big Data', 
              desc: 'Scalable recommendation engine design using Collaborative Filtering technique and PySpark Alternating Least Squares (ALS) algorithm on millions of Netflix records.',
              github: 'https://github.com/erenuito/Movie-Recommendation-Engine' 
            },
            { 
              title: 'Face Detection and Tracking System', 
              tech: 'OpenCV / Arduino / C++', 
              desc: 'Physical hardware project that tracks the detected face using servo motors by integrating Haar Cascade algorithms with Arduino for real-time face detection.',
              github: 'https://github.com/erenuito/Face-Detection-and-Tracking-with-Ardunio-and-OpenCV' 
            },
            { 
              title: 'Genetic Algorithm Feature Selection', 
              tech: 'Python / GA / Random Forest', 
              desc: 'A library/study that optimizes model performance and training speed using genetic algorithms to select the most meaningful features in datasets.',
              github: 'https://github.com/erenuito/Genetic-Algorithm-Feature-Selection' 
            },
            { 
              title: 'Angle Finder', 
              tech: 'OpenCV / Python', 
              desc: 'Engineering tool that detects corner points of objects on an image using image processing techniques and calculates the angles between them dynamically.',
              github: 'https://github.com/erenuito/Angle-Finder' 
            },
            { 
              title: 'PDF Automation Software', 
              tech: 'Python / Tkinter / PyPDF2', 
              desc: 'Corporate productivity software that automatically fills repetitive 6-page PDF forms with a single data entry, names and saves the pages.',
              github: 'https://github.com/erenuito' 
            }
          ],
          github_btn: "GitHub Repo",
          contact_title: "Let's Connect",
          contact_sub: "You can contact me for collaboration, projects, or technical idea exchange.",
          cv_title: "Review My Resume",
          cv_sub: "PDF file containing all my technical competencies and experiences.",
          cv_btn: "Download PDF"
        }
      },
      tr: {
        translation: {
          nav: ["Anasayfa", "Hakkımda", "Eğitim", "Deneyim", "Yetenekler", "Projeler", "İletişim"],
          heroTitle: "Merhaba, Ben",
          heroSub: "Yazılım Mühendisi | Yapay Zeka Uzmanı",
          aboutInfo: {
            loc: "Konum",
            edu: "Eğitim",
            focus: "Odak",
            eduValue: "ADÜ Bilgisayar Bilimleri Müh.", // Türkçe kısım aynı kaldı
            },
            edu1: {
            name: "Aydın Adnan Menderes Üniversitesi",
            dept: "Bilgisayar Bilimleri ve Mühendisliği (İngilizce)",
            desc: "GANO: 3.61 (Yüksek Onur) | Tez: ML Modellerinde Hiperparametre Optimizasyonu"
            },
            edu2: {
            name: "Anadolu Üniversitesi",
            dept: "Yönetim Bilişim Sistemleri",
            desc: "GANO: 2.96"
            },
          about_text_1: "Bilgisayar mühendisliği yolculuğumu 3.61 GANO ve yüksek onur derecesiyle tamamladım. Sadece teorik bilgiyle değil; veri madenciliği, derin öğrenme ve modern web teknolojilerini harmanlayarak projeler geliştiriyorum.",
          about_text_2: "Her satır kodda daha iyisini hedefleyen, otonom sistemlerden mobil uygulamalara kadar geniş bir yelpazede çözüm üreten bir mühendisim.",
          info_loc_label: "Konum",
          info_edu_label: "Eğitim",
          info_focus_label: "Odak",
          info_edu_val: "ADÜ Bilgisayar Müh.",
          info_focus_val: "AI, ML, CV & React",
          edu_1_name: "Aydın Adnan Menderes Üniversitesi",
          edu_2_name: "Anadolu Üniversitesi",
          edu_gpa_label: "GANO",
          edu_1_sub: "Bilgisayar Bilimleri ve Mühendisliği (İngilizce)",
          edu_1_thesis: "Lisans Tezi: Makine Öğrenimi Modellerinde Hiperparametre Optimizasyonu",
          edu_2_sub: "Yönetim Bilişim Sistemleri",
          experience_list: [
            { 
              title: "PUSAY Takımı - Yazılım Ekip Lideri", 
              company: "Teknofest Savaşan İHA", 
              date: "09/2023 - 09/2024",
              details: [
                "Otonom sistemler için yazılım entegrasyon süreçlerinde liderlik.",
                "UAV sisteminin yazılım altyapısının geliştirilmesi.",
                "Sistem optimizasyonu ve algoritma geliştirme."
              ]
            },
            { 
              title: "Kale R&D - Stajyer Yazılım Mühendisi", 
              company: "Turbojet Motoru & ECU", 
              date: "08/2024 - 09/2024",
              details: [
                "Turbojet motoru yazılım ve donanım entegrasyon desteği.",
                "ECU yazılımlarının optimizasyonu ve hata ayıklama testleri.",
                "Veri analizi ve teknik dökümantasyon."
              ]
            },
            { 
              title: "STM - Stajyer Bilgisayarlı Görü Mühendisi", 
              company: "AI & Image Processing", 
              date: "07/2023",
              details: [
                "OpenCV ve TensorFlow kullanarak nesne tespiti projeleri.",
                "Yapay zeka algoritmaları ile veri modelleme.",
                "Proje raporlama ve teknik dokümantasyon."
              ]
            }
          ],
          skill_cat_1_sub: "Model & Analiz",
          skill_cat_2_sub: "Diller & Frameworkler",
          skill_cat_3_sub: "Çalışma Disiplini",
          dev_env_label: "Geliştirme Ortamı",
          soft_skills_label: "Profesyonel Yaklaşım",
          soft_skills_list: [
            'Analitik Düşünme & Problem Çözme',
            'Ekip Çalışması & İletişim',
            'Zaman Yönetimi & Adaptasyon'
          ],
          skill_tags_ai: ['Veri Temizleme', 'Veri Madenciliği', 'Model Eğitimi', 'Görselleştirme'],
          projects_list: [
            { 
              title: 'Futbolcuların Piyasa Değeri Tahmini', 
              tech: 'Python / ML / Bayesian Opt.', 
              desc: 'FC25 oyuncu verilerini kullanarak regresyon modelleri (Random Forest, Gradient Boosting) ile piyasa değerlerini yüksek doğrulukla tahmin eden uçtan uca makine öğrenimi projesi.',
              github: 'https://github.com/erenuito/Football-Player-Value-Prediction-Project' 
            },
            { 
              title: 'Yapay Zeka Tabanlı Seyahat Planlayıcı', 
              tech: 'React-Native / Gemini AI / Firebase', 
              desc: 'Kullanıcı bütçesi ve tercihlerine göre Gemini AI kullanarak kişiselleştirilmiş, gün gün ayrılmış seyahat rotaları oluşturan ve Firebase ile senkronize çalışan mobil uygulama.',
              github: 'https://github.com/erenuito/AI-Travel-Planner' 
            },
            { 
              title: 'Tıbbi Bitki Tanımlama (Deep Learning)', 
              tech: 'CNN / Inception / Transfer Learning', 
              desc: 'Bangladeş’teki tıbbi bitkilerin yaprak görüntülerinden tanımlanması için CNN, VGG ve ResNet mimarileriyle derin öğrenme modelleri. %90+ başarı oranı ile bitki sınıflandırma.',
              github: 'https://github.com/erenuito/Neural-Network-Models-for-Bangladeshi-Medicinal-Plant-Identification' 
            },
            { 
              title: 'Film Öneri Motoru', 
              tech: 'PySpark / ALS / Big Data', 
              desc: 'Milyonlarca Netflix verisi üzerinde Collaborative Filtering tekniği ve PySpark Alternating Least Squares (ALS) algoritmasını kullanarak ölçeklenebilir öneri motoru tasarımı.',
              github: 'https://github.com/erenuito/Movie-Recommendation-Engine' 
            },
            { 
              title: 'Yüz Tespit ve Takip Sistemi', 
              tech: 'OpenCV / Arduino / C++', 
              desc: 'Gerçek zamanlı yüz tespiti yapan Haar Cascade algoritmalarını Arduino ile entegre ederek, algılanan yüzü takip eden servo motor kontrollü fiziksel donanım projesi.',
              github: 'https://github.com/erenuito/Face-Detection-and-Tracking-with-Ardunio-and-OpenCV' 
            },
            { 
              title: 'Genetik Algoritma Feature Selection', 
              tech: 'Python / GA / Random Forest', 
              desc: 'Veri setlerindeki en anlamlı özellikleri seçmek için genetik algoritmalar kullanarak model performansını ve eğitim hızını optimize eden bir kütüphane/çalışma.',
              github: 'https://github.com/erenuito/Genetic-Algorithm-Feature-Selection' 
            },
            { 
              title: 'Açı Bulucu (Angle Finder)', 
              tech: 'OpenCV / Python', 
              desc: 'Görüntü işleme teknikleri ile resim üzerindeki nesnelerin köşe noktalarını tespit edip aralarındaki açıları dinamik olarak hesaplayan mühendislik aracı.',
              github: 'https://github.com/erenuito/Angle-Finder' 
            },
            { 
              title: 'PDF Otomasyon Yazılımı', 
              tech: 'Python / Tkinter / PyPDF2', 
              desc: 'Tekrarlayan 6 sayfalık PDF formlarını tek bir veri girişiyle otomatik dolduran, sayfaları isimlendirip kaydeden kurumsal verimlilik yazılımı.',
              github: 'https://github.com/erenuito' 
            }
          ],
          github_btn: "GitHub Repo",
          contact_title: "Bağlantı Kuralım",
          contact_sub: "İş birliği, projeler veya sadece teknik bir konuda fikir alışverişi yapmak için bana ulaşabilirsin.",
          cv_title: "Özgeçmişimi İncele",
          cv_sub: "Tüm teknik yetkinliklerimin ve deneyimlerimin yer aldığı PDF dosyası.",
          cv_btn: "PDF İndir"
        }
      }
    },
    fallbackLng: 'tr',
    returnObjects: true,
    interpolation: { escapeValue: false }
  });

export default i18n;