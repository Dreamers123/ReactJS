import React, { Component } from 'react';
import './React.css';
import Person from '../Person/Person';
import Header from '../Header/header';
//import Header_or from '../Another_Header/Header';

class Reacts extends Component {
    state={
        persons:[
            {
                name: 'Lisa',
                age: 28,
                pic: 'https://scontent.fdac17-1.fna.fbcdn.net/v/t1.0-9/36283446_661649940841139_4258214376084865024_n.jpg?_nc_cat=0&oh=0e156d163ca3e315931c6b86180a50d8&oe=5BD30555'
            },
            {
                name: 'Anika',
                age: 25,
                pic: 'https://scontent.fdac17-1.fna.fbcdn.net/v/t1.0-1/c0.84.960.960/p960x960/35392384_636270923389537_8398213617048092672_o.jpg?_nc_cat=0&oh=209dd81cd6bbf8763687bd942e5f0ba8&oe=5BC5769F'
            }
            ]
    }
    switchGirl=(newpic,event)=>{
        //console.log("Girl Switched")
        this.setState({
            persons:[
                {
                    name: 'Anika',
                    age: 25,
                    pic: newpic,
                    button:<button>Go back</button>
                }
            ]
        })
    }

    nameChanged=(event)=>{
        this.setState({
            persons:[
                {
                    name: event.target.value,
                    age: 28,
                    pic: 'https://scontent.fdac17-1.fna.fbcdn.net/v/t1.0-9/36283446_661649940841139_4258214376084865024_n.jpg?_nc_cat=0&oh=0e156d163ca3e315931c6b86180a50d8&oe=5BD30555'
                },
                {
                    name: 'Anika',
                    age: 25,
                    pic: 'https://scontent.fdac17-1.fna.fbcdn.net/v/t1.0-1/c0.84.960.960/p960x960/35392384_636270923389537_8398213617048092672_o.jpg?_nc_cat=0&oh=209dd81cd6bbf8763687bd942e5f0ba8&oe=5BC5769F'
                }
            ]
        })

    }
    resetDom=()=>{
        this.setState({
            persons:[
                {
                    name: 'Lisa',
                    age: 28,
                    pic: 'https://scontent.fdac17-1.fna.fbcdn.net/v/t1.0-9/36283446_661649940841139_4258214376084865024_n.jpg?_nc_cat=0&oh=0e156d163ca3e315931c6b86180a50d8&oe=5BD30555'
                },
                {
                    name: 'Anika',
                    age: 25,
                    pic: 'https://scontent.fdac17-1.fna.fbcdn.net/v/t1.0-1/c0.84.960.960/p960x960/35392384_636270923389537_8398213617048092672_o.jpg?_nc_cat=0&oh=209dd81cd6bbf8763687bd942e5f0ba8&oe=5BC5769F'
                }
            ]
        })
    }
    render() {
        return (
            <div className="React">
                <Header/>
                <Person
                        name={this.state.persons[0].name}
                        pic={this.state.persons[0].pic}
                        age={this.state.persons[0].age}
                        button={this.state.persons[0].button}
                        Click={this.switchGirl.bind(this,'https://scontent.fdac17-1.fna.fbcdn.net/v/t1.0-9/30739932_607831932900103_4976632048153264128_n.jpg?_nc_cat=0&oh=e0509680654788be77208a277dfe0013&oe=5BD29B05')}
                        Changed={this.nameChanged}
                        Reset={this.resetDom}
                >
                         You Can Change my name:
                </Person>


                <button onClick={this.switchGirl.bind(this,'https://scontent.fdac17-1.fna.fbcdn.net/v/t1.0-1/c0.84.960.960/p960x960/35392384_636270923389537_8398213617048092672_o.jpg?_nc_cat=0&oh=209dd81cd6bbf8763687bd942e5f0ba8&oe=5BC5769F')}>Switch the girl</button>
                <footer>
                    <p>Acme Web Deisgn, Copyright &copy; 2017</p>
                </footer>
            </div>
        );
    }
}

export default Reacts;