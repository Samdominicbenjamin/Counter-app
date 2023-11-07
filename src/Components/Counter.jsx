import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';


function Counter() {
    // state creation
    const [counter,setCounter]=useState(0)//Apply 0 as initial state value
    //function counter
    function incrementCounter(){
        //Increment by 1 
        setCounter(counter+1)
    }

    function decrementCounter(){
        
        if(counter!==0){
            // Decrement by 1
           setCounter(counter-1)
        }
    }

    function resetCounter(){
        //reset
        setCounter(0)
    }


  return (
    <div className='m-5 p-5 d-flex justify-content-center align-items-center'>
        <div className='container m-5 p-5 border border-2 border-dark shadow 
        rounded w-50 bg-info'>
            <h1 className='text-light text-center'>Counter App</h1>
            <h1 className='text-center'>{counter}</h1>

            <div className='d-flex justify-content-between '>
              <MDBBtn color='success' onClick={incrementCounter}>Increment</MDBBtn>
              <MDBBtn color='danger' onClick={decrementCounter}>Decrement</MDBBtn>
              <MDBBtn color='dark' onClick={resetCounter}>Reset</MDBBtn>
            </div>
            
        </div>
        
    </div>
  )
}

export default Counter