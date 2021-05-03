import { useContext, useEffect } from 'react'
import { ShowModalContext } from '../../../context/ShowModalContext'
import { ShowTopMenuContext } from '../../../context/ShowTopMenuContext'

export default function uesHandlerOfTopMenu({ patient, setUserUid }) {
  const { isModalVisible, handleIsModalVisible, handleChangeModalType } = useContext(
    ShowModalContext
  )
  const {
    setIsVisible,
    debtsIsActive,
    showClinicIsActive,
    showPrescriptionIsActive,
    handleCloseAll
  } = useContext(ShowTopMenuContext)
  /* put Visible topMenu */
  useEffect(() => {
    if (patient.uid) setIsVisible(true)
    return () => setIsVisible(false)
  }, [patient])

  /* put in false all topMenuValues */
  useEffect(() => {
    if (!isModalVisible) handleCloseAll()
  }, [isModalVisible])

  /* handle for show debts */
  useEffect(() => {
    if (debtsIsActive) {
      handleIsModalVisible(true)
      handleChangeModalType(1)
      setUserUid(patient.uid)
    }
  }, [debtsIsActive])

  /* handle for show clinicCard */
  useEffect(() => {
    if (showClinicIsActive) {
      handleIsModalVisible(true)
      handleChangeModalType(2)
      setUserUid(patient.uid)
    }
  }, [showClinicIsActive])

  /* handle for show prescription */
  useEffect(() => {
    if (showPrescriptionIsActive) {
      handleIsModalVisible(true)
      handleChangeModalType(3)
      setUserUid(patient.uid)
    }
  }, [showPrescriptionIsActive])
}
