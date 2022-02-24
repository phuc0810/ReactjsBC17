import React from 'react'

export default function DatabindingFunc() {
    const title = "hello"
    const RenderTitle = () => {
        return <p>hihi</p>
    }
  return (
    <div className='container'>
    <h3>{title}</h3>
    <p>{RenderTitle()}</p>
    </div>
  )
}
