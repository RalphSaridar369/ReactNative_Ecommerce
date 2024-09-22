import { ScrollView, View } from "react-native";
import { styles } from "./Styles";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "../../components";
import { BarChart, LineChart } from "react-native-gifted-charts";
import { AppStyles } from "../../../AppStyle";
import useTheme from "../../helpers/useTheme";

const Dashboard = () => {
  const fill = "rgb(255, 104, 99)";
  const barData = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
  const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];

  const currentTheme = useTheme();

  return (
    <LinearGradient
      colors={
        currentTheme === "dark"
          ? [AppStyles.dark_color.color, AppStyles.dark_color.color]
          : ["#FF6863", "#fff", "#fff"]
      }
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollview}
      >
        <View
          style={[
            styles.card,
            {
              backgroundColor:
                currentTheme === "dark"
                  ? "AppStyles.dark_color_2.color"
                  : "#fff",
            },
          ]}
        >
          <Text style={styles.card_header}>Sales</Text>
          <BarChart
            data={barData}
            frontColor={fill}
            yAxisTextStyle={{
              color: currentTheme === "dark" ? "#fff" : "black",
            }}
            yAxisColor={currentTheme === "dark" ? "#fff" : "black"}
            xAxisColor={currentTheme === "dark" ? "#fff" : "black"}
          />
        </View>
        <View
          style={[
            styles.card,
            {
              backgroundColor:
                currentTheme === "dark"
                  ? "AppStyles.dark_color_2.color"
                  : "#fff",
            },
          ]}
        >
          <Text style={styles.card_header}>Sales per week</Text>
          <LineChart
            data={data}
            color={fill}
            dataPointsColor={"red"}
            curved
            curvature={0.2}
            showVerticalLines
            noOfSections={10}
            yAxisTextStyle={{
              color: currentTheme === "dark" ? "#fff" : "black",
            }}
            yAxisColor={currentTheme === "dark" ? "#fff" : "black"}
            xAxisColor={currentTheme === "dark" ? "#fff" : "black"}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Dashboard;
