import React from "react";
import { View, ScrollView } from "react-native";
import { carouselData, flatList1, flatList2, flatList3 } from "../../mockData";
import FlatlistComponent from "./components/Flatlist";
import CarouselComponent from "./components/Carousel";
import { AppStyles } from "../../../AppStyle";
import useTheme from "../../helpers/useTheme";

const Home = ({ navigation }) => {
  const currentTheme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          currentTheme === "dark" ? AppStyles.dark_color.color : "#fff",
        paddingBottom: 20,
      }}
    >
      <ScrollView>
        <CarouselComponent data={carouselData} />
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
