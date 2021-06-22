import { Container } from '@material-ui/core'
import React from 'react'
import Loader from 'react-loader-spinner'

const PreLoader = () => {
  return (
    <div align="center">
      <Loader
      type="Rings"
      color="#CF5A11"
      height="726px"
      width="726px"
      />
    </div>
  )
}

export default PreLoader
