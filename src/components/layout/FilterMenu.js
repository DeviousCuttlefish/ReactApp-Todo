import React from 'react'
import FilterLink from '../FilterLink'
import { VisibilityFilters } from '../Actions'

const FilterMenu = () => (
  <div style={divStyle}>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

const divStyle = {
    textAlign: 'Center',
    backgroundColor: '#d4d4d4',
    padding: '10px 0px'
}

export default FilterMenu