import React, { useState } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

const App = () =>{
const [type,setType]=useState('')
  return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda"  value={type}onChange={(e)=>setType(e.target.value)} />
        </div>

        <ul>
          {posts
          .filter(({title})=>title.toLowerCase().includes(type.toLowerCase()))
          .map(({image,title,url},index)=>
            <li key={index+1}>
              <a href={url}>
                <img src={image} alt={title} />
              </a>
              <p>
                {title}
              </p>
            </li>
          )}
        </ul>
      </div>
    )
}




export default App


