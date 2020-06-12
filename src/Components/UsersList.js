import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import getData from '../actions/getsActions';


const UsersList = ({ dispatch, loading, users, hasErrors }) => {
   
    
    useEffect(() => {
        dispatch(getData())
    }, [dispatch])



     // Show loading, error, or success state
  const renderUsers = () => {
      const usersArray = users.result;
    if (loading) return <tr><td>Loading Users...</td></tr>
    if (hasErrors) return <tr><td>Unable to display users.</td></tr>
    console.log(users.result);
    
    if(usersArray){
        usersArray.map((user, index) => {
            console.log(user.id);
            
            return (
            <tr key={user.id} >
              <td>user.id</td>
              <td>{user.first_name}</td>
              <td>{user.email}</td>
            </tr>
          )
        }
      )
    }
 }


 return (
            <div>
                
                 <table className="col-md-6">
                   <thead>
                       <tr>
                           <th>ID</th>
                           <th>Name</th>
                           <th>Email</th>
                       </tr>
                   </thead>
                   <tbody>
                   { renderUsers() }
                    </tbody>
               </table>
            
          </div>
        );

}
// class UsersList extends React.Component {

 
//   constructor(props) {
//     super(props);
 
     
//   this.state = {
//     users: [],
//   }
//   }

//   componentWillMount() {
//     const apiUrl = 
//             'https://gorest.co.in/public-api/users?_format=json&access-token=nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE';
//     fetch(apiUrl)
//     .then((response) => 
//         response.json()
//     )
//     .then((data) => 
         
//             this.setState({ users : data.result})
           
//     );
//    //this.setState({ users: data });
//   }
//   render() {
//     const { users } = this.state;
//     console.log('This is your users',users);
    
//     return (
//         <div>
            
//              <table className="col-md-6">
//                <thead>
//                    <tr>
//                        <th>ID</th>
//                        <th>Name</th>
//                        <th>Email</th>
//                    </tr>
//                </thead>
//                <tbody>
//                {users.map((user, index  )=> (
//                    <tr key={user.id} >
//                          <td>{user.id}</td>
//                          <td>{user.first_name + user.last_name}</td>
//                          <td>{user.email}</td>
//                      </tr>
//                )
//                )
//                }
//                 </tbody>
//            </table>
        
//       </div>
//     );
//   }
// }

// Map Redux state to React component props
const mapStateToProps = state => ({
    loading: state.users.loading,
    users: state.users.users,
    hasErrors: state.users.hasErrors,
  })
export default connect(mapStateToProps)(UsersList)