import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from '../components/SafeAreaView';
import { colors, typography } from '../theme/theme';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
import { Course, Category } from '../types';
import { 
  recommendedCourses, 
  popularCourses, 
  featuredCourses, 
  latestCourses, 
  programmingCourses
} from '../data/courses';
import { categories } from '../data/categories';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);

const CourseCard = ({ course }: { course: Course }) => {
  const truncatedTitle = course.title.length > 18
    ? course.title.substring(0, 18) + '...' 
    : course.title;

  return (
    <StyledPressable className="w-40 mr-2 mb-7">
      <StyledImage
        source={course.image}
        className="w-full h-28 rounded-lg"
        resizeMode="cover"
      />
      <StyledView className="mt-2 h-32">
        <StyledText 
          className="text-sm font-medium mb-1" 
          style={{ color: colors.text.primary }}
        >
          {truncatedTitle}
        </StyledText>
        <StyledText 
          className="text-xs mb-1" 
          style={{ color: colors.text.secondary }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {course.instructor}
        </StyledText>
        <StyledView className="flex-row items-center mb-1">
          <StyledText className="text-xs font-semibold mr-1" style={{ color: colors.primary }}>
            {course.rating}
          </StyledText>
          <Ionicons name="star" size={12} color={colors.primary} />
          <StyledText className="text-xs ml-1" style={{ color: colors.text.secondary }}>
            ({course.students.toLocaleString()})
          </StyledText>
        </StyledView>
        <StyledText className="text-sm font-bold mb-1" style={{ color: colors.primary }}>
          ₦{course.price.toLocaleString()}
        </StyledText>
        {course.tags && (
          <StyledView className="flex-row flex-wrap">
            {course.tags.map((tag, index) => (
              <StyledView 
                key={index}
                className="bg-green-100 px-1.5 py-0.5 rounded-full mr-1 mb-1"
              >
                <StyledText className="text-[10px]" style={{ color: colors.primary }}>
                  {tag}
                </StyledText>
              </StyledView>
            ))}
          </StyledView>
        )}
      </StyledView>
    </StyledPressable>
  );
};

const CategoryItem = ({ category }: { category: Category }) => (
  <StyledPressable className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3 mr-4">
    <Ionicons name={category.icon} size={20} color={colors.primary} />
    <StyledText className="ml-2 text-sm" style={{ color: colors.text.primary }}>
      {category.name}
    </StyledText>
  </StyledPressable>
);

export const CoursesScreen = () => {
  return (
    <SafeAreaView>
      <StyledScrollView className="flex-1 bg-white">
        {/* Header Card */}
        <StyledView className="bg-green-50 p-4">
          <StyledText className="text-xl font-bold mb-1" style={{ color: colors.primary }}>
            Welcome to Best Tech Academy
          </StyledText>
          <StyledText className="text-sm" style={{ color: colors.text.secondary }}>
            Start learning today and advance your career
          </StyledText>
        </StyledView>

        {/* Recommended Courses Section */}
        <StyledView className="p-3">
          <StyledView className="flex-row justify-between items-center mb-3">
            <StyledText className="text-lg font-bold" style={{ color: colors.text.primary }}>
              Recommended for you
            </StyledText>
            <StyledPressable>
              <StyledText className="text-sm" style={{ color: colors.primary }}>See all</StyledText>
            </StyledPressable>
          </StyledView>
          
          <StyledScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 12 }}
          >
            {recommendedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </StyledScrollView>
        </StyledView>

        {/* Categories Section */}
        <StyledView className="p-3">
          <StyledView className="flex-row justify-between items-center mb-3">
            <StyledText className="text-lg font-bold" style={{ color: colors.text.primary }}>
              Categories
            </StyledText>
            <StyledPressable>
              <StyledText className="text-sm" style={{ color: colors.primary }}>See all</StyledText>
            </StyledPressable>
          </StyledView>
          
          <StyledScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 12 }}
          >
            {categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </StyledScrollView>
        </StyledView>

        {/* Popular for Programming */}
        <StyledView className="p-3">
          <StyledView className="flex-row justify-between items-center mb-3">
            <StyledText className="text-lg font-bold" style={{ color: colors.text.primary }}>
              Exploring programing courses
            </StyledText>
            <StyledPressable>
              <StyledText className="text-sm" style={{ color: colors.primary }}>See all</StyledText>
            </StyledPressable>
          </StyledView>
          
          <StyledScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 12 }}
          >
            {programmingCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </StyledScrollView>
        </StyledView>

        {/* Popular for Software Dev Section */}
        <StyledView className="p-3">
          <StyledView className="flex-row justify-between items-center mb-3">
            <StyledText className="text-lg font-bold" style={{ color: colors.text.primary }}>
              Popular for Software Development
            </StyledText>
            <StyledPressable>
              <StyledText className="text-sm" style={{ color: colors.primary }}>See all</StyledText>
            </StyledPressable>
          </StyledView>
          
          <StyledScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 12 }}
          >
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </StyledScrollView>
        </StyledView>

        {/* Featured Courses Section */}
        <StyledView className="p-3">
          <StyledView className="flex-row justify-between items-center mb-3">
            <StyledText className="text-lg font-bold" style={{ color: colors.text.primary }}>
              Featured Courses
            </StyledText>
            <StyledPressable>
              <StyledText className="text-sm" style={{ color: colors.primary }}>See all</StyledText>
            </StyledPressable>
          </StyledView>
          
          <StyledScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 12 }}
          >
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </StyledScrollView>
        </StyledView>

        {/* Latest Courses Section */}
        <StyledView className="p-3">
          <StyledView className="flex-row justify-between items-center mb-3">
            <StyledText className="text-lg font-bold" style={{ color: colors.text.primary }}>
              Latest Courses
            </StyledText>
            <StyledPressable>
              <StyledText className="text-sm" style={{ color: colors.primary }}>See all</StyledText>
            </StyledPressable>
          </StyledView>
          
          <StyledScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 12 }}
          >
            {latestCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </StyledScrollView>
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
}; 