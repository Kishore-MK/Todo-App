import React from 'react'

const SearchTask = ({search,newsearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        
        <input className="box" id='search' type="text" 
        role='searchbox'
        placeholder='Search Task'
        value={search}
        onChange={(e)=> newsearch(e.target.value)}
        />
    </form>
  )
}

export default SearchTask