import { View, Text, StyleSheet, Image, ImageBackground, Platform } from 'react-native';
import themes from '../../assets/Themes/themes';
import { Themes, Icons } from '../../assets/Themes';

const Footer = () => 
{

  return (
    <View style={styles.container}>
        <View style={styles.actionItem}>
          <Image style={styles.actionViewImg} source={Icons.discover.light} />
          <Text style={styles.actionTxt}>Discover</Text>
        </View>
        <View style={styles.actionItem}>
          <Image style={styles.actionViewImg} source={Icons.heart.light} />
          <Text style={styles.actionTxt}>Matches</Text>
        </View>
        <View style={styles.actionItem}>
          <Image style={styles.actionViewImg} source={Icons.messages.light} /> 
          <Text style={styles.actionTxt}>DMs</Text>
        </View>
    </View> 
  );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        flex: 1,
        backgroundColor: Themes.light.navigation,
        flexDirection: 'row',
        maxHeight: 80,
        paddingTop: 10,
        alignItems: 'center',
      },
    
      actionItem: {
        flex: 1,

      },
    
      actionViewImg: {
        resizeMode: 'contain',
        maxHeight: 40,
        alignSelf: 'center',
      },
    
      actionTxt: {
        color: themes.light.textSecondary,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Sydney',
      },
    

});