import React, { Component } from 'react';
import '../App.css';


class TimerActionButton extends Component {
    render() {
        if (this.props.timerIsrunning) {
            return (
                <button
                    onClick={this.props.onStopClick}
                >
                    Stop
                </button>
            );
        } else {
            return (
                <button
                    onClick={this.props.onStartClick}
                >
                    Start
                </button>
            );
        }
    }
}

export default TimerActionButton;
