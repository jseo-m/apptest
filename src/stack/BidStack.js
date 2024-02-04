import { Bid } from "@/screen/Bid";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const BidStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Notice" component={Bid} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}

export default BidStack;