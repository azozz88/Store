
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronRight, 
  Truck, 
  ShoppingBag, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Package
} from "lucide-react";

// Sample data for demo purposes
const orders = [
  {
    id: "ORD-2023-001",
    date: "2023-12-15",
    total: 1299,
    status: "completed",
    items: [
      { id: 1, name: "هاتف ذكي متطور", price: 2499, quantity: 1, image: "/placeholder.svg" },
    ],
    trackingNumber: "TRK12345",
  },
  {
    id: "ORD-2023-002",
    date: "2023-12-10",
    total: 849,
    status: "processing",
    items: [
      { id: 3, name: "سماعات لاسلكية فاخرة", price: 899, quantity: 1, image: "/placeholder.svg" },
      { id: 5, name: "حقيبة ظهر عصرية", price: 349, quantity: 1, image: "/placeholder.svg" },
    ],
    trackingNumber: "TRK67890",
  },
  {
    id: "ORD-2023-003",
    date: "2023-11-28",
    total: 599,
    status: "shipped",
    items: [
      { id: 6, name: "حذاء رياضي متطور", price: 599, quantity: 1, image: "/placeholder.svg" },
    ],
    trackingNumber: "TRK54321",
  },
  {
    id: "ORD-2023-004",
    date: "2023-11-15",
    total: 1299,
    status: "cancelled",
    items: [
      { id: 7, name: "طاولة قهوة خشبية", price: 1299, quantity: 1, image: "/placeholder.svg" },
    ],
  },
];

