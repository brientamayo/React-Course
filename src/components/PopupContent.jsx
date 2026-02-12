import React from 'react'
import { createPortal } from 'react-dom'

const PopupContent = ({copied, textCopied}) => {
  return createPortal(
    <div>
        {copied && (
            <p>{textCopied} copied to Clipboard</p>
        )}
    </div>,
    document.querySelector('#popup-content')
  )
}

export default PopupContent
