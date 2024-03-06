import React from 'react';
import './App.css';
import teamData from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return <h1>Welcome to the NCAA Teams List</h1>;
}

// Old version:
// -----------------------------------------------------
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <img src="" alt="" />
        <h2>{oneTeam.school}</h2>
        <h3>{oneTeam.name}</h3>
        <h3>
          {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamData.teams.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

// // New Version:
// // -----------------------------------------------------
// function TeamList() {
//   return (
//     <div>
//       {teamData.teams.map((teamNum) => (
//         <div className="border-box" key={teamNum.tid}>
//           <h2>{teamNum.school}</h2>
//           <p>{teamNum.name}</p>
//           <p>
//             {teamNum.city}, {teamNum.state}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
