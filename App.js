import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
const Tab = createBottomTabNavigator()

export default function App() {

  return(
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <WebView 
          source={{ uri: 'https://msumer.com' }} 
          allowsBackForwardNavigationGestures={true}
          style={{ marginTop: 0 }} 
        />
        {/* <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} options={{headerShown:false, tabBarIcon: ({color, size}) => (<Ionicons name='home' color={color} size={size}/>)}}/>
            <Tab.Screen name="견적문의" component={EstimateStack} options={{headerShown:false, tabBarIcon: ({color, size}) => (<Ionicons name='clipboard-outline' color={color} size={size}/>)}}/>
            <Tab.Screen name="입찰시스템" component={BidStack} options={{headerShown:false, tabBarIcon: ({color, size}) => (<Ionicons name='document-text-outline' color={color} size={size}/>)}}/>
            <Tab.Screen name="고객지원" component={SupportStack} options={{headerShown:false, tabBarIcon: ({color, size}) => (<Ionicons name='chatbubble-ellipses-outline' color={color} size={size}/>)}}/>
          </Tab.Navigator>
          </NavigationContainer> */}
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
