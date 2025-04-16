import { View, Text, Image } from 'react-native';
import { styled } from 'nativewind';
import { typography } from '../theme/theme';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const FEATURES = [
  {
    id: '1',
    title: 'Expert Team',
    description: 'Our team consists of highly skilled professionals with years of experience.',
    image: require('../../../assets/images/imgs/blog-img-4.png'),
  },
  {
    id: '2',
    title: 'Innovative Solutions',
    description: 'We deliver cutting-edge technology solutions tailored to your needs.',
    image: require('../../../assets/images/imgs/digital-innovation-hero.png'),
  },
  {
    id: '3',
    title: 'Quality Assurance',
    description: 'We ensure the highest quality standards in all our deliverables.',
    image: require('../../../assets/images/imgs/animated-engine.png'),
  },
];

export const CompanyIntro = () => {
  return (
    <StyledView className="py-8 px-4">
      <StyledView>
        <StyledText className={`${typography.h2} text-center mb-4`}>
          Why Choose Best Technologies?
        </StyledText>
        <StyledText className={`${typography.body} text-center text-gray-600 mb-8`}>
          We combine expertise, innovation, and dedication to deliver exceptional results
        </StyledText>
      </StyledView>

      <StyledView className="space-y-6">
        {FEATURES.map((feature) => (
          <StyledView
            key={feature.id}
            className="flex-row items-start space-x-4"
          >
            <StyledView className="w-16 h-16 rounded-xl overflow-hidden">
              <StyledImage
                source={feature.image}
                className="w-full h-full"
                resizeMode="cover"
              />
            </StyledView>
            <StyledView className="flex-1">
              <StyledText className="text-lg font-semibold text-gray-800 mb-1">
                {feature.title}
              </StyledText>
              <StyledText className={`${typography.body} text-gray-600`}>
                {feature.description}
              </StyledText>
            </StyledView>
          </StyledView>
        ))}
      </StyledView>
    </StyledView>
  );
}; 