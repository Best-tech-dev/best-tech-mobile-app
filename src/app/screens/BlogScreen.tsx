import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from '../components/SafeAreaView';
import { colors, typography } from '../theme/theme';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);

export const BlogScreen = () => {
  return (
    <SafeAreaView>
      <StyledScrollView className="flex-1">
        <StyledView className="px-4 py-6">
          <StyledText className={`${typography.h1} text-green-500 mb-2`}>
            Latest Articles
          </StyledText>
          <StyledText className={`${typography.body} text-gray-600`}>
            Stay updated with our latest insights and industry news
          </StyledText>
        </StyledView>

        <StyledView className="px-4 space-y-4">
          <StyledView className="bg-white rounded-xl p-6 shadow-sm">
            <StyledText className={`${typography.h2} text-gray-800 mb-2`}>
              The Future of Web Development
            </StyledText>
            <StyledText className={`${typography.body} text-gray-600`}>
              Exploring the latest trends and technologies shaping the web
            </StyledText>
          </StyledView>

          <StyledView className="bg-white rounded-xl p-6 shadow-sm">
            <StyledText className={`${typography.h2} text-gray-800 mb-2`}>
              Mobile App Development Best Practices
            </StyledText>
            <StyledText className={`${typography.body} text-gray-600`}>
              Essential tips for building successful mobile applications
            </StyledText>
          </StyledView>

          <StyledView className="bg-white rounded-xl p-6 shadow-sm">
            <StyledText className={`${typography.h2} text-gray-800 mb-2`}>
              Cloud Computing Trends 2024
            </StyledText>
            <StyledText className={`${typography.body} text-gray-600`}>
              What's new in cloud technology and how it affects businesses
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
}; 