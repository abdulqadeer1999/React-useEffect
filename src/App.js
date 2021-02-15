import React , { useState, useEffect } from 'react';



function App() {

const [value,setValue ] = useState();


function change () {
        setValue (value+1)
}

useEffect(() => {
  alert("Iam working ")
})
  return (
    <div>
      
<button onClick = {change} >Click Me</button>

    </div>
  );
}

export default App;
