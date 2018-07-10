import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";


class Memes extends Component {
  state = {
    memes: [],
    uploadedBy: "",
    tags: []
  };

  componentDidMount() {
    this.loadMemes();
  }

  loadMemes = () => {
    API.getMemes()
      .then(res =>
        this.setState({ memes: res.data, uploadedBy: "", tags: [] })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
      </Container>
    )
  }
};

export default Memes;
