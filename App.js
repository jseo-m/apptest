import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import { HomeScreen } from './screen/HomeScreen';
import { Estimate } from './screen/Estimate';
import { Bid } from './screen/Bid';
import { Support } from './screen/Support';

const Tab = createBottomTabNavigator()
export default function App() {

  return(
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        {/* <WebView 
          source={{ uri: 'https://msumer.com' }} 
          allowsBackForwardNavigationGestures={true}
          style={{ marginTop: 0 }} 
        /> */}
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Tab.Screen name="견적문의" component={Estimate} options={{headerShown:false}}/>
            <Tab.Screen name="입찰시스템" component={Bid} options={{headerShown:false}}/>
            <Tab.Screen name="고객지원" component={Support} options={{headerShown:false}}/>
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
