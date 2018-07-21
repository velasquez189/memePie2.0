import React, { Component } from "react";


// const LikeButton = props => (
//     <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn">
//         {props.children}
//     </button>
// );










class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            liked: !this.state.liked
        });
    }

    render() {
        const text = this.state.liked ? 'liked' : 'haven\'t liked';
        const label = this.state.liked ? 'Unlike' : 'Like'
        return (
            <div className="customContainer">
                <button className="btn btn-primary" onClick={this.props.onClick}>
                    {label}</button>
                <p>
                   {text}
          </p>
            </div>
        );
    }
}

export default LikeButton;