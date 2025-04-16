import { View, ViewProps } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledSafeAreaView = styled(RNSafeAreaView);

interface SafeAreaViewProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

export const SafeAreaView = ({ children, className = '', ...props }: SafeAreaViewProps) => {
  return (
    <StyledSafeAreaView
      className={`flex-1 bg-white ${className}`}
      {...props}
    >
      {children}
    </StyledSafeAreaView>
  );
}; 