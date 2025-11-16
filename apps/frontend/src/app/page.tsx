import CategoryGrid from '../components/home/CategoryGrid';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TrendingProducts from '../components/home/TrendingProducts';
import CustomerReviewsSnippet from '../components/home/CustomerReviewsSnippet';
import SecurePaymentBadges from '../components/home/SecurePaymentBadges';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <TrendingProducts />
      <CustomerReviewsSnippet />
      <SecurePaymentBadges />
    </div>
  );
}
