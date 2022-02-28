import React, { useState } from 'react'
const axios = require('axios')

function App() {

  const [data, setData] = useState('')

  const onBtnClick = async () => {
    let result = await axios.get('http://localhost:8080/')
    console.log(result.data)
    setData(result.data)
  }

  return (
    <div>
      <button onClick={onBtnClick}>test</button>
      <div>{data}</div>
    </div>
  )
}

export default App;
