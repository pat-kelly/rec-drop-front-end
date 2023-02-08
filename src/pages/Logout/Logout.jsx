import StayNarly from '../../assets/stay-narly.png'
import styles from './Logout.module.css'

const Logout = () => {
  return ( 
    <main className={styles.main}>
      <img src={StayNarly} alt="logo with stay narly message" />
    </main>
  );
}

export default Logout;