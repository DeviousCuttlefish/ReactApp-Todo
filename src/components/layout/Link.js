import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={active}
       style={btnStyle}
    >
      {children}
    </button>
)

const btnStyle = {
    marginLeft: '10px',
    padding: '0px 5px',
    borderRadius: '10%',
    cursor: 'pointer',
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link