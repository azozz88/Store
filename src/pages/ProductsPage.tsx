
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Product, products as allProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import PriceFilter from "@/components/PriceFilter";
import { 
  Filter, 
  SlidersHorizontal, 
  X, 
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategories([category]);
    }
    
    const search = searchParams.get("search");
    if (search) {
      setSearchTerm(search);
    }
    
    const sort = searchParams.get("sort");
    if (sort) {
      setSortBy(sort);
    }
  }, [searchParams]);
  
  // Apply filters
  useEffect(() => {
    let result = [...allProducts];
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Sort products
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
    
    // Update URL params
    const params = new URLSearchParams();
    if (selectedCategories.length === 1) {
      params.set("category", selectedCategories[0]);
    }
    if (searchTerm) {
      params.set("search", searchTerm);
    }
    if (sortBy !== "featured") {
      params.set("sort", sortBy);
    }
    setSearchParams(params);
  }, [selectedCategories, priceRange, sortBy, searchTerm]);
  
  const handleSelectCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const handlePriceRangeChange = (range: [number, number]) => {
    setPriceRange(range);
  };
  
  const handleSortChange = (value: string) => {
    setSortBy(value);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already applied via useEffect
  };
  
  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 5000]);
    setSearchTerm("");
    setSortBy("featured");
    setSearchParams(new URLSearchParams());
  };
  
  const getMinMaxPrice = () => {
    const prices = allProducts.map(product => product.price);
    return [Math.min(...prices), Math.max(...prices)] as [number, number];
  };
  
  const [min, max] = getMinMaxPrice();
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">جميع المنتجات</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            عرض {filteredProducts.length} منتج
          </span>
        </div>
      </div>
      
      {/* Mobile filter trigger and search bar */}
      <div className="md:hidden mb-4">
        <div className="flex gap-2 mb-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex-1">
                <Filter className="h-4 w-4 ml-2" />
                الفلاتر
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>الفلاتر</SheetTitle>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <CategoryFilter 
                  selectedCategories={selectedCategories}
                  onSelectCategory={handleSelectCategory}
                />
                <PriceFilter 
                  min={min}
                  max={max}
                  onChange={handlePriceRangeChange}
                />
                <div className="pt-4">
                  <Button onClick={clearFilters} className="w-full">
                    إعادة ضبط الفلاتر
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          <Select value={sortBy} onValueChange={handleSortChange}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="الترتيب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">الأكثر تميزاً</SelectItem>
              <SelectItem value="price-asc">السعر: من الأقل للأعلى</SelectItem>
              <SelectItem value="price-desc">السعر: من الأعلى للأقل</SelectItem>
              <SelectItem value="rating">التقييم</SelectItem>
              <SelectItem value="newest">الأحدث</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <form onSubmit={handleSearch} className="relative">
          <Input
            type="text"
            placeholder="ابحث عن منتجات..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
          <Button
            type="submit"
            variant="ghost"
            size="sm"
            className="absolute left-0 top-0 h-full px-3"
          >
            <Filter className="h-4 w-4" />
          </Button>
        </form>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Desktop filters sidebar */}
        <div className="hidden md:block w-64 space-y-6">
          {/* Search */}
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="ابحث عن منتجات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </form>
          
          {/* Category filter */}
          <CategoryFilter 
            selectedCategories={selectedCategories}
            onSelectCategory={handleSelectCategory}
          />
          
          {/* Price filter */}
          <PriceFilter 
            min={min}
            max={max}
            onChange={handlePriceRangeChange}
          />
          
          {/* Clear filters button */}
          {(selectedCategories.length > 0 || priceRange[0] !== min || priceRange[1] !== max || searchTerm) && (
            <Button onClick={clearFilters} variant="outline" className="w-full">
              <X className="h-4 w-4 ml-2" />
              إعادة ضبط الفلاتر
            </Button>
          )}
        </div>
        
        {/* Products grid */}
        <div className="flex-1">
          {/* Desktop sort */}
          <div className="hidden md:flex justify-between items-center mb-6">
            <div className="flex items-center">
              <SlidersHorizontal className="h-5 w-5 ml-2 text-gray-500" />
              <span className="text-gray-700">ترتيب حسب:</span>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={sortBy === "featured" ? "default" : "outline"}
                size="sm"
                onClick={() => handleSortChange("featured")}
              >
                الأكثر تميزاً
              </Button>
              <Button 
                variant={sortBy === "price-asc" ? "default" : "outline"}
                size="sm"
                onClick={() => handleSortChange("price-asc")}
              >
                السعر: من الأقل للأعلى
              </Button>
              <Button 
                variant={sortBy === "price-desc" ? "default" : "outline"}
                size="sm"
                onClick={() => handleSortChange("price-desc")}
              >
                السعر: من الأعلى للأقل
              </Button>
              <Button 
                variant={sortBy === "rating" ? "default" : "outline"}
                size="sm"
                onClick={() => handleSortChange("rating")}
              >
                التقييم
              </Button>
              <Button 
                variant={sortBy === "newest" ? "default" : "outline"}
                size="sm"
                onClick={() => handleSortChange("newest")}
              >
                الأحدث
              </Button>
            </div>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">😕</div>
              <h3 className="text-xl font-medium mb-2">لا توجد منتجات</h3>
              <p className="text-gray-500 mb-4">
                لم نتمكن من العثور على منتجات تطابق معايير البحث الخاصة بك
              </p>
              <Button onClick={clearFilters}>إعادة ضبط الفلاتر</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
