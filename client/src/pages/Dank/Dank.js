import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import LikeButton from "../../components/LikeButton";
import DownButton from "../../components/DownButton";
import Waypoint from "react-waypoint";


class Dank extends Component {
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
    API.getDank({ query: n })
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
    event.target.src = event.target.alt;
  }

  updateLike = meme => {
    var user = localStorage.getItem('CognitoIdentityServiceProvider.18kp0d0foqkulkcf15kab8r4sm.LastAuthUser');
    console.log(user, meme._id);
    console.log(meme);
    console.log("tiggitytest");
    if (meme.likedBy.indexOf(user) < 0) {
      API.upVote({ id: meme._id, username: user })
        .then(res => {
          console.log("updated meme with like");
          this.setState({ n: this.state.n - 1 });
          this.loadMemes()
        })
        .catch(err => console.log(err));
        // Check if meme is already disliked, then remove downvote from database and adjust total score
        if (meme.dislikedBy.indexOf(user) > -1) {
          API.unStank({ id: meme._id, username: user})
            .then(res => {
              console.log("removing from disliked");
            })
            .catch(err => console.log(err));
        }
    } else { return; }
  }

  updateDislike = meme => {
    var user = localStorage.getItem('CognitoIdentityServiceProvider.18kp0d0foqkulkcf15kab8r4sm.LastAuthUser');
    console.log(user, meme._id);
    console.log("this app needs more console logs");
    if (meme.dislikedBy.indexOf(user) < 0) {
      API.downVote({ id: meme._id, username: user })
        .then(res => {
          console.log("updated meme with down vote");
          this.setState({ n: this.state.n - 1 });
          this.loadMemes()
        })
        .catch(err => console.log(err));
        if (meme.likedBy.indexOf(user) > -1) {
          API.unDank({ id: meme._id, username: user})
            .then(res => {
              console.log("removing from disliked");
            })
            .catch(err => console.log(err));
        }
    } else { return; }
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
                    <div>
                      <p className="meme-loadedby">Uploaded By: {meme.uploadedBy}</p>
                      <img src={"../../../images/triggered.png"}
                        alt={meme.imgFilePath}
                        // data-offensive={meme.offensive}
                        onClick={this.toggleOffensive}
                        style={{ width: '300px', marginBottom: '20px', border: '2px solid black' }} />
                      <p className='meme-tags rounded'> Tags: {meme.tags.join(', ')} </p>
                    </div>
                  ) : (
                      <div>
                        <p className="meme-loadedby">Uploaded By: {meme.uploadedBy}</p>
                        <img className="rounded"
                          src={meme.imgFilePath}
                          alt="hm"
                          totalvote={meme.totalVote}
                          likedby={meme.likedBy}
                          // data-offensive={meme.offensive} 
                          // onClick={this.toggleOffensive} 
                          style={{ width: '300px', marginBottom: '20px', border: '2px solid black' }}
                        />
                        <p className='meme-tags rounded'> Tags: {meme.tags.join(', ')} </p>

                      </div>

                    )
                }
                <div className='row'>
                  <LikeButton onClick={() => this.updateLike(meme)} />
                  <span className="likes">{meme.totalVote}</span>
                  <DownButton onClick={() => this.updateDislike(meme)} />
                </div>

              </ListItem>

            ))}
            <div>
              <Waypoint onEnter={this.loadMemes}></Waypoint>
            </div>
            <br /><br /><br />
          </List>
        ) : (
            <h3>No Results</h3>
          )}
      </Container>
    )
  }
};

export default Dank; 