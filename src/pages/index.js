import React from "react"
import { Link } from "gatsby"
export default () => (
  <div>
    <h1>This is our homepage</h1>
    Hello world!
    <div>
      <Link to="/blog/">blog page</Link>
    </div>
    <div>
      <a href="https://www.gatsbyjs.org">Gatsby Page</a>
    </div>
  </div>
)
