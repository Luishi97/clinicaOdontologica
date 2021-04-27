import { useContext } from 'react'
import { navigate } from '@reach/router'

import firebase from '../../../config/firebase'
import { ShowNotificationContext } from '../../../context/ShowNotificationContext'

function changeMomentToDate(formGeneralData) {
  formGeneralData.registro = formGeneralData.registro.map((data) => ({
    ...data,
    date: data.date.toDate()
  }))
  return formGeneralData
}

export function useHandleFinish({
  formPersonalData,
  formGeneralData,
  formCheckData,
  formObservationsData,
  setIsLoading
}) {
  const { openNotificationWithIcon } = useContext(ShowNotificationContext)
  const handleFinish = () => {
    console.log(formGeneralData)
    setIsLoading(true)
    if (formPersonalData.firstName === '') {
      setIsLoading(false)
      openNotificationWithIcon(
        {
          message: 'Error con los datos',
          description: 'El paciente debe tener nombre'
        },
        'error'
      )
    } else
      firebase
        .firestore()
        .collection('clients')
        .add({
          personalData: { ...formPersonalData, birthday: formPersonalData.birthday.toDate() },
          generalData: changeMomentToDate(formGeneralData),
          checkData: { ...formCheckData },
          observations: { ...formObservationsData }
        })
        .then(() => {
          openNotificationWithIcon(
            {
              message: 'Registro exitoso',
              description: 'El paciente fue registrado con exito'
            },
            'success'
          )
          navigate('/pacientes/buscarPaciente')
        })
        .catch((err) => {
          openNotificationWithIcon(
            {
              message: 'Error al registrar',
              description: 'No se pudo registrar al paciente ' + err
            },
            'error'
          )
        })
        .finally(() => setIsLoading(false))
  }
  return handleFinish
}
