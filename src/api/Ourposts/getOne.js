export const getOne = async (blogId) => {
  const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}/blog/posts/${blogId}.json`)
  const data = response.json()
  return data
}
export default getOne
