import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { Amplify, Storage } from 'aws-amplify';
// import awsmobile from '../../aws-exports';
import { withAuthenticator, Greetings, S3Album, Authenticator } from 'aws-amplify-react';
require("babel-core/register");
require("babel-polyfill");



var user = localStorage.getItem('CognitoIdentityServiceProvider.7gi6ch1u4kfd9ibnmbsn67hmgb.LastAuthUser');
// aws-amplify-cachefederatedInfo.data.user.name

const federated = {
  google_client_id: '431644285431-sc03hn7f3i24a956m97sgmtqb3pegeuj.apps.googleusercontent.com',
  facebook_app_id: '179714042732736',
  amazon_client_id: '1k6u5ggucfgoeker9cg0fvrj82'
};

// Amplify.configure(awsmobile);

 
//   console.log(file);
//   console.log(AWS.CognitoIdentityCredentials);


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


  componentDidMount() {
    var user = localStorage.getItem('CognitoIdentityServiceProvider.7gi6ch1u4kfd9ibnmbsn67hmgb.LastAuthUser');
    this.setState({uploadedBy: user})
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
    if (document.getElementById("colFormLabelSm").value() === "") {
      return alert('Please add a one word category.')
    };
    var file = files[0];
    var fileName = file.name;
    var albumPhotosKey = encodeURIComponent(event) + '//';

    var photoKey = albumPhotosKey + fileName;
    Storage.put(fileName, file).then((output) => {
      this.setState({ fileName })
      console.log(output)
    }
    );
    console.log(`Uploaded by: ${user}`);
    API.uploadMeme({
      imgFilePath: fileName,
      uploadedBy: user,
      tags: this.state.tags
    })
      // .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Authenticator federated={federated} includeGreetings={true}>
          {/* <S3Album picker /> */}
          <input id="photoupload" type="file" accept="image/*" />
          <form id="tag-form" >
            <div className="form-group row">
              {/* <label htmlFor="colFormLabelSm" className="galada-fnt col-sm-2 col-form-label col-form-label-sm">Add a Category:</label> */}
              <div className="col-xs-4">
                <input type="string" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Add tags here" onChange={this.handleInputChange}/>
              </div>
            </div>
            <button id="addphoto" onClick={this.handleUpload}> Add Photo </button>
          </form>
          {/* <button onClick={this.handleUpload}> Upload </button> */}
        </ Authenticator>
      </Container>
    )
  }
};

// export default withAuthenticator(Upload, {includeGreetings : true});
export default Upload;
// stayopen

