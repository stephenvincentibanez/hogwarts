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

                <div>
                    <select onChange={this.props.handleChange}>
                        <option value="name" >Sort by Name</option>
                        <option value="weight" >Sort by Weight</option>
                    </select>
                </div>
            </div>
        )
    }
}