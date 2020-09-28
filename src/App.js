import React, { Component } from "react";
import "./App.css";
import Navbar from "./comonents/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mymoves from "./comonents/mymoves";
import Getquotes from "./comonents/getquotes";
import Myprofile from "./comonents/myprofile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mymoves: [
        {
          id: "move_1",
          from: "Ejipur,Bengaluru,Karnataka",
          to: "HSR Layout,Bengaluru,Karnataka",
          request: "E21418",
          house: "1BHK",
          noofpackages: 32,
          distance: "4.8km",
          date: "Sep 26,2020 at 6:18pm",
          isflexible: true,
          inventory: {
            livingroom: {
              furnitures: {
                "1seater sofa": 2,
                "3seater sofa": 1,
                "tv cabonate": 1,
                "shoe rack": 1,
                "study table": 1,
              },
              electricals: {
                "LCD tv": 1,
                "Home Theater": 1,
                fan: 1,
              },
              Fragile: {
                bulb: 1,
                "pictures/paintings": 1,
                clock: 1,
              },
            },
            Bedroom: {
              furnitures: {
                "1seater sofa": 2,
                "3seater sofa": 1,
                "tv cabonate": 1,
              },
              electricals: {
                "LCD tv": 1,
                "Home Theater": 1,
                fan: 1,
              },
              Fragile: {
                bulb: 1,
                "pictures/paintings": 1,
                clock: 1,
              },
            },
            kitchen: {
              furnitures: {
                "1seater sofa": 2,
                "3seater sofa": 1,
                "tv cabonate": 1,
              },
              electricals: {
                "LCD tv": 1,
                "Home Theater": 1,
                fan: 1,
              },
              Fragile: {
                bulb: 1,
                "pictures/paintings": 1,
                clock: 1,
              },
            },
            bathroom: {
              furnitures: {
                "1seater sofa": 2,

                "tv cabonate": 1,
              },
              electricals: {
                "Home Theater": 1,
                fan: 1,
              },
              Fragile: {
                bulb: 1,
                "pictures/paintings": 1,
                clock: 1,
              },
            },
          },
          housedetails: {
            existinghouse: {
              floorno: 0,
              elevator: "No",
              packingrequired: "Yes",
              distance: "1 meter",
              addinfo: "No addinfo",
            },
            newhouse: {
              floorno: 0,
              elevator: "No",
              packingrequired: "Yes",
              distance: "1 meter",
              addinfo: "No addinfo",
            },
          },
        },
        {
          id: "move_2",
          from: "Ejipur,Bengaluru,Karnataka",
          to: "HSR Layout,Bengaluru,Karnataka",
          request: "E21417",
          house: "1BHK",
          noofpackages: 32,
          distance: "4.8km",
          date: "Sep 26,2020 at 6:18pm",
          isflexible: false,
          inventory: {
            livingroom: {
              furnitures: {
                "1seater sofa": 2,
                "3seater sofa": 1,
                "tv cabonate": 1,
                "shoe rack": 1,
                "study table": 1,
              },
              electricals: {
                "LCD tv": 1,
                "Home Theater": 1,
                fan: 1,
              },
              Fragile: {
                bulb: 1,
                "pictures/paintings": 1,
                clock: 1,
              },
            },
            Bedroom: {
              furnitures: {
                "1seater sofa": 2,
                "3seater sofa": 1,
                "tv cabonate": 1,
              },
              electricals: {
                "LCD tv": 1,
                "Home Theater": 1,
                fan: 1,
              },
              Fragile: {
                bulb: 1,
                "pictures/paintings": 1,
                clock: 1,
              },
            },
            kitchen: {
              furnitures: {
                "1seater sofa": 2,
                "3seater sofa": 1,
                "tv cabonate": 1,
              },
              electricals: {
                "LCD tv": 1,
                "Home Theater": 1,
                fan: 1,
              },
              Fragile: {
                bulb: 1,
                "pictures/paintings": 1,
                clock: 1,
              },
            },
            bathroom: {
              furnitures: {
                "3seater sofa": 1,
              },
              electricals: {
                "LCD tv": 1,

                fan: 1,
              },
              Fragile: {
                bulb: 1,
                "pictures/paintings": 1,
                clock: 1,
              },
            },
          },
          housedetails: {
            existinghouse: {
              floorno: 0,
              elevator: "No",
              packingrequired: "Yes",
              distance: "1 meter",
              addinfo: "No addinfo",
            },
            newhouse: {
              floorno: 0,
              elevator: "No",
              packingrequired: "Yes",
              distance: "1 meter",
              addinfo: "No addinfo",
            },
          },
        },
      ],
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Mymoves values={this.state.mymoves} />}
            />
            <Route exact strict path="/myprofile" component={Myprofile} />
            <Route exact path="/getquotes" component={Getquotes} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
