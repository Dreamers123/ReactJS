import React, { Component } from 'react';
import './App.css';
import EditableTimerList from './EditableTimerList/Index';
import ToggleableTimerForm from './ToggleableTimerForm/Index';
import helpers from './Helper.js';
import PlayWith from './PlayWith/Index';
import DisplayName from './DisplayName/Index';
//import Food from './FoodLookUp/Food';

class TimersDashboard extends Component {
    state = {
        timers: [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: 4,
                elapsed: 5456099,
                runningSince: Date.now(),
            },
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: 6,
                elapsed: 1273998,
                runningSince: null,
            },
        ],
    };
    handleStartClick = (timerId) => {
        this.startTimer(timerId);
    };

    handleStopClick = (timerId) => {
        this.stopTimer(timerId);
    };
    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    };
    // Inside TimersDashboard
    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    };

    createTimer = (timer) => {
        const t = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t),
        });
    };
    createTimer = (timer) => {
        const t = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t),
        });
    };
    deleteProps=(timerId)=>{
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId),
        });
    }
    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };

    startTimer = (timerId) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    return Object.assign({}, timer, {
                        runningSince: now,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };

    stopTimer = (timerId) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };
    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <DisplayName />
                    <EditableTimerList
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onDelete={this.deleteProps}
                        timerStart={this.handleStartClick}
                        timerStop={this.handleStopClick}
                    />
                    <ToggleableTimerForm
                        onFormSubmit={this.handleCreateFormSubmit}
                    />

                </div>
            </div>
        );
    }
}
export default TimersDashboard;
