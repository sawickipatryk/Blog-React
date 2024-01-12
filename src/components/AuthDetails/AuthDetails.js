import React from 'react'

import { auth } from '../../firebase'

import { onAuthStateChanged } from 'firebase/auth'

import { useDispatch } from 'react-redux'

import { isAdmin as checkIsAdmin } from '../../api/admins/isAdmin'

import {
  createActionSetUserIsAdmin,
  createActionSetIsUserLoggedId,
  createActionSetUserId,
  createActionSetUserDisplayName,
  createActionSetUserEmail,
  createActionSetUserAvatar,
  createActionRemoveIsUserLoggedId
} from '../../state/auth'

export const AuthDetails = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(createActionSetIsUserLoggedId())
        if (user) {
          const isAdmin = await checkIsAdmin(user.uid)
          if (isAdmin) {
            dispatch(createActionSetUserIsAdmin())
          }
        }
        dispatch(createActionSetUserId(user.uid))
        dispatch(createActionSetUserDisplayName(user.displayName && user.displayName))
        dispatch(createActionSetUserEmail(user.email && user.email))
        dispatch(createActionSetUserAvatar(user.photoURL && user.photoURL))
      } else {
        dispatch(createActionRemoveIsUserLoggedId())
      }
    })

    return () => listen()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default AuthDetails
