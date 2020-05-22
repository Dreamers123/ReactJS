import React, { Component } from 'react';
import '../App.css';
import EditableTimer from "../EditableTimer/Index";

class EditableTimerList extends Component {
    render() {
        // Inside EditableTimerList
        const timers = this.props.timers.map((timer) => (
            <EditableTimer
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                onFormSubmit={this.props.onFormSubmit}
                onDelete={this.props.onDelete}
                timerStop={this.props.timerStop}
                timerStart={this.props.timerStart}
            />
        ));
        return (
            <div id='timers'>
                {timers}
            </div>
        );
    }


}
export default EditableTimerList;
