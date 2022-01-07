import React, { Component } from 'react';
import {Navbar, NavbarBrand , Jumbotron} from 'reactstrap';
class Header extends Component{
    
    render(){

        return(
            <React.Fragment>
                 <Navbar dark >
       <div className='container'>
         <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
       </div>
     </Navbar>
     
     <div id="jumbotron" className='container-fluid'>
        <div className="container p-5">
            <div className='col-12 col-md-8 col-sm-8'>
            <h1 className="display-5 fw-bold">Ristorante Con Fusion</h1>
            <p className="col-md-8 fs-4">We take inspiration form the world's best cuisines and create a unique fusion experience . Our lipsmakcing creations will tickle your culinary senses </p>
        </div>
        </div>
             </div>
        
     
            </React.Fragment>

        );
    }


}

export default Header;