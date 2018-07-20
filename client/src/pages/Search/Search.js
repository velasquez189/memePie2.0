import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";



class Search extends Component {
  state = {
    memes: [],
    n: 1,
    keyword: "",
    username: "",
  };

  componentDidMount() {
    this.loadMemes();
  }

  handleKeywords = (event)=> {
      const {keyword, value} = event.target;
      this.setState({keyword: value})
  }

  handleUser = (event)=> {
    const {username, value} = event.target;
    this.setState({username: value})
}

  loadMemes = () => {
    let n = this.state.n *6;
    console.log(`Look, Ma. No hands!`);
    API.searchMemes({query: n, keywords: this.state.keyword})
      .then(res => {
        this.setState({ memes: res.data, 
                        // uploadedBy: "", 
                        // tags: [],
                        n: this.state.n +1
                       });
        console.log(this.state.memes);
      }
      )
      .catch(err => console.log(err));
  }

  toggleOffensive = (event) => {
    console.log(event.target);
    event.target.offensive = !event.target.offensive;
  }

  searchUser = () => {
    let n = this.state.n * 6;
    console.log(`searching for user...`);
    API.searchUser({ query: n, username: this.state.username})
      .then(res => {
        this.setState({ memes: res.data,
                        n: this.state.n +1
                      });
        console.log(this.state.memes);
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>

      <h4> Search for memes by Tag </h4>
      <input type="text" onChange={this.handleKeywords}/>
        <button onClick={this.loadMemes}> Search </button>

      <br/><br/>

      <h4> Search for memes by User </h4>
      <input type="text" onChange={this.handleUser}/>
        <button onClick={this.searchUser}> Search </button>

        {this.state.memes.length ? (

          <List>
            {this.state.memes.map(meme => (
              <ListItem key={meme._id}>
              <img className="rounded" src={meme.imgFilePath} alt="hm" offensive={meme.offensive} onClick={this.toggleOffensive} style={{width: '300px', marginBottom: '20px', border: '2px solid black'}}/>
              </ListItem>
            ))}
            <button onClick={this.loadMemes}>Load more Memes</button>
            <br /><br /><br />
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </Container>
    )
  }
};

export default Search;