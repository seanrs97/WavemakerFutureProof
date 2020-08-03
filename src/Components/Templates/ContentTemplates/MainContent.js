import React  from "react";
import {ContentContainer} from "./MainContentStyles.js";
import sal from "sal.js";
import '../../../../node_modules/sal.js/dist/sal.css';

class MainContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            jsonDATA: ""
        }
    }
    componentDidMount(){
        sal({
            once: false,
        });
    }
    render(){
        return (
            <ContentContainer>
                {!!this.props.what && this.props.what.map((cont) =>
                    <div className = "contentContainer contentContainerComplex" key = {cont.id}>
                        <img 
                            src = {cont.image} alt = {cont.id}
                            data-sal = "zoom-in"
                            data-sal-easing = "ease-out-back"
                            data-sal-duration = "1300"
                            data-sal-delay = "200"
                        />
                        <p className = "content-text">{cont.text}</p>
                    </div>
                )}

                {!!this.props.why && this.props.why.map((cont) =>
                    <div className = "contentContainer contentContainerComplex" key = {cont.id}>
                        <img
                            src = {cont.image} alt = {cont.id}
                            data-sal = "zoom-in"
                            data-sal-easing = "ease-out-back"
                            data-sal-duration = "1300"
                            data-sal-delay = "200"
                        />
                        <p className = "content-text">{cont.text}</p>
                    </div>
                )}
                {!!this.props.how && this.props.how.map((cont) =>
                    <div className = "contentContainer contentContainerComplex" key = {cont.id}>
                        <img 
                            src = {cont.image} alt = {cont.id}
                            data-sal = "zoom-in"
                            data-sal-easing = "ease-out-back"
                            data-sal-duration = "1300"
                            data-sal-delay = "200"
                        />
                        <ContentContainer className = "content-text">
                            <div className = "wrapper">
                                <h1>{cont.mainHeader}</h1>
                                <div className = "firstTextContainer">
                                    <h2> {cont.headingText1}</h2>
                                    <p> {cont.text1} </p>
                                </div>
                                <div className = "secondTextContainer">
                                    <h2> {cont.headingText2}</h2>
                                    <p> {cont.text2} </p>
                                </div>
                                <div className = "thirdTextContainer">
                                    <h2> {cont.headingText3}</h2>
                                    <ul> {!!cont.text3 && cont.text3.map((data) =>
                                        <li key = {data.text}> {data.text} </li>
                                    )}
                                    </ul>
                                </div>
                            </div>
                        </ContentContainer>
                    </div>
                )}
            </ContentContainer>
        )
    }
}
export default MainContent;