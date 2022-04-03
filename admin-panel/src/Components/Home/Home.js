import React from "react";
import Car from "../Car/Car";
import WidgetLg from "../widgetLarge/WidgetLg";
import WidgetSm from "../widgetSmall/WidgetSm";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <Car />
      <div className="homeWidget">
        <WidgetSm/>
        <WidgetLg/>
        </div>
    </div>
  );
}

export default Home;
