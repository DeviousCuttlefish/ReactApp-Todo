import React, { Component } from 'react'
import Proptypes from 'prop-types'

class Filter extends Component {
    render() {
        return (
            <div style={divStyle}>
            <span>Show: </span>
            <button style={btnStyle} onClick={this.props.filAll}>
              All
            </button>
            <button style={btnStyle} onClick={this.props.filActive}>
              Active
            </button>
            <button style={btnStyle} onClick={this.props.filComplete}>
              Completed
            </button>
          </div>
        )
    }
}

const divStyle = {
    textAlign: 'Center',
    backgroundColor: '#d4d4d4',
    padding: '10px 0px'
}

const btnStyle = {
  marginLeft: '10px',
  padding: '0 4px',
}

Filter.propTypes = {
  filAll: Proptypes.func.isRequired,
  filActive: Proptypes.func.isRequired,
  filComplete: Proptypes.func.isRequired,
}

export default Filter