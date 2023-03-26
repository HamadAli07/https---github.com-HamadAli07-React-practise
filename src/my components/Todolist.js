import React from 'react'

const Todolist = () => {

    const person = {
        name:'Hedy Lamarr',
        theme: {
            color: 'pink',
            backgroundColor: 'black'
        }
    };

  return (
    <div style={person.theme}>
        <h1>{person.name} Todos</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      className="photo" 
    />
    <ul>
      <li>Invent new traffic lights</li>
      <li>Rehearse a movie scene</li>
      <li>Improve the spectrum technology</li>
    </ul>
    </div>
  )
}

export default Todolist