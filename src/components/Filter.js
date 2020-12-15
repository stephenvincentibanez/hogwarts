import React from 'react'

export default class Filter extends React.Component{

    render(){
        return(
            <div>
                <label> Greased </label>
                <input type="radio" value="true" name="choice" onClick={this.props.handleClick}/>
                <label> Ungreased </label>
                <input type="radio" value="false" name="choice" onClick={this.props.handleClick}/>
                <label> All </label>
                <input type="radio" value="all" name="choice" onClick={this.props.handleClick}/>
            </div>
        )
    }
}