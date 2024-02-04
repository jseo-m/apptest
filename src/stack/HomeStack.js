import { HomeScreen } from "@/screen/HomeScreen";
import { useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useCallback } from "react";

const Stack = createStackNavigator();

const HomeStack = () => {
  useFocusEffect(
    useCallback(() => {
      
    },[])
  )
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}

export default HomeStack;