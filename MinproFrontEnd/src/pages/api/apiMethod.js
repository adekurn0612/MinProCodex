import axios from "axios";

import React from 'react'

const getAllCat = () => {
  return (
    axios.get('category')
  )
}

export {getAllCat}
