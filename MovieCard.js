//import liraries
import React, { Component } from "react";
import { Image, View, Text, StyleSheet, TouchableHighlight } from "react-native";

// create a component
class MovieCard extends Component {
  render() {
    const img = {
      uri: `https://image.tmdb.org/t/p/w342/${this.props.poster_path}`
    };
    return (
      <TouchableHighlight onPress={this.props.loadProfile}>
        <View>
          <Image style={{ width: 300, height: 150 }} source={img} />
          <Text>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default MovieCard;
