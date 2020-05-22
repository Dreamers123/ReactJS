import React, { Component } from 'react';
import './Timer.css';
import EditableTimerList from '../EditableList/index';
import ToggleableTimerForm from '../ToggleableTimerForm/index';

class TimersDashboard extends Component {
    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList />
                    <ToggleableTimerForm
                        isOpen={true}
                    />
                </div>
            </div>
        );
    }
}
export default TimersDashboard;