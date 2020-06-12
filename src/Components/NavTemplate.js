import React from "react";
import Buttons from "../Components/CoreTopics/Buttons";
import Header from "../Components/CoreTopics/Header";


class NavTemplate extends React.Component {
    render(){
        console.log("LOOK HERE", this.props);
        {Object.values(this.props).map((val) => (
            console.log("VALUE", val.text)
        )
        )}
        return (
            <div> 
                <Header {...this.props}/>
                <Buttons {...this.props}/>
            </div>
        )
    }
}

export default NavTemplate;