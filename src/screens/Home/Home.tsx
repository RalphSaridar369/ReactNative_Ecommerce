import React from "react";
import { View, ScrollView } from "react-native";
// import CarouselComponent from "./components/Carousel";
import { carouselData, flatList1, flatList2, flatList3 } from "../../mockData";
import FlatlistComponent from "./components/Flatlist";
// import CarouselComponent from "./components/Carousel";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingBottom: 20 }}>
      <ScrollView>
        {/* <CarouselComponent data={carouselData} loop={true} autoplay={true} /> */}
        <View style={{ marginTop: 20 }}>
          <FlatlistComponent
            headerText="Top Products"
            data={flatList1}
            navigation={navigation}
          />
          <FlatlistComponent
            headerText="Best Selling"
            data={flatList2}
            navigation={navigation}
          />
          <FlatlistComponent
            headerText="Top Deals"
            data={flatList3}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
