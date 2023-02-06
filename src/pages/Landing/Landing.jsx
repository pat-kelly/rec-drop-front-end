import styles from './Landing.module.css'
import Logo from '../../assets/purple-narwhal.png'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      <h1>Welcome to Rec-Drop!</h1>
      <div className={styles.welcome}>
        <img src={Logo} alt="a purple narwhal" style={{width: '40vw'}}/>
        <h3 className={styles.description}>
          Have you ever been looking for a new book, movie, or tv show, and didn’t know where to start? Rec-Drop is an app that will help you make those decisions. View a list of other people’s recommendations about their favorite shows or books, or leave one of your own! You can also make “playlists” of things you want to check out in the future.
        </h3>
      </div>
    </main>
  )
}

export default Landing
