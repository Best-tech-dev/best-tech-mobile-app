import { View, Text, ScrollView, Dimensions, ImageBackground, Pressable, Animated } from 'react-native';
import { styled } from 'nativewind';
import { colors, typography } from '../theme/theme';
import { useState, useRef, useEffect } from 'react';

const { width } = Dimensions.get('window');
const AUTO_SLIDE_INTERVAL = 4000;

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledImageBackground = styled(ImageBackground);
const StyledPressable = styled(Pressable);
const AnimatedText = Animated.createAnimatedComponent(StyledText);
const AnimatedPressable = Animated.createAnimatedComponent(StyledPressable);

const SLIDES = [
  {
    id: '1',
    title: 'Amplify Your Digital Presence',
    subtitle: 'Transform your business with cutting-edge digital solutions that drive growth and innovation.',
    buttonText: 'Reach out',
    image: require('../../../assets/images/slider/sliders/slider-01.jpg'),
  },
  {
    id: '2',
    title: 'Trusted Technology Partner in Africa',
    subtitle: 'Partner with us to leverage our expertise in delivering scalable and reliable technology solutions.',
    buttonText: 'Work with us',
    image: require('../../../assets/images/slider/sliders/slider-02.jpg'),
  },
  {
    id: '3',
    title: 'Innovative Solutions for Tomorrow',
    subtitle: 'Stay ahead of the curve with our forward-thinking technology solutions and expert guidance.',
    buttonText: 'Learn more',
    image: require('../../../assets/images/slider/sliders/slider-03.jpg'),
  },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const titleAnim = useRef(new Animated.Value(0)).current;
  const subtitleAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const autoSlideTimer = useRef<NodeJS.Timeout>();
  const isManualScrolling = useRef(false);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / width);
    if (index !== currentIndex) {
      setCurrentIndex(index);
      // Reset animations when slide changes
      titleAnim.setValue(0);
      subtitleAnim.setValue(0);
      buttonAnim.setValue(0);
      // Start new animations
      startAnimations();
    }
  };

  const startAutoSlide = () => {
    stopAutoSlide(); // Clear any existing timer
    autoSlideTimer.current = setInterval(() => {
      if (!isManualScrolling.current) {
        const nextIndex = (currentIndex + 1) % SLIDES.length;
        scrollViewRef.current?.scrollTo({
          x: nextIndex * width,
          animated: true,
        });
      }
    }, AUTO_SLIDE_INTERVAL);
  };

  const stopAutoSlide = () => {
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current);
    }
  };

  const handleScrollBegin = () => {
    isManualScrolling.current = true;
    stopAutoSlide();
  };

  const handleScrollEnd = () => {
    isManualScrolling.current = false;
    startAutoSlide();
  };

  const startAnimations = () => {
    Animated.sequence([
      // Animate title
      Animated.timing(titleAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      // Animate subtitle
      Animated.timing(subtitleAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      // Animate button
      Animated.timing(buttonAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    startAnimations();
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, []);

  const handlePressButton = (index: number) => {
    // Handle button press based on slide index
    console.log('Button pressed for slide:', index + 1);
  };

  return (
    <StyledView className="h-[300px] relative">
      <StyledScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onScrollBeginDrag={handleScrollBegin}
        onScrollEndDrag={handleScrollEnd}
        onMomentumScrollEnd={handleScrollEnd}
      >
        {SLIDES.map((slide, index) => (
          <StyledImageBackground
            key={slide.id}
            source={slide.image}
            style={{ width }}
            className="flex-1 justify-center"
          >
            <StyledView className="bg-black/40 flex-1 justify-center items-center px-6">
              <AnimatedText 
                className={`${typography.h2} text-white text-center mb-3 max-w-[300px]`}
                style={{
                  opacity: titleAnim,
                  transform: [{
                    translateY: titleAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    }),
                  }],
                }}
              >
                {slide.title}
              </AnimatedText>
              <AnimatedText 
                className={`${typography.body} text-white text-center mb-6 max-w-[280px]`}
                style={{
                  opacity: subtitleAnim,
                  transform: [{
                    translateY: subtitleAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    }),
                  }],
                }}
              >
                {slide.subtitle}
              </AnimatedText>
              <AnimatedPressable
                onPress={() => handlePressButton(index)}
                className="bg-white/90 px-6 py-2 rounded-full"
                style={{
                  opacity: buttonAnim,
                  transform: [{
                    translateY: buttonAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    }),
                  }],
                }}
              >
                <StyledText className={`${typography.button} text-gray-900`}>
                  {slide.buttonText}
                </StyledText>
              </AnimatedPressable>
            </StyledView>
          </StyledImageBackground>
        ))}
      </StyledScrollView>
      <StyledView className="absolute bottom-4 left-0 right-0 flex-row justify-center">
        {SLIDES.map((_, index) => (
          <StyledView
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </StyledView>
    </StyledView>
  );
}; 