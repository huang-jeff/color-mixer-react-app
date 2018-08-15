import React from 'react'

const ColorList = ({ colors, onSelectToggle }) => {
  const lis = colors.map((color, i) => {
    const style = { backgroundColor: color.selected ? color.value : 'white' }
    return <li
      className="list-group-item text-dark"
      onClick={() => onSelectToggle(i)}      
      key={ i }
      style={ style }>{ color.name }</li>
  })

  return <ul className="list-group">{ lis }</ul>
}

export default ColorList
