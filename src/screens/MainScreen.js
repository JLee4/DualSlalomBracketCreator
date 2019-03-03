import React from "react";
import { SafeAreaView, Image, View, Text, Dimensions, ScrollView } from "react-native";
import { createStackNavigator, createDrawerNavigator, DrawerItems } from "react-navigation";

import RaceScreen from "./RaceScreen";
import QualificationScreen from "./QualificationScreen";

import Button from "../components/Button";
import Ionicons from "react-native-vector-icons/Ionicons";


function createNavigationHeader(name) {
  return ({ navigation }) => {

    let headerButton = (
      <Button style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()}>
        <Ionicons name="md-menu"
                  size={35} color="#9599a2" />
      </Button>
    );

    return {
      initialRouteName: name,
      drawerLabel: name,
      headerMode: "screen",
      headerTitle: name,
      headerStyle: {
        backgroundColor: "#324151",
      },
      headerTintColor: "#9599a2",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerLeft: headerButton
    };
  };
}

const { width } = Dimensions.get("window");

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{
      height: 220, backgroundColor: "#9599a2",
      alignItems: "center", justifyContent: "center"
    }}>
      <Image source={LogoImage}
             style={{ height: 180, width: 220, borderRadius: 0 }} />
    </View>

    <ScrollView style={{ backgroundColor: "#9599a2" }} contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}>
      <DrawerItems {...props} />
      <Button
        style={{ width: "100%", height: 50, backgroundColor: "#9599a2" }}
      >
        <Text style={{ textAlign: "center", fontSize: 12, color: "black" }}>Log Out</Text>
      </Button>
    </ScrollView>
  </SafeAreaView>
);

const MainNav = createDrawerNavigator({
    Qualifications: QualificationScreen(createNavigationHeader("Qualifications")),
    Race: RaceScreen(createNavigationHeader("Races")),
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: width * .65,
  }
);

export const MainScreen = createStackNavigator(
  {
    MainNav: { screen: MainNav }
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
    initialRouteName: "MainScreen",
  },
);