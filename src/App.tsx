import React from 'react'
import {RouterComponents} from './routers'
const App: React.FC = () => {

  return (
    <>
      <div
        style={{
          fontFamily: "Lexend Deca, sans- serif",
          height: "100vh",
          backgroundColor: "#202124",
        }}
      >
        <RouterComponents />
      </div>

    </>
  )
}

export default App
