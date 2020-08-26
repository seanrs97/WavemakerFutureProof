import React from "react";
import {MenuList, Hamburger, Cross, MenuListText, MenuContainer, ContentContainer, NavImgContainer, NavImg} from "./NavBarStyles.js";

import BadgeBlue from "../../Images/BadgeBlue.svg";
import BadgeGreen from "../../Images/BadgeGreen.svg";
import BadgeRed from "../../Images/BadgeRed.svg";
import BadgeOrange from "../../Images/BadgeOrange.svg";

import logo from "../../Images/logo.svg";


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


        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount(){
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside(event){
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            if(this.state.displayMenu === "40px"){
                this.closeMenu()
            }
          }
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
                            <a href = {this.props.userProfileLink}><li> <img src = {this.props.showLoggedInImage} alt = "User Profile"/> </li></a>
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
                            <ul ref = {this.wrapperRef} style = {{marginTop: this.state.displayMenu}}>
                                <a className = "loginLinkHamburger" href = {this.props.loginHref}> {this.props.loginOrLogout} </a>

                                <li> <img src = {this.props.showLoggedInImage} alt = "User Profile"/> </li>
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

export default NavBar;