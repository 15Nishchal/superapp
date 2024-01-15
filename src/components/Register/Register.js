import React from 'react'
import styles from './Register.module.css';
import music from '../Assets/music.png'

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <img src={music} alt="musicImage" />
        <h1>Discover new things on Superapp</h1>
      </div>

      <div className={styles.rightSection}>

        <div className={styles.logo}>
          <h1>Super app</h1>
        </div>

        <div className={styles.someText}>
          <p>Create your new account</p>
        </div>

        <div className={styles.formData}>
          <form action="">
            <div>
              <label htmlFor="name"></label>
              <input
                type="text"
                name='myName'
                id='name'
                placeholder='Name'
                // style={{ width: '70%', height: '44px' }}
              />
            </div>

            <div>
              <label htmlFor="userName"></label>
              <input
                type="text"
                name='myUserName'
                id='userName'
                placeholder='UserName'
                // style={{ width: '70%', height: '44px' }}
              />
            </div>

            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                name='myEmail'
                id='email'
                placeholder='Email'
                // style={{ width: '70%', height: '44px' }}

              />
            </div>

            <div>
              <label htmlFor="mobile"></label>
              <input
                type="text"
                name='myEmail'
                id='mobile'
                placeholder='Mobile'
                // style={{ width: '70%', height: '44px' }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
