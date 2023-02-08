import Album from '../../assets/album.png'
import Book from '../../assets/book.png'
import Movie from '../../assets/movie.png'
import Song from '../../assets/song.png'
import Tv from '../../assets/tv.png'

const Icon = ({ category }) => {
  const icons = {
    Album: Album, 
    Book: Book, 
    Movie: Movie, 
    Song: Song, 
    "TV Show": Tv,
  }

  return <img className="icon" src={icons[category]} alt={`A ${category} icon`} />
}

export default Icon