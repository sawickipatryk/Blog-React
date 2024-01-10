export const createPost = async (data) => {
  const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}/blog/posts/.json`, {
    method: 'POST',
    body: JSON.stringify(data)
  })
  return {
    response
  }
}
export default createPost
