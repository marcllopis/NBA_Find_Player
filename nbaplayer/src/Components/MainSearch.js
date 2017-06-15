import React, { Component } from 'react';
import '../App.css';

const NBA = require("nba");
const curry = NBA.findPlayer('Stephen Curry');
console.log(curry);
/* logs the following:
{
  firstName: 'Stephen',
  lastName: 'Curry',
  playerId: 201939,
  teamId: 1610612744,
  fullName: 'Stephen Curry',
  downcaseName: 'stephen curry'
}
*/
NBA.stats.playerInfo({ PlayerID: curry.playerId, SeasonType: "Regular Season" }).then(console.log);


class MainSearch extends Component {
  render() {
    return (
      <div className="main">
        <div className="wrapper">
          <div className="main-title">
            <h2>Search for a player</h2>
          </div>
          <div className="searchInput">
            <input type="text" placeholder="Enter text..."/>
            <button type="submit">Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSearch;
