import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export function Bid() {
  return (
    <View style={{ flex: 1 }}>
      <WebView 
        source={{ uri: 'https://msumer.com/bid' }} 
        allowsBackForwardNavigationGestures={true}
        useSharedProcessPool={false}
      />
    </View>
  )
}