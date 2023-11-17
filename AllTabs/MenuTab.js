import { View ,Text,StyleSheet,TextInput,Image} from "react-native"
const Hader=()=>{
    return(
         <View style={styles.forHead}>
       <View style={styles.forSearchBox}>
        <View><Text>   </Text></View>
        <Image style={{width:20,height:20,alignSelf:'center'}}source={require("../AllIcons/Search.png")}></Image>
        <View><Text>   </Text></View>
        <TextInput style={{alignSelf:'center'}} placeholder=' Search Amazon'></TextInput>
        <View><Text>                                  </Text></View>
        <Image style={{width:21,height:21,alignSelf:'center'}}source={require("../AllIcons/Scan.png")}></Image>
        <View><Text>       </Text></View>
        <Image style={{width:21,height:21,alignSelf:'center'}}source={require("../AllIcons/Mic.png")}></Image>
       </View>
    </View>
  )
}
export default Method=()=>{
 return(
    <View style={styles.container}>
       <Hader/>
       <View style={styles.forSearchBox}>
        <Text style={styles.forText}>Shop byDepartment</Text>
       </View>
       <View style={styles.forSearchBox2}>
       <Text style={styles.forText}>Settings</Text>
       </View>
       <View style={styles.forSearchBox2}>
       <Text style={styles.forText}>Custom Service</Text>
       </View>
       <View style={styles.forSearchBox2}>
       <Text style={styles.forText}>Sign in</Text>
       </View>
    </View>
 )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#224733',
    },
    forHead:{
      backgroundColor: '#023020',
      height:100,
    },
    forSearchBox:{
      backgroundColor:'#ffffff',
      width:'94%',
      height:40,
      borderRadius:5,
      alignSelf:'center',
      marginTop:50,
      flexDirection:'row'
    },
    forSearchBox2:{
        backgroundColor:'#ffffff',
        width:'94%',
        height:40,
        borderRadius:5,
        alignSelf:'center',
        marginTop:10,
        flexDirection:'row'
      },
    forText:{
        color:'black',
        fontWeight:'600',
        fontSize:20,
        alignSelf:'center',
        marginLeft:12 
   },
   forStufftext:{
        color:'#858482',
        fontWeight:'400',
        fontSize:18,
        alignSelf:'center',
        marginTop:10 
   },
   fordealText:{
    color:'#1ad5eb',
    fontWeight:'400',
    fontSize:18,
    alignSelf:'center',
    marginTop:10 
},
forLogin1:{
    alignSelf:'center',
    marginTop:20,
    color:'black',
    fontSize:21,
    fontWeight:'500'
},  
forSignIn:{
    width:'90%',
    height:60,
    backgroundColor:'#faea11',
    borderWidth:1,
    borderRadius:10,
    alignSelf:'center',
    marginTop:20
  },
  forcreatAccount:{
    width:'90%',
    height:60,
    backgroundColor:'#eaebe1',
    borderWidth:1,
    borderRadius:10,
    alignSelf:'center',
    marginTop:20
  },
  signinText:{
    alignSelf:'center',
    marginTop:14,
    color:'black',
    fontSize:21,
    fontWeight:'400'
  },
  forProductText:{
    color:'#1ad5eb',
    fontSize:16,
  },
  forbutton:{
    backgroundColor:'#faea11',
    borderRadius:50,
    height:45,
    width:110,
    alignItems:'center',
    marginLeft:20
  },
  forbutton2:{
    backgroundColor:'#faea11',
    borderRadius:50,
    height:45,
    width:110,
    alignItems:'center',
    marginLeft:100,
  }
  });