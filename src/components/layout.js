import React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Switch from 'react-switch'
import { IconContext } from 'react-icons'
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/" title={title}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/" title={title}>
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        <ul className="navbar">
          <li>
            <Link className="" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="" to="/about">
              About
            </Link>
          </li>
        </ul>
      </header>
      <div className="theme">
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <Switch
              onChange={(e) => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
              checked={theme === 'dark'}
              offColor="#b2dcf2"
              onColor="#423090"
              uncheckedIcon={
                <IconContext.Provider
                  value={{ color: '#f4da87', className: 'theme-sun-icon' }}
                >
                  <RiSunFill />
                </IconContext.Provider>
              }
              checkedIcon={
                <IconContext.Provider
                  value={{ color: '#e7eee5', className: 'theme-moon-icon' }}
                >
                  <RiMoonClearFill />
                </IconContext.Provider>
              }
            />
          )}
        </ThemeToggler>
      </div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://gatsby-starter-flat-blog.netlify.app">
          Gatsby Starter Flat Blog
        </a>
      </footer>
    </div>
  )
}

export default Layout
