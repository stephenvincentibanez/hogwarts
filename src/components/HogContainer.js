import React from 'react'
import HogCard from './HogCard'
import HogDetailsCard from './HogDetailsCard'
import Filter from "./Filter"

export default class HogContainer extends React.Component{

    state = {
        display: false,
        hog: "",
        greaseFilter: "all"
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

    buildHogCards = () => {
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
                <Filter handleClick={this.handleClick}/>
                {this.buildHogCards()}
            </div>
        )
    }
}