import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "nativewind";
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
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const isDarkMode = colorScheme === "dark";

  return (
    <Stack.Navigator
      initialRouteName="GO-SK"
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: isDarkMode ? "white" : "black",
        headerShadowVisible: true,
        headerStyle: {
          backgroundColor: isDarkMode ? "#121212" : "white",
        },
        headerTitleStyle: {
          color: isDarkMode ? "white" : "black",
        },
        contentStyle: {
          backgroundColor: isDarkMode ? "#121212" : "white",
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
