import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";



class Memes extends Component {
  state = {
    memes: []
  };

  componentDidMount() {
    this.loadMemes();
  }

  loadMemes = () => {
    console.log(`Look, Ma. No hands!`);
    API.getMemes()
      .then(res => {
        this.setState({ memes: res.data, uploadedBy: "", tags: [] });
        console.log(this.state.memes);
      }
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        {this.state.memes.length ? (

          <List>
            {this.state.memes.map(meme => (
              <ListItem key={meme._id}>
              <img className="rounded" src={meme.imgFilePath} alt="hm" style={{width: '300px', marginBottom: '20px', border: '2px solid black'}}/>
              </ListItem>
            ))}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </Container>
    )
  }
};

export default Memes;

// stayopen

