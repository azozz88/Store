
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, PhoneCall, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Store */}
          <div>
            <h3 className="text-xl font-bold mb-4">متجرنا</h3>
            <p className="text-gray-300 mb-4">
              متجر إلكتروني شامل يوفر مجموعة واسعة من المنتجات بأفضل الأسعار والجودة العالية
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary">الرئيسية</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary">المنتجات</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary">عن المتجر</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary">اتصل بنا</Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">خدمة العملاء</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/orders" className="text-gray-300 hover:text-primary">تتبع طلبك</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">سياسة الإرجاع</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">الشحن والتوصيل</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">الأسئلة الشائعة</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 ml-2 text-primary" />
                <span className="text-gray-300">شارع الملك فهد، الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 ml-2 text-primary" />
                <span className="text-gray-300">+966 12 345 6789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 ml-2 text-primary" />
                <span className="text-gray-300">info@matjarna.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} متجرنا - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
