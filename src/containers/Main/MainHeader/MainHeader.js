import React ,{ Component} from "react";
import logo from  "../../../images/navi_title_v2.png"
import "./index.less";
export default class MainHeader extends Component{
    render(){
        return(
            <div className="cwj-main-header">
                <div className="logo-box">
                    <img src={logo} alt="123"/>
                </div>
                <div className="search-box">
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/home_search.png" alt="123"/>
                    <span>年货嗨抢，最高直降1000</span>
                </div>
                <div className="msg-box">
                   <div className="msg"> </div>
                </div>

            </div>
        )
    }
}
