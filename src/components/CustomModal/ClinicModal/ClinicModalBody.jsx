import { useContext } from 'react'

import { ShowModalContext } from '../../../context/ShowModalContext'
import AddNewUser from '../../../Views/Patients/screens/AddNewUser'

export default function ClinicModalBody() {
  const {
    additionalHandlers: { patient }
  } = useContext(ShowModalContext)

  return <AddNewUser patient={patient} />
}
