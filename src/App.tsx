import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Star, Leaf, MessageCircle, Mail, Quote, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const featuredDishes = [
  { 
    name: 'Paneer Butter Masala', 
    price: '₹280', 
    desc: 'Soft paneer cubes in a rich, creamy, and mildly sweet tomato gravy.', 
    images: [
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?fm=webp&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?fm=webp&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?fm=webp&fit=crop&w=800&q=60'
    ]
  },
  { 
    name: 'Veg Fried Rice', 
    price: '₹120', 
    desc: 'Wok-tossed rice with fresh crunchy vegetables & aromatic spices.', 
    images: [
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?fm=webp&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1603133872878-684f208fb84b?fm=webp&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1552611052-33e04de081de?fm=webp&fit=crop&w=800&q=60'
    ]
  },
  { 
    name: 'Kulhad Chai', 
    price: '₹20', 
    desc: 'Traditional Indian tea served in a clay cup to bring out the earthy aroma.', 
    images: [
      'https://images.unsplash.com/photo-1571934811356-5cc506f526eb?fm=webp&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1561340156-df5380590a2a?fm=webp&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1570889508537-88eb7e974950?fm=webp&fit=crop&w=800&q=60'
    ]
  },
];

const comprehensiveMenu = [
  {
    category: "Breakfast & Snacks",
    items: [
      { name: "Samosa", price: "15" },
      { name: "Bread Pakora", price: "20" },
      { name: "Bun Makkhan", price: "40" },
      { name: "French Fry", price: "80" },
      { name: "Pav Bhaji", price: "100" },
      { name: "Chola Bhatora", price: "100" },
    ]
  },
  {
    category: "Paratha & Pakora",
    items: [
      { name: "Aloo / Onion Paratha", price: "80" },
      { name: "Paneer Paratha", price: "100" },
      { name: "Mix Paratha", price: "100" },
      { name: "Onion / Potato Pakori", price: "80" },
      { name: "Paneer Pakori (8pcs)", price: "100" },
      { name: "Mix Pakori", price: "100" },
    ]
  },
  {
    category: "Indian Main Course",
    items: [
      { name: "Matar / Palak Paneer", price: "270" },
      { name: "Kadai / Handi Paneer (Spl)", price: "280" },
      { name: "Paneer Butter Masala (Spl)", price: "280" },
      { name: "Mushroom Masala", price: "250" },
      { name: "Mix Veg (Spl)", price: "250" },
      { name: "Chana Masala", price: "230" },
    ]
  },
  {
    category: "Daal & Thali",
    items: [
      { name: "Daal Fry", price: "150" },
      { name: "Daal Tadka (Spl)", price: "180" },
      { name: "Daal Makhani (Spl)", price: "200" },
      { name: "Plan Thali", price: "150" },
      { name: "Special Thali", price: "180" },
      { name: "NH 56 Spl. Thali", price: "200" },
    ]
  },
  {
    category: "South Indian",
    items: [
      { name: "Plain Dosa", price: "80" },
      { name: "Masala Dosa", price: "120" },
      { name: "Paneer Dosa", price: "150" },
      { name: "Rawa Masala Dosa", price: "150" },
      { name: "Idli Sambhar (2pc)", price: "80" },
      { name: "Wendubada", price: "80" },
    ]
  },
  {
    category: "Chinese Food",
    items: [
      { name: "Veg Noodles", price: "80" },
      { name: "Veg Fried Rice", price: "180" },
      { name: "Chilli Paneer", price: "280" },
      { name: "Veg Burger", price: "70" },
      { name: "Veg Sandwich", price: "50" },
      { name: "Chilli Potato", price: "100" },
    ]
  },
  {
    category: "Breads & Rice",
    items: [
      { name: "Tandoori Roti", price: "12" },
      { name: "Butter Naan", price: "40" },
      { name: "Garlic Naan", price: "50" },
      { name: "Plan Rice (Half/Full)", price: "50/100" },
      { name: "Jeera Rice", price: "150" },
      { name: "Paneer Pulao", price: "190" },
    ]
  },
  {
    category: "Beverages & Desserts",
    items: [
      { name: "Special Chai", price: "20" },
      { name: "Coffee", price: "30" },
      { name: "Kulhad Lassi (Spl)", price: "50" },
      { name: "Kulhad Kheer (Spl)", price: "60" },
      { name: "Cold Drink", price: "MRP" },
      { name: "Water Bottle", price: "MRP" },
    ]
  }
];

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Regular Traveler",
    content: "The best dhaba on NH731! The food is authentic, fresh, and served really fast. Their thali is an absolute must-try when driving down this route.",
    rating: 5
  },
  {
    name: "Sneha Sharma",
    role: "Local Resident",
    content: "Very clean and hygienic place. As a pure vegetarian family, this is our go-to restaurant for weekend dinners. Great ambiance and very friendly staff!",
    rating: 5
  },
  {
    name: "Amit Singhal",
    role: "Tourist",
    content: "Stopped here randomly during a road trip and was pleasantly surprised. The paneer dishes are fantastic and the lassi is to die for. Highly recommend!",
    rating: 5
  }
];

