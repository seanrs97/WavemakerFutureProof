import React from "react";
import Buttons from "../Components/CoreTopics/Buttons";
import Header from "../Components/CoreTopics/Header";


class NavTemplate extends React.Component {
    render(){
        return (
            <div> 
                <Header {...this.props}/>
                <Buttons {...this.props}/>
            </div>
        )
    }
}

export default NavTemplate;