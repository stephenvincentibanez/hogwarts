import React from 'react'
import HogDetailsCard from './HogDetailsCard'

export default class HogCard extends React.Component{

    handleClick = () => {
        this.props.toggleDisplay(this.props.hog)
    }

    render(){
        return(
            <div className="pigTile" onClick={this.handleClick}>
                <h1>{this.props.hog.name}</h1>
            </div>
        )
    }
}