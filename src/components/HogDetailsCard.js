import React from 'react'
import HogCard from './HogCard'

export default class HogDetailsCard extends React.Component{
    
    handleClick = () => {
        this.props.toggleDisplay()
    }

    render(){
        console.log(this.props.hog)
        const {name, specialty, greased, weight} = this.props.hog
        return(
            <div className="pigTile" >
                <h1>{name}</h1>
                <p>{specialty}</p>
                <p>{weight}</p>
                <p>{greased}</p>
                <button onClick={this.handleClick}> Back to all hogs </button>
            </div>
        )
    }
}