import React from 'react'
import './DataBox.css'
function DataBox({keys,value}) {
  return (
    <div className='DataBox'><h2>{keys}</h2><h3>{value}</h3></div>
  )
}

export default DataBox