import React from 'react'

const Footer = () => {
  return (
    <div className='footer' style={{top: `${window.innerHeight}px`}}>
      <div>
      <a href='' target='_blank'>Report Bug</a>  <a href='' target='_blank'>Contact Developer</a>

      </div>
      <div className='footer'>
        Created by <span>
          {/* <a target='_blank' href='https://www.shashankj.tech/'> */}
            Shashank J.
            {/* </a> */}
            </span> | © 2023 All rights reserved.
      </div>
    </div>
  )
}

export default Footer