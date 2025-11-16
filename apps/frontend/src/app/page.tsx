import CategoryGrid from '../components/home/CategoryGrid';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TrendingProducts from '../components/home/TrendingProducts';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <TrendingProducts />
    </div>
  );
}
