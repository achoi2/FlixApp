//import liraries
import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

// create a component
class MovieProfile extends Component {
    render() {
        const props = this.props.navigation.state.params;
        const img = {
            uri:`https://image.tmdb.org/t/p/w342/${this.props.poster_path}`
        };
        return (
            <View>
                <Image style={styles.image} source={img}></Image>
                <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.overview}>{props.overview}</Text>
                <Text style={styles.overview}>{props.vote_average} average vote </Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MovieProfile;
