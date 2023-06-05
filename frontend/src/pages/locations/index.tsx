import React from 'react'
import AddressType from './addressType'
import Country from './country'
import Province from './province'
import City from './city'
import BreadcrumbsSlice from '../shared/breadcrumbs'

const index = () => {
  return (
    <><BreadcrumbsSlice />
    <div>
            <div className="rounded bg-blue h-40 shadow-sm py-2">
              <AddressType/>
            </div>
            <div className="rounded bg-blue h-40 shadow-sm py-2">
              <Country />
            </div>
            <div className="rounded bg-blue h-40 shadow-sm py-2">
              <Province />
            </div>
            <div className="rounded bg-blue h-40 shadow-sm py-2">
              <City />
            </div>
    </div>
    </>
  )
}

export default index
