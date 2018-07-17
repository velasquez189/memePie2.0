import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { Amplify, Storage } from 'aws-amplify';
// import awsmobile from '../../aws-exports';
import { withAuthenticator, Greetings, S3Album, S3Image, Authenticator } from 'aws-amplify-react';
require("babel-core/register");
require("babel-polyfill");



var user = localStorage.getItem('CognitoIdentityServiceProvider.7gi6ch1u4kfd9ibnmbsn67hmgb.LastAuthUser');
// aws-amplify-cachefederatedInfo.data.user.name
// var user = Authenticator.state.authData.username;

const federated = {
  google_client_id: '431644285431-sc03hn7f3i24a956m97sgmtqb3pegeuj', // .apps.googleusercontent.com
  facebook_app_id: '179714042732736',
  amazon_client_id: '1k6u5ggucfgoeker9cg0fvrj82'
};

// Amplify.configure(awsmobile);


// var albumBucketName = 'memetest-userfiles-mobilehub-1037221317';

// var s3 = new AWS.S3({
//     apiVersion: '2006-03-01',
//     params: { Bucket: albumBucketName }
//   });



class Upload extends Component {

  state = {
    tags: [],
    filePath: "",
    uploadedBy: "",
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
      tags: value
    });
  };


  handleUpload(event) {
    event.preventDefault();
    // const file = event.target.files[0];
    // const path = file.name;
    var files = document.getElementById('photoupload').files;
    if (!files.length) {
      return alert('Please choose a file to upload first.');
    };
    // if (document.getElementById("colFormLabelSm").value() === "") {
    //   return alert('Please add a one word category.')
    // };
    var file = files[0];
    var path = file.name;
    // var albumPhotosKey = encodeURIComponent(event) + '//';
    console.log("Uploading...");
    // console.log(file);
    // console.log(path); 
    this.setState({
      filePath: 'https://s3.us-east-2.amazonaws.com/memepie-userfiles-mobilehub-2114693465/public/' + path
    })
    Storage.put(path, file).then(() => {
      // this.setState({ filePath: path })
    });
    // console.log(`${file} Uploaded by: ${user}`);
    // console.log(this.state);
  }

  mongoUpload = (event) => {
    event.preventDefault();
    this.setState({
      filePath: 'https://s3.us-east-2.amazonaws.com/memepie-userfiles-mobilehub-2114693465/public/' + this.state.filePath
    })
    console.log(this.state)
    API.uploadMeme({
      imgFilePath: this.state.filePath,
      uploadedBy: this.state.uploadedBy,
      tags: this.state.tags
    })
      // .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        {/* <Authenticator federated={federated} includeGreetings={true}> */}
          {/* <S3Album picker /> */}
          <input id="photoupload" type="file" accept="image/*" onChange={this.handleUpload.bind(this)} />
          {/* { this.state && <S3Image path={this.state.filePath} /> } */}
          <form id="tag-form" >
            <div className="form-group row">
              {/* <label htmlFor="colFormLabelSm" className="galada-fnt col-sm-2 col-form-label col-form-label-sm">Add a Category:</label> */}
              <div className="col-xs-4">
                <input type="string" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Add tags here" onChange={this.handleInputChange} />
              </div>
            </div>
            <button id="addphoto" onClick={this.mongoUpload}> Add Photo </button>
          </form>
          {/* <button onClick={this.handleUpload}> Upload </button> */}
        {/* </ Authenticator> */}
      </Container>
    )
  }
};

// export default Upload
export default withAuthenticator(Upload, {includeGreetings: true, federated: federated});