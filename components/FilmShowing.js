/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';

const FilmShowing = (props) => {
    const [displaySummary, setDisplaySummary] = useState(false);

  return (
      <View style={styles.listView}>
        <View style={styles.rowView}>
            <View style={styles.halfBox}>
                <Text style={styles.filmTitleText}>{props.film.title}</Text>
                <Text style={styles.infoText}>{props.film.date} — {props.film.showtime}</Text>
                <Text style={styles.infoText}>{props.film.location}</Text>
                <TouchableOpacity onPress={() => setDisplaySummary(!displaySummary)}>
                    <Text style={styles.toggleText}>
                        {!displaySummary ? ('show summary >') : ('close summary ^') }
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.halfBox}>
                <TouchableOpacity style={styles.buyButton} onPress={() => Linking.openURL(props.film.buy_ticket_link)}>
                    <Text style={styles.buttonText}>Buy</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.summaryBox}>
            {displaySummary && <Text style={styles.infoText}>{props.film.summary}</Text>}
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    buyButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        margin: 6,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#30A6E7',
        width: 100,
        height: 50,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    filmTitleText: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    infoText: {
        color: 'white',
    },
    halfBox: {
        width: '50%',
        paddingLeft: '2%',
    },
    rowView: {
        flexDirection: 'row',
    },
    dash: {
        color: 'white',
    },
    toggleText: {
        color: '#30A6E7',
    },
    listView: {
        flexDirection: 'column',
        width: '115%',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        marginBottom: 10,
        paddingBottom: 10,
    },
    summaryBox: {
        width: '70%',
        marginLeft: 10,
    },
  });

export default FilmShowing;
