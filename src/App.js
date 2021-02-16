import React , { useState, useEffect } from 'react';
import axios from 'axios';
import react from 'react';



function App() {

const [posts,setPosts ] = useState([]);
const [click,setClick] = useState()


// function change () {
//         setValue (value+1)
     
// }

useEffect(() => {
  alert("Iam working ")
  // setValue (value +1)

  axios.get(`https://www.reddit.com/r/reactjs.json`)
  .then (res => {
    const newPosts = res.data.data.children
    .map(obj => obj.data)
    setPosts(newPosts)
  });
},[click]);
  return (
    <div>
   <h1>/r/reactjs</h1> 

<button onClick={ ()=>setClick(!click)  }>Reload</button>
<ul>
  {posts.map(post => (
    <li key={post.id}>{post.title}</li>

    
  ))}
</ul>

    </div>
  );
}

export default App;
