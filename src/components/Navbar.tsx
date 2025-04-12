
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Search, 
  Languages,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavbarProps {
  isRTL: boolean;
  setIsRTL: (value: boolean) => void;
}

const Navbar = ({ isRTL, setIsRTL }: NavbarProps) => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleLanguage = () => {
    setIsRTL(!isRTL);
  };
  
  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "المنتجات", path: "/products" },
    { name: "عن المتجر", path: "/about" },
    { name: "اتصل بنا", path: "/contact" },
  ];
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              متجرنا
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Search bar - Desktop */}
          <div className="hidden md:flex relative">
            <Input
              type="text"
              placeholder="ابحث عن منتجات..."
              className="w-64 pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          
          {/* Right side items */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleLanguage} 
              className="flex items-center justify-center"
            >
              <Languages className="h-5 w-5" />
            </Button>
            
            {/* User account */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={isRTL ? "right" : "left"}>
                <div className="space-y-4 py-4">
                  <h2 className="text-lg font-semibold">حسابي</h2>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">تسجيل الدخول</Button>
                    <Button variant="outline" className="w-full justify-start">إنشاء حساب</Button>
                    <Link to="/orders">
                      <Button variant="outline" className="w-full justify-start">طلباتي</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            {/* Shopping cart */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 space-y-3">
            <div className="relative mb-3">
              <Input
                type="text"
                placeholder="ابحث عن منتجات..."
                className="w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
