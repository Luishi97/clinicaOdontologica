import { Button, Col, Row } from 'antd'
import { Fragment, useRef } from 'react'
import PropTypes from 'prop-types'
import ReactToPdf from 'react-to-pdf'

import logo from '../../assets/images/logo/logo.png'

const options = {
  floatPrecision: 'smart'
}

export default function OrderPreview({ order, handleBack }) {
  const prescriptionRef = useRef(null)

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
          <Col xs={{ span: 24 }} md={{ offset: 17, span: 7 }}>
            <span className="field_data">Fecha de emisión: </span>
            {new Date().toLocaleDateString()}
          </Col>
        </Row>

        <Row align="middle" justify="center" className="prescription-header-items">
          <Col span={24} className="prescription-header_indicator text-align-center">
            Descripción de la orden
          </Col>
        </Row>

        <div className="presciption_list">
          <Row align="middle" justify="center" gutter={24} className="presciption_list-item">
            <Col span={24} className="prescription-item text-align-center">
              {order}
            </Col>
          </Row>
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

OrderPreview.propTypes = {
  order: PropTypes.string,
  handleBack: PropTypes.func
}
