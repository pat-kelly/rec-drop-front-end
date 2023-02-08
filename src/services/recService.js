import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}api/recs`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    // console.log('RES ', res)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (recData) => {
  console.log('CREATE REC DATA ', recData)
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST', 
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recData)
    })
    return res.json()
    } catch (err) {
    throw err
  }
}

const addPic = async (recData, photo) => {
  if (photo) {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await addPhoto(
      photoData,
      recData._id
    )
  }
}

async function addPhoto(photoData, id) {
  const res = await fetch(`${BASE_URL}/${id}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

const update = async (recData) => {
  try {
    const res = await fetch(`${BASE_URL}/${recData._id}`, {
      method: 'PUT', 
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteRec = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createComment = async (id, commentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteComment = async (rid, cid) => {
  try {
    const res = await fetch(`${BASE_URL}/${rid}/comments/${cid}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const like = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/like`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  create,
  update,
  deleteRec as delete,
  createComment, 
  deleteComment,
  like,
  addPic,
  addPhoto,
}