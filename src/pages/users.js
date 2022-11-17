// import React from 'react';
// import { Link } from 'react-router-dom';
// import users from '../data/users.json';
// import Button from "../components/button";
//
// function OverviewTest() {
//     return (
//         <>
//             <main>
//                 <h1>Users</h1>
//             </main>
//             <main>
//                 <h3>Momenteel zijn er {users.length} Honden Uitlaat Diensten bij ons ingeschreven.</h3>
//
//                 <ul>
//                     {users.map((user) => {
//
//                         return <li key={user.id}>
//                             <h4>{user.id}</h4>
//                             <h4>{user.title}</h4>
//                             <h4>Locatie: {user.location}</h4>
//
//                             <Button>
//                                 <Link to={`dogservice/${user.id}`}>
//                                     {user.title}
//                                 </Link>
//                             </Button>
//                         </li>
//                     })}
//                 </ul>
//             </main>
//         </>
//     );
// }
// export default OverviewTest;