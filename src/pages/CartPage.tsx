
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  ChevronRight, 
  RefreshCw,
  ShoppingBag
} from "lucide-react";

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();
  const [couponCode, setCouponCode] = useState("");
  
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };
  
  const handleRemoveItem = (id: number) => {
    removeItem(id);
  };
  
  const handleClearCart = () => {
    clearCart();
  };
  
  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      // Here you would check if the coupon is valid
      console.log("Applying coupon:", couponCode);
      // For now, just reset the coupon field
      setCouponCode("");
    }
  };
  
  const shipping = items.length > 0 ? 15 : 0;
  const total = totalPrice + shipping;
  
  return (
    <div>
      <div className="flex items-center mb-6 text-sm">
        <Link to="/" className="text-gray-500 hover:text-primary">الرئيسية</Link>
        <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
        <span className="text-gray-700 font-medium">سلة التسوق</span>
      </div>
      
      <h1 className="text-2xl font-bold mb-6">سلة التسوق</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <ShoppingCart className="h-8 w-8 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold mb-2">سلة التسوق فارغة</h2>
          <p className="text-gray-500 mb-6">
            لم تقم بإضافة أي منتجات إلى سلة التسوق بعد.
          </p>
          <Button asChild>
            <Link to="/products">تصفح المنتجات</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    المنتجات في السلة ({items.length})
                  </h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-600 hover:text-red-700" 
                    onClick={handleClearCart}
                  >
                    <Trash2 className="h-4 w-4 ml-1" />
                    حذف الكل
                  </Button>
                </div>
              </div>
              
              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.id} className="p-4 flex flex-col sm:flex-row">
                    <div className="w-full sm:w-24 h-24 ml-4 mb-4 sm:mb-0 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    
                    <div className="flex-1">
                      <Link 
                        to={`/products/${item.id}`}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                      <div className="text-primary font-semibold mt-1">
                        {item.price} ر.س
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-10 text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-600 hover:text-red-700 h-8 px-2" 
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-gray-50 flex justify-between items-center">
                <Button variant="outline" asChild>
                  <Link to="/products">
                    <RefreshCw className="h-4 w-4 ml-2" />
                    متابعة التسوق
                  </Link>
                </Button>
                
                <Button asChild>
                  <Link to="/checkout">
                    الدفع
                    <ShoppingBag className="h-4 w-4 mr-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="font-semibold mb-4">ملخص الطلب</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">مجموع المنتجات</span>
                  <span>{totalPrice.toFixed(2)} ر.س</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الشحن</span>
                  <span>{shipping.toFixed(2)} ر.س</span>
                </div>
                
                <div className="pt-2 border-t mt-2">
                  <div className="flex justify-between font-bold">
                    <span>المجموع</span>
                    <span className="text-primary">{total.toFixed(2)} ر.س</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="relative">
                  <Input
                    placeholder="كود الخصم"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="pl-24"
                  />
                  <Button
                    size="sm"
                    className="absolute left-1 top-1 h-8"
                    onClick={handleApplyCoupon}
                    disabled={!couponCode.trim()}
                  >
                    تطبيق
                  </Button>
                </div>
              </div>
              
              <Button className="w-full mt-4" asChild>
                <Link to="/checkout">
                  إتمام الطلب
                </Link>
              </Button>
              
              <div className="mt-6 border-t pt-4">
                <h3 className="font-medium mb-2">طرق الدفع</h3>
                <div className="flex gap-2">
                  <div className="border rounded p-2 w-14 h-8 flex items-center justify-center bg-gray-50">
                    <div className="text-xs font-bold">Visa</div>
                  </div>
                  <div className="border rounded p-2 w-14 h-8 flex items-center justify-center bg-gray-50">
                    <div className="text-xs font-bold">Master</div>
                  </div>
                  <div className="border rounded p-2 w-14 h-8 flex items-center justify-center bg-gray-50">
                    <div className="text-xs font-bold">PayPal</div>
                  </div>
                  <div className="border rounded p-2 w-14 h-8 flex items-center justify-center bg-gray-50">
                    <div className="text-xs font-bold">Mada</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