const ImageCarousel = ({ images, alt }: { images: string[], alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full h-full relative group/carousel">
      <AnimatePresence mode="wait">
        <motion.img 
          key={currentIndex}
          src={images[currentIndex]} 
          alt={`${alt} - view ${currentIndex + 1}`} 
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover border-b border-stone-100 group-hover:scale-105 transition-transform duration-700"
        />
      </AnimatePresence>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
        <button 
          onClick={prevImage}
          className="p-1 bg-white/70 hover:bg-white rounded-full text-stone-800 shadow-sm transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextImage}
          className="p-1 bg-white/70 hover:bg-white rounded-full text-stone-800 shadow-sm transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5 z-10">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full bg-white transition-all ${idx === currentIndex ? 'w-4 opacity-100' : 'w-1.5 opacity-50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative scroll-smooth">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('#home')}>
              <div className="w-12 h-12 relative flex-shrink-0 mr-3 shadow-sm rounded-full overflow-hidden bg-white border border-stone-200">
                <div className="absolute inset-0 bg-orange-600 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <img 
                  src="/logo.jpg" 
                  alt="56 Highwey King Logo" 
                  loading="lazy"
                  className="w-full h-full object-contain relative z-10 bg-white transition-opacity duration-300"
                  onError={(e) => { 
                    const target = e.currentTarget;
                    target.style.opacity = '0'; 
                    setTimeout(() => { if (target) target.style.display = 'none'; }, 300);
                  }}
                />
              </div>
              <div>
                <h1 className="font-serif text-xl md:text-xl lg:text-2xl font-bold text-stone-900 leading-none">
                  56 Highwey King Restaurant
                </h1>
                <p className="text-xs text-orange-600 font-medium tracking-wide uppercase mt-0.5">
                  100% Pure Veg
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-stone-600 hover:text-orange-600 font-medium transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollTo('#menu')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md shadow-orange-600/20 active:scale-95"
              >
                Order Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-stone-600 hover:text-orange-600 focus:outline-none p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-stone-100"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className="block w-full text-left px-3 py-4 text-base font-medium text-stone-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pb-20 md:pb-24">
        {/* HERO SECTION */}
        <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 lg:pb-32 lg:min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-stone-900/60 z-10"></div>
            <img 
              src="/cover.jpg" 
              alt="Restaurant Cover" 
              loading="lazy"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1585937421612-70a008356fbe?fm=webp&fit=crop&w=2000&q=60";
              }}
            />
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full mb-6">
                <Leaf className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium tracking-wide uppercase">PURE VEGETARIAN RESTAURANT</span>
              </div>
              <h2 className="text-5xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg leading-tight uppercase">
                56 HIGHWEY KING RESTAURANT
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-amber-300 mb-10 max-w-2xl mx-auto drop-shadow-md tracking-wider">
                किंंग का खाना भुल ना जाना.......
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => scrollTo('#menu')}
                  className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-xl shadow-orange-600/30 hover:-translate-y-1"
                >
                  View Our Menu
                </button>
                <a 
                  href="https://wa.me/919451512400?text=Hello,%20I%20want%20to%20order%20from%2056%20Highwey%20King%20Restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white text-stone-900 hover:bg-stone-50 px-8 py-4 rounded-full font-medium text-lg transition-all shadow-xl flex items-center justify-center gap-2 hover:-translate-y-1"
                >
                  <WhatsAppIcon className="w-5 h-5 text-green-500" />
                  Order on WhatsApp
                </a>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=56+Highwey+King+Restaurant+and+Family+Dhaba,+Koiripur,+Uttar+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-stone-900 text-white hover:bg-stone-800 px-8 py-4 rounded-full font-medium text-lg transition-all shadow-xl flex items-center justify-center gap-2 border border-stone-700 hover:-translate-y-1"
                >
                  <MapPin className="w-5 h-5 text-orange-500" />
                  Get Directions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MENU SECTION */}
        <section id="menu" className="py-20 md:py-28 bg-stone-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">Our Specialties</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">Discover Our Menu</h2>
              <p className="text-stone-600 text-lg">
                Freshly cooked pure vegetarian delights crafted with passion and traditional spices.
              </p>
            </div>

            {/* Featured Cards */}
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20 mb-16">
                <Loader2 className="w-12 h-12 text-orange-500 animate-spin mb-4" />
                <p className="text-stone-500 font-medium">Loading featured dishes...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {featuredDishes.map((dish, idx) => (
                  <motion.div 
                    key={dish.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-stone-100 group"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <ImageCarousel images={dish.images} alt={dish.name} />
                      <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-orange-600 shadow-sm">
                        {dish.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold font-serif">{dish.name}</h3>
                        <div className="flex text-amber-400">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                      <p className="text-stone-500 mb-6 line-clamp-2">
                        {dish.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Full List */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 w-full mx-auto">
              <h3 className="text-3xl font-serif font-bold mb-12 text-center border-b border-stone-100 pb-6 uppercase tracking-widest text-stone-800">
                Complete Menu
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                {isLoading ? (
                  <div className="col-span-full flex flex-col items-center justify-center py-20">
                    <Loader2 className="w-12 h-12 text-orange-500 animate-spin mb-4" />
                    <p className="text-stone-500 font-medium">Loading full menu...</p>
                  </div>
                ) : (
                  comprehensiveMenu.map((category) => (
                    <div key={category.category} className="space-y-6">
                      <h4 className="text-xl font-bold font-serif text-orange-600 border-b border-orange-100 pb-3 flex items-center justify-between">
                        <span>{category.category}</span>
                      </h4>
                      <div className="space-y-4">
                        {category.items.map((item) => (
                          <div key={item.name} className="flex items-baseline justify-between group">
                            <span className="text-stone-700 font-medium group-hover:text-amber-600 transition-colors text-[15px]">
                              {item.name}
                            </span>
                            <div className="flex-1 border-b-2 border-dotted border-stone-200 mx-3 relative top-[-4px] group-hover:border-amber-200 transition-colors"></div>
                            <span className="text-stone-900 font-bold text-[15px] whitespace-nowrap">
                              {item.price === 'MRP' ? 'MRP' : `₹${item.price}`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <a 
                href="https://wa.me/919451512400?text=Hello,%20I%20want%20to%20order%20from%2056%20Highwey%20King%20Restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-full font-medium transition-colors"
               >
                 <span>Order for Pickup/Delivery</span>
                 <MessageCircle className="w-5 h-5 ml-2" />
               </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 md:py-28 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=webp&fit=crop&w=1200&q=60" 
                    alt="Restaurant Interior" 
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element bg */}
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-orange-200 rounded-3xl z-0"></div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm mb-2 block">The Royal Experience</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-stone-900">
                  Fresh Food. Fast Service. Family-Friendly.
                </h2>
                <div className="space-y-6 text-lg text-stone-600 pb-8 border-b border-orange-200/60">
                  <p>
                    Located perfectly on the highway, <strong>56 Highwey King Restaurant</strong> is your oasis of flavor and comfort. We believe that traveling shouldn't mean compromising on good food.
                  </p>
                  <p>
                    Every dish is prepared using the freshest ingredients, traditional Indian recipes, and a whole lot of love. Whether you need a quick hot snack or a fulfilling royal dinner, our 100% pure vegetarian kitchen delivers unmatched taste with hygiene at its core.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">Pure Veg</h4>
                      <p className="text-sm text-stone-500">100% hygienic</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">Fast Service</h4>
                      <p className="text-sm text-stone-500">Back on road quick</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-20 md:py-28 bg-stone-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-10 -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl opacity-10 -ml-40 -mb-40"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Word of Mouth</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">What Our Guests Say</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-3xl border border-stone-700 hover:border-orange-500/50 transition-colors"
                >
                  <Quote className="w-10 h-10 text-orange-500 mb-6 opacity-50" />
                  <p className="text-stone-300 text-lg mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-stone-400 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-stone-900">Visit Us</h2>
              <p className="text-lg text-stone-600">
                Stop by for a warm meal or get in touch for takeaway orders.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 shadow-xl shadow-stone-200/50">
              
              {/* Contact Info */}
              <div className="lg:w-1/3 p-8 md:p-12 bg-stone-900 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>
                
                <h3 className="text-2xl font-serif font-bold mb-8 relative z-10">Contact Information</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-stone-800/80 p-3 rounded-full text-orange-400 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm text-stone-400 font-medium mb-1 uppercase tracking-wider">Location</h4>
                      <p className="text-lg font-medium leading-relaxed mb-3">
                        NH 731, Koiripur, Lambhua,<br />
                        sultanpur, Uttar Pradesh 222301
                      </p>
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=56+Highwey+King+Restaurant+and+Family+Dhaba,+Koiripur,+Uttar+Pradesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-stone-800 text-stone-200 hover:text-white hover:bg-stone-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-stone-700"
                      >
                        <MapPin className="w-4 h-4 text-orange-500" />
                        Get Directions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-stone-800/80 p-3 rounded-full text-orange-400 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm text-stone-400 font-medium mb-1 uppercase tracking-wider">Call Us</h4>
                      <p className="text-lg font-medium">+919451512400</p>
                      <p className="text-stone-400 text-sm mt-1">(Please contact us for orders)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-stone-800/80 p-3 rounded-full text-orange-400 shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm text-stone-400 font-medium mb-1 uppercase tracking-wider">Email Us</h4>
                      <p className="text-lg font-medium"><a href="mailto:56highweyking@gmail.com" className="hover:text-orange-400 transition-colors">56highweyking@gmail.com</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-stone-800/80 p-3 rounded-full text-orange-400 shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm text-stone-400 font-medium mb-1 uppercase tracking-wider">Hours</h4>
                      <p className="text-lg font-medium">07:00 AM - 12:00 PM</p>
                      <p className="text-stone-400 text-sm mt-1">Daily</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 relative z-10">
                  <a 
                    href="https://wa.me/919451512400?text=Hello,%20I%20want%20to%20order%20from%2056%20Highwey%20King%20Restaurant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white py-4 px-6 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <WhatsAppIcon className="w-6 h-6" />
                    Order via WhatsApp
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="lg:w-2/3 min-h-[400px] lg:min-h-full">
                <iframe 
                  title="Google Maps Location"
                  src="https://maps.google.com/maps?q=26.0439695,82.3498498&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '400px' }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="fixed bottom-0 w-full z-40 bg-stone-950 border-t border-stone-800 text-stone-400 py-3 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-1 text-xs sm:text-sm">
          <span className="text-white font-serif font-bold">56 Highwey King Restaurant</span>
          <p>
            © {new Date().getFullYear()} 56 Highwey King Restaurant. All rights reserved.
          </p>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-20 right-6 z-50 flex flex-col gap-4">
        {/* CALL BUTTON */}
        <a 
          href="tel:+919451512400"
          className="bg-orange-600 hover:bg-orange-500 text-white p-4 rounded-full shadow-2xl hover:shadow-orange-600/40 transition-all flex items-center justify-center hover:-translate-y-1 group"
          aria-label="Call Us"
        >
          <Phone className="w-8 h-8" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold ease-in-out px-0 group-hover:pr-2">
            Call Us
          </span>
        </a>

        {/* WHATSAPP BUTTON */}
        <a 
          href="https://wa.me/919451512400?text=Hello,%20I%20want%20to%20order%20from%2056%20Highwey%20King%20Restaurant"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#1ebd5a] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all flex items-center justify-center hover:-translate-y-1 group"
          aria-label="Order on WhatsApp"
        >
          <WhatsAppIcon className="w-8 h-8" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold ease-in-out px-0 group-hover:pr-2">
            Order Now
          </span>
        </a>
      </div>
    </div>
  );
}
