import { View ,Text, StyleSheet,Image,TextInput,ScrollView} from "react-native"
const Hader=()=>{
    return(
     
      <View style={styles.forHead}>
        <Image  style={styles.forLogo}source={require("../ProfileLogs/logo.png")}></Image>
        <Image style={styles.forBell}source={require("../ProfileLogs/bell.png")}></Image>
        <Image style={styles.forSearch}source={require("../AllIcons/Search.png")}></Image>
      </View>
    )
  }
  const ProductSheet=()=>{
    return(
        <View>
         <View style={{flexDirection:'row',width:'95%'}}>
            <Image source={require("../ProfileLogs/box.png")}></Image>
           <View style={{alignSelf:'center'}}>
             <Text style={styles.forBoxtext}>Chechk order status and</Text><Text style={styles.forBoxtext}>track, chnage or return</Text>
             <Text style={styles.forBoxtext}>item</Text>
           </View>
         </View>
         <View style={{flexDirection:'row',width:'95%'}}>
            <Image style={{width:90,height:110,marginLeft:10}} source={require("../ProfileLogs/bag.png")}></Image>
           <View style={{alignSelf:'center'}}>
             <Text style={styles.forBoxtext}>    Shop past purchases and</Text><Text style={styles.forBoxtext}>    everyday essentials</Text>
           </View>
           
         </View>
         <View style={{flexDirection:'row',width:'95%'}}>
            <Image  style={{width:70,height:70,marginTop:10,marginLeft:10}}source={require("../ProfileLogs/list.png")}></Image>
           <View style={{alignSelf:'center'}}>
             <Text style={styles.forBoxtext}>       Create list with items you</Text><Text style={styles.forBoxtext}>       want, now or later</Text>
           </View>
           
         </View>
        </View>
    )

  }
const Login=()=>{
    return(
        <View>
        <View style={{alignSelf:'center'}}>
        <Text style={styles.forLogin1}>Sign in for the best</Text><Text style={styles.forLogin2}>experience</Text></View>
        <View style={styles.forSignIn}>
         <Text style={styles.signinText}>Sign In</Text>
        </View>
        <View style={styles.forcreatAccount}>
         <Text style={styles.signinText}>Create account</Text>
        </View>
        </View>
    )
}
export default JOB=()=>{
 return(
    <View style={styles.container}>
        <ScrollView>
        <Hader/>
        <Login/>
        <ProductSheet/>
        </ScrollView>
    </View>
 )
}
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#ffffff'
},
forLogin1:{
    alignSelf:'center',
    marginTop:20,
    color:'black',
    fontSize:21,
    fontWeight:'500'
},
forLogin2:{
    alignSelf:'center',
    marginTop:5,
    color:'black',
    fontSize:21,
    fontWeight:'500'
},
forHead:{
    backgroundColor: '#023020',
    height:85,
    flexDirection:'row'
  },
  forLogo:{
    width:100,
    marginLeft:12,
    height:48,
    marginTop:39,
  },
  forBell:{
    width:30,
    marginLeft:150,
    height:30,
    marginTop:39,
    tintColor:'#ffffff'
  },
  forSearch:{
    width:28,
    marginLeft:15,
    height:28,
    marginTop:39,
    tintColor:'#ffffff'
  },
  forSignIn:{
    width:'90%',
    height:63,
    backgroundColor:'#edc351',
    borderWidth:1,
    borderRadius:5,
    alignSelf:'center',
    marginTop:20
  },
  forcreatAccount:{
    width:'90%',
    height:63,
    backgroundColor:'#cfcdc8',
    borderWidth:1,
    borderRadius:5,
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
  forBoxtext:{
    color:'black',
    fontSize:20,
    fontWeight:'400'
},
})