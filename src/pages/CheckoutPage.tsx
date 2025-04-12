
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronRight, CreditCard, Landmark, MapPin, Truck, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [paymentMethod, setPaymentMethod] = useState<string>("credit_card");
  const [shippingMethod, setShippingMethod] = useState<string>("standard");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, here you would send the order to your backend
    console.log("Order details:", { items, totalPrice, formData, paymentMethod, shippingMethod });
    
    // Show success toast
    toast({
      title: "تم إرسال الطلب بنجاح",
      description: "سيتم التواصل معك قريبًا لتأكيد الطلب",
    });
    
    // Clear cart and redirect to success page
    clearCart();
    navigate("/");
  };
  
  // Calculate totals
  const shipping = shippingMethod === "express" ? 45 : 25;
  const total = totalPrice + shipping;
  
  // If cart is empty, redirect to cart page
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-4">سلة التسوق فارغة</h2>
        <p className="text-gray-500 mb-6">
          يجب أن تضيف منتجات إلى سلة التسوق قبل إتمام الطلب.
        </p>
        <Button asChild>
          <Link to="/products">تصفح المنتجات</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex items-center mb-6 text-sm">
        <Link to="/" className="text-gray-500 hover:text-primary">الرئيسية</Link>
        <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
        <Link to="/cart" className="text-gray-500 hover:text-primary">سلة التسوق</Link>
        <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
        <span className="text-gray-700 font-medium">إتمام الطلب</span>
      </div>
      
      <h1 className="text-2xl font-bold mb-6">إتمام الطلب</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            {/* Shipping Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 ml-2 text-primary" />
                <h2 className="text-lg font-semibold">معلومات الشحن</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">الاسم الأول</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">الاسم الأخير</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">العنوان</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city">المدينة</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">الرمز البريدي</Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="notes">ملاحظات إضافية (اختياري)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="h-24"
                  />
                </div>
              </div>
            </div>
            
            {/* Shipping Method */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center mb-4">
                <Truck className="h-5 w-5 ml-2 text-primary" />
                <h2 className="text-lg font-semibold">طريقة الشحن</h2>
              </div>
              
              <RadioGroup 
                value={shippingMethod} 
                onValueChange={setShippingMethod}
                className="space-y-3"
              >
                <div className="flex items-center justify-between border rounded-lg p-4">
                  <div className="flex items-center">
                    <RadioGroupItem value="standard" id="shipping-standard" />
                    <Label htmlFor="shipping-standard" className="mr-2 cursor-pointer">
                      <div>الشحن القياسي</div>
                      <div className="text-sm text-gray-500">توصيل خلال 3-5 أيام عمل</div>
                    </Label>
                  </div>
                  <div className="font-semibold">25 د.إ</div>
                </div>
                
                <div className="flex items-center justify-between border rounded-lg p-4">
                  <div className="flex items-center">
                    <RadioGroupItem value="express" id="shipping-express" />
                    <Label htmlFor="shipping-express" className="mr-2 cursor-pointer">
                      <div>الشحن السريع</div>
                      <div className="text-sm text-gray-500">توصيل خلال 1-2 يوم عمل</div>
                    </Label>
                  </div>
                  <div className="font-semibold">45 د.إ</div>
                </div>
              </RadioGroup>
            </div>
            
            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center mb-4">
                <CreditCard className="h-5 w-5 ml-2 text-primary" />
                <h2 className="text-lg font-semibold">طريقة الدفع</h2>
              </div>
              
              <RadioGroup 
                value={paymentMethod} 
                onValueChange={setPaymentMethod}
                className="space-y-3"
              >
                <div className="flex items-center border rounded-lg p-4">
                  <RadioGroupItem value="credit_card" id="payment-cc" />
                  <Label htmlFor="payment-cc" className="mr-2 cursor-pointer">
                    <div>بطاقة ائتمان</div>
                    <div className="text-sm text-gray-500">Visa, Mastercard, American Express</div>
                  </Label>
                </div>
                
                <div className="flex items-center border rounded-lg p-4">
                  <RadioGroupItem value="paypal" id="payment-paypal" />
                  <Label htmlFor="payment-paypal" className="mr-2 cursor-pointer">
                    <div>PayPal</div>
                    <div className="text-sm text-gray-500">الدفع الآمن عبر PayPal</div>
                  </Label>
                </div>
                
                <div className="flex items-center border rounded-lg p-4">
                  <RadioGroupItem value="bank_transfer" id="payment-bank" />
                  <Label htmlFor="payment-bank" className="mr-2 cursor-pointer">
                    <div>تحويل بنكي</div>
                    <div className="text-sm text-gray-500">سيتم إرسال تفاصيل الحساب البنكي بعد إتمام الطلب</div>
                  </Label>
                </div>
                
                <div className="flex items-center border rounded-lg p-4">
                  <RadioGroupItem value="cash_on_delivery" id="payment-cod" />
                  <Label htmlFor="payment-cod" className="mr-2 cursor-pointer">
                    <div>الدفع عند الاستلام</div>
                    <div className="text-sm text-gray-500">ادفع نقداً عند استلام طلبك</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
            
            <Button type="submit" className="w-full">
              <CheckCircle2 className="h-5 w-5 ml-2" />
              إتمام الطلب
            </Button>
          </form>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h2 className="font-semibold mb-4">ملخص الطلب</h2>
            
            <div className="mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between py-2 border-b">
                  <div className="flex items-center">
                    <div className="h-10 w-10 ml-2 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div>
                      <div className="text-sm">{item.name}</div>
                      <div className="text-xs text-gray-500">
                        الكمية: {item.quantity}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">
                    {(item.price * item.quantity).toFixed(2)} د.إ
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">مجموع المنتجات</span>
                <span>{totalPrice.toFixed(2)} د.إ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">الشحن ({shippingMethod === "express" ? "سريع" : "قياسي"})</span>
                <span>{shipping.toFixed(2)} د.إ</span>
              </div>
              
              <div className="pt-2 border-t mt-2">
                <div className="flex justify-between font-bold">
                  <span>المجموع</span>
                  <span className="text-primary">{total.toFixed(2)} د.إ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
