import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from '../components/SafeAreaView';
import { colors, typography } from '../theme/theme';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);

export const ServicesScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <StyledScrollView className="flex-1 px-4">
        <StyledView className="py-6">
          <StyledText className={`${typography.h1} text-green-500 mb-2`}>
            Our Services
          </StyledText>
          <StyledText className={`${typography.body} text-gray-600`}>
            Comprehensive technology solutions for your business needs
          </StyledText>
        </StyledView>

        <StyledView className="space-y-4">
          <StyledView className="bg-green-50 rounded-xl p-6">
            <StyledText className={`${typography.h2} text-green-600 mb-2`}>
              Web Development
            </StyledText>
            <StyledText className={`${typography.body} text-gray-600`}>
              Custom web applications and responsive websites
            </StyledText>
          </StyledView>

          <StyledView className="bg-green-50 rounded-xl p-6">
            <StyledText className={`${typography.h2} text-green-600 mb-2`}>
              Mobile Apps
            </StyledText>
            <StyledText className={`${typography.body} text-gray-600`}>
              Native and cross-platform mobile applications
            </StyledText>
          </StyledView>

          <StyledView className="bg-green-50 rounded-xl p-6">
            <StyledText className={`${typography.h2} text-green-600 mb-2`}>
              Cloud Solutions
            </StyledText>
            <StyledText className={`${typography.body} text-gray-600`}>
              Scalable cloud infrastructure and services
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
}; 