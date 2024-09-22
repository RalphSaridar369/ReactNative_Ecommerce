import { ScrollView, View } from "react-native";
import { styles } from "./Styles";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "../../components";
import { BarChart, LineChart } from "react-native-gifted-charts";

const Dashboard = () => {
  const fill = "rgb(255, 104, 99)";
  const barData = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
  const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];

  return (
    <LinearGradient colors={["#FF6863", "#fff", "#fff"]} style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollview}
      >
        <View style={styles.card}>
          <Text style={styles.card_header}>Sales</Text>
          <BarChart data={barData} frontColor={fill} />
        </View>
        <View style={styles.card}>
          <Text style={styles.card_header}>Sales per week</Text>
          <LineChart
            data={data}
            color={fill}
            dataPointsColor={"red"}
            curved
            curvature={0.2}
            showVerticalLines
            noOfSections={10}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Dashboard;
