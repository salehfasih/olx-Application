import React from 'react';
import '../App.css';
import LOGO from '../images/car.jpg'

class Header extends React.Component{
render(){

    return(

        <div className="header">
            <h2>Header</h2>
        </div>
    )
}
}

class Logo  extends React.Component{

    render(){
        return(
            <div>
              <img src={LOGO} alt="" />
            </div>
        )


    }

}

export default Header;

