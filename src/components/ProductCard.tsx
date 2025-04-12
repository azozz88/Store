
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1
    });
  };
  
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating) 
                ? "text-yellow-400" 
                : i < rating 
                  ? "text-yellow-400" 
                  : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 15.934L4.618 19 5.5 12.926 1 8.57l6.094-.586L10 3l2.906 4.984L19 8.57l-4.5 4.356L15.382 19z"
              clipRule="evenodd"
            />
          </svg>
        ))}
        <span className="text-xs text-gray-500 mr-1">({product.reviews})</span>
      </div>
    );
  };
  
  return (
    <div 
      className={`group bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg ${
        featured ? "col-span-full lg:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "h-full" : "h-48"}`}>
        <Link to={`/products/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </Link>
        {product.oldPrice && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            خصم {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </Badge>
        )}
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-2 left-2 bg-white hover:bg-primary hover:text-white transition-colors rounded-full"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-sm text-gray-500">{product.category}</span>
        </div>
        
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold mb-1 transition-colors hover:text-primary">
            {product.name}
          </h3>
        </Link>
        
        {featured && (
          <p className="text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        
        <div className="mb-3">{renderStars(product.rating)}</div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">{product.price} ر.س</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through">{product.oldPrice} ر.س</span>
            )}
          </div>
          
          <Button size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 ml-2" />
            إضافة للسلة
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
