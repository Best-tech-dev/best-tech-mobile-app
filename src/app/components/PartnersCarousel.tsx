import React from 'react';
import { View, Text, ScrollView, Animated, Dimensions, Image } from 'react-native';
import { styled } from 'nativewind';
import { typography } from '../theme/theme';
import { useEffect, useRef } from 'react';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const AnimatedView = Animated.createAnimatedComponent(StyledView);

const PARTNER_LOGOS = [
  require('../../../assets/images/clients/accessible-publishers-logo.png'),
  require('../../../assets/images/clients/accessstudy-logo.png'),
  require('../../../assets/images/clients/best-in-print-academy-logo.png'),
  require('../../../assets/images/clients/best-in-print-logo.png'),
  require('../../../assets/images/clients/freshpro-logo.png'),
  require('../../../assets/images/clients/sectra-logo.png'),
  require('../../../assets/images/clients/universal-basic-education-ubec-logo.png'),
  require('../../../assets/images/clients/university-of-nigeria-nsukka-logo.png'),
];

const { width } = Dimensions.get('window');
const LOGO_WIDTH = width * 0.35;
const LOGO_HEIGHT = 60;
const SCROLL_SPEED = 8000;

export const PartnersCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.timing(scrollX, {
          toValue: -width,
          duration: SCROLL_SPEED,
          useNativeDriver: true,
          isInteraction: false,
        })
      ).start();
    };

    startAnimation();
    return () => {
      scrollX.stopAnimation();
    };
  }, []);

  const renderLogos = () => {
    return (
      <StyledView className="flex-row">
        {PARTNER_LOGOS.map((logo, index) => (
          <StyledView
            key={`logo-${index}`}
            style={{
              width: LOGO_WIDTH,
              height: LOGO_HEIGHT,
              marginHorizontal: 10,
            }}
          >
            <StyledImage
              source={logo}
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="contain"
            />
          </StyledView>
        ))}
      </StyledView>
    );
  };

  return (
    <StyledView className="py-12 bg-white">
      <StyledText className={`${typography.h2} text-center mb-4`}>
        Our Trusted Clients
      </StyledText>

      <StyledText className={`${typography.body} text-center mb-8 text-gray-600 text-sm mx-10`}>
        We have worked with a wide range of clients, from small startups to large corporations, and we are proud to have earned their trust.
      </StyledText>

      <StyledView className="overflow-hidden">
        <AnimatedView
          className="flex-row"
          style={{
            transform: [{ translateX: scrollX }],
          }}
        >
          {renderLogos()}
          {renderLogos()}
          {renderLogos()}
        </AnimatedView>
      </StyledView>
    </StyledView>
  );
}; 