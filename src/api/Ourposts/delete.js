export const deletePost = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}/blog/posts/${id}.json`, {
    method: 'DELETE'
  })
  return response
}
export default deletePost
