
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div>
      <div className="flex items-center mb-6 text-sm">
        <Link to="/" className="text-gray-500 hover:text-primary">الرئيسية</Link>
        <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
        <span className="text-gray-700 font-medium">عن المتجر</span>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">عن متجرنا</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
          <p className="text-lg leading-relaxed mb-6">
            مرحباً بكم في <span className="font-bold text-primary">متجرنا</span>، وجهتكم المثالية للتسوق الإلكتروني. 
            نحن نسعى جاهدين لتقديم تجربة تسوق استثنائية لعملائنا من خلال توفير منتجات عالية الجودة بأسعار تنافسية، 
            مع التركيز على خدمة العملاء المتميزة.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            تأسس متجرنا في عام 2020 بهدف توفير منصة تسوق إلكتروني سهلة الاستخدام وموثوقة للمستهلكين في المملكة العربية السعودية. 
            منذ ذلك الحين، نمت قاعدة عملائنا بشكل كبير وتوسعت تشكيلة منتجاتنا لتلبية احتياجات السوق المتنامية.
          </p>
          
          <p className="text-lg leading-relaxed mb-8">
            نحن نفخر بتوفير مجموعة واسعة من المنتجات عالية الجودة، بدءاً من الإلكترونيات والأجهزة المنزلية، 
            وصولاً إلى الأزياء والإكسسوارات ومستلزمات المنزل. نحرص على اختيار المنتجات من موردين موثوقين 
            لضمان الجودة والأداء المتميز.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">منتج متنوع</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-gray-600">عميل سعيد</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-2">99%</div>
              <div className="text-gray-600">تقييم إيجابي</div>
            </div>
          </div>
          
          <h2 className="text-xl font-bold mb-4">رؤيتنا</h2>
          <p className="text-lg leading-relaxed mb-6">
            أن نكون المتجر الإلكتروني الرائد والأكثر ثقة في المنطقة، من خلال تقديم تجربة تسوق متميزة وسلسة، 
            وتوفير منتجات عالية الجودة، مع الالتزام بأعلى معايير خدمة العملاء.
          </p>
          
          <h2 className="text-xl font-bold mb-4">مهمتنا</h2>
          <p className="text-lg leading-relaxed mb-6">
            تسهيل عملية التسوق عبر الإنترنت من خلال توفير منصة آمنة وسهلة الاستخدام، 
            مع تقديم منتجات متنوعة ذات جودة عالية بأسعار تنافسية، 
            وضمان تجربة عملاء استثنائية في كل خطوة.
          </p>
          
          <h2 className="text-xl font-bold mb-4">قيمنا</h2>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-8">
            <li><span className="font-semibold">الجودة:</span> نلتزم بتوفير منتجات عالية الجودة لعملائنا.</li>
            <li><span className="font-semibold">الموثوقية:</span> نسعى جاهدين لنكون متجراً موثوقاً به يمكن للعملاء الاعتماد عليه.</li>
            <li><span className="font-semibold">خدمة العملاء:</span> نضع رضا العملاء في مقدمة أولوياتنا ونسعى لتقديم تجربة متميزة.</li>
            <li><span className="font-semibold">الابتكار:</span> نسعى دائماً لتحسين منصتنا وخدماتنا لتلبية احتياجات السوق المتغيرة.</li>
            <li><span className="font-semibold">الشفافية:</span> نؤمن بالتعامل بشفافية ونزاهة مع عملائنا وشركائنا.</li>
          </ul>
          
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/contact">تواصل معنا</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
