import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import ImageComponents from "../components/ImageComponents";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ImagesScreen = () => {
  return (
    <SafeAreaView style={{ marginBottom: 50 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        testID="citiesBackground"
      >
        <ImageComponents listTestId="europe" title="Europe" />
        <ImageComponents listTestId="usa/canada" title="USA / Canada" />
        <ImageComponents listTestId="asia" title="Asia" />
      </ScrollView>
    </SafeAreaView>
  );
};

ImagesScreen.navigationOptions = {
  headerTitle: () => <Text testID="citiesHeader">Cities</Text>,
  headerShown: true,
  headerTitleAlign: "center",
  title: "Cities",
  tabBarIcon: (
    <FontAwesome5 name="city" size={20} testID="citiesNavigationImage" />
  ),
  tabBarAccessibilityLabel: "Cities",
  tabBarTestID: "citiesNavigationSection",
};

export default ImagesScreen;
