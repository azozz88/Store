
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Mail, PhoneCall, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend or email service
    console.log("Contact form submitted:", formData);
    
    // Show success toast
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنقوم بالرد عليك في أقرب وقت ممكن",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <div>
      <div className="flex items-center mb-6 text-sm">
        <Link to="/" className="text-gray-500 hover:text-primary">الرئيسية</Link>
        <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
        <span className="text-gray-700 font-medium">اتصل بنا</span>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-center">اتصل بنا</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Info */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <h2 className="text-xl font-semibold mb-4">معلومات التواصل</h2>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 ml-3 text-primary mt-1" />
              <div>
                <h3 className="font-medium">البريد الإلكتروني</h3>
                <p className="text-gray-600">info@matjarna.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <PhoneCall className="h-5 w-5 ml-3 text-primary mt-1" />
              <div>
                <h3 className="font-medium">رقم الهاتف</h3>
                <p className="text-gray-600">+966 12 345 6789</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-5 w-5 ml-3 text-primary mt-1" />
              <div>
                <h3 className="font-medium">العنوان</h3>
                <p className="text-gray-600">
                  شارع الملك فهد، الرياض،<br />
                  المملكة العربية السعودية
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="h-5 w-5 ml-3 text-primary mt-1" />
              <div>
                <h3 className="font-medium">ساعات العمل</h3>
                <p className="text-gray-600">
                  الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً<br />
                  الجمعة - السبت: 10:00 صباحاً - 2:00 مساءً
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">تواصل معنا عبر</h2>
            <div className="flex justify-around">
              <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.168 9.816h-4.153V7.668c0-1.27.824-1.567 1.407-1.567h2.696V2.024l-3.712-.015c-4.122 0-5.057 3.086-5.057 5.07v2.737H6.191v4.204h3.158V22h4.666v-9.98h3.153l.42-4.204z"></path>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 5.058a9.62 9.62 0 01-2.767.757 4.83 4.83 0 002.116-2.664 9.64 9.64 0 01-3.059 1.17 4.814 4.814 0 00-8.305 3.288c0 .38.043.747.125 1.1-4.003-.2-7.55-2.117-9.923-5.023a4.815 4.815 0 001.487 6.42 4.812 4.812 0 01-2.18-.6v.06a4.818 4.818 0 003.86 4.717 4.83 4.83 0 01-2.172.083 4.821 4.821 0 004.493 3.341 9.654 9.654 0 01-5.977 2.056c-.39 0-.774-.023-1.151-.067a13.612 13.612 0 007.366 2.158c8.84 0 13.668-7.317 13.668-13.667 0-.209-.005-.417-.014-.624a9.73 9.73 0 002.38-2.483z"></path>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.792.217 2.428.465.66.255 1.22.598 1.772 1.15.554.553.896 1.114 1.15 1.773.248.636.416 1.363.465 2.428.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.217 1.792-.465 2.428a4.883 4.883 0 01-1.15 1.772c-.553.554-1.114.896-1.773 1.15-.636.248-1.363.416-2.428.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.792-.217-2.428-.465a4.883 4.883 0 01-1.772-1.15 4.883 4.883 0 01-1.15-1.773c-.248-.636-.416-1.363-.465-2.428-.05-1.066-.06-1.405-.06-4.122s.01-3.056.06-4.122c.05-1.065.217-1.792.465-2.428a4.883 4.883 0 011.15-1.772c.553-.554 1.114-.896 1.773-1.15.636-.248 1.363-.416 2.428-.465C8.944 2.01 9.283 2 12 2zm0 1.8c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.181-.8.397-1.15.748-.35.35-.566.683-.747 1.15-.137.352-.3.881-.344 1.856-.049 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.18.466.397.8.747 1.15.35.35.683.566 1.15.747.352.137.881.3 1.856.344 1.055.049 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.18.8-.397 1.15-.747.35-.35.566-.683.747-1.15.137-.352.3-.881.344-1.856.049-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.09 3.09 0 00-.748-1.15 3.09 3.09 0 00-1.15-.747c-.352-.137-.881-.3-1.856-.344-1.055-.049-1.37-.058-4.04-.058zm0 3.064A5.136 5.136 0 1012 12.136 5.136 5.136 0 0012 6.864zm0 8.468A3.333 3.333 0 1112 8.666a3.333 3.333 0 010 6.666zm6.538-8.668a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"></path>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.173c-3.855 0-6.983 3.129-6.983 6.984 0 1.216.305 2.362.844 3.366l-1.086 3.963 4.072-1.067a6.95 6.95 0 003.153.752c3.853 0 6.982-3.13 6.982-6.984S15.884 6.173 12.03 6.173m0 12.769a5.76 5.76 0 01-2.935-.796l-.21-.126-2.183.573.582-2.127-.137-.221a5.75 5.75 0 01-.848-3.036c0-3.205 2.607-5.813 5.812-5.813s5.811 2.608 5.811 5.813-2.607 5.813-5.811 5.813m3.378-4.35c-.175-.088-1.037-.512-1.196-.569-.161-.061-.278-.092-.395.09-.115.182-.444.568-.545.686-.101.117-.199.133-.374.043-.174-.09-.74-.272-1.406-.868-.52-.464-.87-1.037-.973-1.213-.102-.176-.012-.271.077-.36.079-.08.176-.206.263-.31.09-.104.114-.176.172-.296.057-.12.03-.222-.014-.312-.044-.09-.395-.95-.542-1.302-.143-.35-.287-.292-.395-.296-.103-.008-.221-.01-.34-.01s-.31.045-.471.217c-.162.172-.62.609-.62 1.485 0 .876.636 1.724.726 1.843.084.12 1.198 1.829 2.902 2.569.406.175.722.28.969.36.408.125.78.108 1.074.066.328-.05 1.01-.413 1.152-.809.143-.397.143-.736.1-.81-.041-.074-.153-.12-.327-.206"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">أرسل لنا رسالة</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">الاسم</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="subject">الموضوع</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="message">الرسالة</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="resize-none"
                />
              </div>
              
              <Button type="submit" className="w-full">
                <Send className="h-5 w-5 ml-2" />
                إرسال الرسالة
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">موقعنا</h2>
        <div className="h-96 bg-gray-200 rounded-lg">
          {/* Placeholder for map (in a real application, you'd integrate Google Maps or another map service) */}
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <MapPin className="h-10 w-10 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">هنا يتم تضمين خريطة تفاعلية</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
