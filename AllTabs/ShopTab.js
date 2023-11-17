import { View ,Text,StyleSheet,Image,TextInput, ScrollView} from "react-native"

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
const Location=()=>{
  return(
    <View style={styles.forLocation}>
       <View><Text>   </Text></View>
   <Image style={{width:25,height:25,alignSelf:'center',tintColor:'#ffffff'}}source={require("../AllIcons/location.png")}></Image>
   <View><Text>   </Text></View>
   <Text style={{color:'#ffffff',alignSelf:'center'}}>Deliver To Pakistan</Text>
    </View>
  )
}
const Products=()=>{
    return(
        <View style={{backgroundColor:'#b2b3af',height:410,width:'100%',alignSelf:'center',marginTop:20,alignItems:'center'}}>
        <View style={{height:390,width:'95%',backgroundColor:'#ffffff',alignSelf:'center',marginTop:10}}>
        <Text style={{color:'black',fontWeight:'700',fontSize:20,marginLeft:10}}>New international customers purchased</Text>
        <View style={{flexDirection:'row'}}>
            <Image style={{height:150,width:120,marginLeft:40}} source={require("../AllTabs/ShoptabPic/book.jpg")}></Image>
            <Image style={{height:150,width:120,marginLeft:40}} source={require("../AllTabs/ShoptabPic/device.jpg")}></Image>
        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.forProductText}>          Literate culture...</Text>
            <Text style={styles.forProductText}>         TayMac RLL..</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text>            Zeeshan Ahmed</Text>
        <Text>               Tahir Mehmood</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <Image style={{width:20,height:20,marginLeft:40}}source={require('../AllTabs/ShoptabPic/star.png')}></Image>
            <Image style={{width:20,height:20}}source={require('../AllTabs/ShoptabPic/star.png')}></Image>
            <Image style={{width:20,height:20}}source={require('../AllTabs/ShoptabPic/star.png')}></Image>
            <Image style={{width:20,height:20}}source={require('../AllTabs/ShoptabPic/star.png')}></Image>
            <Image style={{width:20,height:20}}source={require('../AllTabs/ShoptabPic/star.png')}></Image>
            <Image style={{width:20,height:20,marginLeft:55}}source={require('../AllTabs/ShoptabPic/star.png')}></Image>
            <Image style={{width:20,height:20}}source={require('../AllTabs/ShoptabPic/star.png')}></Image>
            <Image style={{width:20,height:20}}source={require('../AllTabs/ShoptabPic/star.png')}></Image>
            <Image style={{width:20,height:20}}source={require('../AllTabs/ShoptabPic/star.png')}></Image>
            <Image style={{width:20,height:20}}source={require('../AllTabs/ShoptabPic/star.png')}></Image>
        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={{color:'gray',marginLeft:40,marginTop:7}}>Paper back</Text>
            <Text style={{color:'red',marginLeft:83,marginTop:3,fontSize:20}}>$7.7</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'red',marginLeft:40,marginTop:3,fontSize:20}}>$18</Text>
        <View style={styles.forbutton2}>
            <Text style={{fontSize:18,top:10}}>Add to Cart</Text>
            </View>
        </View>
        <View style={{flexDirection:'row'}}>
         <View style={{flexDirection:'row'}}>
           <View style={styles.forbutton}>
            <Text style={{fontSize:18,top:10}}>Add to Cart</Text>
            </View> 
             
         </View>
        </View>
        </View>
        </View>
    )
}
const Login=()=>{
    return(
        <View>
        <View style={styles.forSignIn}>
         <Text style={styles.signinText}>Sign in to your account</Text>
        </View>
        <View style={styles.forcreatAccount}>
         <Text style={styles.signinText}>Sign up now</Text>
        </View>
        </View>
    )
}
const Carte=()=>{
    return(
      <View>
         <Image style={{alignSelf:'center',borderRadius:90,marginTop:20,height:170,width:170}}source={require("../AllTabs/ShoptabPic/cart.png")}></Image> 
         <Text style={styles.forText}>Your Amazon Cart is empty</Text>
         <Text style={styles.forStufftext}>Good stuff goes in here </Text>
         <Text style={styles.fordealText}>Shop today's deal </Text>
      </View>
    )
}
const LastButton=()=>{
    return(
       <View style={{marginTop:1}}>
         <View style={styles.forSignIn}>
         <Text style={styles.signinText}>Continue Shooping</Text>
        </View>
       </View>
    )
}
export default Shop=()=>{
 return(
    <View style={styles.container}>
       <Hader/>
       <Location/>
       <ScrollView>
       <Carte/>
       <Login/>
       <Products/>
       <LastButton/>
       </ScrollView>
    </View>
 )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
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
    forLocation:{
      backgroundColor:'#034028',
      height:50,
      width:'100%',
      flexDirection:'row'
    },
    forText:{
        color:'black',
        fontWeight:'600',
        fontSize:20,
        alignSelf:'center',
        marginTop:20 
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