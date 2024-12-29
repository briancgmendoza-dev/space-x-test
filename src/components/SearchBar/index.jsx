import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setSearchTerm } from '../../store/searchSlice'

import '../../assets/scss/styles.scss'

function SearchBar() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('')

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(setSearchTerm(inputValue))

    setInputValue('')
  }

  return (
    <input
      type='search'
      placeholder="Search..."
      className="search"
      onKeyDown={(event) => {
        if (event.key === 'Enter') onSubmit(event)
      }}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  )
}
export default SearchBar
