import React from 'react'

const Header=(props) => {
  return (
    <div className="title">
        <p>{props.head}</p>
    </div>
  )
}
Header.defaultProps={
    head:"To Do List"
}
export default Header;