import React from "react";
import {Stack} from "@mui/material";
import {Link} from 'react-router-dom'
import {logo} from '../utils/Constant'
import SearchBar from "./SearchBar";

const Navbar = (): JSX.Element => {
    return (
    <Stack direction={"row"} p={2} sx={{backgroundColor: "#000" , position: 'sticky',alignItems: 'center' , justifyContent:'space-between'}}>
      <Link to={'/'}>
       <img src={logo} height={45}/>
      </Link>
        <SearchBar/>
    </Stack>
    )
}
export default Navbar
