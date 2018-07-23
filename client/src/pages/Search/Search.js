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
  };

  componentDidMount() {
    this.loadMemes();
  }

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
          memes: res.data,
          // uploadedBy: "", 
          // tags: [],
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
          memes: res.data,
          n: this.state.n + 1
        });
        console.log(this.state.memes);
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
<form>
        <h4> Search for memes by tag </h4>
        <input type="text" className="form-control" onChange={this.handleKeywords} />
        <button type='submit' className='btn' onClick={this.loadMemes}> Search </button>

        <br /><br />

        <h4> Search for memes by user </h4>
        <input type="text" className="form-control" onChange={this.handleUser} />
        <button type='submit' className='btn' onClick={this.searchUser}> Search </button>
</form>
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
            <h3>No Results to Display</h3>
          )}
      </Container>
    )
  }
};

export default Search;