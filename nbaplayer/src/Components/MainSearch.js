import React, { Component } from 'react';
import '../App.css';
import players from "../nba"

import Autocomplete from 'react-autocomplete';

const NBA = require("nba");



class MainSearch extends Component {

  constructor(){
    super()
    this.state = {value: "", players: []}
    this.findPlayer = this.findPlayer.bind(this)
  }

  componentDidMount() {
    this.input.refs.input.placeholder = "Search for a player..."
  }

  findPlayer(playerTyped){
    console.log(NBA)
    const player = NBA.findPlayer(playerTyped);
    console.log("Name of player", player);
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
    NBA.stats.playerProfile({ PlayerID: player.playerId, Season: "2015-16", SeasonType: "Regular Season" }).then(console.log);
  }

  filterPipe(){
    var self = this
    if (this.state.value !== "") {
      var filteredPlayers = players.filter((player)=>{
        return player["name"].toLowerCase().match(self.state.value) !== null
      })
      // console.log(filteredPlayers)
      this.setState({players: filteredPlayers })
    }
  }


  render() {
    return (
      <div className="main">
        <div className="wrapper">
          <div className="main-title">
            <h2>Search for a player</h2>
          </div>
          <div className="searchInput">
            <Autocomplete
                        getItemValue={(item) => item.name}
                        ref={el => this.input = el}
                        items={this.state.players}
                        renderItem={(item, isHighlighted) =>
                          <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {item.name}
                          </div>
                        }
                        value={this.state.value}
                        onChange={(e) => {
                          this.filterPipe();
                          this.setState({value: e.target.value})
                        }}
                        onSelect={(val) => this.setState({value: val})}
              />
            <button onClick={this.findPlayer(this.state.value)} >Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSearch;
