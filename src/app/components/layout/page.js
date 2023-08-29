import React from 'react'
import Header from '../header/page'
import Sidebar from '../sidebar/page'
// import HomeCarousel from '../carousel/page'
// import HomeCarousel from '../carousel/page'


function Layout({ children }) {

  return (
    <>
      <Header />
      
      <div className='container_wrap'>
        {/* <HomeCarousel /> */}
        <div className='row g-2'>
          <div className='sidebar col-md-2 d-none d-md-block'>
            <Sidebar />
          </div>
          <div className='col-12 col-md-9'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout

