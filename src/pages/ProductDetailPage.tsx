
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Product, products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Minus, 
  Plus, 
  ChevronRight, 
  Star 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === Number(productId));
  const { addItem } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">المنتج غير موجود</h2>
        <p className="text-gray-500 mb-6">
          عذراً، لم نتمكن من العثور على المنتج الذي تبحث عنه.
        </p>
        <Button asChild>
          <Link to="/products">العودة إلى المنتجات</Link>
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity
    });
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < Math.floor(rating) 
                ? "text-yellow-400 fill-yellow-400" 
                : i < rating 
                  ? "text-yellow-400 fill-yellow-400" 
                  : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-gray-500 mr-2">{product.rating} ({product.reviews} تقييم)</span>
      </div>
    );
  };
  
  // Get similar products (same category)
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm">
        <Link to="/" className="text-gray-500 hover:text-primary">الرئيسية</Link>
        <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
        <Link to="/products" className="text-gray-500 hover:text-primary">المنتجات</Link>
        <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
        <Link to={`/products?category=${product.category}`} className="text-gray-500 hover:text-primary">
          {product.category}
        </Link>
        <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
        <span className="text-gray-700 font-medium">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden h-[400px]">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="flex space-x-2 space-x-reverse">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`border rounded-md w-20 h-20 cursor-pointer ${
                  activeImage === index ? "border-primary" : "border-gray-200"
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} - ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="mb-4">
            {renderStars(product.rating)}
          </div>
          
          <div className="flex items-end gap-2 mb-4">
            <span className="text-3xl font-bold text-primary">{product.price} ر.س</span>
            {product.oldPrice && (
              <span className="text-lg text-gray-500 line-through mb-1">{product.oldPrice} ر.س</span>
            )}
            {product.oldPrice && (
              <span className="bg-primary/10 text-primary text-sm rounded-full px-2 py-1 mb-1">
                خصم {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
              </span>
            )}
          </div>
          
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="border-t border-b py-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">الكمية</span>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={increaseQuantity}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="font-medium">الحالة</span>
              <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                {product.inStock ? "متوفر" : "غير متوفر"}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="ml-2 h-5 w-5" />
              إضافة للسلة
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="ml-2 h-5 w-5" />
              إضافة للمفضلة
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-sm text-gray-500 mb-1">الشحن السريع</div>
              <div className="font-medium">توصيل خلال 1-3 أيام</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-sm text-gray-500 mb-1">ضمان الجودة</div>
              <div className="font-medium">ضمان لمدة سنة</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <Tabs defaultValue="details" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">التفاصيل</TabsTrigger>
          <TabsTrigger value="specifications">المواصفات</TabsTrigger>
          <TabsTrigger value="reviews">التقييمات</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="p-4 border rounded-lg mt-2">
          <h3 className="text-lg font-medium mb-3">وصف المنتج</h3>
          <p className="text-gray-600">{product.description}</p>
          
          <h3 className="text-lg font-medium mt-6 mb-3">المميزات</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>جودة عالية ومتانة فائقة</li>
            <li>تصميم عصري وأنيق</li>
            <li>سهولة الاستخدام والتنظيف</li>
            <li>ضمان شامل لمدة سنة كاملة</li>
          </ul>
        </TabsContent>
        <TabsContent value="specifications" className="p-4 border rounded-lg mt-2">
          <div className="divide-y">
            <div className="py-3 grid grid-cols-2">
              <span className="font-medium">العلامة التجارية</span>
              <span>متجرنا</span>
            </div>
            <div className="py-3 grid grid-cols-2">
              <span className="font-medium">الموديل</span>
              <span>P{product.id}2023</span>
            </div>
            <div className="py-3 grid grid-cols-2">
              <span className="font-medium">الفئة</span>
              <span>{product.category}</span>
            </div>
            <div className="py-3 grid grid-cols-2">
              <span className="font-medium">الضمان</span>
              <span>12 شهر</span>
            </div>
            <div className="py-3 grid grid-cols-2">
              <span className="font-medium">بلد المنشأ</span>
              <span>المملكة العربية السعودية</span>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="p-4 border rounded-lg mt-2">
          <div className="flex items-center mb-6">
            <div className="text-center ml-6">
              <div className="text-5xl font-bold text-primary mb-1">{product.rating}</div>
              <div className="flex justify-center">{renderStars(product.rating)}</div>
              <div className="text-sm text-gray-500 mt-1">بناءً على {product.reviews} تقييم</div>
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <div className="w-20 text-sm">5 نجوم</div>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden mx-2">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "70%" }}></div>
                </div>
                <div className="w-10 text-sm text-gray-500">70%</div>
              </div>
              <div className="flex items-center mb-1">
                <div className="w-20 text-sm">4 نجوم</div>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden mx-2">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "20%" }}></div>
                </div>
                <div className="w-10 text-sm text-gray-500">20%</div>
              </div>
              <div className="flex items-center mb-1">
                <div className="w-20 text-sm">3 نجوم</div>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden mx-2">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "5%" }}></div>
                </div>
                <div className="w-10 text-sm text-gray-500">5%</div>
              </div>
              <div className="flex items-center mb-1">
                <div className="w-20 text-sm">2 نجوم</div>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden mx-2">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "3%" }}></div>
                </div>
                <div className="w-10 text-sm text-gray-500">3%</div>
              </div>
              <div className="flex items-center">
                <div className="w-20 text-sm">1 نجوم</div>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden mx-2">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "2%" }}></div>
                </div>
                <div className="w-10 text-sm text-gray-500">2%</div>
              </div>
            </div>
          </div>
          
          <Button>إضافة تقييم</Button>
          
          <div className="mt-6 space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <div className="font-medium">أحمد محمد</div>
                <div className="flex">{renderStars(5)}</div>
              </div>
              <p className="text-gray-600">منتج رائع جداً، جودة عالية وسعر مناسب. أنصح بشرائه.</p>
              <div className="text-sm text-gray-500 mt-2">2023-05-15</div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <div className="font-medium">سارة علي</div>
                <div className="flex">{renderStars(4)}</div>
              </div>
              <p className="text-gray-600">منتج جيد، والتوصيل كان سريعاً. لكن كنت أتوقع جودة أفضل قليلاً.</p>
              <div className="text-sm text-gray-500 mt-2">2023-04-22</div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">منتجات مشابهة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;
