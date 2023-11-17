import React from "react";
import { View ,StyleSheet,Text,Image} from "react-native";
const Undercross=()=>{
    return(
        <View style={{backgroundColor:'#9da3a3',width:'100%',height:1.5}}>

        </View>
    )
}
const AtEnd=()=>{
    return(
        <View style={{backgroundColor:'#9da3a3',width:'100%',height:40}}>
        <Text style={{color:'white',alignSelf:'center'}}>You reached the end.Keep exploring.</Text>
        </View>
    )
}
const ShoesTrend=()=>{
    return(
        <View>
        <View style={styles.container}>
             <Text style={styles.forText}>    Fashion trends in shoes</Text>
           <View style={{backgroundColor:'white',width:'100%',height:220,flexDirection:'row'}}>
            <Image style={styles.forImage} source={require('../ImagesForShoesTrend/girls.jpg')}></Image>
            <Image style={styles.forImage} source={require('../ImagesForShoesTrend/boyshoes.png')}></Image>
           </View>
           <Text style={{fontSize:15}}>        Shop womens                     Shop mens</Text>
           <View style={{backgroundColor:'white',width:'100%',height:220,flexDirection:'row'}}>
            <Image style={styles.forImage} source={require('../ImagesForShoesTrend/kids.jpeg')}></Image>
            <Image style={styles.forImage} source={require('../ImagesForShoesTrend/BoysBaby.jpeg')}></Image>
           </View>
           <Text style={{fontSize:15}}>        Shop kids                            Shop more shoes</Text>
           <Text style={{color:'#07ebe3',marginTop:10,fontSize:15}}>        Shop more</Text>
        </View>
        <Undercross/>
        <View style={styles.container}>
             <Text style={styles.forText}>    Shoes under $60</Text>
           <View style={{backgroundColor:'white',width:'100%',height:220,flexDirection:'row'}}>
            <Image style={styles.forImage} source={require('../ImagesForShoesTrend/women.png')}></Image>
            <Image style={styles.forImage} source={require('../ImagesForShoesTrend/mens.jpg')}></Image>
           </View>
           <Text style={{fontSize:15}}>        Women's                               Men's</Text>
           <View style={{backgroundColor:'white',width:'100%',height:220,flexDirection:'row'}}>
            <Image style={styles.forImage} source={require('../ImagesForShoesTrend/gilsshoe.jpg')}></Image>
            <Image style={styles.forImage} source={require('../ImagesForShoesTrend/boys.png')}></Image>
           </View>
           <Text style={{fontSize:15}}>        Girl's                                      Boy's</Text>
           <Text style={{color:'#07ebe3',marginTop:10,fontSize:15}}>        Shop all</Text>
        </View>
        <Undercross/>
        <AtEnd/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        height:550,
        width:'100%',
        backgroundColor:'white',
    },
    forText:{
        color:'black',
        fontSize:20,
        fontWeight:'700'
    },
    forImage:{
      width:150,
      height:200,
      marginLeft:20,
      marginTop:10,
      borderRadius:10  
    }
})
export default ShoesTrend;