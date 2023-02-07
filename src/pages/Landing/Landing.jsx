import styles from './Landing.module.css'
import Logo from '../../assets/purple-narwhal.png'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1 className={styles.header}>Welcome to Rec-Drop!</h1>
      <div className={styles.welcome}>
        <img src={Logo} alt="a purple narwhal" />
        <div className={styles.description}>
          <h4>
            Have you ever been looking for a new book, movie, song, or tv show, and didn’t know where to start? Rec-Drop will help you make those decisions. View a list of other people’s recommendations about their favorite shows or books, or leave one of your own! You can also make “playlists” of things you want to check out in the future.
          </h4>
        </div>
      </div>
    </main>
  )
}

export default Landing