const OrdersPage = () => {
  // State for tracking which order is expanded to show details
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  
  // Toggle order details
  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };
  
  // Helper function to render status badge
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "processing":
        return (
          <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Clock className="h-3 w-3 ml-1" />
            قيد المعالجة
          </div>
        );
      case "shipped":
        return (
          <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            <Truck className="h-3 w-3 ml-1" />
            تم الشحن
          </div>
        );
      case "completed":
        return (
          <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle2 className="h-3 w-3 ml-1" />
            مكتمل
          </div>
        );
      case "cancelled":
        return (
          <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="h-3 w-3 ml-1" />
            ملغي
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div>
      <div className="flex items-center mb-6 text-sm">
        <Link to="/" className="text-gray-500 hover:text-primary">الرئيسية</Link>
        <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
        <span className="text-gray-700 font-medium">طلباتي</span>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">طلباتي</h1>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">جميع الطلبات</TabsTrigger>
          <TabsTrigger value="processing">قيد المعالجة</TabsTrigger>
          <TabsTrigger value="shipped">تم الشحن</TabsTrigger>
          <TabsTrigger value="completed">مكتملة</TabsTrigger>
          <TabsTrigger value="cancelled">ملغية</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {orders.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Package className="h-8 w-8 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold mb-2">لا توجد طلبات</h2>
              <p className="text-gray-500 mb-6">
                لم تقم بإجراء أي طلبات بعد.
              </p>
              <Button asChild>
                <Link to="/products">تصفح المنتجات</Link>
              </Button>
            </div>
          ) : (
            orders.map(order => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h3 className="font-medium">رقم الطلب: {order.id}</h3>
                    <div className="text-sm text-gray-500 mt-1">
                      تاريخ الطلب: {order.date}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 sm:mt-0">
                    {renderStatusBadge(order.status)}
                    <div className="font-semibold">{order.total.toFixed(2)} ر.س</div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => toggleOrderDetails(order.id)}
                    >
                      {expandedOrder === order.id ? "إخفاء التفاصيل" : "عرض التفاصيل"}
                    </Button>
                  </div>
                </div>
                
                {expandedOrder === order.id && (
                  <div className="border-t p-4">
                    <h4 className="font-medium mb-3">المنتجات</h4>
                    <div className="space-y-3">
                      {order.items.map(item => (
                        <div key={item.id} className="flex items-center">
                          <div className="w-12 h-12 ml-3 flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-contain" 
                            />
                          </div>
                          <div className="flex-1">
                            <Link 
                              to={`/products/${item.id}`}
                              className="hover:text-primary transition-colors"
                            >
                              {item.name}
                            </Link>
                            <div className="text-sm text-gray-500">
                              {item.price.toFixed(2)} ر.س × {item.quantity}
                            </div>
                          </div>
                          <div className="font-medium">
                            {(item.price * item.quantity).toFixed(2)} ر.س
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {(order.status === "shipped" || order.status === "processing") && order.trackingNumber && (
                      <div className="mt-4 pt-3 border-t">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Truck className="h-5 w-5 ml-2 text-primary" />
                            <span className="font-medium">رقم التتبع:</span>
                          </div>
                          <span className="font-medium">{order.trackingNumber}</span>
                        </div>
                        
                        <div className="mt-3">
                          <Button variant="outline" size="sm" className="w-full">
                            تتبع الشحنة
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {order.status === "processing" && (
                      <div className="mt-4 pt-3 border-t">
                        <Button variant="outline" size="sm" className="text-red-600">
                          <XCircle className="h-4 w-4 ml-2" />
                          إلغاء الطلب
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </TabsContent>
        
        <TabsContent value="processing" className="space-y-4">
          {orders.filter(order => order.status === "processing").map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* same structure as above */}
              <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="font-medium">رقم الطلب: {order.id}</h3>
                  <div className="text-sm text-gray-500 mt-1">
                    تاريخ الطلب: {order.date}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 sm:mt-0">
                  {renderStatusBadge(order.status)}
                  <div className="font-semibold">{order.total.toFixed(2)} ر.س</div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => toggleOrderDetails(order.id)}
                  >
                    {expandedOrder === order.id ? "إخفاء التفاصيل" : "عرض التفاصيل"}
                  </Button>
                </div>
              </div>
              
              {expandedOrder === order.id && (
                <div className="border-t p-4">
                  <h4 className="font-medium mb-3">المنتجات</h4>
                  <div className="space-y-3">
                    {order.items.map(item => (
                      <div key={item.id} className="flex items-center">
                        <div className="w-12 h-12 ml-3 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-contain" 
                          />
                        </div>
                        <div className="flex-1">
                          <Link 
                            to={`/products/${item.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                          <div className="text-sm text-gray-500">
                            {item.price.toFixed(2)} ر.س × {item.quantity}
                          </div>
                        </div>
                        <div className="font-medium">
                          {(item.price * item.quantity).toFixed(2)} ر.س
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {order.trackingNumber && (
                    <div className="mt-4 pt-3 border-t">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Truck className="h-5 w-5 ml-2 text-primary" />
                          <span className="font-medium">رقم التتبع:</span>
                        </div>
                        <span className="font-medium">{order.trackingNumber}</span>
                      </div>
                      
                      <div className="mt-3">
                        <Button variant="outline" size="sm" className="w-full">
                          تتبع الشحنة
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-4 pt-3 border-t">
                    <Button variant="outline" size="sm" className="text-red-600">
                      <XCircle className="h-4 w-4 ml-2" />
                      إلغاء الطلب
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="shipped" className="space-y-4">
          {/* Similar content for shipped orders */}
          {orders.filter(order => order.status === "shipped").map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="font-medium">رقم الطلب: {order.id}</h3>
                  <div className="text-sm text-gray-500 mt-1">
                    تاريخ الطلب: {order.date}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 sm:mt-0">
                  {renderStatusBadge(order.status)}
                  <div className="font-semibold">{order.total.toFixed(2)} ر.س</div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => toggleOrderDetails(order.id)}
                  >
                    {expandedOrder === order.id ? "إخفاء التفاصيل" : "عرض التفاصيل"}
                  </Button>
                </div>
              </div>
              
              {expandedOrder === order.id && (
                <div className="border-t p-4">
                  <h4 className="font-medium mb-3">المنتجات</h4>
                  <div className="space-y-3">
                    {order.items.map(item => (
                      <div key={item.id} className="flex items-center">
                        <div className="w-12 h-12 ml-3 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-contain" 
                          />
                        </div>
                        <div className="flex-1">
                          <Link 
                            to={`/products/${item.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                          <div className="text-sm text-gray-500">
                            {item.price.toFixed(2)} ر.س × {item.quantity}
                          </div>
                        </div>
                        <div className="font-medium">
                          {(item.price * item.quantity).toFixed(2)} ر.س
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {order.trackingNumber && (
                    <div className="mt-4 pt-3 border-t">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Truck className="h-5 w-5 ml-2 text-primary" />
                          <span className="font-medium">رقم التتبع:</span>
                        </div>
                        <span className="font-medium">{order.trackingNumber}</span>
                      </div>
                      
                      <div className="mt-3">
                        <Button variant="outline" size="sm" className="w-full">
                          تتبع الشحنة
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          {/* Similar content for completed orders */}
          {orders.filter(order => order.status === "completed").map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="font-medium">رقم الطلب: {order.id}</h3>
                  <div className="text-sm text-gray-500 mt-1">
                    تاريخ الطلب: {order.date}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 sm:mt-0">
                  {renderStatusBadge(order.status)}
                  <div className="font-semibold">{order.total.toFixed(2)} ر.س</div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => toggleOrderDetails(order.id)}
                  >
                    {expandedOrder === order.id ? "إخفاء التفاصيل" : "عرض التفاصيل"}
                  </Button>
                </div>
              </div>
              
              {expandedOrder === order.id && (
                <div className="border-t p-4">
                  <h4 className="font-medium mb-3">المنتجات</h4>
                  <div className="space-y-3">
                    {order.items.map(item => (
                      <div key={item.id} className="flex items-center">
                        <div className="w-12 h-12 ml-3 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-contain" 
                          />
                        </div>
                        <div className="flex-1">
                          <Link 
                            to={`/products/${item.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                          <div className="text-sm text-gray-500">
                            {item.price.toFixed(2)} ر.س × {item.quantity}
                          </div>
                        </div>
                        <div className="font-medium">
                          {(item.price * item.quantity).toFixed(2)} ر.س
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-3 border-t">
                    <Button variant="outline" size="sm" className="w-full">
                      <ShoppingBag className="h-4 w-4 ml-2" />
                      إعادة الطلب
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="cancelled" className="space-y-4">
          {/* Similar content for cancelled orders */}
          {orders.filter(order => order.status === "cancelled").map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="font-medium">رقم الطلب: {order.id}</h3>
                  <div className="text-sm text-gray-500 mt-1">
                    تاريخ الطلب: {order.date}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 sm:mt-0">
                  {renderStatusBadge(order.status)}
                  <div className="font-semibold">{order.total.toFixed(2)} ر.س</div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => toggleOrderDetails(order.id)}
                  >
                    {expandedOrder === order.id ? "إخفاء التفاصيل" : "عرض التفاصيل"}
                  </Button>
                </div>
              </div>
              
              {expandedOrder === order.id && (
                <div className="border-t p-4">
                  <h4 className="font-medium mb-3">المنتجات</h4>
                  <div className="space-y-3">
                    {order.items.map(item => (
                      <div key={item.id} className="flex items-center">
                        <div className="w-12 h-12 ml-3 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-contain" 
                          />
                        </div>
                        <div className="flex-1">
                          <Link 
                            to={`/products/${item.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                          <div className="text-sm text-gray-500">
                            {item.price.toFixed(2)} ر.س × {item.quantity}
                          </div>
                        </div>
                        <div className="font-medium">
                          {(item.price * item.quantity).toFixed(2)} ر.س
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-3 border-t">
                    <Button variant="outline" size="sm" className="w-full">
                      <ShoppingBag className="h-4 w-4 ml-2" />
                      إعادة الطلب
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersPage;
