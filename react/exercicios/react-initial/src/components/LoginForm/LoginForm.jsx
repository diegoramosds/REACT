import { useState } from 'react'
import './LoginForm.css'



function LoginForm() {
    const [email, setEmail] =  useState('')
    const [password, setPassword] =  useState('')
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    function onEmailChangeHandler(e) {
        setEmail(e.target.value)
    }

    function onPasswordChangeHandler(e) {
        setPassword(e.target.value)
    }

    function isInputValid() {
        if (!email || !password) return false
        if(!emailRegex.test(email)) return false
        return true
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        if(isInputValid()) {
       console.log('Seu email é:', email)
       console.log('Seu password é:', password)
        } else {
            console.log('Campos inválidos!')
        }
       

        
    }

    return (
    <form className='container' onSubmit={onSubmitHandler}> 
       <div className='input-container'>
         <label htmlFor="email">Email</label>
         <input type="text" id='email' placeholder='Email' onChange={onEmailChangeHandler} />
         {email}
       </div> 

        <div className='input-container'>
         <label htmlFor="password">Senha</label>
         <input type="password" id='password' placeholder='Senha' onChange={onPasswordChangeHandler}/> 
         {password} 
        </div>
        <button type='submit'>Login</button>

    </form> 
    )
}

export default LoginForm