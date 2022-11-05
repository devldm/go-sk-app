import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobPreviewScreen from "../screens/JobPreviewScreen";
import JobScreen from "../screens/JobScreen";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation({}: {}) {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="GO-SK"
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerShadowVisible: true,
        headerStyle: {
          backgroundColor: "#121212",
        },
        headerTitleStyle: {
          color: "white",
        },
        contentStyle: {
          backgroundColor: "#121212",
        },
      }}
    >
      <Stack.Screen
        name="GO-SK"
        component={JobPreviewScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Job"
        component={JobScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
