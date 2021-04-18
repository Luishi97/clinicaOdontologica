import { Suspense } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'

import { LoadingSvg } from '../assets/images/svgComponents'

function Routes({ children }) {
  return (
    <Suspense fallback={<LoadingSvg />}>
      <Router>{children}</Router>
    </Suspense>
  )
}

Routes.propTypes = {
  children: PropTypes.node
}

export default Routes
