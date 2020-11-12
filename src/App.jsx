import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import LOGO from './images/car.jpg';
import LGO from './images/logo2.png';
import OLX from './images/olx.png';
import slide from './images/slide.png'
import  IMG1 from './images/img1.jpg';
import  IMG2 from './images/img2.jpg';
import  IMG3 from './images/img3.jpg';
import  IMG4 from './images/img4.jpg';
import  IMG5 from './images/img5.jpg';
import  IMG6 from './images/img6.jpg';
import  IMG7 from './images/img7.jpg';
import  IMG8 from './images/img8.jpg';
import  IMG9 from './images/img9.jpg';
import  IMG10 from './images/img10.jpg';
import  IMG11 from './images/img11.jpg';




import OLX1 from './images/logo.webp';
import Facebook from './facebook';

import Header from './component/Header.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// import  Header from './component/Header';
import { compose } from 'redux';
// import footer from './component/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow  } from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import Card from './component/card';  


// header component

// class Header extends Component{
//  render(){
//  return(
//    <div className="header">
//      <h2 >Header</h2>
//      <h3>My name  is sualeh fasih</h3>
//      <img src="data:image/jpeg;base64,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  " alt=""/>
//    </div>
 


//  }


// }

// footer 


// class Footer extends Component{
//   render(){
//   return(
//     <div className="footer">
//       <h2>Footer</h2>
//     </div>
//   )
 
 
//   }
 
 
//  }

