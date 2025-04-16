import { View, Text, Animated, Dimensions, Image } from 'react-native';
import { styled } from 'nativewind';
import { typography } from '../theme/theme';
import { useEffect, useRef, useState } from 'react';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const STATS = [
  {
    id: '1',
    value: 75,
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    id: '2',
    value: 99,
    suffix: '%',
    label: 'Client retention',
  },
  {
    id: '3',
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    id: '4',
    value: 10,
    suffix: '+',
    label: 'Experienced Team Members',
  },
];

const AnimatedStat = ({ value, suffix, label, delay }: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const animationRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (delay) {
      setTimeout(() => startCounting(), delay);
    } else {
      startCounting();
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    let start = 0;
    const increment = value / 50; // Will take 50 steps to reach the value
    const timer = 2000 / 50; // Complete in 2 seconds

    const updateValue = () => {
      start += increment;
      if (start < value) {
        setCurrentValue(Math.floor(start));
        animationRef.current = setTimeout(updateValue, timer);
      } else {
        setCurrentValue(value);
      }
    };

    updateValue();
  };

  return (
    <StyledView className="items-center py-4">
      <StyledView className="flex-row items-end mb-1">
        <StyledText className={`${typography.h2} text-green-500`}>
          {currentValue}
        </StyledText>
        <StyledText className={`${typography.h3} text-green-500 mb-1 ml-1`}>
          {suffix}
        </StyledText>
      </StyledView>
      <StyledText className={`${typography.body} text-gray-600 text-center`}>
        {label}
      </StyledText>
    </StyledView>
  );
};

export const CompanyStats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const viewRef = useRef(null);

  const isElementInViewport = (element: any) => {
    const window = Dimensions.get('window');
    const layout = element?.measure((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
      const isVisible = pageY < window.height && pageY + height > 0;
      if (isVisible && !hasAnimated) {
        setHasAnimated(true);
      }
    });
    return layout;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (viewRef.current && !hasAnimated) {
        isElementInViewport(viewRef.current);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  return (
    <StyledView 
      ref={viewRef}
      className="py-12 px-4 bg-gray-50"
    >
      <StyledView className="mb-8">
        <StyledText className="text-green-500 text-lg mb-4 text-center">
          Digital Innovation Through Technology Excellence
        </StyledText>
        <StyledText className={`${typography.h2} text-center mb-4`}>
          We're more than just a technology partner – we're your catalyst for digital transformation.
        </StyledText>
        <StyledText className={`${typography.body} text-center text-gray-600 text-sm`}>
          With a foundation built on technical excellence and customer satisfaction, Best Technologies Limited is at the forefront of digital innovation, helping businesses thrive in the digital age.
        </StyledText>
      </StyledView>

      <StyledView className="flex-row flex-wrap justify-between mb-4">
        {STATS.map((stat, index) => (
          <StyledView key={stat.id} className="w-1/2 mb-6">
            <AnimatedStat
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={hasAnimated ? index * 200 : 0}
            />
          </StyledView>
        ))}
      </StyledView>

      <StyledView className="items-center">
        <StyledImage
          source={require('../../../assets/images/imgs/meet-the-team.jpg')}
          className="w-full h-[350px] rounded-xl"
          resizeMode="cover"
        />
      </StyledView>
    </StyledView>
  );
}; 