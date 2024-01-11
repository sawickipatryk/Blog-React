import React from 'react'

import './style.css'

export const Loader = () => {
  return (
    <div className={'lds-roller'}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default Loader
