import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import LikeButton from "../../components/LikeButton";
import { TagList } from "../../components/TagList/TagList";



class Memes extends Component {
  state = {
    memes: [],
    n: 1
  };

  componentDidMount() {
    this.loadMemes();
  }

  loadMemes = () => {
    let n = this.state.n * 6;
    console.log(`Look, Ma. No hands!`);
    API.getMemes({ query: n })
      .then(res => {
        this.setState({
          memes: res.data,
          n: this.state.n + 1
        });
        console.log(this.state.memes);
      }
      )
      .catch(err => console.log(err));
  }

  toggleOffensive = (event) => {
    let offensiveness = event.target["data-offensive"];
    console.log(offensiveness);
    // if (offensiveness == "true") {
    //   offensiveness = "false"
    // } else 
    // if (offensiveness == false) {
    offensiveness = false;
    // }
    // offensiveness = !offensiveness;
    console.log(offensiveness);
  }

  updateLike = id => {
    var user = localStorage.getItem('CognitoIdentityServiceProvider.18kp0d0foqkulkcf15kab8r4sm.LastAuthUser');
    console.log(user, id);
    API.toggleLike({id: id, username: user})
      .then()
      .catch(err => console.log(err));
  }

  

  render() {
    return (
      <Container fluid>
        {this.state.memes.length ? (

          <List>
            {this.state.memes.map(meme => (
              <ListItem key={meme._id}>
                {
                  meme.offensive ? (
                    <img src={"../../../../images/triggered.jpg"} data-offensive={meme.offensive} onClick={this.toggleOffensive} />
                  ) : (
                    <div>
                      <img className="rounded"
                        src={meme.imgFilePath}
                        alt="hm"
                        totalvote={meme.totalVote}
                        likedby={meme.likedBy}
                        // data-offensive={meme.offensive} 
                        // onClick={this.toggleOffensive} 
                        style={{ width: '300px', marginBottom: '20px', border: '2px solid black' }}
                      />
                      <p> TAGS: {meme.tags.join(', ')} </p>

                      </div>
      
                    )
                }
                <LikeButton onClick={() => this.updateLike(meme._id)} />
                <TagList key={meme._id}>
                </TagList>

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