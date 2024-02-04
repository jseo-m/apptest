const { Estimate } = require("@/screen/Estimate");
const { createStackNavigator } = require("@react-navigation/stack");

const Stack = createStackNavigator();
const EstimateStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Notice" component={Estimate} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}

export default EstimateStack;