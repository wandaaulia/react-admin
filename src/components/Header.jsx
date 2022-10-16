import React from 'react'

const Header = () => {
  return (
    <>
      <header className="main-header">
    <a href="index2.html" class="logo">
      <span className="logo-mini"><b>A</b>LT</span>
      <span className="logo-lg"><b>Admin</b>LTE</span>
    </a>

    <nav className="navbar navbar-static-top">
      <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li className="dropdown messages-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-envelope-o"></i>
              <span className="label label-success">4</span>
            </a>
          </li>
          <li className="dropdown notifications-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-bell-o"></i>
              <span className="label label-warning">10</span>
            </a>
          </li>
          <li className="dropdown tasks-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-flag-o"></i>
              <span className="label label-danger">9</span>
            </a>
           
                  </li>
          <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
              <span className="hidden-xs">Alexander Pierce</span> </a>
            </li>
    
        </ul>
        </div>
    </nav>
  </header>
</>
  )
}

export default Header
