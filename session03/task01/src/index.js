import React from 'react';
import ReactDOM from 'react-dom';

const name = 'saDE';
function Profile(name){

  if(name){
    return <main id="content" role="main" class="base">
            <h1>{name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()
}'s React Page</h1>
              <p>Example of react JSX in action. I am learning REACT!!...</p>
            </main>
  }
  else {
     return <main id="content" role="main" class="base">
       <h1>Just a React Page</h1>
       <p>Nothing to see here!</p>
     </main>  
   }
}

ReactDOM.render(Profile(name),document.getElementById('root'));
