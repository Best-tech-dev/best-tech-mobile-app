import { ScrollView, View } from 'react-native';
import { styled } from 'nativewind';
import { SafeAreaView } from '../components/SafeAreaView';
import { HeroSection } from '../components/HeroSection';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { CompanyIntro } from '../components/CompanyIntro';
import { CompanyStats } from '../components/CompanyStats';
import { PartnersCarousel } from '../components/PartnersCarousel';
import { DynamicContentSection } from '../components/DynamicContentSection';
import Newsletter from '../components/Newsletter';
import { ChatWidget } from '../components/ChatWidget';

const StyledScrollView = styled(ScrollView);
const StyledView = styled(View);

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StyledView className="flex-1 relative">
        <StyledScrollView className="flex-1">
          <HeroSection />
          <CompanyIntro />
          <CompanyStats />
          <PartnersCarousel />
          <TestimonialsCarousel />
          <DynamicContentSection />
          <Newsletter/>
        </StyledScrollView>
        <ChatWidget />
      </StyledView>
    </SafeAreaView>
  );
}; 