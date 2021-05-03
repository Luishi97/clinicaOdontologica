import { Button, Modal } from 'antd'
import { useContext } from 'react'
import { ShowModalContext } from '../../context/ShowModalContext'
import MeetBody from './MeetModal/MeetsBody'
import './CustomModalStyle.css'
import DebtsModalBody from './DebtsModal/DebtsModalBody'
import ClinicModalBody from './ClinicModal/ClinicModalBody'
import PrescriptionModalBody from './PrescriptionModal/PrescriptionModalBody'

export default function CustomModal() {
  const { isModalVisible, modalData, modalType, handleCancel } = useContext(ShowModalContext)

  return (
    <Modal
      title={modalData.title}
      visible={isModalVisible}
      onCancel={handleCancel}
      centered
      {...(modalType >= 1 && modalType < 3 && { width: '90%' })}
      {...(modalType === 3 && { width: '55%' })}
      footer={modalType === 0 && <Button onClick={handleCancel}>Cerrar</Button>}
      bodyStyle={{
        height: window.screen.height > 780 ? '37rem' : '30rem',
        overflow: 'auto'
      }}
    >
      {modalType === 0 ? (
        <MeetBody />
      ) : modalType === 1 ? (
        <DebtsModalBody />
      ) : modalType === 2 ? (
        <ClinicModalBody />
      ) : modalType === 3 ? (
        <PrescriptionModalBody />
      ) : null}
    </Modal>
  )
}
