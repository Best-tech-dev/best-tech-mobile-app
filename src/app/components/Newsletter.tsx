import { View, Text, Image, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styled } from 'nativewind';
import { ScrollView } from 'react-native-gesture-handler';
import { typography } from '../theme/theme';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);
const StyledTextInput = styled(TextInput);

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log('Subscribe with email:', email);
    setEmail('');
  };

  return (
    <StyledView className="py-8 px-6 bg-white">
      <StyledView className="max-w-md mx-auto">
        {/* Icon or Image */}
        <StyledView className="items-center mb-4">
          <StyledImage
            source={require('../../../assets/images/imgs/animated-engine.png')}
            className="w-12 h-12"
            resizeMode="contain"
          />
        </StyledView>

        {/* Text Content */}
        <StyledText className={`${typography.h2} text-center mb-3`}>
          Stay Updated
        </StyledText>
        <StyledText className="text-gray-600 text-center mb-8 text-sm">
          Subscribe to our newsletter and receive the latest updates on technology trends, 
          bootcamp schedules, and exclusive offers directly in your inbox.
        </StyledText>

        {/* Email Input and Button */}
        <StyledView className="space-y-4">
          <StyledView className="relative">
            <StyledTextInput
              className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200"
              placeholder="Enter your email address"
              placeholderTextColor="#6B7280"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </StyledView>

          <StyledPressable
            onPress={handleSubscribe}
            className="w-full h-12 bg-green-500 rounded-xl items-center justify-center"
          >
            <StyledText className="text-white font-semibold">
              Subscribe Now
            </StyledText>
          </StyledPressable>

          {/* Privacy Note */}
          <StyledText className="text-xs text-gray-500 text-center mt-4 mb-12">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  )
}

export default Newsletter