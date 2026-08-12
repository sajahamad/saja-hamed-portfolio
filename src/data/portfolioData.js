// Centralized portfolio content — SAJA_PORTFOLIO_PROJECT_SPEC.md, section 5.
// All editable content lives here. Components should render from this file
// instead of hard-coding text. Fields marked "placeholder" are intentionally
// empty because the spec does not provide that value yet (section 32).
// Bilingual fields use the shape { en, ar } — components read field[lang].

export const portfolioData = {
  personal: {
    name: "Saja Hamed",
    fullName: "Saja Hamed Abu Mandeel",
    logo: { en: "Saja", ar: "سجى" },
    title: {
      en: "Front-End Developer | Digital Builder | Content Creator | AI & Automation Enthusiast",
      ar: "مطورة واجهات أمامية | بانية مشاريع رقمية | صانعة محتوى | شغوفة بالذكاء الاصطناعي",
    },
    email: "marketingsaja279@gmail.com",
    portrait: "/saja-photo.jpg",
    avatar: "/saja-avatar.jpg",
    avatarTooltip: { en: "Eng: Saja Hamed Abu Mandeel", ar: "المهندسة سجى حامد ابو منديل" },
  },

  nav: [
    { id: "home", label: { en: "Home", ar: "الرئيسية" } },
    { id: "experience", label: { en: "Experience", ar: "الخبرة" } },
    { id: "skills", label: { en: "Skills", ar: "المهارات" } },
    { id: "certifications", label: { en: "Certifications", ar: "الشهادات" } },
    { id: "contact", label: { en: "Contact", ar: "تواصل" } },
  ],

  navCTA: {
    en: "Let's Work Together →",
    ar: "لنعمل معًا ←",
  },

  socialLinks: [
    { name: "Email", url: "mailto:marketingsaja279@gmail.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/saja-hamad-dev" },
    { name: "GitHub", url: "https://github.com/sajahamad" },
    { name: "Instagram", url: "https://www.instagram.com/saja._hamed" },
    { name: "TikTok", url: "" }, // placeholder — exact profile URL not yet provided (spec section 23)
    { name: "BrightGaza", url: "https://brightgaza.com/talents/2535" },
  ],

  hero: {
    // Array of lines — rendered one per line in Hero.jsx instead of relying on text-wrap.
    supportingText: {
      en: [
        "I'm Saja Hamed — a Computer Systems Engineer and Front-End Developer",
        "crafting interactive React experiences, building innovative projects with AI,",
        "and creating inspiring content that empowers and motivates others.",
      ],
      ar: [
        "أنا سجى حامد — مهندسة نظم حاسوب ومطورة واجهات أمامية،",
        "أصمم تجارب تفاعلية بـ React، وأبني مشاريع مبتكرة بالذكاء الاصطناعي،",
        "وأصنع محتوى ملهمًا يمكّن الآخرين ويحفزهم.",
      ],
    },
    primaryCTA: { en: "View My Work →", ar: "شاهدي أعمالي ←" },
    secondaryCTA: { en: "Let's Work Together", ar: "لنعمل معًا" },
    floatingBadges: ["React", "JavaScript", "AI", "Automation"],
    status: {
      en: "Currently building: Rentora & Full-Stack AI Workflows",
      ar: "أعمل حاليًا على: Rentora وسير عمل متكامل بالذكاء الاصطناعي",
    },
  },

  about: {
    title: { en: "More than code. I build products.", ar: "أكثر من مجرد كتابة كود. أنا أبني منتجات." },
    focusAreas: [
      { en: "Computer Systems Engineering", ar: "هندسة نظم الحاسوب" },
      { en: "Front-End Development", ar: "تطوير الواجهات الأمامية" },
      { en: "UI/UX implementation", ar: "تنفيذ تجربة وواجهة المستخدم" },
      { en: "Digital projects", ar: "المشاريع الرقمية" },
      { en: "Community work", ar: "العمل المجتمعي" },
      { en: "Content creation", ar: "صناعة المحتوى" },
    ],
  },

  experience: [
    {
      role: { en: "Front-End & Digital Projects Specialist", ar: "أخصائية واجهات أمامية ومشاريع رقمية" },
      company: "Zero To Hero",
      period: { en: "2024 – Present", ar: "2024 – حتى الآن" },
      responsibilities: [
        { en: "Managing web platforms", ar: "إدارة المنصات الإلكترونية" },
        { en: "Front-End development", ar: "تطوير الواجهات الأمامية" },
        { en: "React projects", ar: "مشاريع React" },
        { en: "Digital project coordination", ar: "تنسيق المشاريع الرقمية" },
      ],
      // Note: file on disk is "zero-to-hero-internship.png" (renamed from "zerotoherocertificate.png" for URL safety).
      certificateImage: "/certificates/zero-to-hero-internship.png",
    },
    {
      role: { en: "Front-End Development Intern", ar: "متدربة تطوير واجهات أمامية" },
      company: "WebUra Company",
      period: { en: "2026", ar: "2026" },
      responsibilities: [
        { en: "React development", ar: "تطوير باستخدام React" },
        { en: "Responsive web design", ar: "تصميم ويب متجاوب" },
        { en: "Clean & reusable code", ar: "كتابة كود نظيف وقابل لإعادة الاستخدام" },
        { en: "Team collaboration", ar: "العمل ضمن فريق" },
      ],
      // Note: file on disk is "webura-internship.png" (renamed from "weburacertificate.png" for URL safety).
      certificateImage: "/certificates/webura-internship.png",
    },
    {
      role: { en: "Content Creator & Student Mentor", ar: "صانعة محتوى وموجّهة طلابية" },
      company: "",
      period: { en: "", ar: "" },
      responsibilities: [
        { en: "Motivational & inspiring content creation", ar: "صناعة محتوى تحفيزي وملهم" },
        { en: "Helped 30,000+ students", ar: "دعمت أكثر من 30,000 طالب" },
        { en: "Created multiple educational guidance series", ar: "أنشأت عدة سلاسل إرشادية تعليمية" },
        { en: "Online study guidance & learning strategies", ar: "إرشاد دراسي واستراتيجيات تعلّم عبر الإنترنت" },
      ],
      certificateImage: "/content-creator.jpg", // file to be added to /public by Saja
    },
  ],

  contentImpact: {
    title: { en: "Building With Purpose, Inspiring With Impact.", ar: "أبني بهدف، وألهم بأثر." },
    supportingText: {
      en: "Saja brings together technology, creativity, AI, and content to create more than digital experiences. She builds projects that solve problems, shares knowledge that opens doors, and creates inspiring content that encourages students to learn, grow, and believe in their potential.",
      ar: "تجمع سجى بين التكنولوجيا والإبداع والذكاء الاصطناعي والمحتوى لخلق أكثر من مجرد تجارب رقمية. فهي تبني مشاريع تحل مشاكل حقيقية، وتشارك معرفة تفتح أبوابًا جديدة، وتصنع محتوى ملهمًا يشجع الطلاب على التعلم والنمو والإيمان بإمكانياتهم.",
    },
    pillars: [
      {
        name: { en: "Inspire", ar: "إلهام" },
        description: { en: "Motivational and mindset content.", ar: "محتوى تحفيزي يبني عقلية النمو." },
        image: "/inspire.jpg",
      },
      {
        name: { en: "Educate", ar: "تعليم" },
        description: {
          en: "Digital learning, university guidance, and practical technology skills.",
          ar: "تعلّم رقمي، إرشاد جامعي، ومهارات تقنية عملية.",
        },
        image: "/educate.jpg", // placeholder path — file to be added to /public
      },
      {
        name: { en: "Empower", ar: "تمكين" },
        description: {
          en: "Helping young people believe they can build meaningful things.",
          ar: "مساعدة الشباب على تصديق قدرتهم على بناء أشياء ذات معنى.",
        },
        image: "/empower.jpg", // placeholder path — file to be added to /public
      },
    ],
  },

  contentSeries: [
    {
      id: "start-it-right",
      titleAr: "ابدأها صح",
      titleEn: "Start It Right",
      description: {
        en: "Educational and motivational content for university students, covering how to start the university year with the right mindset, self-directed online learning, building digital skills, using learning resources smartly, and creating a learning roadmap to stay motivated even in moments of feeling lost.",
        ar: "محتوى تعليمي وتحفيزي موجّه لطلاب الجامعة، يغطي كيفية البدء بالسنة الجامعية بالعقلية الصح، التعلّم الذاتي أونلاين، بناء المهارات الرقمية، استخدام مصادر التعلم بذكاء، ووضع خارطة طريق للتعلم والاستمرار بالتحفيز حتى بلحظات الضياع.",
      },
      topics: [
        { en: "Starting university with the right mindset", ar: "بدء الجامعة بعقلية صحيحة" },
        { en: "Learning independently online", ar: "التعلّم الذاتي عبر الإنترنت" },
        { en: "Developing digital skills", ar: "تطوير المهارات الرقمية" },
        { en: "Using online resources effectively", ar: "الاستخدام الفعّال للمصادر الإلكترونية" },
        { en: "Building learning roadmaps", ar: "بناء خرائط طريق للتعلّم" },
        { en: "Staying motivated when feeling lost", ar: "الحفاظ على الدافعية عند الشعور بالضياع" },
      ],
      image: "/start-it-right-with-photo.png",
      reels: [
        "https://www.instagram.com/reel/DRrtj0QDU3n/?igsh=YnhqMGh6dWd2NXNh",
        "https://www.instagram.com/reel/DQKOMTwjQ-k/?igsh=MXdiZGhta2I5Z2Q3cA==",
        "https://www.instagram.com/reel/DQPQBJoDdIm/?igsh=dzYzNmpxNTR5czJq",
        "https://www.instagram.com/reel/DQW_HzZDd3l/?igsh=d2FkcHo2b3B0N3pk",
        "https://www.instagram.com/reel/DRhwmIuDbzS/?igsh=cHNkMGc5YmpxOHVi",
      ],
      badge: { en: "Series 01", ar: "السلسلة 01" },
    },
    {
      id: "tawjihi-motivation",
      titleAr: "محتوى تحفيزي لطلاب التوجيهي",
      titleEn: "High School / Tawjihi Motivational Content",
      description: {
        en: "My Impact — I've inspired and supported 30,000+ students and young people, helping them set meaningful goals, recognize their potential, and take intentional steps toward their future. I believe dreams don't come true by waiting — they come true through action, consistency, and the courage to keep moving forward.",
        ar: "أثري — ألهمت ودعمت أكثر من 30,000 طالب وشاب، وساعدتهم على وضع أهداف ذات معنى، واكتشاف إمكاناتهم، واتخاذ خطوات واعية نحو مستقبلهم. أؤمن أن الأحلام ما بتتحقق بالانتظار — بتتحقق بالفعل، والاستمرارية، والشجاعة على المتابعة.",
      },
      topics: [
        { en: "Exam-result emotions", ar: "مشاعر ما بعد نتائج الامتحانات" },
        { en: "University major selection", ar: "اختيار التخصص الجامعي" },
        { en: "Handling disappointment", ar: "التعامل مع خيبة الأمل" },
        { en: "Career direction", ar: "تحديد المسار المهني" },
        { en: "Personal growth", ar: "النمو الشخصي" },
        { en: "Continuing after setbacks", ar: "الاستمرار بعد الانتكاسات" },
      ],
      image: "/series-tawjihi.jpg",
      reels: [
        "https://www.instagram.com/reel/DZUSBJdNQTB/?igsh=MXdmdWUxNHZqNnV5aQ==",
        "https://www.instagram.com/reel/DWocQ1yDdez/?igsh=MW5kOWZiMzAxeml1Ng==",
        "https://www.instagram.com/reel/DSAQaoTjQ4z/?igsh=MW1rMmp4aTl3NTR2Mw==",
      ],
      badge: { en: "Series 02", ar: "السلسلة 02" },
    },
    {
      id: "self-motivation",
      titleAr: "التحفيز الذاتي",
      titleEn: "Self-Motivation",
      description: {
        en: "Inspirational content for young people about self-motivation — covering real-life experiences and their challenges, how to get back up after setbacks, and building a strong inner mindset that keeps you moving forward and growing no matter the circumstances.",
        ar: "محتوى ملهم موجّه للشباب حول تحفيز الذات، يتناول تجارب الحياة الواقعية وتحدياتها، وكيفية النهوض بعد الصعوبات، وبناء عقلية داخلية قوية تدفع للاستمرار والتطور مهما كانت الظروف.",
      },
      topics: [],
      image: "/series-self-motivation.jpg", // placeholder name — to be confirmed/replaced
      reels: [
        "https://www.instagram.com/reel/DZP1zkxtvLd/?igsh=MTg5YndnajljNXo1Yw==",
        "https://www.instagram.com/reel/DblUjJftT0N/?igsh=MXB4cXZvZm44b28yNA==",
        "https://www.instagram.com/reel/DbbQBQ7tBmK/?igsh=YnJram1oaTd4dGx2",
        "https://www.instagram.com/reel/DbYmFXENaTZ/?igsh=OXp0OXByZnAxNWQy",
        "https://www.instagram.com/reel/DbTlwDTt12c/?igsh=NzFtaHFmcTdieTI1",
      ],
      badge: { en: "Series 03", ar: "السلسلة 03" },
    },
  ],

  projects: [
    {
      id: "rentora",
      name: "Rentora",
      featured: true,
      description: {
        en: "All-in-one rental marketplace platform for properties, equipment, and services.",
        ar: "منصة سوق تأجير شاملة للعقارات والمعدات والخدمات.",
      },
      stack: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
      categories: ["Web Development", "React"],
      caseStudy: {
        problem: { en: "", ar: "" }, // placeholder — deepest case-study content to be added
        myRole: { en: "", ar: "" },
        solution: { en: "", ar: "" },
        architecture: { en: "", ar: "" },
        keyFeatures: { en: [], ar: [] },
      },
      liveDemo: "", // placeholder — URL not yet provided
      github: "", // placeholder — URL not yet provided
    },
    {
      id: "gaza-voice",
      name: "Gaza Voice",
      featured: false,
      description: {
        en: "Responsive Arabic RTL news platform.",
        ar: "منصة إخبارية عربية متجاوبة بتصميم من اليمين لليسار.",
      },
      stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      categories: ["Web Development", "UI/UX"],
      caseStudy: {
        problem: { en: "", ar: "" },
        myRole: { en: "", ar: "" },
        solution: { en: "", ar: "" },
        architecture: { en: "", ar: "" },
        keyFeatures: { en: [], ar: [] },
      },
      liveDemo: "",
      github: "",
    },
    {
      id: "weather-app",
      name: "Interactive Weather Application",
      featured: false,
      description: {
        en: "Real-time weather dashboard.",
        ar: "لوحة تحكم لعرض حالة الطقس لحظيًا.",
      },
      stack: ["React", "Vite", "Weather REST API"],
      categories: ["Web Development", "React"],
      caseStudy: {
        problem: { en: "", ar: "" },
        myRole: { en: "", ar: "" },
        solution: { en: "", ar: "" },
        architecture: { en: "", ar: "" },
        keyFeatures: { en: [], ar: [] },
      },
      liveDemo: "",
      github: "",
    },
    {
      id: "ecommerce-platform",
      name: "E-Commerce Platform",
      featured: false,
      description: {
        en: "Modern web store interface.",
        ar: "واجهة متجر إلكتروني حديثة.",
      },
      stack: ["React", "Vite", "Tailwind CSS", "API"],
      categories: ["Web Development", "React"],
      caseStudy: {
        problem: { en: "", ar: "" },
        myRole: { en: "", ar: "" },
        solution: { en: "", ar: "" },
        architecture: { en: "", ar: "" },
        keyFeatures: { en: [], ar: [] },
      },
      liveDemo: "",
      github: "",
    },
  ],

  projectFilters: [
    { value: "All", label: { en: "All", ar: "الكل" } },
    { value: "Web Development", label: { en: "Web Development", ar: "تطوير الويب" } },
    { value: "React", label: { en: "React", ar: "React" } },
    { value: "UI/UX", label: { en: "UI/UX", ar: "تجربة وواجهة المستخدم" } },
    { value: "AI Integration", label: { en: "AI Integration", ar: "تكامل الذكاء الاصطناعي" } },
  ],

  whySaja: {
    title: { en: "About Me", ar: "لماذا سجى؟" },
    narrative: {
      ar: [
        "أنا سجى، وبشوف حالي كشخص ما بحب يوقف عند مكان واحد. بدأت رحلتي من شغفي بالـ Front-End Development، وتعلمت كيف أحوّل الأفكار لتجارب ومواقع حقيقية، ومع كل مشروع بشتغل عليه بكتشف إني بحب التحدي، التجربة، والتعلم أكثر.",
        "وبنفس الوقت، بدأت أتوسع أكثر في عالم الذكاء الاصطناعي والـAI، لأنه بالنسبة إلي مش مجرد ترند، بل أداة ممكن تغيّر طريقة شغلنا وتخلينا نبني حلول أذكى وأسرع.",
        "وبجانب البرمجة، عندي مساحة ثانية قريبة كثير لقلبي: صناعة المحتوى. بحب أحكي، أشارك، وأوصل أفكار ممكن تعطي شخص دفعة صغيرة يكمل فيها طريقه. ومن أكثر الأشياء اللي بفتخر فيها إني بحاول أكون سبب في مساعدة غيري، خصوصًا الطلاب. بحب أشارك تجربتي، أساعدهم يفهموا تخصصاتهم، يخططوا لطريقهم، ويؤمنوا إنهم قادرين يوصلوا حتى لو البداية كانت صعبة أو الطريق مش واضح.",
        "أنا ما بعتبر حالي وصلت. أنا لسه بتعلم، لسه بجرب، ولسه ببني. لكن الشي اللي بعرفه أكيد إن رحلتي مش بس عن الكود والمشاريع؛ هي عن التطور، التجربة، صناعة الأثر، ومساعدة غيري يصدقوا إنهم قادرين يعملوا أكثر مما بتخيلوا. أنا سجى، وبحب أتعلم، أبني، أشارك، وأترك أثر.",
      ],
      en: [
        "I'm Saja, someone who never wants to stay in one place. I'm driven by curiosity, growth, and the desire to keep learning, experimenting, and discovering what I'm capable of building.",
        "My journey started with a passion for Front-End Development, where I learned how to turn ideas into real, interactive experiences and websites. With every project I work on, I discover more about my love for challenges, experimentation, problem-solving, and continuous learning.",
        "As I grew in the world of technology, I started exploring Artificial Intelligence (AI) more deeply. To me, AI is not just a trend or a new technology — it's a powerful tool that can change the way we work and help us create smarter, faster, and more meaningful solutions. That's why I'm constantly exploring ways to combine development and AI to build things that can make a real difference.",
        "Beyond technology and coding, I have another space that is very close to my heart: Content Creation. I love talking, sharing experiences, and turning ideas into content that might reach someone at exactly the moment they need it. One of the things I'm most proud of is being able to inspire and support 30,000+ people, especially students and young people, by helping them set goals, better understand their fields of study, think more clearly about their future, and keep moving forward even when the beginning is difficult or the path isn't clear.",
        "I believe that dreams don't come true by waiting. They come true through action, persistence, experimentation, and the courage to keep going. I also believe that sometimes, having someone who believes in you and encourages you at the right moment can make a real difference.",
        "I don't see myself as someone who has already arrived. I'm still learning, still experimenting, and still building. Every new stage is an opportunity to discover something new about myself, my skills, and the world around me.",
        "My journey isn't just about code and projects. It's about growth, experimentation, creating impact, and helping others believe they are capable of achieving more than they imagine.",
        "I'm Saja.",
      ],
    },
  },

  skills: {
    frontEnd: [
      "Front-End Development",
      "React",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Git",
      "GitHub",
      "Responsive Web Design",
    ],
    aiTools: ["Claude Code", "Anthropic AI Frameworks", "Prompt Engineering", "API Integration", "Building Websites with AI"],
    designProduct: ["Landing Pages", "Content Creation", "Media Editing", "Digital Content Strategy"],
  },

  // Optional per-skill description — only populated where a note adds real value.
  skillDescriptions: {
    "Building Websites with AI": {
      en: "Learning to use AI tools to help plan, build, and speed up parts of the web development process.",
      ar: "بتعلم استخدام أدوات الذكاء الاصطناعي للمساعدة بتخطيط وبناء وتسريع أجزاء من عملية تطوير الويب.",
    },
  },

  skillCategories: {
    frontEnd: { en: "Front-End", ar: "الواجهات الأمامية" },
    aiTools: { en: "AI & Tools", ar: "الذكاء الاصطناعي والأدوات" },
    designProduct: { en: "Design & Product", ar: "التصميم والمنتج" },
  },

  aiIntegration: {
    title: { en: "Building Smarter Web Experiences with AI", ar: "بناء تجارب ويب أذكى بالذكاء الاصطناعي" },
    subtitle: {
      en: "Combining Front-End Development and AI to create interactive products and intelligent digital experiences.",
      ar: "دمج تطوير الواجهات الأمامية مع الذكاء الاصطناعي لإنشاء منتجات تفاعلية وتجارب رقمية ذكية.",
    },
    workflow: [
      { key: "userInput", label: { en: "User Input", ar: "إدخال المستخدم" } },
      { key: "aiLogic", label: { en: "AI Logic", ar: "منطق الذكاء الاصطناعي" } },
      { key: "appLogic", label: { en: "Application Logic", ar: "منطق التطبيق" } },
      { key: "result", label: { en: "Result", ar: "النتيجة" } },
    ],
    disclaimer: {
      en: "A conceptual workflow exploring how AI could enhance the Rentora experience. AI integration is not yet connected.",
      ar: "سير عمل مفاهيمي يستكشف كيف يمكن للذكاء الاصطناعي تعزيز تجربة Rentora. لم يتم ربط تكامل الذكاء الاصطناعي بعد.",
    },
  },

  certifications: [
    {
      name: "AI Fluency: Framework & Foundations",
      issuer: "Anthropic / UCC / Ringling College",
      description: {
        en: "A foundational certificate in the concept of \"AI Fluency,\" issued by Anthropic in partnership with University College Cork and Ringling College of Art + Design, with support from Ireland's National Forum for the Enhancement of Teaching and Learning in Higher Education. It covers the core frameworks for using AI tools effectively and responsibly. It focused on understanding the capabilities and limits of AI models and integrating them thoughtfully into a workflow. An important starting point for a deeper understanding of modern AI tools.",
        ar: "شهادة تأسيسية في مفهوم \"الطلاقة بالذكاء الاصطناعي\"، صادرة عن Anthropic بالشراكة مع University College Cork وRingling College of Art + Design، وبدعم من الهيئة الوطنية لتطوير التعليم العالي بأيرلندا. تغطي الأطر الأساسية للتعامل الفعّال والمسؤول مع أدوات الذكاء الاصطناعي. ركّزت على فهم قدرات النماذج الذكية وحدودها ودمجها بسير العمل بطريقة مدروسة. نقطة انطلاق مهمة لفهم عميق لأدوات الذكاء الاصطناعي الحديثة.",
      },
      image: "/certificates/ai-fluency.png",
      credentialUrl: "", // placeholder — no credential link provided
    },
    {
      name: "Claude Code 101",
      issuer: "Anthropic",
      description: {
        en: "An introductory course from Anthropic on Claude Code, an AI-powered coding tool. It covers how to use the tool to write, edit, and understand code within real projects. Through it, I learned the basics of working with an intelligent coding assistant inside the development environment. Part of my journey integrating AI tools into my workflow.",
        ar: "دورة تعريفية من Anthropic حول Claude Code، أداة البرمجة العاملة بالذكاء الاصطناعي. تغطي آليات استخدام الأداة للكتابة والتعديل وفهم الكود ضمن مشاريع حقيقية. تعرّفت خلالها على أساسيات التعامل مع مساعد برمجي ذكي داخل بيئة التطوير. جزء من رحلتي بدمج أدوات الذكاء الاصطناعي بسير عملي.",
      },
      image: "/certificates/claude-code-101.png",
      credentialUrl: "",
    },
    {
      name: "Front-End Development Internship (120 Hours)",
      issuer: "Zero to Hero",
      description: { en: "", ar: "" },
      image: "/certificates/zero-to-hero-internship.png",
      credentialUrl: "",
    },
    {
      name: "Front-End Development Internship",
      issuer: "WebUra Company",
      description: {
        en: "A hands-on Front-End Development internship at WebUra Company, from April 5 to June 28, 2026. I worked on a variety of tasks related to building user interfaces within a real work environment, showing strong commitment and discipline, and contributing to several projects in a collaborative spirit. The internship strengthened my skills in clean code, responsive design, and teamwork.",
        ar: "تدريب عملي بمجال Front-End Development في شركة WebUra، من 5 أبريل إلى 28 يونيو 2026. عملت على مهام متنوعة مرتبطة بتطوير واجهات المستخدم ضمن بيئة عمل حقيقية. أظهرت التزامًا وانضباطًا عاليًا، وساهمت بإنجاز عدة مشاريع بروح تعاونية. عزز التدريب مهاراتي بالكود النظيف والتصميم المتجاوب والعمل الجماعي.",
      },
      image: "/certificates/webura-internship.png",
      credentialUrl: "",
    },
    {
      name: "Claude with the Anthropic API",
      issuer: "Anthropic",
      description: { en: "", ar: "" }, // placeholder — description text not provided yet
      image: "/certificates/claude-anthropic-api.png",
      credentialUrl: "",
    },
  ],

  services: {
    title: { en: "Services", ar: "الخدمات" },
    items: [
      {
        title: { en: "Front-End Web Development", ar: "تطوير واجهات الويب الأمامية" },
        description: {
          en: "Building responsive and interactive web applications with React.",
          ar: "بناء تطبيقات ويب متجاوبة وتفاعلية باستخدام React.",
        },
      },
      {
        title: { en: "UI Implementation", ar: "تنفيذ واجهات المستخدم" },
        description: {
          en: "Turning designs into clean, responsive, and interactive web interfaces.",
          ar: "تحويل التصاميم إلى واجهات ويب نظيفة، متجاوبة، وتفاعلية.",
        },
      },
      {
        title: { en: "AI-Powered Web Experiences", ar: "تجارب ويب مدعومة بالذكاء الاصطناعي" },
        description: {
          en: "Exploring and integrating AI capabilities into web interfaces to create smarter and more engaging user experiences.",
          ar: "استكشاف ودمج قدرات الذكاء الاصطناعي في واجهات الويب لخلق تجارب مستخدم أذكى وأكثر تفاعلية.",
        },
      },
      {
        title: { en: "Content Strategy & Digital Project Planning", ar: "استراتيجية المحتوى وتخطيط المشاريع الرقمية" },
        description: {
          en: "Turning ideas into structured digital projects with clear direction, content, and execution plans.",
          ar: "تحويل الأفكار إلى مشاريع رقمية منظمة بخطة واضحة للمحتوى والتنفيذ.",
        },
      },
    ],
    cta: { en: "Have a project in mind? Tell me about it →", ar: "عندك فكرة مشروع؟ خبرني عنها ←" },
  },

  socialPresence: {
    title: { en: "Beyond Development", ar: "أبعد من التطوير" },
    supportingText: {
      en: "Building digital products, sharing knowledge, creating meaningful content, and helping others turn their ideas into possibilities.",
      ar: "أبني منتجات رقمية، أشارك المعرفة، أصنع محتوى ذا معنى، وأساعد الآخرين على تحويل أفكارهم إلى إمكانيات حقيقية.",
    },
    platforms: ["Instagram", "TikTok", "LinkedIn", "GitHub", "BrightGaza"],
  },

  contact: {
    title: { en: "Have an idea? Let's build it.", ar: "عندك فكرة؟ خلّينا نبنيها." },
    availability: {
      en: "● Open to selected opportunities & collaborations",
      ar: "● متاحة لفرص وتعاونات مختارة",
    },
    formFields: ["Name", "Email", "Project Type", "Scope / Budget", "Message"],
    email: "marketingsaja279@gmail.com",
  },

  aiAssistant: {
    buttonLabel: { en: "Ask Saja's AI ✨", ar: "اسأل مساعد سجى الذكي ✨" },
    widgetTitle: { en: "Ask Saja's AI", ar: "مساعد سجى الذكي" },
    widgetSubtitle: {
      en: "Local assistant — answers pulled from Saja's real portfolio data.",
      ar: "مساعد محلي — الإجابات مبنية على بيانات سجى الحقيقية.",
    },
    placeholder: { en: "Type a question...", ar: "اكتب سؤالك..." },
    fallbackAnswer: {
      en: "I don't have a predefined answer for that yet. For anything else, reach out directly at marketingsaja279@gmail.com.",
      ar: "لا تتوفر إجابة جاهزة لهذا السؤال حاليًا. لأي استفسار آخر، تواصل مباشرة عبر marketingsaja279@gmail.com.",
    },
    quickQuestions: [
      {
        id: "who",
        question: { en: "Who is Saja?", ar: "من هي سجى؟" },
        answer: {
          en: "I'm Saja Hamed — a Computer Systems Engineer and Front-End Developer, passionate about turning ideas into interactive digital experiences.\nI started my journey in front-end development, where I learned how to turn ideas into real, functional interfaces using technologies like React and JavaScript. Over time, my interest in AI grew, and how technology can make digital experiences smarter and more impactful.\nI'm also a content creator who believes technology isn't just about building products — it's also about sharing knowledge, inspiring others, and helping students discover their abilities and potential.\nToday, I focus on growing at the intersection of front-end development, AI, digital products, and content creation.",
          ar: "أنا سجى حامد — مهندسة أنظمة حاسوب ومطوّرة Front-End، شغوفة بتحويل الأفكار إلى تجارب رقمية تفاعلية.\nبدأت رحلتي في مجال تطوير الواجهات الأمامية، حيث تعلمت كيفية تحويل الأفكار إلى واجهات حقيقية وعملية باستخدام تقنيات مثل React وJavaScript. ومع الوقت، ازداد اهتمامي بالذكاء الاصطناعي، وكيف يمكن للتكنولوجيا أن تجعل التجارب الرقمية أكثر ذكاءً وتأثيرًا.\nأنا أيضًا صانعة محتوى أؤمن بأن التكنولوجيا لا تقتصر فقط على بناء المنتجات، بل تشمل أيضًا مشاركة المعرفة، وإلهام الآخرين، ومساعدة الطلاب على اكتشاف قدراتهم وإمكانياتهم.\nاليوم، أركز على تطوير نفسي عند تقاطع تطوير الواجهات الأمامية، والذكاء الاصطناعي، والمنتجات الرقمية، وصناعة المحتوى.",
        },
        keywords: ["who", "saja", "about", "engineer", "من", "سجى", "هي", "مهندسة"],
      },
      {
        id: "tech",
        question: { en: "What technologies does she use?", ar: "ما هي التقنيات التي تستخدمها؟" },
        answer: {
          en: "I mainly work with React, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, Git, and GitHub in front-end development.\nI'm also developing my skills in Python, AI APIs, prompt engineering, and modern AI technologies.\nMy goal isn't just to learn more technologies, but to understand how to combine them to build digital products that are useful, interactive, and smart.",
          ar: "أعمل بشكل أساسي باستخدام React، JavaScript، HTML، CSS، Tailwind CSS، Bootstrap، Git، وGitHub في مجال تطوير الواجهات الأمامية.\nكما أعمل على تطوير مهاراتي في Python، وواجهات الذكاء الاصطناعي API، وهندسة الـ Prompts، وتقنيات الذكاء الاصطناعي الحديثة.\nهدفي ليس مجرد تعلم المزيد من التقنيات، بل فهم كيفية دمجها معًا لبناء منتجات رقمية مفيدة، تفاعلية، وذكية.",
        },
        keywords: ["technolog", "tech", "stack", "skill", "tool", "use", "python", "تقني", "مهار", "أدوات"],
      },
      {
        id: "projects",
        question: { en: "What projects has she built?", ar: "ما هي المشاريع التي بنتها؟" },
        answer: {
          en: "I've worked on a range of projects that helped me move from learning technologies separately to building complete digital experiences. Some of my key projects include:\nRentora — a unified rental platform connecting users with chalets, properties, vehicles, equipment, photography locations, decoration services, and more.\nWeather App — a React-based app that uses APIs to display real-time weather information.\nClothing E-Commerce — an online store experience built with React and Vite, powered by an external API.\nGaza Voice — a news website with an RTL design focused on delivering an organized Arabic digital experience.\nPharmaCare Connect — an early-stage prototype for a digital healthcare platform.\nPersonal Portfolio — my own interactive website showcasing my projects, skills, services, and journey.\nI'm especially drawn to projects that combine good design, practical functionality, API integration, React, and AI — rather than just building static pages.",
          ar: "عملت على مجموعة من المشاريع التي ساعدتني على الانتقال من تعلم التقنيات بشكل منفصل إلى بناء تجارب رقمية متكاملة. ومن أبرز مشاريعي:\nRentora — منصة موحدة للتأجير تربط المستخدمين بالشاليهات، والعقارات، والمركبات، والمعدات، ومواقع التصوير، وخدمات الديكور، وغيرها.\nWeather App — تطبيق مبني باستخدام React ويعتمد على APIs لعرض معلومات الطقس في الوقت الفعلي.\nClothing E-Commerce — تجربة متجر إلكتروني مبنية باستخدام React وVite وتعتمد على API خارجي.\nGaza Voice — موقع إخباري بتصميم RTL يركز على تقديم تجربة رقمية عربية منظمة.\nPharmaCare Connect — نموذج أولي لمنصة رقمية مرتبطة بمجال الرعاية الصحية.\nPersonal Portfolio — موقعي الشخصي التفاعلي الذي يعرض مشاريعي، ومهاراتي، وخدماتي، ورحلتي.\nأهتم بشكل خاص بالمشاريع التي تجمع بين التصميم الجيد، والوظائف العملية، وواجهات API، وReact، والذكاء الاصطناعي، بدلًا من إنشاء صفحات ثابتة فقط.",
        },
        keywords: ["project", "built", "work", "portfolio", "rentora", "pharmacare", "مشروع", "مشاريع", "بنت"],
      },
      {
        id: "services",
        question: { en: "What services does she offer?", ar: "ما هي الخدمات التي تقدّمها؟" },
        answer: {
          en: "I offer services focused on creating modern, practical digital experiences, including:\nFront-End Development\nWebsite development with React\nResponsive design across devices\nLanding pages and personal websites\nInteractive user interface development\nAPI integration\nAI-powered web experiences\nDigital project development\nI also create educational and motivational content about technology, learning, self-development, and helping students take their first steps toward their goals.",
          ar: "أقدم خدمات تركز على إنشاء تجارب رقمية حديثة وعملية، وتشمل:\nتطوير الواجهات الأمامية Front-End Development\nتطوير المواقع باستخدام React\nتصميم مواقع متجاوبة مع مختلف الأجهزة\nإنشاء صفحات الهبوط والمواقع الشخصية\nتطوير واجهات مستخدم تفاعلية\nدمج واجهات API\nإنشاء تجارب ويب مدعومة بالذكاء الاصطناعي\nتطوير المشاريع الرقمية\nكما أقدم محتوى تعليميًا وتحفيزيًا حول التكنولوجيا، والتعلم، وتطوير الذات، ومساعدة الطلاب على اتخاذ خطواتهم الأولى نحو أهدافهم.",
        },
        keywords: ["service", "offer", "help", "خدم", "تقدم"],
      },
      {
        id: "hire",
        question: { en: "How can I hire her?", ar: "كيف أقدر أوظّفها؟" },
        answer: {
          en: "If you'd like to work with me, you can reach out through the Contact section or through my social media platforms.\nI'm open to opportunities and projects related to front-end development, React projects, AI-powered digital experiences, and meaningful digital products.\nIf you have a specific idea, send me the details — I'd be happy to explore how to turn it into something real.\nLet's build something meaningful together.",
          ar: "إذا كنت ترغب في العمل معي، يمكنك التواصل معي من خلال قسم Contact أو عبر منصات التواصل الاجتماعي الخاصة بي.\nأنا منفتحة على الفرص والمشاريع التي تتعلق بـ تطوير الواجهات الأمامية، ومشاريع React، والتجارب الرقمية المدعومة بالذكاء الاصطناعي، والمنتجات الرقمية الهادفة.\nإذا كانت لديك فكرة معينة، أرسل لي تفاصيلها — وسأكون سعيدة باستكشاف كيفية تحويلها إلى شيء حقيقي.\nلنبنِ شيئًا هادفًا معًا.",
        },
        keywords: ["hire", "contact", "reach", "email", "collaborat", "توظيف", "تواصل", "أوظف"],
      },
    ],
  },

  seo: {
    title: {
      en: "Saja Hamed | Front-End Developer & Digital Builder",
      ar: "سجى حامد | مطورة واجهات أمامية وبانية مشاريع رقمية",
    },
    description: {
      en: "Portfolio of Saja Hamed — Front-End Developer and Digital Builder creating modern web experiences, AI-enhanced solutions, and smart digital workflows.",
      ar: "موقع سجى حامد الشخصي — مطورة واجهات أمامية وبانية مشاريع رقمية تصمّم تجارب ويب حديثة وحلولًا معزّزة بالذكاء الاصطناعي وسير عمل رقمي ذكي.",
    },
  },

  ui: {
    sectionTitles: {
      projects: { en: "Selected Work", ar: "أعمالي المختارة" },
      services: { en: "Services", ar: "الخدمات" },
      skills: { en: "Skills & Toolkit", ar: "المهارات والأدوات" },
      certifications: { en: "Verified Certifications", ar: "الشهادات الموثّقة" },
    },
    imagePlaceholder: { en: "Image coming soon", ar: "الصورة قريبًا" },
    projectsSubtitle: {
      en: "Real-world applications designed, built, and hosted on GitHub.",
      ar: "تطبيقات حقيقية صُممت وبُنيت واستضيفت على GitHub.",
    },
    projectsCtaText: {
      en: "Like what you see? Let's build something together.",
      ar: "عجبك اللي شفته؟ خلّينا نبني شي سوا.",
    },
    startProjectButton: { en: "Start a Project →", ar: "ابدأ مشروعًا ←" },
    featuredCaseStudy: { en: "Featured Case Study", ar: "دراسة حالة مميزة" },
    viewCaseStudy: { en: "View Case Study →", ar: "شاهد دراسة الحالة ←" },
    closeCaseStudy: { en: "Close case study", ar: "إغلاق دراسة الحالة" },
    caseStudyFields: {
      problem: { en: "Problem", ar: "المشكلة" },
      myRole: { en: "My Role", ar: "دوري" },
      solution: { en: "Solution", ar: "الحل" },
      architecture: { en: "Architecture", ar: "البنية التقنية" },
      keyFeatures: { en: "Key Features", ar: "أبرز المزايا" },
      liveDemo: { en: "Live Demo", ar: "معاينة مباشرة" },
      github: { en: "GitHub", ar: "GitHub" },
      comingSoon: { en: "Full case study details coming soon.", ar: "تفاصيل دراسة الحالة الكاملة قريبًا." },
    },
    contentSeriesUi: {
      previewComingSoon: { en: "Preview coming soon", ar: "المعاينة قريبًا" },
      watchClips: { en: "Watch Clips", ar: "شاهدي مقتطفات" },
      watchMore: { en: "Watch More →", ar: "شاهد المزيد ←" },
      profileUrl: "https://www.instagram.com/saja._hamed?igsh=MWtveW5odzducnZxNg==",
    },
    credentialUi: {
      viewCredential: { en: "View Credential →", ar: "عرض الشهادة ←" },
      comingSoon: { en: "Credential link coming soon", ar: "رابط الشهادة قريبًا" },
      unavailableTitle: { en: "Credential link not published yet", ar: "رابط الشهادة غير متاح بعد" },
      closeLabel: { en: "Close certificate", ar: "إغلاق الشهادة" },
    },
    socialPresenceUi: {
      viewProfile: { en: "View Profile", ar: "عرض الملف الشخصي" },
      comingSoon: { en: "Coming soon", ar: "قريبًا" },
    },
    contactForm: {
      nameLabel: { en: "Name", ar: "الاسم" },
      emailLabel: { en: "Email", ar: "البريد الإلكتروني" },
      projectTypeLabel: { en: "Project Type", ar: "نوع المشروع" },
      selectPlaceholder: { en: "Select a project type", ar: "اختر نوع المشروع" },
      otherOption: { en: "Other", ar: "أخرى" },
      scopeLabel: { en: "Scope / Budget", ar: "نطاق العمل / الميزانية" },
      scopePlaceholder: {
        en: "e.g. small project, ongoing collaboration...",
        ar: "مثال: مشروع صغير، تعاون مستمر...",
      },
      messageLabel: { en: "Message", ar: "الرسالة" },
      sendButton: { en: "Send Message", ar: "إرسال الرسالة" },
      sendingButton: { en: "Sending...", ar: "جارٍ الإرسال..." },
      nameRequired: { en: "Name is required.", ar: "الاسم مطلوب." },
      emailRequired: { en: "Email is required.", ar: "البريد الإلكتروني مطلوب." },
      emailInvalid: { en: "Enter a valid email address.", ar: "أدخل بريدًا إلكترونيًا صحيحًا." },
      messageRequired: { en: "Message is required.", ar: "الرسالة مطلوبة." },
      thanksPrefix: { en: "Thanks", ar: "شكرًا" },
      notConnectedNote: {
        en: "! This form isn't connected to a backend yet — email me directly at",
        ar: "! هذا النموذج غير مرتبط بخادم بعد — راسليني مباشرة على",
      },
      sentNote: {
        en: "! Your message has been sent — I'll get back to you soon.",
        ar: "! تم إرسال رسالتك — سأتواصل معك قريبًا.",
      },
      errorNote: {
        en: "Something went wrong and your message couldn't be sent. Please email me directly at",
        ar: "حدث خطأ ولم يتم إرسال رسالتك. يرجى مراسلتي مباشرة على",
      },
      getBackNote: { en: "and I'll get back to you.", ar: "وسأتواصل معك في أقرب وقت." },
      preferEmail: { en: "Prefer email?", ar: "تفضّل التواصل عبر الإيميل؟" },
      findElsewhere: { en: "Find me elsewhere", ar: "تابعني في أماكن أخرى" },
    },
    aiAssistantUi: {
      quickQuestionsLabel: { en: "Quick questions", ar: "أسئلة سريعة" },
      closeLabel: { en: "Close AI assistant", ar: "إغلاق المساعد الذكي" },
      sendLabel: { en: "Send question", ar: "إرسال السؤال" },
      inputLabel: { en: "Ask a question", ar: "اطرح سؤالًا" },
    },
  },
};

export default portfolioData;
