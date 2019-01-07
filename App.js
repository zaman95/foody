/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Text, View, SafeAreaView, Image, Dimensions, FlatList, ImageBackground,
  TouchableOpacity, StyleSheet, ScrollView, Linking, Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Carousel from 'react-native-snap-carousel';

const primaryColor = '#478AFF';
const fontColor = '#121261';
const { width, height } = Dimensions.get('window');

export default class App extends Component {
  state = {
    restaurantData: [
      {
        'category': 'American Style Food',
        'pic': 'https://www.divenq.co.uk/wp-content/uploads/2017/12/A5-Flyer-1080-1024x1024.jpg',
        'timeDistance': '6',
        'cost': '10-15',
        'rating': '4.5',
        'likes': '23',
        'address': 'Washeo Public House',
        'timings': '9:00pm',
        'status': 'Not Busy',
        'star': 'Featured in NY Magazine, Zagat, and 2 others',
        'phone': '9234565756',
        'distance': '0.8 miles away',
      },
      {
        'category': 'Italian Food',
        'pic': 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/1506456122-delish-spaghetti-meatballs-2.jpg',
        'timeDistance': '8',
        'cost': '13-16',
        'rating': '3.8',
        'likes': '25',
        'address': 'Old Granite Street Eatery',
        'timings': '10:00pm',
        'status': 'Busy',
        'star': 'Featured in NY Magazine, Zagat, and 2 others',
        'phone': '32346465078',
        'distance': '0.7 miles away',
      },
      {
        'category': 'Chinese',
        'pic': 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/03/1484951135-delish-kung-pao-spaghetti-pin-1.jpg',
        'timeDistance': '7',
        'cost': '17-21',
        'rating': '4.1',
        'likes': '31',
        'address': 'Midtown Eats',
        'timings': '11:00pm',
        'status': 'Not Busy',
        'star': 'Featured in NY Magazine, Zagat, and 2 others',
        'phone': '0985532446',
        'distance': '0.2 miles away',
      }
    ]
  }

  _renderItem({ item, index }) {
    return (
      <View style={[styles.shadow, { flexDirection: 'column', marginRight: 6, width: width - 40, height: height / 1.5, borderRadius: 20, backgroundColor: 'grey', flexWrap: 'wrap', overflow: 'hidden' }]}>

        <View style={{ flexWrap: 'wrap', backgroundColor: primaryColor, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, color: 'white', fontWeight: '600' }}>{item.category}</Text>
          <TouchableOpacity style={{ paddingTop: 4 }} >
            <Octicons name="pin" size={24} color={'white'} />
          </TouchableOpacity>
        </View>

        <View style={{ flexWrap: 'wrap', backgroundColor: 'white', padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginRight: 6 }} >
              <Ionicons name="ios-walk" size={24} color={primaryColor} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '600', color: fontColor, }}>{item.timeDistance}</Text>
            <Text style={{ fontSize: 12, color: fontColor, }}>min</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginRight: 6 }} >
              <Foundation name="dollar" size={24} color={primaryColor} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '600', color: fontColor, }}>{item.cost}</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginRight: 6 }} >
              <Ionicons name="md-star" size={24} color={primaryColor} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '600', color: fontColor, }}>{item.rating}</Text>
            <Text style={{ fontSize: 12, color: fontColor, }}>/5</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginRight: 6 }} >
              <Ionicons name="ios-heart" size={20} color={primaryColor} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '600', color: fontColor, }}>{item.likes}</Text>
          </View>
        </View>

        <ImageBackground
          resizeMode={"cover"}
          style={{ flex: 1, flexDirection: "column", justifyContent: 'space-between', alignItems: 'flex-start', }}
          source={{ uri: item.pic }}>
          <View style={{ flex: 1, flexDirection: "column", justifyContent: 'space-between', alignItems: 'flex-start', backgroundColor: 'rgba(0,0,0,0.3)' }}>
            <View style={{ margin: 20 }}>
              <View style={{ marginVertical: 5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ionicons name="ios-pin" size={20} color={'white'} style={{ marginRight: 6 }} />
                <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>{item.address}</Text>
              </View>
              <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>Closes at {item.timings}</Text>
            </View>

            <View style={{ margin: 20 }}>
              <View style={{ marginVertical: 5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Octicons name="primitive-dot" size={20} color={'white'} style={{ marginRight: 6 }} />
                <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>{item.status}</Text>
              </View>
              <View style={{ marginLeft: -5, marginRight: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ionicons name="md-star" size={20} color={'white'} style={{ marginRight: 6 }} />
                <Text numberOfLines={2} style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>
                  {item.star}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View style={{ flexWrap: 'wrap', backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => { this.callNumberrr(`tel:916787687686`) }}>
            <Text style={{ fontSize: 18, color: primaryColor }}>Call</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, color: primaryColor }}>{item.distance}</Text>
          <Text style={{ fontSize: 18, color: primaryColor }}>Reserve</Text>
        </View>

      </View>
    );
  }

  callNumberrr(url) {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#EAF1FA' }}>
        <View style={styles.container}>

          <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, color: fontColor, fontWeight: '600' }}>Foodsy</Text>
            <TouchableOpacity style={{ paddingTop: 4 }} >
              <Ionicons name="md-search" size={30} color={fontColor} />
            </TouchableOpacity>
          </View>

          <View style={{ margin: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <TouchableOpacity style={{ marginRight: 6 }} >
                <Ionicons name="ios-calendar" size={30} color={fontColor} />
              </TouchableOpacity>
              <Text style={{ fontSize: 16, color: primaryColor, }}>Tomorrow</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginRight: 10, }}>
                <TouchableOpacity style={{ marginRight: 6 }} >
                  <Ionicons name="md-people" size={30} color={fontColor} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: primaryColor, }}>5</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <TouchableOpacity style={{ marginRight: 6 }} >
                  <Ionicons name="md-time" size={30} color={fontColor} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: primaryColor, }}>7pm</Text>
              </View>

            </View>

          </View>

          {/* <FlatList
            style={{ flex: 1, width: width, marginVertical: 10, }}
            contentContainerStyle={{}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={this.state.restaurantData}
            renderItem={({ item, index }) => (


            )} /> */}
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.restaurantData}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={width}
            itemWidth={width - 40}
          />

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: Platform.OS === 'ios' ? null : 30,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.00,

    elevation: 5,
  },
});
