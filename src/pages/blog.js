import React, { Component } from "react"
import { Link } from "gatsby"

export default class blog extends Component {
  render() {
    return (
      <div>
        This is our blog Page
        <div>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    )
  }
}
