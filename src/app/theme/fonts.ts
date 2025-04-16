import * as Font from 'expo-font';

export const loadFonts = async () => {
  // Temporarily disabled until we have the actual font files
  // await Font.loadAsync({
  //   'Rubik-Regular': require('../../assets/fonts/Rubik-Regular.ttf'),
  //   'Rubik-Medium': require('../../assets/fonts/Rubik-Medium.ttf'),
  //   'Rubik-Bold': require('../../assets/fonts/Rubik-Bold.ttf'),
  // });
  return Promise.resolve();
}; 