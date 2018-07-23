import React, { Component } from "react";

class DownButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            downVote: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            downVote: !this.state.downVote
        });
    }

    render() {
        const text = this.state.downVote ? 'downVote' : 'DownVote';
        const label = this.state.downVote ? 'NOT DANK' : 'NOT DANK'
        return (
            <div className="customContainer">
                <button className="btn btn-primary" onClick={this.props.onClick}>
                    {label}</button>
              
            </div>
        );
    }
}

export default DownButton;