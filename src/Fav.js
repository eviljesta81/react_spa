import React, { Component } from "react";
 
class Fav extends Component {
  render() {
    return (
        <div>
        <h2>Favorite Books</h2>
        <p>Here is a list of my favorite books:</p>
        <ol>
          <li>Stranger in a strange land</li>
          <li>Starship Troopers</li>
          <li>I will fear no Evil</li>
        </ol>
      </div>
    );
  }
}
 
export default Fav;