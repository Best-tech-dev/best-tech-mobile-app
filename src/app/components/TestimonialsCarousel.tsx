import { View, Text, ScrollView, Dimensions } from 'react-native';
import { styled } from 'nativewind';
import { typography } from '../theme/theme';
import { Testimonial } from '../types';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);

const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Moses Adetola',
    position: 'CEO',
    company: 'BigField Digital',
    content: 'Best Technologies delivered exceptional results for our digital transformation project.',
    backgroundColor: '#E3F2FD', // Light blue
    image: 'testimonial-1.jpg'
  },
  {
    id: '2',
    name: 'Gbadega Adedapo',
    position: 'CEO',
    company: 'Accessible Group',
    content: 'Their expertise in mobile app development helped us reach new markets.',
    backgroundColor: '#F3E5F5', // Light purple
    image: 'testimonial-2.jpg'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    position: 'Product Manager',
    company: 'StartUp Inc',
    content: 'The team at Best Technologies is professional and highly skilled.',
    backgroundColor: '#E8F5E9', // Light green
    image: 'testimonial-3.jpg'
  },
];

export const TestimonialsCarousel = () => {
  return (
    <StyledView className="py-8">
      <StyledText className={`${typography.h2} text-center mb-6`}>
        What Our Clients Say
      </StyledText>
      
      <StyledScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {MOCK_TESTIMONIALS.map((testimonial) => (
          <StyledView
            key={testimonial.id}
            style={{ width: CARD_WIDTH }}
            className="mr-5"
          >
            <StyledView 
              className="rounded-xl p-6 shadow-sm"
              style={{ backgroundColor: testimonial.backgroundColor }}
            >
              <StyledView className="flex-row items-center mb-4">
                <StyledView className="w-12 h-12 rounded-full mr-4 bg-gray-300" />
                <StyledView>
                  <StyledText className="font-semibold text-gray-800">
                    {testimonial.name}
                  </StyledText>
                  <StyledText className="text-gray-500 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </StyledText>
                </StyledView>
              </StyledView>
              <StyledText className={`${typography.body} text-gray-600`}>
                "{testimonial.content}"
              </StyledText>
            </StyledView>
          </StyledView>
        ))}
      </StyledScrollView>
    </StyledView>
  );
}; 