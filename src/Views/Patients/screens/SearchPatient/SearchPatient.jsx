import { Col, Row } from 'antd'
import PropTypes from 'prop-types'

import SearchUser from '../../../../components/SearchUser'
import howYearsOld from '../../../../utils/calculateHowYearsOld'
import emptyDataState from '../../../../assets/images/svg/pacientes.svg'
import useHandleForm from '../../../../hooks/useHandleForm'
import FormEvolutionData from './FormEvolutionData'
import useHandleSaveEvolution from '../../infrastructure/useHandleSaveEvolution'
import { EvolutionHistory } from '../../../../components'
import uesHandlerOfTopMenu from '../../application/useHandlerOfTopMenu'
import './searchPatient.css'

export default function AddNewUserSearchPatient({
  patient,
  formPrescriptionData,
  setPatient,
  setUserUid
}) {
  uesHandlerOfTopMenu({ patient, setUserUid })

  const { formData: formEvolutionData, handleForm: handleFormEvolutionData } = useHandleForm({
    clinicData: '',
    diagnosis: '',
    treatment: '',
    prescription: '',

    total: 0,
    pago: 0
  })

  const handleSaveEvolution = useHandleSaveEvolution({
    userUid: patient.uid || '',
    userFullName: `${patient.personalData.lastName} ${patient.personalData.apMat} ${patient.personalData.firstName}`,
    userSex: patient.personalData.sex,
    formEvolutionData: {
      clinicData: formEvolutionData.clinicData,
      diagnosis: formEvolutionData.diagnosis,
      treatment: formEvolutionData.treatment
    },
    formPrescriptionData,
    total: formEvolutionData.total,
    pago: formEvolutionData.pago
  })

  return (
    <div className="search_patient">
      <Row
        align="middle"
        justify="space-around"
        className="search_patient-search_container search_patient-divider"
      >
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <SearchUser setPatient={setPatient} />
        </Col>
        <Col style={{ textAlign: 'right' }} xs={{ span: 24 }} md={{ span: 12 }}>
          <p className="search_patient-search_container-yearsOld">
            {patient.personalData && howYearsOld(patient.personalData.birthday.toDate()) + ' años'}
          </p>
        </Col>
      </Row>
      {patient.personalData ? (
        <div>
          <FormEvolutionData
            formEvolutionData={formEvolutionData}
            handleFormEvolutionData={handleFormEvolutionData}
            handleFinish={handleSaveEvolution}
          />
          <EvolutionHistory userUid={patient.uid} emptyText="Aun no tiene historial" />
        </div>
      ) : (
        <img className="search_patient-loading" src={emptyDataState} />
      )}
    </div>
  )
}

AddNewUserSearchPatient.propTypes = {
  patient: PropTypes.object,
  formPrescriptionData: PropTypes.object,
  setPatient: PropTypes.func,
  setUserUid: PropTypes.func
}
