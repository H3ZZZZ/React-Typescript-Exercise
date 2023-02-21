import { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Frederik",
      age: 26,
      url: "https://lh3.googleusercontent.com/pw/AMWts8Aw6wPpRfAkJIW2DI4aZWlI2Pzlttaz_Lg_8VmHmg6RR0t10qiOb6ArJxwB8Fq-f6BGHjprEJBqe45HGwqGt7Jqz696Vde44AEXchVp86oZg76b61ljUkFZk6AO3PxAKe3H8D6bEz8kfpvfUPMqnsvr9w=w1406-h937-s-no?authuser=0",
      note: "I am a monkey",
    },
    {
      name: "Casper",
      age: 27,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg",
    },
  ]);

  return (
    <div className="App">
      <h1>Monkeys invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
