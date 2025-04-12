
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Package, 
  ShoppingBag, 
  Users, 
  Tag, 
  Settings, 
  Plus 
} from "lucide-react";

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  // Mock data for the dashboard
  const recentOrders = [
    { id: "ORD-001", customer: "أحمد محمد", date: "2025-04-10", status: "قيد التوصيل", total: 1250.00 },
    { id: "ORD-002", customer: "سارة عبدالله", date: "2025-04-11", status: "مكتمل", total: 867.50 },
    { id: "ORD-003", customer: "خالد العلي", date: "2025-04-11", status: "جديد", total: 435.25 },
    { id: "ORD-004", customer: "فاطمة الزهراء", date: "2025-04-12", status: "جديد", total: 1920.75 },
  ];
  
  const topProducts = [
    { id: 1, name: "هاتف ذكي - الإصدار الأحدث", sales: 48, revenue: 23520 },
    { id: 2, name: "سماعات لاسلكية فاخرة", sales: 36, revenue: 7920 },
    { id: 3, name: "ساعة ذكية - الإصدار الرياضي", sales: 29, revenue: 8700 },
    { id: 4, name: "جهاز تابلت - 10.5 بوصة", sales: 24, revenue: 9600 },
  ];
  
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">لوحة التحكم</h1>
        <div className="flex space-x-2 space-x-reverse">
          <Button size="sm" variant="outline">
            <Settings size={16} className="ml-2" />
            الإعدادات
          </Button>
          <Button size="sm">
            <Plus size={16} className="ml-2" />
            منتج جديد
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-6 sm:w-[600px]">
          <TabsTrigger value="dashboard" className="flex items-center">
            <BarChart3 className="h-4 w-4 ml-2" />
            <span className="hidden sm:inline">الرئيسية</span>
          </TabsTrigger>
          <TabsTrigger value="products" className="flex items-center">
            <Package className="h-4 w-4 ml-2" />
            <span className="hidden sm:inline">المنتجات</span>
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center">
            <ShoppingBag className="h-4 w-4 ml-2" />
            <span className="hidden sm:inline">الطلبات</span>
          </TabsTrigger>
          <TabsTrigger value="customers" className="flex items-center">
            <Users className="h-4 w-4 ml-2" />
            <span className="hidden sm:inline">العملاء</span>
          </TabsTrigger>
          <TabsTrigger value="categories" className="flex items-center">
            <Tag className="h-4 w-4 ml-2" />
            <span className="hidden sm:inline">التصنيفات</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center">
            <Settings className="h-4 w-4 ml-2" />
            <span className="hidden sm:inline">الإعدادات</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="space-y-4">
          {/* Statistics Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  إجمالي المبيعات
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">152,250 د.إ</div>
                <p className="text-xs text-muted-foreground">
                  +18% عن الشهر الماضي
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  عدد الطلبات
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">234</div>
                <p className="text-xs text-muted-foreground">
                  +12% عن الشهر الماضي
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  عدد العملاء
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">648</div>
                <p className="text-xs text-muted-foreground">
                  +8% عن الشهر الماضي
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  متوسط قيمة الطلب
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">650.65 د.إ</div>
                <p className="text-xs text-muted-foreground">
                  +4% عن الشهر الماضي
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Orders Table */}
          <Card>
            <CardHeader>
              <CardTitle>أحدث الطلبات</CardTitle>
              <CardDescription>
                آخر 4 طلبات تم استلامها.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>رقم الطلب</TableHead>
                    <TableHead>العميل</TableHead>
                    <TableHead>التاريخ</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead className="text-left">المبلغ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <span 
                          className={`px-2 py-1 rounded-full text-xs
                            ${order.status === 'مكتمل' ? 'bg-green-100 text-green-800' : 
                              order.status === 'قيد التوصيل' ? 'bg-blue-100 text-blue-800' : 
                              'bg-amber-100 text-amber-800'}`}
                        >
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-left">{order.total.toFixed(2)} د.إ</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle>أفضل المنتجات مبيعاً</CardTitle>
              <CardDescription>
                المنتجات الأكثر مبيعاً هذا الشهر.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>المنتج</TableHead>
                    <TableHead className="text-left">المبيعات</TableHead>
                    <TableHead className="text-left">الإيرادات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell className="text-left">{product.sales} قطعة</TableCell>
                      <TableCell className="text-left">{product.revenue.toFixed(2)} د.إ</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>قائمة المنتجات</CardTitle>
              <CardDescription>
                إدارة المنتجات المتوفرة في المتجر.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">
                لعرض قائمة المنتجات، يرجى الاتصال بقاعدة البيانات أولاً.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>الطلبات</CardTitle>
              <CardDescription>
                إدارة طلبات العملاء ومتابعة حالتها.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">
                لعرض الطلبات، يرجى الاتصال بقاعدة البيانات أولاً.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>العملاء</CardTitle>
              <CardDescription>
                إدارة حسابات العملاء ومتابعة نشاطهم.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">
                لعرض قائمة العملاء، يرجى الاتصال بقاعدة البيانات أولاً.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>التصنيفات</CardTitle>
              <CardDescription>
                إدارة تصنيفات المنتجات وتنظيمها.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">
                لعرض قائمة التصنيفات، يرجى الاتصال بقاعدة البيانات أولاً.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات المتجر</CardTitle>
              <CardDescription>
                تخصيص إعدادات المتجر ومعلومات الشركة.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">
                لتحميل إعدادات المتجر، يرجى الاتصال بقاعدة البيانات أولاً.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboardPage;
