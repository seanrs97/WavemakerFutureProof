import React from "react";
import styled from "styled-components";

import BadgeBlue from "../Images/BadgeBlue.svg";
import BadgeGreen from "../Images/BadgeGreen.svg";
import BadgeRed from "../Images/BadgeRed.svg";
import BadgeOrange from "../Images/BadgeOrange.svg";

import logo from "../Images/logo.svg";


class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            displayMenu: "-600px",
            hamburgerShow: "0px",
            crossShow: "translateX(-600px)"
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu = () => {
        this.setState({
            displayMenu: "40px",
            crossShow: "translateX(0)",
            hamburgerShow: "-600px"
        })
    }
    closeMenu = () => {
        this.setState({
            displayMenu: "-600px",
            hamburgerShow: "0px",
            crossShow: "translateX(-600px)"
        })
    }
    handleClickOutside = e => {
        
    }
    render(){
        return(
            <div>
                <MenuContainer onClick = {this.handleClickOutside}>
                    <ContentContainer>
                        <NavImgContainer>
                            <a href = "home.html"><NavImg src = {logo} alt = "wavemaker home page" /></a>
                        </NavImgContainer>
                        <MenuList>
                            <a href = "/?navPage=coding"><li> <img src = {BadgeBlue} alt = "coding"/></li></a>
                            <a href = "/?navPage=essential"><li> <img src = {BadgeRed} alt = "essential skills"/></li></a>
                            <a href = "/?navPage=design"><li> <img src = {BadgeGreen} alt = "2D and 3D Design"/></li></a>
                            <a href = "/?navPage=digitalEnt"><li> <img src = {BadgeOrange} alt = "Digital Entertainment"/></li></a>
                            <a href = "#"><li> <img src = {this.props.showLoggedInImage} alt = "User Profile"/> </li></a>
                        </MenuList>
                            <a className = "loginLink" href = {this.props.loginHref}> {this.props.loginOrLogout} </a>
                        <Hamburger onClick = {this.showMenu} style = {{marginLeft: this.state.hamburgerShow}}>
                            <div className = "bar1"></div>
                            <div className = "bar2"></div>
                            <div className = "bar3"></div>
                        </Hamburger>
                        <Cross onClick = {this.closeMenu} style = {{transform: this.state.crossShow}}>
                            <h1 style = {{color: "white"}}> X </h1>
                        </Cross>
                        <MenuListText>
                            <ul style = {{marginTop: this.state.displayMenu}}>
                                <a className = "loginLinkHamburger" href = {this.props.loginHref}> {this.props.loginOrLogout} </a>

                                <a className = "loggedInAvatar" href = "#"><li> <img src = {this.props.showLoggedInImage} alt = "User Profile"/> </li></a>
                                <li onClick = {this.closeMenu} className = "listElementText"><div></div><a href = "/?navPage=coding">Coding & Programming</a></li>
                                <li onClick = {this.closeMenu} className = "listElementText"><div></div><a href = "/?navPage=essential"> Essential Digital Skills </a></li>
                                <li onClick = {this.closeMenu} className = "listElementText"><div></div><a href = "/?navPage=design"> 3D Design & 2D Design </a></li>
                                <li onClick = {this.closeMenu} className = "listElementText"><div></div> <a href = "/?navPage=digitalEnt"> Digital Entertainment </a></li>
                            </ul>
                        </MenuListText>
                        
                    </ContentContainer>
                </MenuContainer>
            </div>
        )
    }
}

