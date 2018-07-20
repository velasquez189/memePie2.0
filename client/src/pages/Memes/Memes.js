import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";



class Memes extends Component {
  state = {
    memes: [],
    n: 1
  };

  componentDidMount() {
    this.loadMemes();
  }

  loadMemes = () => {
    let n = this.state.n *6;
    console.log(`Look, Ma. No hands!`);
    API.getMemes({query: n})
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
    let offensiveness = event.target.getAttribute('data-offensive');
    console.log(offensiveness);
    if (offensiveness === "true") {
      offensiveness = "false";
    } else if (offensiveness === "false") {
      offensiveness = "true";
    }
  }

  render() {
    return (
      <Container fluid>
        {this.state.memes.length ? (

          <List>
            {this.state.memes.map(meme => (
              <ListItem key={meme._id} data-offensive={meme.offensive} onClick={this.toggleOffensive}>
              {
                meme.offensive ? (
                  <img src={"../../../../images/triggered.jpg"} data-offensive={meme.offensive.toString()} onClick={this.toggleOffensive}/>
                ) : (
                  <img className="rounded" 
                    src={meme.imgFilePath} 
                    alt="hm" 
                    data-offensive={meme.offensive.toString()} 
                    onClick={this.toggleOffensive} 
                    style={{width: '300px', marginBottom: '20px', border: '2px solid black'}}
                  />
                )
              }
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

export default Memes;