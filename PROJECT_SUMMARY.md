# توثيق مشروع Portfolio — سجى حامد

> ملف مرجعي شامل لشرح المشروع لأي شخص، أو للرجوع إليه لاحقًا.

---

## 1. وصف عام عن المشروع

هذا المشروع هو **موقع بورتفوليو شخصي (Personal Brand Website)** للمهندسة **سجى حامد أبو منديل**، بمسمى مهني:

> Front-End Developer | Digital Builder | Content Creator | AI & Automation Enthusiast

الهدف من الموقع ليس مجرد عرض مشاريع، بل بناء **علامة شخصية احترافية** تُظهر:

- الخبرة في تطوير الواجهات الأمامية (Front-End)
- مشاريع رقمية حقيقية تم بناؤها
- الاهتمام بالذكاء الاصطناعي والأتمتة
- نشاط في صناعة المحتوى والتأثير المجتمعي
- شهادات واعتمادات فعلية (بدون أي معلومات ملفّقة)

رحلة الزائر المقصودة في الموقع:

**من هي سجى؟ → ماذا بنت؟ → ما الذي يميزها؟ → ماذا تقدّم؟ → كيف يتم التواصل معها؟**

الموقع أحادي الصفحة (Single Page Application) مبني بالكامل بـ **React + Vite**، بدون أي Backend أو قاعدة بيانات، ويدعم اللغتين **العربية والإنجليزية** مع تبديل اتجاه الصفحة (RTL/LTR).

مرجع المواصفات الأصلية للمشروع موجود في ملف [SAJA_PORTFOLIO_PROJECT_SPEC.md](SAJA_PORTFOLIO_PROJECT_SPEC.md) في جذر المشروع، وهو "مصدر الحقيقة" لكل قرار تصميمي ومحتوى.

---

## 2. التقنيات الأساسية (Tech Stack)

| التقنية | الدور في المشروع |
|---|---|
| **React 19** | مكتبة بناء واجهة المستخدم، باستخدام مكوّنات (Components) ودوال Hooks. |
| **Vite** | أداة البناء والتطوير (Dev Server + Bundler)، توفر تحديث فوري (HMR) وبناء إنتاج سريع. |
| **Tailwind CSS v4** | تنسيق الواجهة بالكامل عبر utility classes، بدون ملفات CSS منفصلة لكل مكوّن. |
| **JavaScript (ES6+)** | لغة البرمجة الأساسية — لا يوجد TypeScript بقرار متعمّد (البساطة). |
| **Framer Motion** | الأنيميشن (ظهور تدريجي للأقسام، حركة الكروت، فتح/إغلاق المودال...). |
| **React Icons** | أيقونات جاهزة (شبكات تواصل، أزرار، إلخ) بدل رسم SVG يدويًا. |

لا يوجد Backend ولا قاعدة بيانات ولا مكتبة إدارة حالة (مثل Redux) — كل الحالة تُدار عبر `useState`/`useEffect` البسيطة في React، وكل المحتوى مركزي في ملف بيانات واحد.

---

## 3. كل المكتبات المستخدمة (من package.json)

### Dependencies (تُستخدم في وقت التشغيل / الإنتاج)

| الحزمة | الإصدار | لماذا استخدمناها |
|---|---|---|
| `react` | ^19.2.8 | المكتبة الأساسية لبناء الواجهة كمكوّنات تفاعلية. |
| `react-dom` | ^19.2.8 | ربط مكوّنات React بشجرة DOM الفعلية في المتصفح. |
| `@emailjs/browser` | ^4.4.1 | إرسال نموذج التواصل (Contact Form) كإيميل حقيقي مباشرة من المتصفح، بدون الحاجة لبناء سيرفر Backend. |
| `@vercel/analytics` | ^2.0.1 | تتبع تحليلات الزوار (Page Views وغيرها) عند النشر على Vercel، بدون إعداد إضافي. |
| `framer-motion` | ^13.0.0 | إضافة حركات وانتقالات سلسة (Fade-up، حركة الكروت، فتح المودال، دعم `prefers-reduced-motion`). |
| `react-icons` | ^5.7.0 | توفير أيقونات جاهزة (مثل أيقونات التواصل الاجتماعي، السلاسل، الإرسال، الإغلاق...) دون الحاجة لملفات SVG يدوية. |

### devDependencies (أدوات التطوير فقط، لا تدخل في الإنتاج النهائي)

