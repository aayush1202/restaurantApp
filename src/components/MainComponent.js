import React from 'react';
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import About from './AboutComponent';
import Contact from "./ContactComponent";
import { Component } from "react";
import DetailedDish from "./DetailedDishComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Route, Routes, Navigate,useNavigate } from "react-router-dom";
import {connect} from 'react-redux';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    
    return (
      <Component
        history={history}
        {...props}
        />
    );
  };
  
  return Wrapper;
};
const mapStateToProps = state =>{
    return{
      dishes : state.dishes,
      leaders : state.leaders,
      comments : state.comments,
      promotions : state.promotions

    }    
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    
      return (

        
      <div>
        <Header />
        <Routes>
          <Route path="*" element={<Navigate replace to="/home" />} />
          <Route
            path="/home"
            element={
              <Home
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                leader={
                  this.props.leaders.filter((leader) => leader.featured)[0]
                }
                promotion={
                  this.props.promotions.filter((promo) => promo.featured)[0]
                }
              />
            }
          />
          <Route path="/menu" element={<Menu dishes={this.props.dishes} />} />
          {/* <Route path="/menu/:dishId"  element={ <DetailedDish dish={this.state.dishes.filter((dish) => dish.id === parseInt({dishId},10))[0]} 
        comments={this.state.comments.filter((comment) => comment.dishId === parseInt({dishId},10))[0]} />} /> */}
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<About  leader = {this.props.leaders} />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
