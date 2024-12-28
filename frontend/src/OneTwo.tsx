import { useEffect, useState } from 'react'
import './App.css'

function OneTwo() {
  const [increments, setIncrements] = useState(0);
  useEffect(() => {
    getIncrements();
  });

  const getIncrements = async () => {
    const response = await fetch('/api/default', {
      credentials: 'same-origin',
    });
    const data = await response.json();
    setIncrements(data.increments);
  }

  const addIncrement = async () => {
    const response = await fetch('/api/add-to-session', {
      method: 'POST',
      credentials: 'same-origin',
    });
    const data = await response.json();
    console.log(data);
    getIncrements();
  }

  return (
    <>
      <h1>One Two</h1>
      <button onClick={addIncrement}>Add</button>
      <p>Increments: {increments}</p>
    </>
  )
}

export default OneTwo
