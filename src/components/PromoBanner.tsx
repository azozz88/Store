
const PromoBanner = () => {
  return (
    <section className="mb-12 bg-primary/5 rounded-xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-3">خصومات موسمية</h2>
          <p className="text-lg text-gray-600 mb-6">
            اكتشف خصومات حصرية على منتجاتنا المميزة لفترة محدودة
          </p>
          <div>
            <div className="flex gap-4 mb-6 text-center">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary">02</div>
                <div className="text-xs text-gray-500">أيام</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary">12</div>
                <div className="text-xs text-gray-500">ساعات</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary">45</div>
                <div className="text-xs text-gray-500">دقائق</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary">30</div>
                <div className="text-xs text-gray-500">ثواني</div>
              </div>
            </div>
            <a 
              href="/products" 
              className="inline-block bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors"
            >
              تسوق الآن
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img 
            src="/placeholder.svg" 
            alt="Promotion" 
            className="max-h-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
