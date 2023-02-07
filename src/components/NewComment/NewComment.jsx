import { useState } from "react"
import styles from "../../pages/RecDetails/RecDetails.module.css"

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
      <label className={styles.commentForm}  htmlFor="content-input">Add A Comment:</label>
      <textarea className={styles.commentForm}
        required
        type='text'
        name='content'
        id='content-input'
        value={form.content}
        onChange={handleChange}
      />
      <button className={styles.submitCommentButton} type='submit'>SUBMIT</button>
    </form>
  )
}

export default NewComment