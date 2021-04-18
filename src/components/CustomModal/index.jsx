import { Button, Modal } from 'antd'
import { useContext } from 'react'
import { ShowModalContext } from '../../context/ShowModalContext'
import MeetBody from './MeetModal/MeetsBody'
import './CustomModalStyle.css'

export default function CustomModal() {
  const { isModalVisible, modalData, modalType, handleCancel } = useContext(ShowModalContext)

  return (
    <Modal
      title={modalData.title}
      destroyOnClose={true}
      visible={isModalVisible}
      onCancel={handleCancel}
      centered
      footer={modalType === 0 && <Button onClick={handleCancel}>Cerrar</Button>}
      bodyStyle={{
        height: window.screen.height > 780 ? '37rem' : '30rem',
        overflow: 'auto'
      }}
    >
      {modalType === 0 ? <MeetBody /> : null}
    </Modal>
  )
}
