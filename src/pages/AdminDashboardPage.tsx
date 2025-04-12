
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
  Plus,
  MapPin 
} from "lucide-react";

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  // Mock data for the dashboard - Updated with UAE cities and dirham currency
  const recentOrders = [
    { id: "ORD-001", customer: "أحمد محمد", date: "2025-04-10", status: "قيد التوصيل", total: 1250.00, location: "دبي" },
    { id: "ORD-002", customer: "سارة عبدالله", date: "2025-04-11", status: "مكتمل", total: 867.50, location: "أبوظبي" },
    { id: "ORD-003", customer: "خالد العلي", date: "2025-04-11", status: "جديد", total: 435.25, location: "الشارقة" },
    { id: "ORD-004", customer: "فاطمة الزهراء", date: "2025-04-12", status: "جديد", total: 1920.75, location: "عجمان" },
  ];
  
  const topProducts = [
    { id: 1, name: "هاتف ذكي - الإصدار الأحدث", sales: 48, revenue: 23520 },
    { id: 2, name: "سماعات لاسلكية فاخرة", sales: 36, revenue: 7920 },
    { id: 3, name: "ساعة ذكية - الإصدار الرياضي", sales: 29, revenue: 8700 },
    { id: 4, name: "جهاز تابلت - 10.5 بوصة", sales: 24, revenue: 9600 },
  ];

  // UAE cities for reports
  const salesByLocation = [
    { location: "دبي", orders: 145, revenue: 87500 },
    { location: "أبوظبي", orders: 112, revenue: 65432 },
    { location: "الشارقة", orders: 78, revenue: 42300 },
    { location: "عجمان", orders: 45, revenue: 23100 },
    { location: "رأس الخيمة", orders: 36, revenue: 18200 },
  ];
  
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">لوحة الإدارة</h1>
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
                    <TableHead>المدينة</TableHead>
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
                      <TableCell>{order.location}</TableCell>
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
          
          {/* Sales by Location */}
          <Card>
            <CardHeader>
              <CardTitle>المبيعات حسب المدينة</CardTitle>
              <CardDescription>
                أداء المبيعات في مختلف إمارات الدولة
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>المدينة</TableHead>
                    <TableHead className="text-left">عدد الطلبات</TableHead>
                    <TableHead className="text-left">إجمالي المبيعات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesByLocation.map((item) => (
                    <TableRow key={item.location}>
                      <TableCell className="flex items-center">
                        <MapPin className="h-4 w-4 ml-2 text-muted-foreground" />
                        {item.location}
                      </TableCell>
                      <TableCell className="text-left">{item.orders}</TableCell>
                      <TableCell className="text-left">{item.revenue.toFixed(2)} د.إ</TableCell>
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
        
        {/* Product Management Tab */}
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>قائمة المنتجات</CardTitle>
              <CardDescription>
                إدارة المنتجات المتوفرة في المتجر.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Button variant="default" size="sm">
                    <Plus className="h-4 w-4 ml-1" />
                    إضافة منتج جديد
                  </Button>
                  <Button variant="outline" size="sm">
                    تصدير CSV
                  </Button>
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="البحث عن منتج..." 
                    className="px-3 py-1 border rounded-md text-sm w-64" 
                  />
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>المنتج</TableHead>
                    <TableHead>القسم</TableHead>
                    <TableHead>السعر</TableHead>
                    <TableHead>المخزون</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>إجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>هاتف ذكي - الإصدار الأحدث</TableCell>
                    <TableCell>الإلكترونيات</TableCell>
                    <TableCell>4,599 د.إ</TableCell>
                    <TableCell>24</TableCell>
                    <TableCell><span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">متوفر</span></TableCell>
                    <TableCell className="flex space-x-2 space-x-reverse">
                      <Button variant="ghost" size="sm">تعديل</Button>
                      <Button variant="ghost" size="sm" className="text-red-600">حذف</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>سماعات لاسلكية فاخرة</TableCell>
                    <TableCell>الصوتيات</TableCell>
                    <TableCell>899 د.إ</TableCell>
                    <TableCell>42</TableCell>
                    <TableCell><span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">متوفر</span></TableCell>
                    <TableCell className="flex space-x-2 space-x-reverse">
                      <Button variant="ghost" size="sm">تعديل</Button>
                      <Button variant="ghost" size="sm" className="text-red-600">حذف</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ساعة ذكية - الإصدار الرياضي</TableCell>
                    <TableCell>الأجهزة القابلة للارتداء</TableCell>
                    <TableCell>1,299 د.إ</TableCell>
                    <TableCell>18</TableCell>
                    <TableCell><span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800">الكمية منخفضة</span></TableCell>
                    <TableCell className="flex space-x-2 space-x-reverse">
                      <Button variant="ghost" size="sm">تعديل</Button>
                      <Button variant="ghost" size="sm" className="text-red-600">حذف</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>جهاز تابلت - 10.5 بوصة</TableCell>
                    <TableCell>الإلكترونيات</TableCell>
                    <TableCell>2,499 د.إ</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell><span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">نفذت الكمية</span></TableCell>
                    <TableCell className="flex space-x-2 space-x-reverse">
                      <Button variant="ghost" size="sm">تعديل</Button>
                      <Button variant="ghost" size="sm" className="text-red-600">حذف</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 flex justify-center">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Button variant="outline" size="sm" disabled>السابق</Button>
                  <div className="px-3 py-1 border rounded-md text-sm">1 من 5</div>
                  <Button variant="outline" size="sm">التالي</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Orders Management Tab */}
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>إدارة الطلبات</CardTitle>
              <CardDescription>
                متابعة وإدارة طلبات العملاء
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <select className="px-2 py-1 border rounded-md text-sm">
                    <option value="">كل الحالات</option>
                    <option value="new">جديد</option>
                    <option value="processing">قيد التوصيل</option>
                    <option value="completed">مكتمل</option>
                    <option value="cancelled">ملغي</option>
                  </select>
                  <Button variant="outline" size="sm">
                    تصدير التقرير
                  </Button>
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="البحث برقم الطلب..." 
                    className="px-3 py-1 border rounded-md text-sm w-64" 
                  />
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>رقم الطلب</TableHead>
                    <TableHead>العميل</TableHead>
                    <TableHead>المدينة</TableHead>
                    <TableHead>التاريخ</TableHead>
                    <TableHead>المبلغ</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>إجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.location}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.total.toFixed(2)} د.إ</TableCell>
                      <TableCell>
                        <select className={`px-2 py-1 rounded-md text-xs border
                          ${order.status === 'مكتمل' ? 'bg-green-100 text-green-800 border-green-200' : 
                            order.status === 'قيد التوصيل' ? 'bg-blue-100 text-blue-800 border-blue-200' : 
                            'bg-amber-100 text-amber-800 border-amber-200'}`}>
                          <option value="new" selected={order.status === 'جديد'}>جديد</option>
                          <option value="processing" selected={order.status === 'قيد التوصيل'}>قيد التوصيل</option>
                          <option value="completed" selected={order.status === 'مكتمل'}>مكتمل</option>
                          <option value="cancelled">ملغي</option>
                        </select>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">عرض التفاصيل</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 flex justify-center">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Button variant="outline" size="sm" disabled>السابق</Button>
                  <div className="px-3 py-1 border rounded-md text-sm">1 من 3</div>
                  <Button variant="outline" size="sm">التالي</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Remaining tabs - using placeholders */}
        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>إدارة حسابات العملاء</CardTitle>
              <CardDescription>
                متابعة وإدارة حسابات العملاء ونشاطهم
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex justify-between items-center">
                <Button variant="default" size="sm">
                  <Plus className="h-4 w-4 ml-1" />
                  إضافة عميل جديد
                </Button>
                <div>
                  <input 
                    type="text" 
                    placeholder="البحث عن عميل..." 
                    className="px-3 py-1 border rounded-md text-sm w-64" 
                  />
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الاسم</TableHead>
                    <TableHead>البريد الإلكتروني</TableHead>
                    <TableHead>المدينة</TableHead>
                    <TableHead>عدد الطلبات</TableHead>
                    <TableHead>إجمالي المشتريات</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>إجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>أحمد محمد</TableCell>
                    <TableCell>ahmed@example.com</TableCell>
                    <TableCell>دبي</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>8,750 د.إ</TableCell>
                    <TableCell><span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">نشط</span></TableCell>
                    <TableCell className="flex space-x-2 space-x-reverse">
                      <Button variant="ghost" size="sm">عرض</Button>
                      <Button variant="ghost" size="sm">تعديل</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>سارة عبدالله</TableCell>
                    <TableCell>sara@example.com</TableCell>
                    <TableCell>أبوظبي</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>5,230 د.إ</TableCell>
                    <TableCell><span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">نشط</span></TableCell>
                    <TableCell className="flex space-x-2 space-x-reverse">
                      <Button variant="ghost" size="sm">عرض</Button>
                      <Button variant="ghost" size="sm">تعديل</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>خالد العلي</TableCell>
                    <TableCell>khaled@example.com</TableCell>
                    <TableCell>الشارقة</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>1,845 د.إ</TableCell>
                    <TableCell><span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800">غير نشط</span></TableCell>
                    <TableCell className="flex space-x-2 space-x-reverse">
                      <Button variant="ghost" size="sm">عرض</Button>
                      <Button variant="ghost" size="sm">تعديل</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>إدارة التصنيفات</CardTitle>
              <CardDescription>
                تنظيم وإدارة تصنيفات المنتجات
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-base font-medium mb-3">التصنيفات الحالية</h3>
                  <div className="space-y-2">
                    {["الإلكترونيات", "الأجهزة المنزلية", "الموبايلات", "الكمبيوترات", "الصوتيات", "الأجهزة القابلة للارتداء"].map((category, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border rounded-md">
                        <span>{category}</span>
                        <div className="flex space-x-2 space-x-reverse">
                          <Button variant="ghost" size="sm">تعديل</Button>
                          <Button variant="ghost" size="sm" className="text-red-600">حذف</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium mb-3">إضافة تصنيف جديد</h3>
                  <div className="space-y-4 p-4 border rounded-md">
                    <div>
                      <label className="block text-sm mb-1">اسم التصنيف</label>
                      <input type="text" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">الوصف</label>
                      <textarea className="w-full px-3 py-2 border rounded-md h-24"></textarea>
                    </div>
                    <div>
                      <label className="block text-sm mb-1">التصنيف الرئيسي (اختياري)</label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option value="">لا يوجد - تصنيف رئيسي</option>
                        <option value="electronics">الإلكترونيات</option>
                        <option value="home">الأجهزة المنزلية</option>
                        <option value="phones">الموبايلات</option>
                      </select>
                    </div>
                    <Button className="w-full">إضافة التصنيف</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات المتجر</CardTitle>
              <CardDescription>
                تخصيص وتكوين إعدادات المتجر الإلكتروني
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium mb-3">معلومات المتجر الأساسية</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">اسم المتجر</label>
                      <input type="text" className="w-full px-3 py-2 border rounded-md" value="متجر الإمارات الإلكتروني" />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">البريد الإلكتروني للتواصل</label>
                      <input type="email" className="w-full px-3 py-2 border rounded-md" value="info@uae-store.com" />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">رقم الهاتف</label>
                      <input type="text" className="w-full px-3 py-2 border rounded-md" value="+971 50 123 4567" />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">العملة</label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option value="AED" selected>درهم إماراتي (د.إ)</option>
                        <option value="USD">دولار أمريكي ($)</option>
                        <option value="EUR">يورو (€)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-3">إعدادات الشحن</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded-md">
                      <div>
                        <h4 className="font-medium">الشحن المحلي (داخل الإمارات)</h4>
                        <p className="text-sm text-gray-500">تكلفة: 25 د.إ | التوصيل: 2-3 أيام عمل</p>
                      </div>
                      <Button variant="outline" size="sm">تعديل</Button>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-md">
                      <div>
                        <h4 className="font-medium">الشحن السريع (داخل الإمارات)</h4>
                        <p className="text-sm text-gray-500">تكلفة: 45 د.إ | التوصيل: يوم عمل واحد</p>
                      </div>
                      <Button variant="outline" size="sm">تعديل</Button>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-md">
                      <div>
                        <h4 className="font-medium">الشحن الدولي</h4>
                        <p className="text-sm text-gray-500">تكلفة: حسب الوجهة | التوصيل: 5-10 أيام عمل</p>
                      </div>
                      <Button variant="outline" size="sm">تعديل</Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-3">طرق الدفع</h3>
                  <div className="space-y-2">
                    <div className="flex items-center p-2">
                      <input type="checkbox" id="cc" checked className="ml-2" />
                      <label htmlFor="cc">بطاقات الائتمان</label>
                    </div>
                    <div className="flex items-center p-2">
                      <input type="checkbox" id="paypal" checked className="ml-2" />
                      <label htmlFor="paypal">PayPal</label>
                    </div>
                    <div className="flex items-center p-2">
                      <input type="checkbox" id="bank" checked className="ml-2" />
                      <label htmlFor="bank">تحويل بنكي</label>
                    </div>
                    <div className="flex items-center p-2">
                      <input type="checkbox" id="cod" checked className="ml-2" />
                      <label htmlFor="cod">الدفع عند الاستلام</label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">حفظ الإعدادات</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboardPage;
