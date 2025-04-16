import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from '../components/SafeAreaView';
import { typography } from '../theme/theme';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);

export const AboutScreen = () => {
  return (
    <SafeAreaView>
      <StyledScrollView className="flex-1">
        <StyledView className="px-4 py-6">
          <StyledText className={`${typography.h1} text-green-500 mb-2`}>
            About Us
          </StyledText>
          <StyledText className={`${typography.body} text-gray-600`}>
            Learn more about our company and mission
          </StyledText>
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
}; 