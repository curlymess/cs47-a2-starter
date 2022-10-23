import { View, Text, StyleSheet, Image, ImageBackground, Platform } from 'react-native';
import themes from '../../assets/Themes/themes';
import { Themes, Icons } from '../../assets/Themes';
import Profiles from '../../assets/Themes';

const Body = ({ profileName, profileCaption}) => 
{
  return (
    <View style={styles.bodyContainer}>
        <ImageBackground source={require('../../assets/Profiles/mtl.jpg')} style={styles.picStyle} imageStyle={styles.imgstylesheet}>
            <Text style={[styles.profileCardName, styles.profileText]}>{profileName}</Text>
            <Text style={[styles.profileCardDistance, styles.profileText]}>{profileCaption}</Text>
        </ImageBackground>
            
        <View style={styles.memo}>
            <View style={styles.memoBox}>
                <Text style={styles.takeText}>My hottest take</Text>
                <View style={styles.waveformBox}>
                    <Image style={styles.playPic} source={Icons.player.light} />
                    <Image style={styles.waveformPic} source={Icons.audioWave.light} />
                </View>
            </View>
            
        </View>
    </View>  
  );
};

export default Body;

const styles = StyleSheet.create({
bodyContainer: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    padding: 10,
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  
  //  profile img
  imgstylesheet: {
    borderRadius: 20,
    shadowOpacity: themes.light.shadows.shadowOpacity,
    shadowRadius: themes.light.shadows.shadowRadius,
    shadowOffset: { width: themes.light.shadows.shadowOffset.width, height: themes.light.shadows.shadowOffset.height},
    shadowColor: themes.light.shadows.shadowColor,
    
    
  },
  // profile img
  picStyle: {
    marginHorizontal: 20,
    flex: 2,
    flexDirection: 'column',
  },

  profileText: {
    color: themes.light.textSecondary,
    textAlign: 'left',
    fontFamily: 'Sydney',
    paddingLeft: 10,
    paddingVertical: 10,
    
  },

  profileCardName: {
    fontSize: 32,
    flex: 12,
  },

  profileCardDistance: {
    fontSize: 18,
    flex: 1,
    alignItems: 'flex-end',

  },


////////////////////////////////////////////////
  // hottest take box
  memo: {
    flex: 1,
    flexDirection: 'column',

    
  },

  memoBox: {
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 10,
    flex: .6,
    marginTop: 20,
    
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: { width: themes.light.shadows.shadowOffset.width, height: themes.light.shadows.shadowOffset.height},
    shadowColor: Themes.light.shadows.shadowColor,
    
    
    
  },

  takeText: {
    fontFamily: 'Sydney',
    fontSize: 32,
    textAlign: 'left',
    paddingTop: 10,
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'column',
  },

  // play button and waveform
  waveformBox: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  playPic: {
    flex: 1,
    resizeMode: 'contain',
    maxWidth: 50,
  },

  waveformPic: {
    flex: 1,
    margin: 10,
    resizeMode: 'contain',
  },

});