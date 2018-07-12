import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
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


// var files = document.getElementById('photoupload').files;
//   if (!files.length) {
//     return alert('Please choose a file to upload first.');
//   };
//   if (document.getElementById("colFormLabelSm").val() === "") {
//     return alert('Please add tags.')
//   };
//   var file = files[0];
//   var fileName = file.name;
//   var albumPhotosKey = encodeURIComponent(memes) + '//';

//   var photoKey = albumPhotosKey + fileName;
//   console.log(file);
//   console.log(AWS.CognitoIdentityCredentials);



class Upload extends Component {

    state = { tags: [] }

    handleUpload(event) {
        const file = event.target.files[0];
        const path = file.name;
        Storage.put(path, file).then(() => this.setState({ path }))
        console.log('cyka blyat!');
        console.log(`Uploaded by: ${user}`);
        API.uploadMeme({
            imgFilePath: path,
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
                    <S3Album picker onClick={this.handleUpload}/>
                    <button onClick={this.handleUpload}> Upload </button>
                </ Authenticator>
            </Container>
        )
    }
};

// export default withAuthenticator(Upload, {includeGreetings : true});
export default Upload;
// stayopen

