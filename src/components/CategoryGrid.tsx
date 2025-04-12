
import { categories } from "@/data/products";
import { Link } from "react-router-dom";

const CategoryGrid = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">تسوق حسب الفئة</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${category.name}`}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg group"
          >
            <div className="h-32 flex items-center justify-center bg-gray-100">
              <img src="/placeholder.svg" alt={category.name} className="h-20 w-20" />
            </div>
            <div className="p-3 text-center">
              <h3 className="font-medium group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">{category.count} منتج</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
