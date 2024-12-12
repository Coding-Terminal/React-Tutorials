import React from 'react'
import Modal from './Modal'

const App = () => {
  return (
    <div>
     <Modal></Modal>
     <Modal buttonText={"sign In"} content={ "happy to see you again "} ></Modal>
     <Modal buttonText={'happy Birthday '} content={"Happy Birthday to you " } showCloseBtn ={false}></Modal>
    </div>
  )
}

export default App