| الحزمة | الإصدار | لماذا استخدمناها |
|---|---|---|
| `vite` | ^8.2.0 | خادم التطوير المحلي + أداة تجميع (bundling) المشروع للإنتاج. |
| `@vitejs/plugin-react` | ^6.0.4 | يضيف دعم JSX و Fast Refresh (تحديث فوري للمكوّنات) لـ Vite. |
| `@tailwindcss/vite` | ^4.3.3 | يدمج Tailwind CSS v4 مباشرة كـ plugin داخل Vite (بدون ملف `tailwind.config.js` منفصل بالطريقة القديمة). |
| `tailwindcss` | ^4.3.3 | محرك توليد كلاسات CSS المساعدة (utility-first). |
| `eslint` | ^10.8.0 | فحص جودة الكود واكتشاف الأخطاء البرمجية الشائعة قبل التشغيل. |
| `@eslint/js` | ^10.0.1 | مجموعة القواعد الأساسية (recommended rules) الرسمية لـ ESLint. |
| `eslint-plugin-react-hooks` | ^7.1.1 | يتحقق من الاستخدام الصحيح لـ React Hooks (مثل قواعد `useEffect`). |
| `eslint-plugin-react-refresh` | ^0.5.3 | يتأكد أن المكوّنات متوافقة مع آلية Fast Refresh أثناء التطوير. |
| `globals` | ^17.7.0 | تعريف المتغيرات العامة (مثل `window`, `document`) لإعدادات ESLint. |
| `@types/react`, `@types/react-dom` | ^19.x | تعريفات الأنواع (لتفعيل الإكمال التلقائي/التحقق في المحرر) رغم أن المشروع JavaScript وليس TypeScript. |

---

## 4. بنية المشروع (Project Structure)

```
portfolio/
├── public/                     # ملفات وصور ثابتة تُنسخ كما هي (شهادات، صور شخصية، favicon...)
│   └── certificates/           # صور الشهادات (PNG) المعروضة في قسم Certifications
├── src/
│   ├── assets/                 # صور/ملفات مستوردة داخل الكود (وليست عامة في public)
│   ├── components/
│   │   ├── layout/             # مكوّنات هيكلية عامة
│   │   │   └── Navbar.jsx      # الشريط العلوي: تنقل، تبديل لغة، تبديل ثيم، قائمة موبايل
│   │   ├── sections/           # أقسام الصفحة الرئيسية (كل قسم = مكوّن مستقل)
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── ExperienceCard.jsx
│   │   │   ├── ContentImpact.jsx
│   │   │   ├── ContentSeriesCard.jsx
│   │   │   ├── Projects.jsx / ProjectCard.jsx / ProjectFilter.jsx / CaseStudyModal.jsx
│   │   │   ├── WhySaja.jsx
│   │   │   ├── Skills.jsx / SkillCard.jsx
│   │   │   ├── Certifications.jsx / CredentialCard.jsx / CredentialModal.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── SocialPresence.jsx
│   │   │   ├── Contact.jsx         # نموذج التواصل + تكامل EmailJS
│   │   │   └── AIAssistant.jsx     # الشات بوت العائم "Ask Saja's AI"
│   │   └── ui/                 # مكوّنات واجهة قابلة لإعادة الاستخدام (Button, Container, SectionHeader, SocialLinks, Reveal, ThemeToggle)
│   ├── data/
│   │   └── portfolioData.js    # ⭐ ملف البيانات المركزي — كل نصوص/روابط/مشاريع/شهادات الموقع بالعربي والإنجليزي
│   ├── hooks/
│   │   └── useTheme.js         # منطق التبديل بين الوضع الداكن والفاتح + الحفظ في localStorage
│   ├── pages/                  # (محجوز لصفحات مستقبلية إن لزم — الموقع حاليًا صفحة واحدة)
│   ├── App.jsx                 # نقطة تجميع كل الأقسام + حالة اللغة (lang) + خلفية الصورة الثابتة
│   ├── main.jsx                 # نقطة الدخول: يركّب <App /> داخل عنصر #root
│   └── index.css               # الأنماط العامة + إعداد Tailwind + متغيرات الألوان (Design Tokens)
├── index.html                  # نقطة HTML الأساسية: SEO meta tags، سكربت منع "وميض" الثيم قبل تحميل React
├── vite.config.js              # إعداد Vite (React plugin + Tailwind plugin)
├── eslint.config.js            # إعداد قواعد ESLint
├── .env.example                # نموذج لمتغيرات البيئة المطلوبة (مفاتيح EmailJS)
└── package.json
```

### مبدأ التصميم المعماري المهم: **البيانات المركزية**

كل محتوى الموقع (الاسم، الروابط، المشاريع، الشهادات، المهارات، الخدمات، إجابات الشات بوت...) موجود في ملف واحد فقط:
**[src/data/portfolioData.js](src/data/portfolioData.js)**

