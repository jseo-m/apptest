import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://msumer.com' }} />
    </View>
  )
}