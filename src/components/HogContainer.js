import React from 'react'
import HogCard from './HogCard'
import HogDetailsCard from './HogDetailsCard'
import Filter from "./Filter"

export default class HogContainer extends React.Component{

    state = {
        display: false,
        hog: "",
        greaseFilter: "all",
        sort: ""
      }
    
    toggleDisplay = (hog) => {
    this.setState({
        display: !this.state.display,
        hog
    })
    }

    handleClick = (e) => {
        this.setState({
            greaseFilter: e.target.value
        })
    }

    handleChange = (e) => {
        this.setState({
            sort: e.target.value
        })
    }

    buildHogCards = () => {
        if(this.state.sort === "name"){
            (this.props.hogs.sort((a,b) => (a.name > b.name) ? 1 : -1 ))
        }
        else if(this.state.sort === "weight"){
            (this.props.hogs.sort((a,b) => (a.weight > b.weight) ? 1 : -1 ))
        }
        if(this.state.display){
            return <HogDetailsCard hog={this.state.hog} toggleDisplay={this.toggleDisplay}/> 
        }
        else{
            switch(this.state.greaseFilter){
                case "true" : 
                return this.props.hogs.filter(hog => (hog.greased === true)).map(hog => <HogCard hog={hog} toggleDisplay={this.toggleDisplay}/>)
                break;
                case "false" :
                return this.props.hogs.filter(hog => (hog.greased === false)).map(hog => <HogCard hog={hog} toggleDisplay={this.toggleDisplay}/>)
                break;
                case "all" :
                return this.props.hogs.map(hog => <HogCard hog={hog} toggleDisplay={this.toggleDisplay}/>)
            }
        }
    }

    render(){
        return(
            <div>
                <Filter handleClick={this.handleClick} handleChange={this.handleChange}/>
                {this.buildHogCards()}
            </div>
        )
    }
}