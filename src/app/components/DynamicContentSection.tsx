import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { styled } from 'nativewind';
import { typography } from '../theme/theme';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);

const BOOTCAMP_COURSES = [
  {
    id: '1',
    title: 'Frontend Development',
    description: 'Master modern web development with React, Next.js, and more',
    image: require('../../../assets/images/bootcamp/frontend.jpg'),
    partners: [
      require('../../../assets/images/bootcamp/github.png'),
      require('../../../assets/images/bootcamp/microsoft.png'),
    ]
  },
  {
    id: '2',
    title: 'Backend Development',
    description: 'Build robust server-side applications and APIs',
    image: require('../../../assets/images/bootcamp/backend.jpg'),
    partners: [
      require('../../../assets/images/bootcamp/aws.png'),
      require('../../../assets/images/bootcamp/oracle.png'),
    ]
  },
  {
    id: '3',
    title: 'Mobile Development',
    description: 'Create native mobile apps for iOS and Android',
    image: require('../../../assets/images/bootcamp/mobile.jpg'),
    partners: [
      require('../../../assets/images/bootcamp/google.png'),
      require('../../../assets/images/bootcamp/nvidia.png'),
    ]
  },
  {
    id: '4',
    title: 'UI/UX Design',
    description: 'Design beautiful and intuitive user interfaces',
    image: require('../../../assets/images/bootcamp/uiux.jpg'),
    partners: [
      require('../../../assets/images/bootcamp/linkedin.png'),
      require('../../../assets/images/bootcamp/nitda.png'),
    ]
  },
  {
    id: '5',
    title: 'Cloud Computing',
    description: 'Master cloud technologies and DevOps practices',
    image: require('../../../assets/images/bootcamp/cloud.jpg'),
    partners: [
      require('../../../assets/images/bootcamp/aws.png'),
      require('../../../assets/images/bootcamp/microsoft.png'),
    ]
  },
  {
    id: '6',
    title: 'Data Science',
    description: 'Learn data analysis, ML, and AI fundamentals',
    image: require('../../../assets/images/bootcamp/data.jpg'),
    partners: [
      require('../../../assets/images/bootcamp/nvidia.png'),
      require('../../../assets/images/bootcamp/oracle.png'),
    ]
  },
];

export const DynamicContentSection = () => {
  return (
    <StyledView className="py-12 bg-gray-50">
      <StyledText className={`${typography.h2} text-center mb-4`}>
        Latest Bootcamp Updates
      </StyledText>
      
      <StyledText className={`${typography.body} text-center mb-8 text-gray-600 text-sm mx-10`}>
        Join our intensive tech bootcamps and kickstart your career in technology. Learn from industry experts and get certified.
      </StyledText>

      <StyledScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {BOOTCAMP_COURSES.map((course) => (
          <StyledPressable
            key={course.id}
            className="w-72 mr-4 bg-white rounded-xl overflow-hidden shadow-sm"
          >
            <StyledImage
              source={course.image}
              className="w-full h-40"
              resizeMode="cover"
            />
            <StyledView className="p-4">
              <StyledText className="text-lg font-semibold mb-2 text-gray-800">
                {course.title}
              </StyledText>
              <StyledText className="text-gray-600 text-sm mb-4">
                {course.description}
              </StyledText>
              <StyledView className="flex-row items-center">
                <StyledText className="text-xs text-gray-500 mr-2">
                  In partnership with:
                </StyledText>
                {course.partners.map((partner, index) => (
                  <StyledImage
                    key={index}
                    source={partner}
                    className="w-6 h-6 mr-2"
                    resizeMode="contain"
                  />
                ))}
              </StyledView>
            </StyledView>
          </StyledPressable>
        ))}
      </StyledScrollView>
    </StyledView>
  );
}; 