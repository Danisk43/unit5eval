import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"

const Navbar = () => {

    const StyledLink=styled(Link)`
    color:green;
    margin:50px
    `
  return (
    <>
    <StyledLink to="/" >HOME</StyledLink>
    <StyledLink to="/login" >LOGIN</StyledLink>
    <StyledLink to="/employees/create" >CREATE</StyledLink>
    <StyledLink to="/employees/:id" >ID</StyledLink>
    <StyledLink to="/employees/:id/edit" >EDIT</StyledLink>


    </>
  )
}

export default Navbar