const MenuContainer = styled.div`
    background: black;
    width: 100%;
    position: fixed;
    z-index: 1000000000000000000;
    @media only screen and (max-width: 825px) and (max-height: 420px){
        position: initial;
    }
`
const ContentContainer = styled.nav`
    margin: 0 auto;
    background: black;
    color: white;
    padding: 16px 0;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media only screen and (min-width: 2000px){
        width: 70%;
        padding: 24px 0;
    }
    @media only screen and (min-width: 1280px) and (max-width: 2000px){
        width: 78%;
    }
    @media only screen and (max-width: 700px){
        width: 100%;
        grid-template-areas: "nothing";
    }
    @media only screen and (max-width: 700px){
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .loginLink{
        text-decoration: none;
        color: white;
        position: absolute;
        bottom: 0;
        right: -5px;
        @media only screen and (max-width: 700px){
            display: none;
        }
    }
    .loginLinkHamburger{
        text-decoration: none;
        color: white;
        position: absolute;
        top: 20%;
        right: 5%;
    

        @media only screen and (min-width: 700px){
            display: none;
        }
    }
`
const NavImgContainer = styled.div`
    position: relative;
    @media only screen and (min-width: 700px) and (max-width: 1200px){
        margin-left: 0;
    }
    @media only screen and (max-width: 700px){
        text-align: center;
        margin-left: 0;
    }
`
const NavImg = styled.img`
    height: auto;
    width: 210px;
    filter: invert(102%) sepia(103%) saturate(1352%) hue-rotate(87deg) brightness(11119%) contrast(119%);
    @media only screen and (min-width: 2000px){
        width: 320px;
    }
    @media only screen and (min-width: 1650px) and (max-width: 2000px){
        width: 255px;
    }
`
const MenuList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 25px;
    list-style: none;
    text-align: center;
    vertical-align: middle;
    position: relative;
    transition: 1s all;
    margin-left: auto;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -120px;

        &:last-child{
            margin-left: 0;
        }
        @media only screen and (min-width: 1650px) and (max-width: 2000px){
            margin-left: -180px;
        }
        @media only screen and (min-width: 2000px){
            margin-left: -240px;
        }
    }
    li{
        display: flex;
    }
    li img{
        height: auto;
        width: 50px;
        @media only screen and (min-width: 2000px){
            width: 110px;
        }
        @media only screen and (min-width: 1650px) and (max-width: 2000px){
            width: 84px;
        }
    }
    @media only screen and (min-width: 2000px){
        grid-gap: 36px;
    }
    @media only screen and (max-width: 700px){
        display: none;
    }
`
const MenuListText = styled.div`
    ul{
        display: none;
        padding-left: 0;
        transition: 1s all;
        
        .loggedInAvatar{
            li{
                text-align: center;
                padding-bottom: 0;
            }
            img{
                height: 150px;
                width: 150px;
            }
        }
        li{
            text-decoration: none;
            padding: 20px 0;
            border-bottom: 2px solid white;
            width: 90%;
            margin: 0 auto;
            div{
                height: 14px;
                width: 14px;
                background: white;
                border-radius: 100px;
                display: inline-block;
                margin-right: 22px;
                // transform: translateY(2px);
            }
            a{
                color: white;
                text-decoration: none;
                display: inline-block;
            }
            &:last-child{
                {
                    border-bottom: none;
                }
            }
            &:nth-child(2){
                div{
                    background: linear-gradient(#2ab5e3, #0b92bf);
                }
            }
            &:nth-child(3){
                div{
                    background: linear-gradient(#fb1842, #d00056);
                }
            }
            &:nth-child(4){
                div{
                    background: linear-gradient(#57b28e, #3c9d52);
                }
            }
            &:nth-child(5){
                div{
                    background: linear-gradient(#ffd32b, #f39200);
                }
            }
        }
        @media only screen and (max-width: 700px){
            display: block;
            text-decoration: none;
            list-style: none;
            width: 100%;
            margin: 0 auto;
            position: absolute;
            background: black;
            left: 0;
            z-index: -10;
        }
    }
`
const Hamburger = styled.div`
    display: none;
    cursor: pointer;
    transition: .8s all;
    @media only screen and (max-width: 700px){
        display: block;
    }
    position: absolute;
    top: 50%;
    left: 4%;
    transform: translateY(-50%);
    .bar1, .bar2, .bar3{
        width: 34px;
        height: 4px;
        background-color: white;
        margin: 8px 0;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
    .change .bar1{
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
    }
    .change .bar2{
        opacity: 0;
    }
    .change .bar3{
        -webkit-transform: rotate(45deg) translate(-8px -8px);
        transform: rotate(45deg) translate(-8px, -8px);
    }
`
const Cross = styled.div`
    display: none;
    cursor: pointer;
    position: absolute;
    top: 0%;
    left: 4%;
    transition: .8s all;
    transform: translateY(-50%);

    h1{
        font-size: 3.4em;
    }
    @media only screen and (max-width: 700px){
        display: block;
    }
`
export default NavBar;