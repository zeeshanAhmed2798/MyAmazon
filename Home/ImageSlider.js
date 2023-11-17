import React, { useRef, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const ImageSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const autoplayInterval = 3000; // Change this value to set the autoplay interval (3 seconds in this example).

    const autoplay = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.scrollBy(1);
      }
    }, autoplayInterval);

    return () => {
      clearInterval(autoplay);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Swiper ref={swiperRef} style={styles.wrapper} showsButtons={false}
      // nextButton={<View style={{backgroundColor:'black'}}/>}
      // prevButton={<View style={{backgroundColor:'black'}}/>}
      dotStyle={{ opacity: 0 }} // Set opacity to 0 to hide the dots
      activeDotStyle={{ opacity: 0 }} 
      // activeDot={<View style={{backgroundColor:'#00FFFFFF'}}/>}
      // dotStyle={{backgroundColor:'#00FFFFFF'}}
      >
        <View style={styles.slide} >
          <Image source={require('../SliderImages/sl1.png')} style={styles.image} />
        </View>
        <View style={styles.slide}>
        <Image source={require('../SliderImages/book.png')} style={styles.image} />
        </View>
        <View style={styles.slide}>
        <Image source={require('../SliderImages/kitchen.png')} style={styles.image} />
        </View>
        <View style={styles.slide}>
        <Image source={require('../SliderImages/beauty.png')} style={styles.image} />
        </View>
        <View style={styles.slide}>
        <Image source={require('../SliderImages/toys.png')} style={styles.image} />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:242,
    backgroundColor:'pink',
  
  },
  wrapper: {},
  slide: {
    
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageSlider;
