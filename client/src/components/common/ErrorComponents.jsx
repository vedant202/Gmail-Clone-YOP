import React from 'react'
import { useRouteError } from 'react-router-dom'
export default function ErrorComponents() {
    const err = useRouteError();
    console.log(err);

  return (
    <div style={{marginLeft:250}}>There was an error loading this page</div>
  )
}
