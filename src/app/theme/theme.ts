export const colors = {
  primary: '#4CAF50', // Main green
  secondary: '#8BC34A', // Lemon green
  accent: '#2E7D32', // Dark green
  background: '#ffffff',
  text: {
    primary: '#1f2937', // gray-800
    secondary: '#6b7280', // gray-500
  },
  tab: {
    active: '#4CAF50',
    inactive: '#9E9E9E',
    background: '#ffffff',
  },
};

export const typography = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  body: 'text-base',
  caption: 'text-sm text-gray-500',
  button: 'text-base font-semibold',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const tabBarStyle = {
  activeTintColor: colors.primary,
  inactiveTintColor: colors.tab.inactive,
  style: {
    backgroundColor: colors.tab.background,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
  },
  labelStyle: {
    fontSize: 12,
  },
}; 