import { lazy, Suspense } from 'react'
import { Router } from '@reach/router'

import { LoadingSvg } from '../assets/images/svgComponents'

const Meets = lazy(() => {
  return Promise.all([
    import('../Views/Meets'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([moduleExports]) => moduleExports)
})

const Patients = lazy(() => {
  return Promise.all([
    import('../Views/Patients'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([moduleExports]) => moduleExports)
})
const SerachPattients = lazy(() => {
  return Promise.all([
    import('../Views/Patients/screens/SearchPatient'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([moduleExports]) => moduleExports)
})
const AddNewUser = lazy(() => {
  return Promise.all([
    import('../Views/Patients/screens/AddNewUser/'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([moduleExports]) => moduleExports)
})

function Routes() {
  return (
    <Suspense fallback={<LoadingSvg />}>
      <Router>
        <Meets path="citas" />
        <Patients path="pacientes" />
        <AddNewUser path="pacientes/agregarPaciente" />
        <SerachPattients path="pacientes/buscarPaciente" />
      </Router>
    </Suspense>
  )
}

export default Routes
