import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <nav className="bg-secondary mb-6 pt-6 pb-3 px-4 mx-0 mt-auto flex justify-between items-center">
    <Link className="text-headline" to="/">
      <span className="text-xl">{siteTitle}</span>
    </Link>
    <ul className="flex m-0 justify-center">
      {menuLinks.map(({ link, name }) => (
        <li className="p-4 m-0" key={name}>
          <Link className="text-headline" to={link}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
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
