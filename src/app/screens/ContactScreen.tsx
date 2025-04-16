import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from '../components/SafeAreaView';
import { colors, typography } from '../theme/theme';
import { styled } from 'nativewind';
import { SOCIAL_LINKS } from '../constants';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);

export const ContactScreen = () => {
  return (
    <SafeAreaView>
      <StyledScrollView className="flex-1">
        <StyledView className="px-4 py-6">
          <StyledText className={`${typography.h1} text-green-500 mb-2`}>
            Contact Us
          </StyledText>
          <StyledText className={`${typography.body} text-gray-600`}>
            Get in touch with our team for your technology needs
          </StyledText>
        </StyledView>

        <StyledView className="px-4 space-y-6">
          <StyledView className="bg-white rounded-xl p-6 shadow-sm">
            <StyledText className={`${typography.h2} text-gray-800 mb-2`}>
              Email
            </StyledText>
            <StyledText className={`${typography.body} text-gray-600`}>
              info@besttechnologies.com
            </StyledText>
          </StyledView>

          <StyledView className="bg-white rounded-xl p-6 shadow-sm">
            <StyledText className={`${typography.h2} text-gray-800 mb-2`}>
              Phone
            </StyledText>
            <StyledText className={`${typography.body} text-gray-600`}>
              +1 (555) 123-4567
            </StyledText>
          </StyledView>

          <StyledView className="bg-white rounded-xl p-6 shadow-sm">
            <StyledText className={`${typography.h2} text-gray-800 mb-2`}>
              Address
            </StyledText>
            <StyledText className={`${typography.body} text-gray-600`}>
              123 Tech Street, Suite 100{'\n'}
              Silicon Valley, CA 94025
            </StyledText>
          </StyledView>
        </StyledView>

        <StyledView className="px-4 mt-6">
          <StyledText className={typography.h3 + " mb-2"}>Get in Touch</StyledText>
          <StyledText className={typography.body}>
            We'd love to hear from you. Reach out to us through any of our channels:
          </StyledText>
          <StyledView className="mt-4">
            {Object.entries(SOCIAL_LINKS).map(([platform, link]) => (
              <StyledView key={platform} className="mb-2">
                <StyledText className={typography.body}>
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}: {link}
                </StyledText>
              </StyledView>
            ))}
          </StyledView>
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
}; 