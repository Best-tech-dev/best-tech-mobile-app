import { View, Text, Image, Pressable, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from '../components/SafeAreaView';
import { colors, typography } from '../theme/theme';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);
const StyledTextInput = styled(TextInput);
const StyledScrollView = styled(ScrollView);

export const StudentScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Handle sign in logic here
    console.log('Sign in pressed');
  };

  const handleForgotPassword = () => {
    // Handle forgot password navigation here
    console.log('Forgot password pressed');
  };

  const handleContactUs = () => {
    // Handle contact us navigation here
    console.log('Contact us pressed');
  };

  return (
    <SafeAreaView>
      <StyledScrollView className="flex-1 bg-white">
        <StyledView className="flex-1 items-center justify-center px-6 py-8">
          {/* Logo/Image at the top */}
          <StyledImage
            source={require('../../../assets/images/best-tech-logo.png')}
            className="w-40 h-40 mb-8"
            resizeMode="contain"
          />

          {/* Welcome Back Text */}
          <StyledText className={`${typography.h1} mb-2`} style={{ color: colors.text.primary }}>
            Welcome Back!
          </StyledText>
          <StyledText className={`${typography.body} mb-8 text-center`} style={{ color: colors.text.secondary }}>
            Sign in to continue your learning journey
          </StyledText>

          {/* Email Input */}
          <StyledView className="w-full mb-4">
            <StyledText className="text-sm mb-1" style={{ color: colors.text.primary }}>
              Email
            </StyledText>
            <StyledView className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3">
              <Ionicons name="mail-outline" size={20} color={colors.text.secondary} />
              <StyledTextInput
                className="flex-1 ml-2"
                placeholder="Enter your email"
                placeholderTextColor={colors.text.secondary}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </StyledView>
          </StyledView>

          {/* Password Input */}
          <StyledView className="w-full mb-6">
            <StyledText className="text-sm mb-1" style={{ color: colors.text.primary }}>
              Password
            </StyledText>
            <StyledView className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3">
              <Ionicons name="lock-closed-outline" size={20} color={colors.text.secondary}/>
              <StyledTextInput
                className="flex-1 ml-2"
                placeholder="Enter your password"
                placeholderTextColor={colors.text.secondary}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <StyledPressable onPress={() => setShowPassword(!showPassword)}>
                <Ionicons 
                  name={showPassword ? "eye-outline" : "eye-off-outline"} 
                  size={20} 
                  color={colors.text.secondary} 
                />
              </StyledPressable>
            </StyledView>
          </StyledView>

          {/* Forgot Password Link */}
          <StyledPressable 
            className="w-full items-end mb-6"
            onPress={handleForgotPassword}
          >
            <StyledText className="text-sm" style={{ color: colors.primary }}>
              Forgot Password?
            </StyledText>
          </StyledPressable>

          {/* Sign In Button */}
          <StyledPressable
            className="w-full bg-green-500 py-4 rounded-lg items-center mb-6"
            onPress={handleSignIn}
          >
            <StyledText className="text-white font-semibold">
              Sign In
            </StyledText>
          </StyledPressable>

          {/* Contact Us Button */}
          <StyledPressable
            className="w-full border border-green-500 py-4 rounded-lg items-center"
            onPress={handleContactUs}
          >
            <StyledView className="flex-row items-center">
              <Ionicons name="help-circle-outline" size={20} color={colors.primary} />
              <StyledText className="ml-2" style={{ color: colors.primary }}>
                Contact Us
              </StyledText>
            </StyledView>
          </StyledPressable>
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
};