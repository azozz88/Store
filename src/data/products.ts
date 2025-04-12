
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  images: string[];
  category: string;
  featured: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
  tags: string[];
}

// المنتجات الافتراضية للمتجر
export const products: Product[] = [
  {
    id: 1,
    name: "هاتف ذكي متطور",
    description: "هاتف ذكي حديث بأداء فائق ومواصفات عالية. شاشة عالية الدقة، كاميرا متطورة، وبطارية تدوم طويلًا. مثالي للاستخدام اليومي والألعاب والتصوير الاحترافي.",
    price: 2499,
    oldPrice: 2999,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    category: "الإلكترونيات",
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ["هواتف", "إلكترونيات", "أجهزة ذكية"]
  },
  {
    id: 2,
    name: "حاسوب محمول احترافي",
    description: "حاسوب محمول بمواصفات عالية للاستخدام الاحترافي. مناسب للمصممين والمطورين ومحترفي الوسائط المتعددة. أداء استثنائي وتصميم أنيق.",
    price: 4999,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "الإلكترونيات",
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 89,
    tags: ["حاسوب", "إلكترونيات", "أجهزة محمولة"]
  },
  {
    id: 3,
    name: "سماعات لاسلكية فاخرة",
    description: "سماعات لاسلكية بجودة صوت عالية وتقنية إلغاء الضوضاء. تصميم مريح للاستخدام لساعات طويلة وبطارية تدوم طوال اليوم.",
    price: 899,
    oldPrice: 1199,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "الإلكترونيات",
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 56,
    tags: ["سماعات", "إلكترونيات", "صوتيات"]
  },
  {
    id: 4,
    name: "ساعة ذكية رياضية",
    description: "ساعة ذكية متطورة لمتابعة النشاط الرياضي والصحة. تتبع الخطوات والنوم ومعدل ضربات القلب. مقاومة للماء ومتوافقة مع الهواتف الذكية.",
    price: 799,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "الإلكترونيات",
    featured: false,
    inStock: true,
    rating: 4.5,
    reviews: 42,
    tags: ["ساعات", "إلكترونيات", "رياضة"]
  },
  {
    id: 5,
    name: "حقيبة ظهر عصرية",
    description: "حقيبة ظهر عصرية متعددة الاستخدامات. مساحة كبيرة ومريحة للحمل. مثالية للاستخدام اليومي والسفر والرحلات.",
    price: 349,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "الأزياء",
    featured: false,
    inStock: true,
    rating: 4.3,
    reviews: 28,
    tags: ["حقائب", "أزياء", "إكسسوارات"]
  },
  {
    id: 6,
    name: "حذاء رياضي متطور",
    description: "حذاء رياضي عالي الجودة للجري والتمارين الرياضية. تصميم مريح ودعم ممتاز للقدم. مناسب للاستخدام اليومي والتدريب المكثف.",
    price: 599,
    oldPrice: 799,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "الأزياء",
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 73,
    tags: ["أحذية", "رياضة", "أزياء"]
  },
  {
    id: 7,
    name: "طاولة قهوة خشبية",
    description: "طاولة قهوة خشبية فاخرة بتصميم عصري. مصنوعة من خشب الجوز عالي الجودة. إضافة أنيقة لأي غرفة معيشة.",
    price: 1299,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "المنزل",
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 35,
    tags: ["أثاث", "منزل", "ديكور"]
  },
  {
    id: 8,
    name: "مصباح أرضي أنيق",
    description: "مصباح أرضي بتصميم أنيق وإضاءة دافئة. يضيف لمسة من الأناقة والدفء لأي غرفة. سهل التركيب والاستخدام.",
    price: 499,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "المنزل",
    featured: false,
    inStock: true,
    rating: 4.2,
    reviews: 19,
    tags: ["إضاءة", "منزل", "ديكور"]
  }
];

// الفئات المتاحة في المتجر
export const categories = [
  { id: 1, name: "الإلكترونيات", count: 4 },
  { id: 2, name: "الأزياء", count: 2 },
  { id: 3, name: "المنزل", count: 2 },
  { id: 4, name: "الرياضة", count: 0 },
  { id: 5, name: "الجمال والعناية", count: 0 },
];
