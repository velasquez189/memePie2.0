import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import LikeButton from "../../components/LikeButton";
import DownButton from "../../components/DownButton";
import Waypoint from "react-waypoint";



class Search extends Component {
  state = {
    memes: [],
    n: 1,
    keyword: "",
    username: "",
    searchType:""
  };

  handleKeywords = (event) => {
    const { keyword, value } = event.target;
    this.setState({ keyword: value.toLowerCase() })
  }

  handleUser = (event) => {
    const { username, value } = event.target;
    this.setState({ username: value })
  }

  loadMemes = () => {
    let n = this.state.n * 6;
    console.log(`Look, Ma. No hands!`);
    API.searchMemes({ query: n, keywords: this.state.keyword })
      .then(res => {
        this.setState({
          searchType: "tag",
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

  searchUser = () => {
    let n = this.state.n * 6;
    console.log(`searching for user...`);
    API.searchUser({ query: n, username: this.state.username })
      .then(res => {
        this.setState({
          searchType: "user",
          memes: res.data,
          n: this.state.n + 1
        });
        console.log(this.state.memes);
      }).catch(err => console.log(err));
  }

  updateLike = meme => {
    var user = localStorage.getItem('CognitoIdentityServiceProvider.18kp0d0foqkulkcf15kab8r4sm.LastAuthUser');
    console.log(user, meme._id);
    console.log(meme);
    if (meme.likedBy.indexOf(user) < 0) {
      API.toggleLike({ id: meme._id, username: user })
        .then(res => {
          console.log("updated meme with like");
          this.setState({ n: this.state.n - 1 });
          this.loadMemes()
        })
        .catch(err => console.log(err));
    } else { return; }
  }

  updateDislike = meme => {
    var user = localStorage.getItem('CognitoIdentityServiceProvider.18kp0d0foqkulkcf15kab8r4sm.LastAuthUser');
    console.log(user, meme._id);
    if (meme.dislikedBy.indexOf(user) < 0) {
      API.downVote({ id: meme._id, username: user })
        .then(res => {
          console.log("updated meme with down vote");
          this.setState({ n: this.state.n - 1 });
          this.loadMemes()
        })
        .catch(err => console.log(err));
    } else { return; }
  }


  render() {
    return (
      <Container fluid>
        <h4> Search for Memes by Tag </h4>
        <input type="text" className="form-control" onChange={this.handleKeywords} />
        <button type='submit' className='btn srch-btn' onClick={this.loadMemes}> Search </button>
        <br /><br />

        <h4> Search for Memes by User </h4>
        <input type="text" className="form-control" onChange={this.handleUser} />
        <button type='submit' className='btn srch-btn scnd-btn' onClick={this.searchUser}> Search </button>

        {this.state.memes.length ? (

          <List>
            {this.state.memes.map(meme => (
              <ListItem key={meme._id}>
                {
                  meme.offensive ? (
                    <div>
                      <p className="meme-loadedby">Uploaded By: {meme.uploadedBy}</p>
                      <img src={"../../../images/triggered.png"}
                        className={"rounded"}
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
            <h3 className="srch-rslts">No Results</h3>
          )}
      </Container>
    )
  }
};

export default Search;