import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from '@/screen/HomeScreen';
import { Estimate } from '@/screen/Estimate';
import { Bid } from '@/screen/Bid';
import { Support } from '@/screen/Support';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator();
const EstimateStack = createStackNavigator();
const BidStack = createStackNavigator();
const SupportStack = createStackNavigator();

const HomeTab = () => {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Notice" component={HomeScreen} options={{headerShown:false}}/>
      </HomeStack.Navigator>
  );
}
const EstimateTab = () => {
  return (
      <EstimateStack.Navigator>
        <EstimateStack.Screen name="Notice" component={Estimate} options={{headerShown:false}}/>
      </EstimateStack.Navigator>
  );
}
const BidTab = () => {
  return (
      <BidStack.Navigator>
        <BidStack.Screen name="Notice" component={Bid} options={{headerShown:false}}/>
      </BidStack.Navigator>
  );
}
const SupportTab = () => {
  return (
      <SupportStack.Navigator>
        <SupportStack.Screen name="Notice" component={Support} options={{headerShown:false}}/>
      </SupportStack.Navigator>
  );
}

export default function App() {

  return(
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        {/* <WebView 
          source={{ uri: 'https://msumer.com' }} 
          allowsBackForwardNavigationGestures={true}
          style={{ marginTop: 0 }} 
        /> */}
        <NavigationContainer independent={true}>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeTab} options={{headerShown:false, tabBarIcon: ({color, size}) => (<Ionicons name='home' color={color} size={size}/>)}}/>
            <Tab.Screen name="견적문의" component={EstimateTab} options={{headerShown:false, tabBarIcon: ({color, size}) => (<Ionicons name='clipboard-outline' color={color} size={size}/>)}}/>
            <Tab.Screen name="입찰시스템" component={BidTab} options={{headerShown:false, tabBarIcon: ({color, size}) => (<Ionicons name='document-text-outline' color={color} size={size}/>)}}/>
            <Tab.Screen name="고객지원" component={SupportTab} options={{headerShown:false, tabBarIcon: ({color, size}) => (<Ionicons name='chatbubble-ellipses-outline' color={color} size={size}/>)}}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      </>
     )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
