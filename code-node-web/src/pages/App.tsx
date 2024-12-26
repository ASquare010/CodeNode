import { useState } from 'react'
import './App.css'
import Test from '../component/text' 
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="container mt-5">
          <h1>Welcome to React with Bootstrap</h1>
          <Test items={[1,2,3,4]} title='hello'/>
          <Button className='btn' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </div>  
       
    </>
  )
}

export default App
