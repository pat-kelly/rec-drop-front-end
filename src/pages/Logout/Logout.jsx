import { useEffect } from 'react'

import StayNarly from '../../assets/stay-narly.png'
import styles from './Logout.module.css'

const Logout = ({ handlePageChange }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    handlePageChange()
  }, [])

  return ( 
    <main className={styles.main}>
      <img src={StayNarly} alt="logo with stay narly message" />
    </main>
  );
}

export default Logout;