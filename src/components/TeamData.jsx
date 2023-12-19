import React from 'react';
import CarouselExample from './CardTeam'

const teamData = [
  { name: 'Putra Ganda Dewata', role: 'PM/Hacker/Hipster', image: './public/tentang kami/co1.jpg' },
  { name: 'Dewangga Nanda Arjuna', role: 'Scrum Master/Hacker', image: './public/tentang kami/dewa1.jpg' },
  { name: 'Novia Indah Ramadhani', role: 'Hipster', image: './public/tentang kami/nov.jpg' },
  { name: 'Sugini Injani', role: 'Hipster', image: './public/tentang kami/g1.jpg' },
  { name: 'Abdul Malik Dzakwan S', role: 'Hipster', image: './public/tentang kami/dzakwan1.jpg' },
  { name: 'Alexandro Bilbilson D', role: 'Scrum Master/Hacker', image: './public/tentang kami/alex1.jpg' },
  { name: 'Nabilah Rahmah H', role: 'Hipster', image: './public/tentang kami/nabila1.jpg' },
  { name: 'Vina Dhamayanti', role: 'Hacker', image: './public/tentang kami/vina3.jpg' },
  { name: 'M. Faiz Nurochman', role: 'Hacker', image: './public/tentang kami/p4.jpg' },
  { name: 'Revon Anandiya', role: 'Hacker', image: './public/tentang kami/revon1.jpg' },

];

function App() {
  return (
    <div className="App">
      <CarouselExample teamData={teamData} />
    </div>
  );
}

export default App;
