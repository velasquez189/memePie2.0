import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { Storage } from 'aws-amplify';
// import awsmobile from '../../aws-exports';
import { S3Image, withAuthenticator } from 'aws-amplify-react';
require("babel-core/register");
require("babel-polyfill");



var user = localStorage.getItem('CognitoIdentityServiceProvider.7gi6ch1u4kfd9ibnmbsn67hmgb.LastAuthUser');
// aws-amplify-cachefederatedInfo.data.user.name
// var user = Authenticator.state.authData.username;

const federated = {
  // google_client_id: '431644285431-sc03hn7f3i24a956m97sgmtqb3pegeuj', // .apps.googleusercontent.com
  facebook_app_id: '179714042732736',
  // amazon_client_id: '1k6u5ggucfgoeker9cg0fvrj82'
};

// Amplify.configure(awsmobile);



class Upload extends Component {

  state = {
    tags: [],
    filePath: "",
    uploadedBy: "",
    offensive: false,
  }


  componentWillMount() {
    window.addEventListener('beforeunload', this.handleWindowClose);
  }

  componentWillUnMount() {
    window.removeEventListener('beforeunload', this.handleWindowClose);
  }

  componentDidMount() {
    var user = this.props.authData.username;
    // var user = localStorage.getItem('CognitoIdentityServiceProvider.7gi6ch1u4kfd9ibnmbsn67hmgb.LastAuthUser');
    this.setState({ uploadedBy: user })
  }

  handleInputChange = event => {
    const { tags, value } = event.target;
    this.setState({
      tags: value.replace(/\s*,\s*/g, ",").toLowerCase().split(',')
    });
  };

  handleCheckbox = event => {
    this.setState({ offensive: !this.state.offensive })
  }


  handleUpload(event) {
    event.preventDefault();
    var files = document.getElementById('photoupload').files;
    if (!files.length) {
      return alert('Please choose a file to upload first.');
    };
    var file = files[0];
    var path = file.name;
    console.log("Uploading...");
    this.setState({
      filePath: 'https://s3.us-east-2.amazonaws.com/memepie-userfiles-mobilehub-2114693465/public/' + path
    })
    Storage.put(path, file).then(() => {
      this.setState({ filePath: path })
    });
  }

  mongoUpload = (event) => {
    if (this.state.filePath === "") {
      alert("Select a file to upload");
      return;
    } else if (this.state.tags.length === 0) {
      alert("You must add tags for your meme");
      return;
    }
    event.preventDefault();
    this.setState({
      filePath: 'https://s3.us-east-2.amazonaws.com/memepie-userfiles-mobilehub-2114693465/public/' + this.state.filePath
    })
    console.log(this.state)
    API.uploadMeme({
      imgFilePath: 'https://s3.us-east-2.amazonaws.com/memepie-userfiles-mobilehub-2114693465/public/' + this.state.filePath,
      uploadedBy: this.state.uploadedBy,
      tags: this.state.tags,
      offensive: this.state.offensive
    })
      .then(res => window.location = "/fresh")
      .catch(err => console.log(err));
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
        {/* <Authenticator federated={federated} includeGreetings={true}> */}
        {/* <S3Album picker /> */}
        <input id="photoupload" type="file" accept="image/*" onChange={this.handleUpload.bind(this)} />
        <br/>
        { this.state.filePath ? (this.state && <img className="image-upload"  src={ 'https://s3.us-east-2.amazonaws.com/memepie-userfiles-mobilehub-2114693465/public/' + this.state.filePath} />) : (<div className={"hidden"}/>) }
        <form id="tag-form" >
          <div className="form-group row">
            {/* <label htmlFor="colFormLabelSm" className="galada-fnt col-sm-2 col-form-label col-form-label-sm">Add a Category:</label> */}
            <div className="">
              <br />
              <div className="rules">TAGS:</div>
              <div className="rules">SEPERATE TAGS WITH COMMAS...</div>
              <br />
              <input type="string" className="form-control form-control-sm tags-text" id="colFormLabelSm" placeholder="Get Creative..." onChange={this.handleInputChange} />
            <br />
              <div className='rules'>
                IS THIS MEME OFFENSIVE? <input type="checkbox" className="offensive" onChange={this.handleCheckbox} />
              </div>
            </div>
          </div>
          <div>
            <button className='btn' id="addphoto" onClick={this.mongoUpload}> Add Photo </button>
            <br/>
            <br/>
            <div className="upload-terms">By uploading to memePie you agree to the <a href="/terms">Terms and Conditions</a></div>
          </div>
        </form>
        {/* </ Authenticator> */}
      </Container>
    )
  }
};

// export default Upload
export default withAuthenticator(Upload);