// function App() {
//   return (
//     <div className="App">
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <h1>sualeh</h1>
    //   </header> */
    // <h1>hello world</h1>

      
    // </div>
    // classs components 
  //  class App extends React.Component{

  //   render(){
      // let a="my name is sualeh";
      // let b="my father name is  fasih";
      // return(
      
      //   <div>
      //   <h1>{`${a} ${b}`}</h1>
      // //   </div>
      // let todos=[
      //   {text:"ghous"},
      //   {text:"basit"},
      //   {text:"basit"},
      //   {text:"basit"}  
      
      // ];
  //     return(

  //        <div>
  //          {/* <ul>
  //            {todos.map((item,index)=>{
  //              return(
  //                <li key={index}>{item.text}
  //                </li>
  //              )
  //            })

  //            }
  //          </ul> */}
  //         <Header/>
  //          <h2>Main component</h2>
  //          {/* <Footer  /> */}
  //        </div>
  //     )
      
  //   }
  //  }
  //  class footer extends Component{
  //    render(){

  //     return(
  //       <div className="footer">
  //         <h2>footer</h2>
  //       </div>
  //     )
  //    }
  //  }
  
    
  class App extends Component{
      get_location(e){
           console.log(e.target.value);
      }


    render(){
   return(
     <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<img src={OLX} className="App-logo1" alt="logo" width="70" />


  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">
      <div className="container">
	<div className="row">
	    <form className="section">
	        {/* <label>Select</label> */}
	        <select className="form-control">
	           <option>pakistan</option> 
	           <option>lahore</option> 
	           <option> Karachi</option> 
	           <option>Karachi</option> 
	           <option icon={ faLocationArrow  }><FontAwesomeIcon icon={ faLocationArrow  } color="black" />  Cycle</option> 
	           <option>Horse</option> 
	        </select>
	    </form>
 	</div>
</div>
      <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">
      <div className="input-group">
    <input type="text" class="form-control" placeholder="Search this blog" width="300" />
    <div className="input-group-append">
      <button class="btn btn-secondary" type="button">
      <FontAwesomeIcon icon={faSearch}       />

      </button>
    </div>
  </div>
      </a>
      <a className="nav-item nav-link" href="#"><FontAwesomeIcon icon={faComment}  /></a>
      <a className="nav-item nav-link " href="#"><FontAwesomeIcon icon={faBell} /></a>
      <a className="nav-item nav-link " href="#"><Facebook/></a>

    </div>
  </div>
</nav> 
<img src={slide} className="App-logo" alt="logo" width="100"/>

<div className="container">
  <div className="row">
    <div className="col-sm-3">
    <div class="card" >
  <img class="card-img-top" src={IMG1} alt="Card image cap" />
  <div class="card-body">
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <h6>RS 2000</h6> <br/>
    <p>T-shirt For Winter</p>
  </div>
</div>
    </div>
    <div className="col-sm-3">
    <div class="card" >
  <img class="card-img-top" src={IMG2} alt="Card image cap" />
  <div class="card-body">
  <h6>RS 2000</h6> <br/>
    <p>T-shirt For Winter</p>  </div>
</div>
    </div>
    <div className="col-sm-3">
    <div class="card" >
  <img class="card-img-top" src={IMG3} alt="Card image cap" />
  <div class="card-body">
  <h6>RS 2000</h6> <br/>
    <p>T-shirt For Winter</p>  </div>
</div>
    </div>
    <div className="col-md-3">
    <div class="card" >
  <img class="card-img-top" src={IMG4} alt="Card image cap" />
  <div class="card-body">
  <h6>RS 2000</h6> <br/>
    <p>T-shirt For Winter</p>  </div>
</div>
    </div>
  </div>


</div>


{/* 2nd row */}
<div className="container">
  <div className="row">
    <div className="col-sm-3">
    <div class="card" >
  <img class="card-img-top" src={IMG5} alt="Card image cap" />
  <div class="card-body">
  <h6>RS 2000</h6> <br/>
    <p>T-shirt For Winter</p>  </div>
</div>
    </div>
    <div className="col-sm-3">
    <div class="card" >
  <img class="card-img-top" src={IMG6} alt="Card image cap" />
  <div class="card-body">
  <h6>RS 2000</h6> <br/>
    <p>T-shirt For Winter</p>  </div>
</div>
    </div>
    <div className="col-sm-3">
    <div class="card" >
  <img class="card-img-top" src={OLX} alt="Card image cap" />
  <div class="card-body">
  <h6>RS 2000</h6> <br/>
    <p>T-shirt For Winter</p>  </div>
</div>
    </div>
    <div className="col-md-3">
    <div class="card" >
  <img class="card-img-top" src={OLX1} alt="Card image cap" />
  <div class="card-body">
  <h6>RS 2000</h6> <br/>
    <p>T-shirt For Winter</p>  </div>
</div>
    </div>
  </div>


</div>

{/* 3rd row */}
<div className="container">
  <div className="row">
    <div className="col-sm-3">
    <div class="card" >
  <img class="card-img-top" src={IMG7} alt="Card image cap" />
  <div class="card-body">
  <h6>RS 2000</h6> <br/>
    <p>T-shirt For Winter</p>  </div>
</div>
    </div>
    <div className="col-sm-3">
    <div class="card" >
  <img class="card-img-top" src={IMG8} alt="Card image cap" />
  <div class="card-body">
  <h6>RS 2000</h6> <br/>
    <p>T-shirt For Winter</p>  </div>
</div>
    </div>
    <div className="col-sm-3">
    <div class="card" >
  <img class="card-img-top" src={IMG9} alt="Card image cap" />
  <div class="card-body">
  <h6>RS 2000</h6> <br/>
    <p>T-shirt For Winter</p>  </div>
</div>
    </div>
    <div className="col-md-3">
    <div class="card" >
  <img class="card-img-top" src={IMG10} alt="Card image cap" />
  <div class="card-body">
  <h6>RS 2000</h6> <br/>
    <p>T-shirt For Winter</p>  </div>
</div>
    </div>
  </div>


</div>
{/* <div class="gcse-search"><input type="text"/></div> */}



<section className="col-lg-12 col-md-12 col-sm-12 col-sm-12 footer-btm2">
    <div className="container">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 footer-btm2-left">
        © 2015 Abc Company, All Rights Reserved
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 footer-btm2-right pull-right">
        Powered By <a href="#">Webxdesigner</a>
      </div>
    </div>
  </section>

  <div class>

  </div>


</div>


    
     
     
     
   )

    }}


    // class Header extends React.Component{

    //   render(){
    //   return(
    //     <div>
    //     <_one />
    //     </div>
    //   )
    //   }
    // }


    class  Head extends Component{
      

      constructor(){
        super()
        this.state={
          name:"sualeh muhammad fasih",
          email:"sualehfseeh123@gmail.com",
          value:"" 
        }
        // this.set_name=this.set_name.bind(this);
      }
      handleChange(e){
            console.log(e.target.value);
      }

      set_name=()=>{
          // console.log(this.state.name="umer");
          this.setState({

            name:this.state.value,
            email:"ismail.com"
          })
      }

      get_Name=()=>{
        console.log(this.state.name);
      }
      render(){

        return(
       <div>
         <Header page="Application page" />
        <h2>my name is  {this.state.name}</h2>
        <input onChange={(e)=> this.handleChange(e)} type="text" placeholder="please enter input" />
        <input onChange={(e)=> this.handleChange(e)} type="text" placeholder="please enter input" />
        
        <button onClick={this.set_name}>set name</button>
        <button onClick={this.get_Name}>get name</button>
          
    
   
        </div>
        )
      }
    }
export default App;
