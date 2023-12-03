import { StyleSheet, Text, View,Image,Button } from 'react-native'
import React from 'react';
//  import pattern from "../../asset/bg4.png"
import welcomelogo from "../../asset/WELCOME2.png"
import pattern from "../../asset/pattern.png"


const Welcome = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Image style={styles.patternbg} source={pattern}/>
<View style={styles.Container1}>
  <Image style={styles.logo} source={welcomelogo}/>
  <Text style={styles.login}   onPress={() => navigation.navigate('Login')}>LOGIN</Text>
  <Text style={styles.signup}   onPress={() => navigation.navigate('Signup')}>Signup</Text>
{/* <Button
style={styles.login}
  // onPress={onPressLearnMore}
  title="LOGIN"
 
  
  // accessibilityLabel="Learn more about this purple button"
/> */}
</View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
Container:{
  width:'100%',
  height:'100%'
},
patternbg:{
  width:'100%',
  height:'100%',
  position:'absolute',
  top:0,
  zIndex: -1,
 
},
head:{
color:'white',
fontSize:40
},
Container1:{
display:'flex',
alignItems:'center',
height:'100%'
},
logo:{
  width:400,
  height:300,
  bottom:0,
},
login:{
width:"70%",
fontSize:30,
padding:15,
backgroundColor:"#841584",
textAlign:"center",
color:"white",
borderRadius:4,
marginBottom:20
},
signup:{
  width:"70%",
  fontSize:30,
  padding:15,
  backgroundColor:"#841584",
  textAlign:"center",
  color:"white",
  borderRadius:4,
  marginBottom:20
  }
  

})