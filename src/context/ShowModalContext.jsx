import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { CustomModal } from '../components'

export const ShowModalContext = createContext()

const Provider = ({ children, additionalHandlers }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalType, setModalType] = useState(0) // 0 --> Meet, 1 --> Orders
  const [modalData, setModalData] = useState({})

  const handleChangeModalType = (modalTypeRenderOption) => {
    setModalType(modalTypeRenderOption)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    if (additionalHandlers.handleMeetsOfDay) additionalHandlers.handleMeetsOfDay(null)
    setIsModalVisible(false)
  }

  const value = {
    isModalVisible,
    modalType,
    modalData,
    handleIsModalVisible: setIsModalVisible,
    handleOk,
    handleCancel,
    additionalHandlers,
    handleChangeModalType,
    handleChangeModalData: setModalData
  }

  return (
    <ShowModalContext.Provider value={value}>
      <CustomModal /> {children}
    </ShowModalContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node,
  additionalHandlers: PropTypes.object
}

export default {
  Provider,
  Consumer: ShowModalContext.Consumer
}
