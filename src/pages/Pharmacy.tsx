import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  Plus,
  Pill,
  Droplet,
  Syringe,
  Heart,
  ShieldCheck,
  Package
} from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  icon: any;
  inStock: boolean;
}

const Pharmacy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const categories = [
    { name: "All", icon: Package },
    { name: "Tablets", icon: Pill },
    { name: "Syrups", icon: Droplet },
    { name: "Injections", icon: Syringe },
    { name: "Wellness", icon: Heart }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Tablets",
      price: 5.99,
      description: "Pain relief and fever reducer. 10 tablets per strip.",
      icon: Pill,
      inStock: true
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      category: "Tablets",
      price: 12.99,
      description: "Antibiotic for bacterial infections. 15 tablets per strip.",
      icon: Pill,
      inStock: true
    },
    {
      id: 3,
      name: "Cough Syrup",
      category: "Syrups",
      price: 8.99,
      description: "Relief from cough and cold. 100ml bottle.",
      icon: Droplet,
      inStock: true
    },
    {
      id: 4,
      name: "Vitamin D3 Syrup",
      category: "Syrups",
      price: 15.99,
      description: "Vitamin D supplement for bone health. 60ml bottle.",
      icon: Droplet,
      inStock: true
    },
    {
      id: 5,
      name: "Insulin Injection",
      category: "Injections",
      price: 45.99,
      description: "For diabetes management. Prescription required.",
      icon: Syringe,
      inStock: true
    },
    {
      id: 6,
      name: "Vitamin B12 Injection",
      category: "Injections",
      price: 25.99,
      description: "B12 supplement injection. 1ml vial.",
      icon: Syringe,
      inStock: false
    },
    {
      id: 7,
      name: "Multivitamin Tablets",
      category: "Wellness",
      price: 19.99,
      description: "Complete daily multivitamin. 30 tablets.",
      icon: Heart,
      inStock: true
    },
    {
      id: 8,
      name: "Omega-3 Capsules",
      category: "Wellness",
      price: 22.99,
      description: "Heart health supplement. 60 capsules.",
      icon: Heart,
      inStock: true
    },
    {
      id: 9,
      name: "Ibuprofen 400mg",
      category: "Tablets",
      price: 7.99,
      description: "Anti-inflammatory pain reliever. 12 tablets per strip.",
      icon: Pill,
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
    toast.success("Added to cart");
  };

  const cartCount = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, count]) => {
    const product = products.find(p => p.id === parseInt(id));
    return sum + (product?.price || 0) * count;
  }, 0);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Online <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pharmacy</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Order genuine medicines online with fast delivery. All our medicines are verified and sourced from licensed manufacturers.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 text-center">
              <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">100% Genuine</h3>
              <p className="text-sm text-muted-foreground">All medicines verified and authentic</p>
            </CardContent>
          </Card>
          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="p-6 text-center">
              <Package className="w-12 h-12 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Delivered within 24-48 hours</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 text-center">
              <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">Safe and encrypted transactions</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      selectedCategory === category.name
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </CardContent>
              
              {cartCount > 0 && (
                <CardFooter className="flex flex-col gap-4 pt-6 border-t">
                  <div className="w-full">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Items in cart:</span>
                      <span className="font-semibold">{cartCount}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-sm text-muted-foreground">Total:</span>
                      <span className="font-semibold text-primary">${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Checkout
                  </Button>
                </CardFooter>
              )}
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-8 animate-fade-in">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search for medicines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Products */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                        <product.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <Badge variant={product.inStock ? "default" : "secondary"}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="text-2xl font-bold text-primary">${product.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full"
                      onClick={() => addToCart(product.id)}
                      disabled={!product.inStock}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>

        {/* Prescription Upload Section */}
        <Card className="mt-12 bg-gradient-hero border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Prescription Medicines?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Upload your prescription and we'll process your order with verified medicines from licensed pharmacies.
            </p>
            <Button size="lg" variant="outline">
              Upload Prescription
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pharmacy;
