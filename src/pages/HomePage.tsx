
import Banner from "@/components/Banner";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoBanner />
      
      <div className="mt-8 mb-4 text-center">
        <Button asChild variant="outline">
          <Link to="/admin" className="flex items-center">
            <BarChart3 className="h-4 w-4 ml-2" />
            لوحة التحكم
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
