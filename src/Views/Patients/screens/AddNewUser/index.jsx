import { Col, Row, Steps } from 'antd'
import { useState } from 'react'
import QueueAnim from 'rc-queue-anim'

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

export default function AddNewUser() {
  const [isLoading, setIsLoading] = useState(false)

  const [currentStep, setCurrentStep] = useState(0)
  const { formData: formPersonalData, handleForm: handleFormPersonalData } = useHandleForm({
    lastName: '',
    apMat: '',
    firstName: '',
    sex: '',
    birthday: momentToday
  })
  const { formData: formGeneralData, handleForm: handleFormGenerealData } = useHandleForm({
    registro: []
  })
  const { formData: formCheckData, handleForm: handleFormCheckData } = useHandleForm({
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
  })
  const { formData: formObservationsData, handleForm: handleFormObservationsData } = useHandleForm({
    observations: ''
  })
  const handleFinish = useHandleFinish({
    formPersonalData,
    formGeneralData,
    formCheckData,
    formObservationsData,
    setIsLoading
  })

  console.log(formCheckData)

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
                console.log(data)
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
            />
          ) : null}
        </QueueAnim>
        <Steps
          className="panel_new_user-steps"
          current={currentStep}
          onChange={setCurrentStep}
          direction="vertical"
          responsive={true}
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
