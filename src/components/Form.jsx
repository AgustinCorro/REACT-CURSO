import React, { useState } from 'react'

const Form = () => {
    const [nombre , setNombre] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(nombre)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) =>setNombre(e.target.value) } />
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Form