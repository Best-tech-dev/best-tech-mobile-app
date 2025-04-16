import { View, Text, ScrollView, Image, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from '../components/SafeAreaView';
import { colors, typography } from '../theme/theme';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);
const StyledTextInput = styled(TextInput);

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: any;
  author: {
    name: string;
    avatar: any;
  };
};

type BlogSection = {
  id: number;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  posts: BlogPost[];
};

const blogSections: BlogSection[] = [
  {
    id: 1,
    title: 'Featured Articles',
    icon: 'code-outline',
    posts: [
      {
        id: 1,
        title: 'Evolution of AI',
        excerpt: 'Exploring the latest trends and technologies shaping the future of Artificial Intelligence...',
        category: 'Frontend Development',
        date: '2024-04-15',
        readTime: '5 min read',
        image: require('../../../assets/images/blog-images/ai-history.gif'),
        author: {
          name: 'Mayowa Bernard',
          avatar: require('../../../assets/images/imgs/blog-img-2.png')
        }
      },
      {
        id: 2,
        title: 'AI in Law',
        excerpt: 'Exploring the latest trends and technologies shaping the future of frontend development...',
        category: 'Frontend Development',
        date: '2024-04-15',
        readTime: '5 min read',
        image: require('../../../assets/images/blog-images/AI-in-law.png'),
        author: {
          name: 'Mayowa Bernard',
          avatar: require('../../../assets/images/imgs/blog-img-2.png')
        }
      }
    ]
  },
  {
    id: 2,
    title: 'Software Development',
    icon: 'code-outline',
    posts: [
      {
        id: 3,
        title: 'The Future of Frontend Development',
        excerpt: 'Exploring the latest trends and technologies shaping the future of frontend development...',
        category: 'Frontend Development',
        date: '2024-04-15',
        readTime: '5 min read',
        image: require('../../../assets/images/imgs/blog-img-3.jpeg'),
        author: {
          name: 'Mayowa Bernard',
          avatar: require('../../../assets/images/imgs/blog-img-2.png')
        }
      },
      {
        id: 4,
        title: 'Teamwork causing Increase in productivity',
        excerpt: 'Exploring the latest trends and technologies shaping the future of frontend development...',
        category: 'Frontend Development',
        date: '2024-04-15',
        readTime: '5 min read',
        image: require('../../../assets/images/imgs/blog-img-4.png'),
        author: {
          name: 'Mayowa Bernard',
          avatar: require('../../../assets/images/imgs/blog-img-2.png')
        }
      }
    ]
  }
];

export const BlogScreen = () => {
  return (
    <SafeAreaView>
      <StyledScrollView className="flex-1">
        {/* Hero Section */}
        <StyledView className="h-64 relative">
          <StyledImage 
            source={require('../../../assets/images/imgs/blog-img-3.jpeg')}
            className="w-full h-full absolute"
            resizeMode="cover"
          />
          <StyledView className="absolute inset-0 bg-black/40 p-6 justify-end">
            <StyledText className={`${typography.h1} text-white mb-2`}>
              Blog
            </StyledText>
            <StyledText className={`${typography.body} text-white/90`}>
              Insights, tutorials, and industry updates
            </StyledText>
          </StyledView>
        </StyledView>

        {/* Search and Filter Section */}
        <StyledView className="p-4 bg-white">
          <StyledView className="flex-row items-center bg-gray-100 rounded-lg px-4 py-2">
            <Ionicons name="search-outline" size={20} color={colors.text.secondary} />
            <StyledTextInput
              className="flex-1 ml-2 py-2"
              placeholder="Search articles..."
              placeholderTextColor={colors.text.secondary}
            />
          </StyledView>
          
          <StyledView className="flex-row mt-4 space-x-2">
            <StyledPressable className="flex-row items-center bg-gray-100 px-4 py-2 rounded-lg">
              <Ionicons name="filter-outline" size={20} color={colors.text.secondary} />
              <StyledText className="ml-2" style={{ color: colors.text.primary }}>Filter</StyledText>
            </StyledPressable>
            
            <StyledPressable className="flex-row items-center bg-gray-100 px-4 py-2 rounded-lg">
              <Ionicons name="calendar-outline" size={20} color={colors.text.secondary} />
              <StyledText className="ml-2" style={{ color: colors.text.primary }}>Date</StyledText>
            </StyledPressable>
            
            <StyledPressable className="flex-row items-center bg-gray-100 px-4 py-2 rounded-lg">
              <Ionicons name="folder-outline" size={20} color={colors.text.secondary} />
              <StyledText className="ml-2" style={{ color: colors.text.primary }}>Category</StyledText>
            </StyledPressable>
          </StyledView>
        </StyledView>

        {/* Blog Sections */}
        <StyledView className="py-4">
          {blogSections.map((section) => (
            <StyledView key={section.id} className="mb-8">
              <StyledView className="px-4">
                <StyledView className="flex-row items-center mb-2">
                  <Ionicons name={section.icon} size={24} color={colors.primary} />
                  <StyledText className={`${typography.h2} ml-2`} style={{ color: colors.primary }}>
                    {section.title}
                  </StyledText>
                </StyledView>
              </StyledView>
              
              <StyledScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                className="space-x-4"
              >
                {section.posts.map((post) => (
                  <StyledPressable 
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md w-80"
                  >
                    <StyledImage
                      source={post.image}
                      className="w-full h-48"
                      resizeMode="cover"
                    />
                    <StyledView className="p-4">
                      <StyledView className="flex-row items-center justify-between mb-2">
                        <StyledText className="text-sm" style={{ color: colors.text.secondary }}>
                          {post.category}
                        </StyledText>
                        <StyledText className="text-sm" style={{ color: colors.text.secondary }}>
                          {post.readTime}
                        </StyledText>
                      </StyledView>
                      
                      <StyledText className={`${typography.h3} mb-2`} style={{ color: colors.text.primary }}>
                        {post.title}
                      </StyledText>
                      
                      <StyledText className={`${typography.body} mb-4`} style={{ color: colors.text.secondary }}>
                        {post.excerpt}
                      </StyledText>
                      
                      <StyledView className="flex-row items-center">
                        <StyledImage
                          source={post.author.avatar}
                          className="w-8 h-8 rounded-full"
                        />
                        <StyledView className="ml-2">
                          <StyledText className="text-sm font-medium" style={{ color: colors.text.primary }}>
                            {post.author.name}
                          </StyledText>
                          <StyledText className="text-xs" style={{ color: colors.text.secondary }}>
                            {post.date}
                          </StyledText>
                        </StyledView>
                      </StyledView>
                    </StyledView>
                  </StyledPressable>
                ))}
              </StyledScrollView>
            </StyledView>
          ))}
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
}; 