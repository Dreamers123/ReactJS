import React, { Component } from 'react';
//import './Timer.css';
import TimerForm from '../TimerFrom/index';
import Timer from '../TimeShow/Index';

class EditableTimer extends Component {
    render() {
        if (this.props.editFormOpen) {
            return (
                <TimerForm
                    title={this.props.title}
                    project={this.props.project}
                />
            );
        } else {
            return (
                <Timer
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                />
            );
        }
    }
}
export default EditableTimer;

