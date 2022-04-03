import React from "react";
import "./widgetSm.css";
function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Personel</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images2.minutemediacdn.com/image/upload/c_fill,w_360,ar_1:1,f_auto,q_auto,g_auto/shape/cover/entertainment/mm-user-avatar-male-c5a9b6db28d293c7381495271bdda4ad.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mustafa Buğra Kayim</span>
            <span className="widgetSmUserTitle">Admin</span>
          </div>
          <button className="widgetSmButton">Display</button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
