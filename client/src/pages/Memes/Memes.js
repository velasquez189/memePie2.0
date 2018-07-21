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
    let offensiveness = event.target.offensive;
    console.log(offensiveness);
    event.target.src = event.target.alt;
    console.log(offensiveness);
  }

  updateLike = meme => {
    var user = localStorage.getItem('CognitoIdentityServiceProvider.18kp0d0foqkulkcf15kab8r4sm.LastAuthUser');
    console.log(user, meme._id);
    console.log(meme);
    if (meme.likedBy.indexOf(user)<0){
    API.toggleLike({ id: meme._id, username: user })
      .then()
      .catch(err => console.log(err));
    }else {return;}
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
                      <img src={"../../../images/triggered.jpg"}
                        alt={meme.imgFilePath}
                        offensive={meme.offensive}
                        onClick={this.toggleOffensive}
                        style={{ width: '300px', marginBottom: '20px', border: '2px solid black' }} />
                        <p className='meme-tags rounded'> tags: {meme.tags.join(', ')} </p>
                    </div>
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
                        <p className='meme-tags rounded'> tags: {meme.tags.join(', ')} </p>

                      </div>

                    )
                }
                <LikeButton onClick={() => this.updateLike(meme)} />
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