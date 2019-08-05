import React from 'react'
import moment from 'moment'

const PreviewPicture = ({imageUrl}) => {
  return (
    <img width={260} height={400} mode='fit' src={imageUrl}/>
  )
}

export default PreviewPicture
