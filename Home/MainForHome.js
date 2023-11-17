import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View ,Image,ScrollView, SafeAreaView} from 'react-native';
import ImageSlider from '../Home/ImageSlider';
import ListProduct from '../Home/ListProduct';
import ShoesTrend from '../Home/Shoestrends';
import { FlatList } from 'react-native-gesture-handler';
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
const Scrol=()=>{
  return(
    // <View style={{flex:1,flexDirection:'row'}}>
      // <ScrollView>

        <View >
      <ScrollView>              
      <ImageSlider/>
      <ListProduct/>
      <ShoesTrend/>
      </ScrollView>
      </View>
  )
}
export default  MainForHome=()=>{
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1}}>
     <Hader/>
     <Location/>
     <Scrol/>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
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
  } 
});
