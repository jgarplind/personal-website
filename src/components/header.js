import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header class="bg-green-900 mb-6 pt-6 pb-3 px-4 mx-0 mt-auto flex flex-col items-center">
    <h1 class="m-0 text-white hover:underline">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <div>
      <nav>
        <ul class="flex m-0">
          {menuLinks.map(link => (
            <li class="text-white hover:underline p-4 m-0" key={link.name}>
              <Link class="text-white" to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  menulinks: [],
}

export default Header
