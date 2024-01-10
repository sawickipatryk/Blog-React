export const update = async (id, dataToUpdate) => {
  const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}/blog/posts/${id}.json`, {
    method: 'PATCH',
    body: JSON.stringify(dataToUpdate)
  })
  return response
}
export default update
