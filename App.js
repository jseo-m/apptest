import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';


export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  return(
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <WebView 
          source={{ uri: 'https://msumer.com' }} 
          allowsBackForwardNavigationGestures={true}
          style={{ marginTop: 0 }} 
        />
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
