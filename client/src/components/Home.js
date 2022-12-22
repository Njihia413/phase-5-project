import React from 'react'


function Home({ user }) {
    if (user) {
      return <h1>Welcome, {user.name}!</h1>;
    } else {
      return <h1>Please Login or Sign Up</h1>;
    }
}
  

export default Home