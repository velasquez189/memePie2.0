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
        const label = this.state.liked ? 'not dank' : 'DANK'
        return (
            <div className="col-xs-6 customContainer">
                <button className="btn dank-btn" onClick={this.props.onClick}>
                    {label}</button>
            </div>
      
        );
    }
}

export default LikeButton;