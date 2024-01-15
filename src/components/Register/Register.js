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
              <label htmlFor="name">
              <input
                type="text"
                name='myName'
                id='name'
                placeholder='Name'
              />
              </label>
            </div>

            <div>
              <label htmlFor="userName">
              <input
                type="text"
                name='myUserName'
                id='userName'
                placeholder='UserName'
              />
              </label>
            </div>

            <div>
              <label htmlFor="email">
              <input
                type="email"
                name='myEmail'
                id='email'
                placeholder='Email'
              />
              </label>
            </div>

            <div>
              <label htmlFor="mobile">
              <input
                type="text"
                name='myEmail'
                id='mobile'
                placeholder='Mobile'
              />
              </label>
            </div>

            <div className={styles.checkboxClass}>
              <label htmlFor="myCheckbox">
                <input
                  className={styles.checkboxDesign}
                  type="checkbox"
                  name="myCheckbox"
                  id="myCheckbox"
                />
              </label>
              <div><p>Share my registration data with Superapp</p></div>
            </div>
          </form>
        </div>
        <div className={styles.buttonClass}>
          <button><h1>SIGN UP</h1></button>
        </div>
        <div className={styles.tAndC}>
        <p id='one'>By clicking on Sign up. you agree to Superapp&nbsp;
         <span style={{color:'#72DB73'}}>Terms and Conditions of Use</span> </p>
        </div>
        <div className={styles.privacyPolicy}>
        <p>To learn more about how Superapp collects, uses, 
        shares and protects your personal data please head Superapp &nbsp;
        <span style={{color:'#72DB73'}}>Privacy Policy</span></p> 
        </div>
      </div>
    </div>
  )
}
