import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from "./context";
const Submenu = () => {
  const { isSubMenuOpen, location, page:{page, links} } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const{center, bottom} = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location])

  return <aside className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center col-2`}>
        {links.map((link, index) => {
          const {label, icon, url} = link;
          return <a href={url} key={index}>{icon} {label}</a>
        })}
      </div>
     </aside>
}

export default Submenu
