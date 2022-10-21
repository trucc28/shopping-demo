import React from 'react'

export default function TopHeader() {
  return (
    <>
      <section className='head'>
        <div className='container d-flex justify-content-between'>
          <div className='left '>
            <i className='fa fa-phone'></i>
            <label> +88012 3456 7894</label>
           
          </div>
          <div className='right  RText'>
          <i className='fa fa-envelope'></i>
            <label> support@ui-lib.com</label>
          </div>
        </div>
      </section>
    </>
  )
}
