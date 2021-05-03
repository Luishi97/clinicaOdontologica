import { useState } from 'react'
import ShowModalContext from '../../../../context/ShowModalContext'
import { useHandleForm } from '../../../../hooks'
import AddNewUserSearchPatient from './SearchPatient'
import './searchPatient.css'

export default function SearchPatient() {
  const [userUid, setUserUid] = useState()
  const [patient, setPatient] = useState({})
  const { formData: formPrescriptionData, handleForm: handleFormPrescriptionData } = useHandleForm({
    prescriptions: []
  })

  return (
    <ShowModalContext.Provider
      value={{
        isModalVisible: true,
        modalType: 0
      }}
      additionalHandlers={{ userUid, patient, formPrescriptionData, handleFormPrescriptionData }}
    >
      <AddNewUserSearchPatient
        setUserUid={setUserUid}
        patient={patient}
        setPatient={setPatient}
        formPrescriptionData={formPrescriptionData}
      />
    </ShowModalContext.Provider>
  )
}
