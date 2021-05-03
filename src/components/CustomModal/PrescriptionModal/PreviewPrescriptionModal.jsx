import { Button, Col, Row } from 'antd'
import { Fragment, useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import ReactToPdf from 'react-to-pdf'

import { ShowModalContext } from '../../../context/ShowModalContext'
import logo from '../../../assets/images/logo/logo.png'

const options = {
  floatPrecision: 'smart'
}

export default function PreviewPrescriptionModal({ prescriptions, handleBack }) {
  const prescriptionRef = useRef(null)
  const {
    additionalHandlers: { patient }
  } = useContext(ShowModalContext)

  return (
    <Fragment>
      <div className="prescription-container" ref={prescriptionRef}>
        <Row className="prescription-header">
          <Col>
            <img src={logo} alt="logo" className="logo" />
          </Col>
          <Col>
            <p>Dental Gui</p>
            <p>Lema</p>
          </Col>
          <Col offset={17}>
            <p>Dirección</p>
            <p>Telefono</p>
            <p>Celular</p>
          </Col>
        </Row>
        <Row className="prescription-personal_data">
          <Col xs={{ span: 24 }} md={{ span: 17 }}>
            <span className="field_data"> Paciente: </span> {patient.personalData.lastName}{' '}
            {patient.personalData.apMat} {patient.personalData.firstName}
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 7 }}>
            <span className="field_data">Fecha de prescripción: </span>
            {new Date().toLocaleDateString()}
          </Col>
        </Row>

        <Row align="middle" justify="center" className="prescription-header-items">
          <Col span={8} className="prescription-header_indicator text-align-center">
            Producto
          </Col>
          <Col span={8} className="prescription-header_indicator text-align-center">
            Frecuencia
          </Col>
          <Col span={8} className="prescription-header_indicator text-align-center">
            Cantidad
          </Col>
        </Row>

        <div className="presciption_list">
          {prescriptions.map((pres, index) => (
            <Row
              align="middle"
              justify="center"
              gutter={24}
              className="presciption_list-item"
              key={index}
            >
              <Col span={8} className="prescription-item text-align-center">
                {pres.product}
              </Col>
              <Col span={8} className="prescription-item text-align-center">
                {pres.frecuencia}
              </Col>
              <Col span={8} className="prescription-item text-align-center">
                {pres.quantity}
              </Col>
            </Row>
          ))}
        </div>

        <div className="prescription-firma">Dra. Tia chala Guillen</div>
      </div>
      <div className="prescription-buttons">
        <Button type="dashed" onClick={() => handleBack(0)} className="buttons">
          Volver
        </Button>
        <ReactToPdf
          targetRef={prescriptionRef}
          filename="div-blue.pdf"
          options={options}
          x={3}
          y={3}
        >
          {({ toPdf }) => (
            <Button type="primary" onClick={toPdf} className="prescription-print">
              Imprimir
            </Button>
          )}
        </ReactToPdf>
      </div>
    </Fragment>
  )
}

PreviewPrescriptionModal.propTypes = {
  prescriptions: PropTypes.array,
  handleBack: PropTypes.func
}
