import React, { useState } from 'react'


const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
  
    <div className="between col-lg-6 col-ld-12 " onSubmit={submitHandler}>
    <form action="" method="POST">
      <input type="text" placeholder="Search our catalog"  onChange={(e) => setKeyword(e.target.value)}/>
      <button><i className="fa fa-search" aria-hidden="true"></i></button>
    </form>
  </div>
 
  )
}

export default SearchBox