import { useContext } from 'react'
import firebase from '../../../config/firebase'
import { ShowNotificationContext } from '../../../context/ShowNotificationContext'

export default function useHandleSaveEvolution({
  userUid,
  userFullName,
  userSex,
  formEvolutionData,
  formPrescriptionData,
  total,
  pago
}) {
  const { openNotificationWithIcon } = useContext(ShowNotificationContext)
  const handleSaveEvolution = () => {
    firebase
      .firestore()
      .collection('evolutions')
      .add({
        userUid,
        userFullName,
        userSex,
        formEvolutionData,
        prescriptions: formPrescriptionData,
        isPayAll: formEvolutionData.pago === formEvolutionData.total,
        total,
        pago,
        createdAt: new Date()
      })
      .then(() => {
        openNotificationWithIcon(
          {
            message: 'Registro exitoso',
            description: 'Se registro la evolución del paciente con exito'
          },
          'success'
        )
      })
      .catch((err) => {
        openNotificationWithIcon(
          {
            message: 'Error al registrar',
            description: 'No se pudo registrar la evolución del paciente ' + err
          },
          'error'
        )
      })
  }
  return handleSaveEvolution
}
