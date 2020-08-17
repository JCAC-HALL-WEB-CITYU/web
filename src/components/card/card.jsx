import React, { Component } from "react";
import "./card.scss";

class MyCard extends React.Component {
  render() {
    return (
      <div className="cardObj d-flex flex-column noPadding p-sm-2 p-0 pb-3 col-lg-4 col-md-6 col-12">
        <div className="d-flex flex-column">
          <a href="#" id="cardsImage" className="image featuring2">
            <img src={this.props.splashImage} alt="" />
          </a>
          <section className="box whiteBG">
            <header>
              <h3>{this.props.title}</h3>
            </header>
            <p>{this.props.shortPara}</p>
            <footer>
              <ul className="actions">
                <li>
                  <a
                    target="_blank"
                    href={this.props.link}
                    className="button alt"
                  >
                    READ MORE
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </div>
    );
  }
}
export default MyCard;
