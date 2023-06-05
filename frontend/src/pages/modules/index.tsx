import React from 'react'
import Modules from './modules'
import RouteActions from './routeActions'
import BreadcrumbsSlice from '../shared/breadcrumbs'

const index = () => {
  return (
    <><BreadcrumbsSlice />
    <div>
            <div className="rounded bg-blue h-40 shadow-sm py-2">
              <Modules />
            </div>
            <div className="rounded bg-blue h-40 shadow-sm py-2">
              <RouteActions />
            </div>
    </div>
    </>
  )
}

export default index
