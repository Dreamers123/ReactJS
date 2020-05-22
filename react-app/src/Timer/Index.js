import React, { Component } from 'react';
import '../App.css';
import helpers from '../Helper.js';
import TimerActionButton from "../TimerActionButton/Index";
class Timer extends Component {

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }
    handleStart=()=>{
        this.props.timerStart(this.props.id)
    }
    handleStop=()=>{
        this.props.timerStop(this.props.id)
    }
    render() {

        const elapsedString =helpers.renderElapsedString(
            this.props.elapsed, this.props.runningSince
        );

        return(
               <div className='ui centered card'>
                <div className='content'>
                    <div className="cross" onClick={this.props.deleteTimer}>X</div>
                    <div className='header'>
                        {this.props.title}
                    </div>

                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className='center aligned description'>
                        <h2>
                            {elapsedString}
                        </h2>
                    </div>
                    <div className='extra content'>
            <span className='right floated edit icon'>
              <i className='edit icon' />
            </span>
                        <span className='right floated trash icon'>
              <i className='trash icon' />
            </span>
                    </div>
                </div>
                  <TimerActionButton
                      timerIsrunning={!!this.props.runningSince}
                      onStartClick={this.handleStart}
                      onStopClick={this.handleStop}
                  />
                   <br/>
                   <button onClick={this.props.onEditClick}>Edit</button>
            </div>
        )


    }
}
export default Timer;
