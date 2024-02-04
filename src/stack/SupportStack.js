import { Support } from "@/screen/Support";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const SupportStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Notice" component={Support} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}

export default SupportStack;