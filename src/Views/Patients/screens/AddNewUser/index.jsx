import { Col, Row, Steps } from 'antd'
import { useState } from 'react'
import QueueAnim from 'rc-queue-anim'
import moment from 'moment'
import PropTypes from 'prop-types'

import { FormAddNewUser } from './FormAddNewUser'
import { PanelNewUser } from './PanelNewUser'
import FormGeneralData from './FormGeneralData'
import useHandleForm from '../../../../hooks/useHandleForm'
import { momentToday } from '../../../../utils/momentToday'

import './addNewUser.css'
import FormObservations from './FormObservations'
import { useHandleFinish } from '../../application/handlersOfAddNewUser'
import FormChecks from './FormChecks'

const { Step } = Steps

export default function AddNewUser({ patient }) {
  const [isLoading, setIsLoading] = useState(false)

  const [currentStep, setCurrentStep] = useState(0)
  const { formData: formPersonalData, handleForm: handleFormPersonalData } = useHandleForm(
    patient
      ? { ...patient.personalData, birthday: moment(patient.personalData.birthday.toDate()) }
      : {
          lastName: '',
          apMat: '',
          firstName: '',
          sex: '',
          birthday: momentToday
        }
  )
  const { formData: formGeneralData, handleForm: handleFormGenerealData } = useHandleForm(
    patient
      ? patient.generalData
      : {
          registro: []
        }
  )
  const { formData: formCheckData, handleForm: handleFormCheckData } = useHandleForm(
    patient
      ? patient.checkData
      : {
          cpo: '',
          hgb: '',
          usoc: '',
          oclusion: '',
          muscosabucal: '',
          muscosagng: '',
          fistulas: '',
          bolsaspatologicas: '',
          tartaro: '',
          movilidad: '',
          grg: ''
        }
  )
  const { formData: formObservationsData, handleForm: handleFormObservationsData } = useHandleForm(
    patient
      ? patient.observations
      : {
          observations: ''
        }
  )
  const handleFinish = useHandleFinish({
    patient,
    formPersonalData,
    formGeneralData,
    formCheckData,
    formObservationsData,
    setIsLoading
  })

  return (
    <Row align="middle" justify="center" className="register">
      <Col xs={24} md={11} className="register_forms_space">
        <QueueAnim
          key="forms"
          type={['scaleX']}
          ease={['easeOutQuart', 'easeInOutQuart']}
          leaveReverse
        >
          {currentStep === 0 ? (
            <FormAddNewUser
              key="formPersonalData"
              formPersonalData={formPersonalData}
              handleFormPersonalData={handleFormPersonalData}
              handleNext={() => setCurrentStep(1)}
            />
          ) : currentStep === 1 ? (
            <FormGeneralData
              key="formGeneralData"
              handleNext={(data) => {
                setCurrentStep(2)
                handleFormGenerealData({ name: 'registro', value: data.registro })
              }}
              formGeneralData={formGeneralData}
            />
          ) : currentStep === 2 ? (
            <FormChecks
              key="formCheck"
              formCheckData={formCheckData}
              handleFormCheckData={handleFormCheckData}
              handleNext={() => setCurrentStep(3)}
            />
          ) : currentStep === 3 ? (
            <FormObservations
              key="formObservationData"
              formObservationsData={formObservationsData}
              handleFormObservationsData={handleFormObservationsData}
              handleFinish={handleFinish}
              submitText={patient ? 'Actualizar' : 'Registrar'}
            />
          ) : null}
        </QueueAnim>
        <Steps
          current={currentStep}
          onChange={setCurrentStep}
          direction="vertical"
          className="panel_new_user-steps"
          style={{ width: 45 }}
        >
          <Step className="panel_new_user-steps-step" disabled={isLoading} />
          <Step className="panel_new_user-steps-step" disabled={isLoading} />
          <Step className="panel_new_user-steps-step" disabled={isLoading} />
          <Step className="panel_new_user-steps-step" disabled={isLoading} />
        </Steps>
      </Col>
      <Col xs={24} offset={1} md={12}>
        <PanelNewUser
          currentStep={currentStep}
          handlerSetCurrenStep={setCurrentStep}
          userData={formPersonalData}
        />
      </Col>
    </Row>
  )
}

AddNewUser.propTypes = {
  patient: PropTypes.object
}
