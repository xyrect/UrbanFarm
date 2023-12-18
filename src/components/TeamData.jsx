import React from 'react';
import CarouselExample from './CardTeam'

const teamData = [
  { name: 'Putra Ganda Dewata', role: 'Hustler/PM', image: './public/tentang kami/co1.jpg' },
  { name: 'Putra Ganda Dewata', role: 'Hustler/PM', image: './public/tentang kami/co1.jpg' },
  { name: 'Putra Ganda Dewata', role: 'Hustler/PM', image: './public/tentang kami/co1.jpg' },
  { name: 'Putra Ganda Dewata', role: 'Hustler/PM', image: './public/tentang kami/co1.jpg' },
  { name: 'Putra Ganda Dewata', role: 'Hustler/PM', image: './public/tentang kami/co1.jpg' },
  { name: 'Putra Ganda Dewata', role: 'Hustler/PM', image: './public/tentang kami/co1.jpg' },
  { name: 'Putra Ganda Dewata', role: 'Hustler/PM', image: './public/tentang kami/co1.jpg' },

];

function App() {
  return (
    <div className="App">
      <CarouselExample teamData={teamData} />
    </div>
  );
}

export default App;
