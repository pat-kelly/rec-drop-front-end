import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState({})
  const [photoChanged, setPhotoChanged] = useState(false)
  const hiddenFileInput = React.useRef(null)

  const handleClick = evt => {
    hiddenFileInput.current.click()
  }

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
    setPhotoChanged(true)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData, photoData.photo)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>Password:</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="confirm" className={styles.label}>
          Confirm Password:
        </label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="photo-upload" className={styles.label}>
          Upload Photo:
        </label>
        <div className={styles.uploadContainer}>
          <div className={styles.upload}>
            <button 
              className={`${styles.uploadButton} ${styles.button}`}
              form=""
              onClick={handleClick}
            >
              Choose File
            </button>
            {photoChanged && 
              <p className={styles.uploadText}>
                image uploaded
              </p>}
          </div>
          <input
            type="file"
            id="photo-upload"
            name="photo"
            className={styles.fileUpload}
            ref={hiddenFileInput}
            onChange={handleChangePhoto}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/">
          <button type='button' className={styles.button}>Cancel</button>
        </Link>
        <button disabled={isFormInvalid()} className={`${styles.button} ${isFormInvalid() ? styles.disabled : styles.enabled}`}>
          Sign Up
        </button>
      </div>
    </form>
  )
}

export default SignupForm
