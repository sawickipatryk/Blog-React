export const isAdmin = async (userId) => {
  const adminValue = await fetch(`${process.env.REACT_APP_FIREBASE_URL}/blog/admins/${userId}.json`)
  const data = await adminValue.json()
  return data === true
}
export default isAdmin
