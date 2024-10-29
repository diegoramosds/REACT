import React from 'react'

const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Titulo container</h2>
        {children}
        <p>o valor é: {myValue}</p>
    </div>
  )
}

export default Container