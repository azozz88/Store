
import Banner from "@/components/Banner";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoBanner />
    </div>
  );
};

export default HomePage;
