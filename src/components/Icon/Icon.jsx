import Album from '../../assets/album.png'
import Book from '../../assets/book.png'
import Movie from '../../assets/movie.png'
import Song from '../../assets/song.png'
import Tv from '../../assets/tv.png'
import Add from '../../assets/add.png'
import Delete from '../../assets/delete.png'
import Edit from '../../assets/edit.png'
import Like from '../../assets/like.png'
import Unlike from '../../assets/unlike.png'
import CommentEmoji from '../../assets/comment-emoji.png'
import LikeEmoji from '../../assets/like-emoji.png'
import Minus from '../../assets/minus.png'

const Icon = ({ category }) => {
  const icons = {
    Album: Album, 
    Book: Book, 
    Movie: Movie, 
    Song: Song, 
    "TV Show": Tv,
    Add: Add, 
    Delete: Delete,
    Edit: Edit,
    Like: Like,
    Unlike: Unlike,
    CommentEmoji: CommentEmoji,
    LikeEmoji: LikeEmoji,
    Minus: Minus,
  }

  return <img className="icon" src={icons[category]} alt={`A ${category} icon`} />
}

export default Icon