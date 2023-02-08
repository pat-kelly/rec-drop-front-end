import { useState, useEffect } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  useEffect(() => {
    window.scrollTo(0, 0)
    props.handlePageChange()
  }, [])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Log In</h1>
        <p>{message}</p>
        <LoginForm
          handleSignupOrLogin={props.handleSignupOrLogin}
          updateMessage={updateMessage}
        />
      </div>
    </main>
  )
}

export default LoginPage
