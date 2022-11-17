// import React from 'react';
// import { Link } from 'react-router-dom';
// import dogowners from '../data/dogowners.json';
// import Button from "../components/button";
//
// function OverviewDogowners() {
//     return (
//         <>
//             <main>
//                 <h1>Overzicht van ingeschreven Honden bezitters</h1>
//             </main>
//             <main>
//                 <h3>Momenteel zijn er {dogowners.length} Hondenbezitters bij ons ingeschreven.</h3>
//
//                 <ul>
//                     {dogowners.map((dogowner) => {
//
//                         return <li key={dogowner.id}>
//                             <h4>{dogowner.id}</h4>
//                             <h4>{dogowner.title}</h4>
//                             <h4>Locatie: {dogowner.location}</h4>
//
//                             <Button>
//                                 <Link to={`dogowner/${dogowner.id}`}>
//                                     {dogowner.title}
//                                 </Link>
//                             </Button>
//                         </li>
//                     })}
//                 </ul>
//             </main>
//         </>
//     );
// }
// export default OverviewDogowners;