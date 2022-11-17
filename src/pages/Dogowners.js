// import React from 'react';
// import dogowners from '../data/dogowners.json';
// import { useParams, Link } from 'react-router-dom';
// import Tile from "../components/tile";
// import chantaljansen from "../assets/1.jpg";
// import Button from "../components/button";
//
// function DogownerDetails () {
//     const { dogownerId } = useParams();
//
//     const currentDogowner = dogowners.find((dogowner) => {
//         return dogowner.id === dogownerId;
//     });
//
//     return (
//         <>
//             <main>
//                 <h2>Naam Hondenbezitter :</h2>
//                 <h1>"{currentDogowner.name}"</h1>
//             </main>
//             <main>
//                 <section>
//                     <Tile>
//                         <h4>Locatie: {currentDogowner.location}</h4>
//                         <h4>Ingeschreven sinds: {currentDogowner.date}</h4>
//                         <p>Korte beschrijving: "{currentDogowner.content}"</p>
//                         <p>Eigenaar: {currentDogowner.owner}</p>
//                         <p>Adres: {currentDogowner.address}</p>
//                         <p>Algemene beoordeling:</p>
//                         <p>{currentDogowner.dograce}</p>
//                     </Tile>
//                 </section>
//                 <section>
//                     <Tile img={chantaljansen} imgDescription={currentDogowner.name} />
//                     <Tile name={currentDogowner.name}>
//                     </Tile>
//                 </section>
//                 <section>
//                     <Button>
//                         <Link to="/dogowners" style={{ textDecoration: 'none' }} >Hondenbezitters</Link>
//                     </Button>
//                 </section>
//             </main>
//         </>
//     );
// }
//
// export default DogownerDetails;