كل نص فيه على الشكل `{ en: "...", ar: "..." }`، والمكوّنات تقرأ فقط `field[lang]` حسب اللغة الحالية. هذا يعني:
- لتعديل أي نص أو رابط في الموقع → التعديل في مكان واحد فقط.
- لا نصوص أو روابط مكتوبة يدويًا (hard-coded) داخل المكوّنات.

---

## 5. الميزات المنفذة (Features)

### أ) نظام اللغتين (AR / EN)
- حالة `lang` مركزية في `App.jsx`، يتم تمريرها كـ prop لكل الأقسام.
- عند التبديل: تتغير `dir` (rtl/ltr) و`lang` على `<html>` و`<body>`، وكذلك عنوان الصفحة ووصف الـ meta ديناميكيًا.
- زر التبديل **AR | EN** في الـ Navbar.

### ب) الوضع الداكن / الفاتح (Dark / Light Mode)
- Hook مخصص [useTheme.js](src/hooks/useTheme.js): يقرأ تفضيل النظام (`prefers-color-scheme`)، يحفظ اختيار المستخدم في `localStorage`، ويتفاعل مع تغيير إعداد النظام تلقائيًا إن لم يكن هناك اختيار محفوظ.
- سكربت صغير مباشرة في `index.html` (قبل تحميل React) يطبّق الثيم الصحيح فورًا لمنع "وميض" لون خاطئ (FOUC) عند تحميل الصفحة.
- زر تبديل [ThemeToggle.jsx](src/components/ui/ThemeToggle.jsx) في الـ Navbar.

### ج) نموذج التواصل عبر EmailJS
- ملف [Contact.jsx](src/components/sections/Contact.jsx): نموذج بحقول (الاسم، الإيميل، نوع المشروع، الميزانية/النطاق، الرسالة) مع تحقق (validation) من جهة العميل فقط.
- عند الإرسال، يستخدم `emailjs.sendForm()` لإرسال الرسالة كإيميل حقيقي **بدون أي Backend**.
- مفاتيح EmailJS (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) تُقرأ من متغيرات بيئة (`.env.local`)، ولا تُرفع لـ Git (محمية عبر `.gitignore`).
- إذا لم تكن المفاتيح معرَّفة، يعرض النموذج حالة "not-configured" أنيقة توجّه الزائر للتواصل عبر mailto مباشرة بدل أن يفشل بصمت.
- ملف [.env.example](.env.example) يشرح خطوات إنشاء حساب EmailJS مجاني وربطه.

### د) مساعد الذكاء الاصطناعي العائم (Ask Saja's AI)
- ملف [AIAssistant.jsx](src/components/sections/AIAssistant.jsx): زر عائم أسفل الشاشة يفتح نافذة شات صغيرة.
- **لا يوجد اتصال حقيقي بأي نموذج ذكاء اصطناعي** — هذا بقرار متعمّد من المواصفات (القسم 25). الإجابات تُطابق كلمات مفتاحية (`keywords`) محددة مسبقًا في `portfolioData.js` وترجع إجابة جاهزة، أو إجابة افتراضية (`fallbackAnswer`) إن لم تُطابق أي شيء.
- مصمم ليكون Modular بحيث يمكن لاحقًا ربطه بـ API حقيقي أو workflow عبر n8n دون إعادة هيكلة كبيرة.

### هـ) عرض المشاريع مع Case Study Modal
- [Projects.jsx](src/components/sections/Projects.jsx) + [ProjectFilter.jsx](src/components/sections/ProjectFilter.jsx): فلترة المشاريع حسب النوع (All / Web Development / React / UI-UX / AI Integration).
- [CaseStudyModal.jsx](src/components/sections/CaseStudyModal.jsx): نافذة منبثقة قابلة لإعادة الاستخدام لعرض تفاصيل كل مشروع (المشكلة، الدور، الحل، البنية، التقنيات، رابط تجريبي، GitHub) بدل إنشاء صفحة منفصلة لكل مشروع. تدعم الإغلاق بـ Escape ومنع تمرير الخلفية أثناء الفتح.

### و) قسم الشهادات (Certifications)
- [Certifications.jsx](src/components/sections/Certifications.jsx) + [CredentialCard.jsx](src/components/sections/CredentialCard.jsx) + [CredentialModal.jsx](src/components/sections/CredentialModal.jsx): عرض الشهادات الحقيقية فقط (لا شهادات ملفّقة) مع صورها الفعلية من `public/certificates/`.

### ز) قسم المحتوى والتأثير المجتمعي
- [ContentImpact.jsx](src/components/sections/ContentImpact.jsx) و[ContentSeriesCard.jsx](src/components/sections/ContentSeriesCard.jsx): عرض ركائز المحتوى (Inspire / Educate / Empower) وسلاسل المحتوى (مثل "ابدأها صح").

