import React, { Component } from 'react'
import Todos from '../Todos'
import Proptypes from 'prop-types'


export class FilterMenu extends Component {

    render() {
        const { completed } = this.props.todos;
        return (
            <div style={divStyle}>
                <span>
                   Show:  
                </span>
                <button onClick={this.props.filterAll.bind(this, completed)} style={btnStyle} >All</button>
                <button onClick={this.props.filerActive.bind(this, completed)}style={btnStyle} >Active</button>
                <button onClick={this.props.filterComplete.bind(this, completed)} style={btnStyle} >Complete</button>
            </div>
        )
    }
}

const btnStyle = {
    marginLeft: '10px',
    padding: '0px 5px',
    borderRadius: '10%',
    cursor: 'pointer',
}
const divStyle = {
    textAlign: 'Center',
    backgroundColor: '#d4d4d4',
    padding: '10px 0px'
}

FilterMenu.propTypes = {
    filterAll: Proptypes.func.isRequired,
    filterActive: Proptypes.func.isRequired,
    filterComplete: Proptypes.func.isRequired
}

export default FilterMenu