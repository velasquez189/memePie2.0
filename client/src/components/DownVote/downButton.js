import React, { Component } from "react";

class downButton extends Component {
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
        const label = this.state.downVote ? 'UpVote' : 'UpVote'
        return (
            <div className="customContainer">
                <button className="btn btn-primary" onClick={this.props.onClick}>
                    {label}</button>
                <p>
                    {text} by {user}. Click to undo.
                </p>
            </div>
        );
    }
}

export default downButton;