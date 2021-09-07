/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FilmShowing from './components/FilmShowing.js';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import customData from './film-data.json';
import Placeholder from './imgs/placeholder.png';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [filmList, setFilmList] = useState(customData.films);

  return (
    <View style={styles.centerAlign}>
      <Image
        resizeMode="contain"
        style={styles.bannerImg}
        source={Placeholder}
      />
      <Text style={styles.dash}>
        __________________________________________________
      </Text>
      <Text> </Text>
      <View style={styles.rowView}>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterBtnText}>Row House</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterBtnText}>Hollywood Theater</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.dash}>_________________________</Text>
      <ScrollView style={styles.alignItems}>
        {filmList.map((film, i) => {
          return <FilmShowing key={i} film={film} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  bannerImg: {
    width: 360,
    height: 100,
    alignSelf: 'center',
  },
  centerAlign: {
    alignItems: 'center',
    flex: 1,
  },
  dash: {
    color: 'white',
  },
  rowView: {
    flexDirection: 'row',
  },
  filterBtn: {
    width: '40%',
    backgroundColor: '#F3F4DE',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderRadius: 4,
  },
  filterBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
