import React from "react";
import { View,StyleSheet, ScrollView,Text ,Image } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
const ImagesList=[{
    
}]
const ListProduct=()=>{
    return(
        <View style={styles.container}>
        <ScrollView horizontal={true}>
        <View style={{backgroundColor:'#f0f0f0',width:145,borderRadius:15,marginLeft:10}}>
            <Text style={styles.forText}>  Gifts For </Text><Text style={styles.forText}>  Everyone</Text>
       <Image style={styles.forImage} source={require("../ScrowlViewImages/giftsfor.jpg")}></Image>
       </View>
       <View style={{backgroundColor:'#f0f0f0',width:145,borderRadius:15,marginLeft:10}}>
       <Text style={styles.forText}>  See What's </Text><Text style={styles.forText}>  new In Home</Text>
       <Image style={styles.forImage} source={require("../ScrowlViewImages/Bed.png")}></Image>
       </View>
       <View style={{backgroundColor:'#f0f0f0',width:145,borderRadius:15,marginLeft:10}}>
       <Text style={styles.forText}>  Home decor </Text><Text style={styles.forText}>  under $20</Text>
       <Image style={styles.forImage} source={require("../ScrowlViewImages/homedec.jpg")}></Image>
       </View>
       <View style={{backgroundColor:'#f0f0f0',width:145,borderRadius:15,marginLeft:10}}>
       <Text style={styles.forText}>   Toys's under $25 </Text><Text></Text>
       <Image style={styles.forImage} source={require("../ScrowlViewImages/toys.jpeg")}></Image>
       </View>
       <View style={{backgroundColor:'#f0f0f0',width:145,borderRadius:15,marginLeft:10}}>
       <Text style={styles.forText}>  Clothing and  </Text><Text style={styles.forText}>  Fashion</Text>
       <Image style={styles.forImage} source={require("../ScrowlViewImages/clothes.jpg")}></Image>
       </View>
       <View style={{backgroundColor:'#f0f0f0',width:145,borderRadius:15,marginLeft:10}}>
       <Text style={styles.forText}>   Electronics</Text><Text></Text>
       <Image style={styles.forImage} source={require("../ScrowlViewImages/images.png")}></Image>
       </View>
       <View style={{backgroundColor:'#f0f0f0',width:145,borderRadius:15,marginLeft:10}}>
       <Text style={styles.forText}>   Best Books</Text><Text  style={styles.forText}>   For you</Text>
       <Image style={styles.forImage} source={require("../ScrowlViewImages/books.jpg")}></Image>
       </View>
       <View style={{backgroundColor:'#f0f0f0',width:145,borderRadius:15,marginLeft:10,marginRight:15}}>
       <Text style={styles.forText}>   Home and </Text><Text style={styles.forText}>   Kitchen</Text>
       <Image style={styles.forImage} source={require("../ScrowlViewImages/kitchen.jpg")}></Image>
       </View>
        </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        height:200,
        width:"100%",
        background: "linear-gradient(#ffffff,#f8f8f8)", 
        // backgroundColor:'black',
        bottom:10,
        // flexDirection:'row'
        // display:'none'
    },
    forImage:{
        width:145,
        height:150,
        // margin:5,
        borderRadius:10,
        marginTop:6.5,
        backgroundColor:'white',
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
    },
    forText:{
          color:'black',
          fontSize:16,
          fontWeight:'600',
    }
})
export default ListProduct;