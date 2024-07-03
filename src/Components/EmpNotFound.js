import React from 'react'
import { useParams, useRouteError } from 'react-router-dom'

const EmpNotFound = () => {

  const {id} = useParams();

  const err = useRouteError()

  return (
    <>
    <div>Employee with {id } is not found ... </div>
    {/* <div>{err}</div> */}
    </>
  )
}

export default EmpNotFound