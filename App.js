import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MovieList from "./MovieList.js";

const apiKey = '9710505071f8a3028ae8d5341ecf2f53';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false 
    } 
  }

  componentWillMount(props) {
    this.setState({
      loading: true
    }, () => {
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
        .then((data) => data.json())
        .then((json) =>{
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(json);
            }, 2000);
          });
        })
        .then((json) => {
          this.setState ({
            movies: json.results,
            loading: false
          });
        })
    }); 
  }
  
  render() {
    return ( 
      <MovieList 
        movies={this.state.movies} 
        loading={this.state.loading}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});
