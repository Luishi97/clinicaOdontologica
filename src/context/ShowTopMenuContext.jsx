import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ShowTopMenuContext = createContext()

const Provider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [debtsIsActive, setDebtsIsActive] = useState(false)
  const [showClinicIsActive, setShowClinicIsActive] = useState(false)
  const [showPrescriptionIsActive, setShowPrescriptionIsActive] = useState(false)

  const handleCloseAll = () => {
    setDebtsIsActive(false)
    setShowClinicIsActive(false)
    setShowPrescriptionIsActive(false)
  }
  const handlerShowDebts = () => {
    setDebtsIsActive(true)
    setShowClinicIsActive(false)
    setShowPrescriptionIsActive(false)
  }
  const handlerShowClinic = () => {
    setDebtsIsActive(false)
    setShowClinicIsActive(true)
    setShowPrescriptionIsActive(false)
  }
  const handlerShowPrescription = () => {
    setDebtsIsActive(false)
    setShowClinicIsActive(false)
    setShowPrescriptionIsActive(true)
  }

  const value = {
    isVisible,
    debtsIsActive,
    showClinicIsActive,
    showPrescriptionIsActive,

    setIsVisible,
    handlerShowClinic,
    handlerShowDebts,
    handlerShowPrescription,
    handleCloseAll
  }

  return <ShowTopMenuContext.Provider value={value}>{children}</ShowTopMenuContext.Provider>
}

Provider.propTypes = {
  children: PropTypes.node
}

export default {
  Provider,
  Consumer: ShowTopMenuContext.Consumer
}
