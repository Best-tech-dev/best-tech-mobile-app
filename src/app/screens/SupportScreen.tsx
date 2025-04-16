import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from '../components/SafeAreaView';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
import { useState, useRef, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTextInput = styled(TextInput);
const StyledPressable = styled(Pressable);

const MOCK_MESSAGES = [
  {
    id: '1',
    type: 'bot',
    message: 'Hello! Welcome to Best Technologies support. How can I help you today?',
    timestamp: '10:00 AM'
  },
  {
    id: '2',
    type: 'user',
    message: 'Hi, I\'m interested in the Frontend Development bootcamp',
    timestamp: '10:01 AM'
  },
  {
    id: '3',
    type: 'bot',
    message: 'Great choice! Our Frontend Development bootcamp is a 12-week intensive program covering React, Next.js, and modern web development practices. Would you like to know more about the curriculum or the schedule?',
    timestamp: '10:01 AM'
  },
  {
    id: '4',
    type: 'user',
    message: 'What\'s the schedule like?',
    timestamp: '10:02 AM'
  },
  {
    id: '5',
    type: 'bot',
    message: 'The bootcamp runs Monday to Friday, 9 AM - 3 PM WAT. We also have flexible evening classes available. Would you like me to send you the detailed schedule?',
    timestamp: '10:02 AM'
  }
];

export const SupportScreen = () => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <StyledView className="flex-1 bg-white">
      {/* Header */}
      <StyledView className="flex-row items-center px-4 py-3 border-b border-gray-200 mt-12">
        <StyledPressable 
          onPress={() => navigation.goBack()}
          className="mr-4"
        >
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </StyledPressable>
        <StyledView>
          <StyledText className="text-lg font-semibold text-gray-800">
            Support Chat
          </StyledText>
          <StyledText className="text-sm text-gray-500">
            Usually responds in a few minutes
          </StyledText>
        </StyledView>
      </StyledView>

      {/* Chat Messages */}
      <StyledScrollView
        ref={scrollViewRef}
        className="flex-1 px-4"
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {MOCK_MESSAGES.map((msg) => (
          <StyledView
            key={msg.id}
            className={`flex-row ${msg.type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
          >
            <StyledView
              className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                msg.type === 'user' ? 'bg-green-500' : 'bg-gray-100'
              }`}
            >
              <StyledText
                className={`${msg.type === 'user' ? 'text-white' : 'text-gray-800'}`}
              >
                {msg.message}
              </StyledText>
              <StyledText
                className={`text-xs mt-1 ${
                  msg.type === 'user' ? 'text-green-100' : 'text-gray-500'
                }`}
              >
                {msg.timestamp}
              </StyledText>
            </StyledView>
          </StyledView>
        ))}
      </StyledScrollView>

      {/* Input Area */}
      <StyledView className="px-4 py-2 border-t border-gray-200">
        <StyledView className="flex-row items-center space-x-2">
          <StyledTextInput
            className="flex-1 bg-gray-100 rounded-full px-4 py-2"
            placeholder="Type your message..."
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <StyledPressable
            onPress={toggleRecording}
            className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center"
          >
            <Ionicons
              name={isRecording ? "stop-circle" : "mic"}
              size={24}
              color={isRecording ? "#EF4444" : "#374151"}
            />
          </StyledPressable>
          <StyledPressable
            onPress={handleSend}
            className="w-10 h-10 rounded-full bg-green-500 items-center justify-center"
          >
            <Ionicons name="send" size={20} color="white" />
          </StyledPressable>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}; 