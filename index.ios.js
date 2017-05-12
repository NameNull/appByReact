import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, TabBarIOS, View} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = () => (
    <View>
      <Text style={{fontFamily:'iconfont', borderWidth:1, borderColor:'red'}}>&#xe67d;</Text>
    </View>
);
const Record = () => (
    <View>
      <Text>record</Text>
    </View>
);
const Account = () => (
    <View>
      <Text>account</Text>
    </View>
);

export default class app extends Component {
    constructor(props){
      super(props);
      this.state = {
          selectedTab: "home"
      }
    }

    render() {
        return (
            <TabBarIOS unselectedTintColor="#666"
                       tintColor="red"
                       unselectedItemTintColor="#666"
                       barTintColor="#fff">
              <Ionicons.TabBarItemIOS
                  title = "首页"
                  iconName='ios-videocam-outline'
                  selected={this.state.selectedTab === 'home'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'home',
                    });
                  }}>
                  <Home />
              </Ionicons.TabBarItemIOS>
              <Ionicons.TabBarItemIOS
                  title="录制"
                  iconName='ios-recording'
                  selectedIconName='ios-recording'
                  selected={this.state.selectedTab === 'record'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'record',
                    });
                  }}>
                  <Record />
              </Ionicons.TabBarItemIOS>
              <Ionicons.TabBarItemIOS
                  title="我的"
                  iconName='ios-list-outline'
                  selected={this.state.selectedTab === 'account'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'account',
                    });
                  }}>
                  <Account />
              </Ionicons.TabBarItemIOS>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('app', () => app);
