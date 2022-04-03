import React from "react";
import "./widgetLg.css";
function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Son İşlemler</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Müşteri</th>
          <th className="widgetLgTh">Tarih</th>
          <th className="widgetLgTh">Tutar</th>
          <th className="widgetLgTh">durum</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Mustafa Kayim</span>
          </td>
          <td className="widgetLgDate">7 Mart 2022</td>
          <td className="widgetLgAmount">150 TL</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
