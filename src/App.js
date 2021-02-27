import { useEffect, useState } from 'react';
import './App.css';
// import { Header, Logo } from "./components/Header";

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])





  return (
    <div className="Users">
      {

        // users.map(user =>

        //   <Users
        //     name={user.name}
        //     email={user.email}
        //     phone={user.phone}
        //     website={user.website}
        //     username={user.username} />
        // )

        (() => {
          let getUsers = [];
          for (let i = 0; i < users.length; i++) {
            if (i === 5) {
              break;
            }
            getUsers.push(<Users
              name={users[i].name}
              email={users[i].email}
              phone={users[i].phone}
              website={users[i].website}
              username={users[i].username} />)
          }
          return getUsers
        })()

      }
    </div>
  );

  function Users(props) {

    return (
      <ul>
        <li>Name: {props.name || 'Your Name'}</li>
        <li>Email: {props.email || 'user@email.com'}</li>
        <li>Phone: {props.phone}</li>
        <li>Website: {props.website}</li>
        <li>Username: {props.username}</li>
      </ul>

      // {/* {
      //   users.map(user => {
      //     return (

      //         <li>Name: {user.name}</li>
      //         <li>Email: {user.email}</li>
      //         <li>Phone: {user.phone}</li>
      //         <li>Username: {user.username}</li>
      //         <li>Website: {user.website}</li>
      //         <li>Company: {user.company.name}</li>
      //         <li>Address: {user.address.suite}, {user.address.city}, {user.address.street}, {user.address.street},{user.address.zipcode}</li>
      //       </ul>
      //     )
      //   })
      // } */}

    )
  }
}

export default App;
