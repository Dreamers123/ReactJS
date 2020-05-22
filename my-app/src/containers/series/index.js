import React, { Component } from 'react';
import SeriesList from '../../components/Serieslist/index';
import 'whatwg-fetch';
import  Loader from '../../components/Loader/Index';
import Intro from '../../components/intro/index';

class Series extends Component {

    state={
        series:[],
        seriesName:'',
        isFletching:false
    }
    /* componentDidMount()
   {
       fetch('https://api.tvmaze.com/search/shows?q=vikings')
           .then(response => response.json())
           .then(json=> this.setState({ series:json}))

      const series=[
           {
           id:1,
           name:'House of cards'
           },
           {   id:2,
               name:'Game of thornes'
           }
       ]



       setTimeout(()=>{
           this.setState({series:series});
       },2000);
    }

    */
    inputChange=(e)=>{
        this.setState({seriesName:e.target.value,isFletching:true})
        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json=> this.setState({ series:json,isFletching:false}))

    }



    render() {
        const {series,seriesName,isFletching}=this.state;
        return (
            <div>
                <Intro message="All the favourite series" />
                <h1 >The length of the series is {this.state.series.length}</h1>
                <div>
                    <input
                           type="text"
                           value={seriesName}
                           onChange={this.inputChange}
                    />
                </div>
                {
                    series.length ===0 && seriesName.trim()===''
                    &&
                    <p>Please enter series-name</p>
                }
                {
                    series.length ===0 && seriesName.trim()!=='' && isFletching === false
                    &&
                    <p> No series in this name </p>
                }
                {
                    isFletching && <Loader/>
                }
                {
                    !isFletching && <SeriesList list={this.state.series}/>
                }

            </div>
        );
    }
}

export default Series;


