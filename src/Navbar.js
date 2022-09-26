// now to create a new component i have reated a new file and later simply i will export it as default and can use it any file required by importing there

// this is a NavBar component so for shortcut write :- rafce

import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

// to export component default 
// export default Navbar
// export without default 
export {Navbar}