import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export function Estimate() {
  return (
    <View style={{ flex: 1 }}>
      <WebView 
        source={{ uri: 'https://msumer.com/estimate' }} 
        allowsBackForwardNavigationGestures={true}
        useSharedProcessPool={false}
      />
    </View>
  )
}