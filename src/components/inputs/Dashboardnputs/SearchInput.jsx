import React, { useContext } from 'react';
import "../../../css/Dashboard/searchInput.css";
import { Search } from '@mui/icons-material';
import { ThemeContext } from '../../../utils/context/ThemeContext';

function SearchInput({type, name, placeholder, position}) {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <>
        <div className={position+"-"+theme} >
            <Search />
        <input 
            type={type} 
            placeholder={placeholder} 
            name={name}
            />
        </div>
    </>
  )
}

export default SearchInput