//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TextInput } from "react-native";
import MovieCard from "./MovieCard.js";

// create a component
class MovieList extends Component {
  constructor() {
    super();
    this.state = {
        search: ''
    };
}
  search(text) {
    this.setState({ text: text });
  }
  
  render() {
    const screenProps = this.props.screenProps;
    const navigate = this.props.navigation.navigate;

    return (
      <View>
        <TextInput style={styles.textinput} 
        placeholder="Search Movie" 
        onChangeText={ (text) => this.search(text)} value={this.state.text} />
        <FlatList
          data={screenProps.movies}
          keyExtractor={movie => movie.id}
          renderItem={movieItem => (
            <MovieCard
              {...movieItem.item}
              loadProfile={() => {
                navigate("MovieProfile", movieItem.item);
              }}
            />
          )}
          onEndReached={screenProps.loadMore}
          onEndReachedThreshold={0.05}
          refreshing={screenProps.loading}
          ListFooterComponent={() => (
            <View style={{ flex: 1, padding: 10 }}>
              <ActivityIndicator size="large" />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 8,
    padding: 10,
    backgroundColor: '#fff',
  }
});
//make this component available to the app
export default MovieList;
