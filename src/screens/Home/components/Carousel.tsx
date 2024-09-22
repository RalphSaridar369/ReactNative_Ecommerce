import React from "react";
import { Dimensions, View, Image, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const screenWidth = Dimensions.get("screen").width;

const CarouselComponent = ({ data }) => {
  const _renderItem = ({ item }) => {
    return (
      <View>
        <Image
          style={styles.image}
          source={item.image}
          resizeMode="stretch"
          resizeMethod="auto"
        />
      </View>
    );
  };

  return (
    <View style={{ paddingTop: 20 }}>
      <Carousel
        loop
        width={screenWidth}
        height={200}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={_renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: screenWidth,
  },
});

export default CarouselComponent;
