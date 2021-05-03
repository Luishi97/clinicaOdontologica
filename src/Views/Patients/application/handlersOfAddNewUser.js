import { useContext } from 'react'
import { navigate } from '@reach/router'

import firebase from '../../../config/firebase'
import { ShowNotificationContext } from '../../../context/ShowNotificationContext'

export function changeMomentToDate(formGeneralData) {
  formGeneralData.registro = formGeneralData.registro.map((data) => ({
    ...data,
    date: data.date.toDate()
  }))
  return formGeneralData
}

function createKeywords(name) {
  const arrName = []
  let curName = ''
  name.split('').forEach((letter) => {
    curName += letter
    arrName.push(curName)
  })
  return arrName
}

function generateKeywords(fisrtNamem, lastName, apMat) {
  const fullName = createKeywords(`${fisrtNamem} ${lastName} ${apMat}`.toUpperCase())
  const firstLastName = createKeywords(`${lastName} ${apMat} ${fisrtNamem} `.toUpperCase())
  const withOutapMat = createKeywords(`${lastName} ${fisrtNamem} `.toUpperCase())
  return [...fullName, ...firstLastName, ...withOutapMat]
}

export function useHandleFinish({
  patient,
  formPersonalData,
  formGeneralData,
  formCheckData,
  formObservationsData,
  setIsLoading
}) {
  const { openNotificationWithIcon } = useContext(ShowNotificationContext)
  const handleFinish = () => {
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
          fullName: generateKeywords(
            formPersonalData.firstName.trim(),
            formPersonalData.lastName.trim(),
            formPersonalData.apMat.trim()
          ),
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

  const handleUpdate = () => {
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
    } else {
      const uid = patient.uid
      firebase
        .firestore()
        .collection('clients')
        .doc(uid)
        .set({
          fullName: generateKeywords(
            formPersonalData.firstName.trim(),
            formPersonalData.lastName.trim(),
            formPersonalData.apMat.trim()
          ),
          personalData: { ...formPersonalData, birthday: formPersonalData.birthday.toDate() },
          generalData: changeMomentToDate(formGeneralData),
          checkData: { ...formCheckData },
          observations: { ...formObservationsData }
        })
        .then(() => {
          openNotificationWithIcon(
            {
              message: 'Actualización exitosa',
              description: 'El paciente fue actualizado con exito'
            },
            'success'
          )
        })
        .catch((err) => {
          openNotificationWithIcon(
            {
              message: 'Error al actualizar',
              description: 'No se pudo actualizar al paciente ' + err
            },
            'error'
          )
        })
        .finally(() => setIsLoading(false))
    }
  }
  return patient ? handleUpdate : handleFinish
}
