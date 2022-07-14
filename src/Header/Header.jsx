import React from 'react'

export default function Header() {
  return (
  <div className="header-wrapper">
  <ul class="nav justify-content-center">
  
  <li class="nav-item">
   <a href=""><i class="fa fa-bell"></i></a>
  </li>
    
  <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
</ul>
 </div>
  )
}
