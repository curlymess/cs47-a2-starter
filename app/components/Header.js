import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import themes from '../../assets/Themes/themes';
import { Themes, Icons } from '../../assets/Themes';

const Header = () => 
{
  return (

<View style={styles.container}>
    <Image style={styles.headerImages} source={Icons.menu.light} />
    <View><Text style={styles.headerText}>ensom</Text></View>
    <Image style={styles.headerImages} source={Icons.sun} />
</View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    
      headerImages: {
        height: Platform.OS === 'ios' ? 54 : 41,
        resizeMode: 'contain',
      },

      headerText: {
        fontSize: 32,
        fontFamily: 'SydneyBold',
      },

});