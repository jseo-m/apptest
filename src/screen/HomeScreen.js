import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

function render(){
  return(
    <WebView source={{uri:'https://naver.com'}}/>
  )
}

export function HomeScreen({route}) {
  const webViewRef = useRef(null);
  const [test, setTest] = useState("iiiiii")
  const { initialUri } = route.params || { initialUri: 'https://msumer.com' };
  useFocusEffect(
    useCallback(() => {
      console.log('initialUri:', initialUri);
      setTest("test")
      webViewRef.current && webViewRef.current.reload(); // WebView 리로딩
    }, [route.params])
  );

  return (
    <View style={{ flex: 1 }}>
      <WebView
        key={Date.now()}
        ref={webViewRef}
        source={{ uri: initialUri}}
      />
      <Text>{initialUri}</Text>
      {/* {render()} */}
    </View>
  );
}