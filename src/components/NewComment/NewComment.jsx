import { useState } from "react"

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
    <form onSubmit={handleSubmit}>
      <label className="add-%comment-label" htmlFor="content-input">Add A Comment:</label>
      <textarea className="comment-box"
        required
        type='text'
        name='content'
        id='content-input'
        value={form.content}
        onChange={handleChange}
      />
      <button className="submit-comment-button" type='submit'>SUBMIT</button>
    </form>
  )
}

export default NewComment