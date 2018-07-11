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
        <List>
          {this.state.memes.map(meme => (
            <ListItem key={meme._id}>
            </ListItem>
          ))}
        </List>
      </Container>
    )
  }
};

export default Memes;

// stayopen