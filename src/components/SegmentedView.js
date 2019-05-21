import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'

//https://github.com/kirankalyan5/react-native-segmented-control-tab/blob/master/Sample/SegmentedView.js

class SegmentedView extends React.Component{
  constructor() {
    super()
    this.state = {
      //default init is 0
      customStyleIndex: 0,
    }
  }

  handleCustomIndexSelect = (index) => {
    this.setState(prevState => ({ ...prevState, customStyleIndex: index }))
  }

  render() {
    const { customStyleIndex } = this.state
    return (

      <View style={styles.container}>
        <SegmentedControlTab
          values={['one', 'two']}
          selectedIndex={customStyleIndex}
          onTabPress={this.handleCustomIndexSelect}
          borderRadius={0}
          tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2' }}
          tabStyle={{ backgroundColor: '#F2F2F2', borderWidth: 0, borderColor: '' }}
          activeTabStyle={{ backgroundColor: '#EE3439', marginTop: 2 }}
          tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
          activeTabTextStyle={{ color: 'white' }}
        />
        {customStyleIndex === 0
          && 
          <Text style={styles.tabContent}> Tab one </Text>
        }
        {customStyleIndex === 1
          && 
          <Text style={styles.tabContent}> Tab two</Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
})


export default SegmentedView