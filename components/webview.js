import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class WebviewExample extends Component {
  render() {
    return (
        
      <WebView
        source={{
          uri: 'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint',
        }}
        style={{marginTop: 40}}
      />
      
    );
  }
}

export default WebviewExample