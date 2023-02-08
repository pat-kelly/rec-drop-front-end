import { useState } from "react"
import styles from "./NewComment.module.css"

const NewComment = (props) => {
  const [form, setForm] = useState({ text: '' })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddComment(form)
    setForm({ content: '' })
  }

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit}>
      <textarea className={styles.textarea}
        required
        type='text'
        name='content'
        placeholder='Add a comment...'
        value={form.content}
        onChange={handleChange}
      />
      <button className={styles.submitCommentButton} type='submit'>SUBMIT</button>
    </form>
  )
}

export default NewComment