### ح) الأنيميشن (Framer Motion)
- [Reveal.jsx](src/components/ui/Reveal.jsx): مكوّن عام لإظهار أي محتوى بحركة "fade-up" عند دخوله الشاشة (بدل تكرار نفس منطق الأنيميشن في كل قسم).
- استخدام `useReducedMotion` لاحترام إعدادات "تقليل الحركة" لدى المستخدم (Accessibility).

### ط) Vercel Web Analytics
- مكوّن `<Analytics />` من `@vercel/analytics/react` مضاف في [App.jsx](src/App.jsx)، يعمل تلقائيًا عند النشر على Vercel لتتبع الزيارات دون أي إعداد إضافي أو تجميع بيانات شخصية يدوي.

### ي) SEO أساسي
- عنوان ووصف الصفحة (`<title>`, `meta description`) ديناميكيان حسب اللغة.
- Open Graph tags (`og:title`, `og:description`, `og:image`) في [index.html](index.html).
- علامة تحقق Google Search Console (`google-site-verification`) مضافة بالفعل.
- Favicon مخصص (صورة شخصية بدل الأيقونة الافتراضية).

### ك) إمكانية الوصول (Accessibility)
- استخدام عناصر HTML دلالية، `aria-invalid` / `aria-describedby` في حقول النموذج، `role="dialog"` و`role="status"`، ودعم التنقل بلوحة المفاتيح (Escape لإغلاق المودال/الشات).

---

## 6. خطوات النشر (Deployment) التي تمت

1. **GitHub**: المشروع مرفوع إلى المستودع
   `https://github.com/sajahamad/saja-hamed-portfolio`
   (الفرع الرئيسي: `main`).

2. **الرفعات الأساسية التي تمت حتى الآن (git log)**:
   - `Initial commit: Saja Hamed portfolio site` — الإصدار الأول الكامل للموقع.
   - `Install Vercel Web Analytics` + دمجها عبر Pull Request — إضافة مكوّن `<Analytics />`.
   - `Add Google Search Console verification meta tag` — لربط الموقع بأدوات جوجل لمشرفي المواقع.
   - `Add dark/light mode toggle with system preference and persistence` — إضافة الثيم.
   - `Replace favicon with custom photo icon` — تحديث أيقونة المتصفح.

3. **Vercel**: الموقع منشور عبر **Vercel** (تكامل مباشر مع GitHub — كل Push على `main` يُنشئ Deployment جديد تلقائيًا). لا يوجد ملف `vercel.json` مخصص؛ Vercel يكتشف مشروع Vite تلقائيًا ويستخدم:
   - أمر البناء: `npm run build` (ينفّذ `vite build`)
   - مجلد الإخراج: `dist/`
4. **متغيرات البيئة على Vercel**: يجب ضبط نفس المفاتيح الموجودة في `.env.example` (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) من إعدادات المشروع في لوحة Vercel (Project → Settings → Environment Variables) حتى يعمل نموذج التواصل في بيئة الإنتاج تمامًا كما يعمل محليًا.
5. **Vercel Web Analytics**: تم تفعيله من لوحة Vercel للمشروع (Project → Analytics)، وهذا ما استدعى تثبيت حزمة `@vercel/analytics`.

---

## 7. أوامر التشغيل السريعة

| الأمر | الوظيفة |
|---|---|
| `npm run dev` | تشغيل خادم التطوير المحلي (Vite + HMR) |
| `npm run build` | بناء نسخة الإنتاج داخل مجلد `dist/` |
| `npm run preview` | معاينة نسخة الإنتاج المبنية محليًا |
| `npm run lint` | فحص الكود بـ ESLint |

---

## 8. قواعد مهمة يجب مراعاتها عند التطوير المستقبلي (من ملف المواصفات)

- **لا تُضاف بيانات وهمية**: أي عميل، شهادة، رقم، أو نتيجة غير حقيقية ممنوعة تمامًا (راجع القسم 32 من [SAJA_PORTFOLIO_PROJECT_SPEC.md](SAJA_PORTFOLIO_PROJECT_SPEC.md)). أي معلومة غير متوفرة توضع كـ placeholder فارغ في `portfolioData.js`.
- **لا Backend ولا قاعدة بيانات**: أي ميزة جديدة يجب أن تبقى Front-End بالكامل (أو تُستبدل بخدمة خارجية جاهزة مثل EmailJS، تمامًا كما حصل مع نموذج التواصل).
- **البساطة أولًا**: تفضيل الحل الأبسط دائمًا، وعدم إضافة مكتبات أو تجريدات غير ضرورية.
- **كل نص/رابط جديد يوضع في `portfolioData.js`** وليس داخل المكوّنات مباشرة.
