import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from '../components/SafeAreaView';
import { colors, typography } from '../theme/theme';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);

type ServiceItem = {
  title: string;
  description: string;
  image: any;
  icon: keyof typeof Ionicons.glyphMap;
};

const services = [
  {
    id: 1,
    title: 'Software Development',
    description: 'End-to-end software solutions tailored to your business needs',
    items: [
      {
        title: 'Web Development',
        description: 'Custom web applications and responsive websites built with modern technologies',
        image: require('../../../assets/images/bootcamp/frontend.jpg'),
        icon: 'globe-outline' as const
      },
      {
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile applications for iOS and Android',
        image: require('../../../assets/images/bootcamp/mobile.jpg'),
        icon: 'phone-portrait-outline' as const
      },
      {
        title: 'UI/UX Design',
        description: 'User-centered design solutions that enhance user experience',
        image: require('../../../assets/images/bootcamp/uiux.jpg'),
        icon: 'color-palette-outline' as const
      }
    ]
  },
  {
    id: 2,
    title: 'Cloud & Infrastructure',
    description: 'Modern cloud solutions for scalable and reliable applications',
    items: [
      {
        title: 'Cloud Services',
        description: 'AWS, Azure, and Google Cloud infrastructure setup and management',
        image: require('../../../assets/images/bootcamp/cloud.jpg'),
        icon: 'cloud-outline' as const
      },
      {
        title: 'Backend Development',
        description: 'Scalable server-side solutions and API development',
        image: require('../../../assets/images/bootcamp/backend.jpg'),
        icon: 'server-outline' as const
      },
      {
        title: 'Data Analytics',
        description: 'Turn your data into actionable insights',
        image: require('../../../assets/images/bootcamp/data.jpg'),
        icon: 'analytics-outline' as const
      }
    ]
  }
];

export const ServicesScreen = () => {
  return (
    <SafeAreaView>
      <StyledScrollView className="flex-1">
        {/* Hero Section */}
        <StyledView className="h-64 relative">
          <StyledImage 
            source={require('../../../assets/images/imgs/digital-innovation-hero.png')}
            className="w-full h-full absolute"
            resizeMode="cover"
          />
          <StyledView className="absolute inset-0 bg-black/40 p-6 justify-end">
            <StyledText className={`${typography.h1} text-white mb-2`}>
              Our Services
            </StyledText>
            <StyledText className={`${typography.body} text-white/90`}>
              Empowering businesses through technology
            </StyledText>
          </StyledView>
        </StyledView>

        {/* Services Sections */}
        <StyledView className="p-4">
          {services.map((section) => (
            <StyledView key={section.id} className="mb-8">
              <StyledText className={`${typography.h2} text-green-600 mb-2`}>
                {section.title}
              </StyledText>
              <StyledText className={`${typography.body} text-gray-600 mb-4`}>
                {section.description}
              </StyledText>
              
              <StyledView className="space-y-4">
                {section.items.map((item, index) => (
                  <StyledPressable 
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-md"
                  >
                    <StyledImage
                      source={item.image}
                      className="w-full h-48"
                      resizeMode="cover"
                    />
                    <StyledView className="p-4">
                      <StyledView className="flex-row items-center mb-2">
                        <Ionicons name={item.icon} size={24} color="#059669" />
                        <StyledText className={`${typography.h3} text-gray-800 ml-2`}>
                          {item.title}
                        </StyledText>
                      </StyledView>
                      <StyledText className={`${typography.body} text-gray-600`}>
                        {item.description}
                      </StyledText>
                    </StyledView>
                  </StyledPressable>
                ))}
              </StyledView>
            </StyledView>
          ))}
        </StyledView>

        {/* Contact CTA */}
        <StyledView className="bg-green-50 p-6 mx-4 mb-8 rounded-xl">
          <StyledText className={`${typography.h3} text-green-600 mb-2`}>
            Need a Custom Solution?
          </StyledText>
          <StyledText className={`${typography.body} text-gray-600 mb-4`}>
            Let's discuss how we can help your business grow
          </StyledText>
          <StyledPressable className="bg-green-600 py-3 px-6 rounded-lg items-center">
            <StyledText className="text-white font-semibold">
              Contact Us
            </StyledText>
          </StyledPressable>
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
}; 