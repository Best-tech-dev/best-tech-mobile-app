import { View, Pressable } from 'react-native';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Support: undefined;
};

const StyledView = styled(View);
const StyledPressable = styled(Pressable);

export const ChatWidget = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <StyledView className="absolute bottom-12 right-6">
      <StyledPressable
        onPress={() => navigation.navigate('Support')}
        className="w-14 h-14 bg-green-500 rounded-full items-center justify-center shadow-lg"
      >
        <Ionicons name="chatbubbles" size={24} color="white" />
      </StyledPressable>
    </StyledView>
  );
}; 