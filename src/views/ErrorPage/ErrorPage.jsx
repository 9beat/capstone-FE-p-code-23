import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "1rem" }}>OPS Something went wrong!!</h1>
      <h2 style={{ textAlign: "center" }}>Error 404</h2>
      <h3 style={{ textAlign: "center" }}>Page not found</h3>
      <p style={{ textAlign: "center"}}><Link to="/">Go to HOME</Link></p>
    </div>
  )
}
