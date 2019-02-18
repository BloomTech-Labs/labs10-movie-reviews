import React, { Component } from 'react';
import axios from 'axios';
import './Landing.css';



class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
        movies: [],
        random: "",
        randomTitle: "",
        searchCriteria:"",
        searchResults: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
}

handleChange = (event)=>{
    this.setState({searchCriteria:event.target.value});
    console.log(this.state.searchCriteria);
}


componentDidMount() {
    let promise = axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=30caa3405525c5e5dcab3ac52eabe0ae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
    promise
        .then(response => {
            const random = Math.floor(Math.random() * response.data.results.length);
            const title = response.data.results[random].title;
            const backdropURL = "https://image.tmdb.org/t/p/original" + response.data.results[random].backdrop_path;
            this.setState({movies: response.data.results, random: backdropURL, randomTitle: title})
        })
        .catch(err => {
            console.log(err);
        })

}

searchHandler = () => {
    console.log(this.state.searchCriteria);
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=30caa3405525c5e5dcab3ac52eabe0ae&language=en-US&query=${this.state.searchCriteria}&include_adult=false`)
    .then(response => {
        console.log(response);
            this.setState({searchResults: response.data.results})
        console.log(this.state);
    })
    .catch(err => {
        console.log(err);
    })
}


    render() { 
        //TODO: loading screen
        return (
            <div className="Landing" style={{ backgroundImage: 
            "url(" +this.state.random+ ")"}}>
            <div className="header-wrapper">
            <h1 className="app-name">CineView</h1>
            <div className="app-subtitle">Real People. Real Reviews.</div>
            <div className="landing-page-route-wrapper">
                <label className="landing-label">Search for Movies:</label>
                <input 
                    onChange={this.handleChange}
                    className="landing-input" 
                    type="text" 
                    placeholder={this.state.randomTitle}/>
                <div className="call-to-action-buttons">
                <div 
                    className="button" 
                    onClick={this.searchHandler}
                >CineView Search
                </div> {/* button end */}
                </div>{/* call to action buttons button end*/}
                <div className={this.state.searchResults.length > 0 ? "search-results" : "hidden"}>
                <h1 
                    className={this.state.searchResults.length > 0 ? "search-results-header" : "hidden"}>
                    Search Results: {this.state.searchCriteria}
                </h1>
                <div className="search-results-container">
                    {this.state.searchResults.map(result => {
                    return (
                    <div className="result-card"key={result.id} style={{backgroundColor: "ivory"
                    }}>
                        <h1 className="search-results-header">{result.title}</h1>
                        <img className="poster-img" src={`https://image.tmdb.org/t/p/original${result.poster_path}`} alt={result.title}/>
                    </div>
                    )
                    })}
                </div>
                </div> 
            </div> 
        </div> 
        </div>
    );
  }
}

export default Landing;
