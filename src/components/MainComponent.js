import Menu from './MenuComponent';
import Home from './HomeComponent';
import {DISHES} from '../shared/dishes' ;
import { Component } from 'react';
import DetailedDish from "./DetailedDishComponent";
import Header from './HeaderComponent' ;
import Footer from './FooterComponent';
import { Route, Routes, Navigate} from 'react-router-dom';
class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES,
    };
  }

  render(){

  
  return (
    <div>
    <Header/>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/menu" element={<Menu dishes={this.state.dishes}/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
}

export default Main;
