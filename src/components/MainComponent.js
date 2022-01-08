import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Component } from "react";
import DetailedDish from "./DetailedDishComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Route, Routes, Navigate } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      comments: COMMENTS,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route
            path="/home"
            element={
              <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                leader={
                  this.state.leaders.filter((leader) => leader.featured)[0]
                }
                promotion={
                  this.state.promotions.filter((promo) => promo.featured)[0]
                }
              />
            }
          />
          <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
