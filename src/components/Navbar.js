import React from 'react'
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/bars.svg';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background: transparent;
    height: 60px;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;

`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    text-decoration:none;
    cursor: pointer;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    font-weight: bold;
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and ( max-width: 768px){
        display: block;
        background-size: contain;
        height: 25px;
        width: 35px;
        cursor: pointer;
        position: absolute;
        right: 1rem;
        color: #fff;
    }
`;

const NavMenu = styled.div`
    display: flex;
    justify-content: center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavMenuLink = styled(Link)`
    ${NavLink};
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 20px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to='/'>Elixir</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => {
                    return (
                        <NavMenuLink to={item.Link} key={index}>
                            {item.title}
                        </NavMenuLink>
                    )
                })}
            </NavMenu>
            <NavBtn>
                <Button to='contact' primary='true' >Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}


export default Navbar
