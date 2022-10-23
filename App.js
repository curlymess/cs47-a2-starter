import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import Profiles from './assets/Themes';
import Footer from './app/components/Footer';
import Header from './app/components/Header';
import Body from './app/components/Body';
import themes from './assets/Themes/themes';

const mtlProfile = {
  profileName: 'MTL',
//  profileImg: '../assets/Profiles/mtl.jpg',
  profileCaption: '1 mile away',
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
      <Header />
      
      <Body
        profileName={mtlProfile.profileName}
        profileImg={mtlProfile.profileImg}
        profileCaption={mtlProfile.profileCaption}
      />

      <Footer />
      

      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.light.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flex: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginBottom: 0,
    marginTop: 20,
  },  
  
});