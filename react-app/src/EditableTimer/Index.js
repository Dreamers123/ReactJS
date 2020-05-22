import React, { Component } from 'react';
import '../App.css';
import TimerForm from "../TimerForm/Index";
import Timer from "../Timer/Index";

class EditableTimer extends Component {
    state = {
        editFormOpen: false,
    };

    // Inside EditableTimer
    handleEditClick = () => {
        this.openForm();
    };
    handleDeleteClick=()=>{
        this.props.onDelete(this.props.id);
    }
    handleFormClose = () => {
        this.closeForm();
    };
    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    };

    closeForm = () => {
        this.setState({ editFormOpen: false });
    };

    openForm = () => {
        this.setState({ editFormOpen: true });
    };

    render() {
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <Timer
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onEditClick={this.handleEditClick}
                    deleteTimer={this.handleDeleteClick}
                    timerStop={this.props.timerStop}
                    timerStart={this.props.timerStart}
                />
            );
        }
    }
}
export default EditableTimer;
