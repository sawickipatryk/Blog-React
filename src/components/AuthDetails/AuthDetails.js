/* eslint-disable no-unused-vars */
import React from 'react'

import { auth } from '../../firebase'

import { onAuthStateChanged } from 'firebase/auth'

import { useDispatch } from 'react-redux'

import {
  createActionSetIsUserLoggedId,
  createActionSetUserId,
  createActionSetUserDisplayName,
  createActionSetUserEmail,
  createActionSetUserAvatar,
  createActionRemoveIsUserLoggedId
} from '../../state/auth'

export const AuthDetails = () => {
  const [authUser, setAuthUser] = React.useState(null)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
        console.log(user)
        dispatch(createActionSetUserId(user.uid))
        dispatch(createActionSetUserDisplayName(user.displayName && user.displayName))
        dispatch(createActionSetUserEmail(user.email && user.email))
        dispatch(createActionSetUserAvatar(user.photoURL && user.photoURL))
        dispatch(createActionSetIsUserLoggedId())
      } else {
        setAuthUser(null)
        dispatch(createActionRemoveIsUserLoggedId())
      }
    })

    return () => listen()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default AuthDetails
