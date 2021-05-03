import { Button, Col, Form, Input, Row } from 'antd'
import PropTypes from 'prop-types'

const { TextArea } = Input

const showPrescriptions = (prescriptions) => {
  let prescriptionText = ''
  prescriptions.prescriptions.forEach((pres) => {
    prescriptionText =
      prescriptionText + `${pres.product} - ${pres.frecuencia} - ${pres.quantity} \n`
  })
  return prescriptionText
}

export default function EvolutionItem({
  createdAt,
  formEvolutionData: { clinicData, diagnosis, treatment },
  prescriptions,
  total,
  pago,
  evoUid,
  key,
  valuesOfUpdate,
  handlefinish,
  handleForm
}) {
  console.log(prescriptions)
  return (
    <Row className="evolution_item" justify="space-around" align="middle" gutter={24}>
      <div className="evolution_item-date">
        <p className="evolution_item-date-text">{createdAt.toDate().toLocaleDateString()}</p>
      </div>
      <Col xs={{ span: 24 }} lg={{ span: 16 }} className="evolution_item-data">
        <p>Datos Clinicos</p>
        <TextArea rows={2} value={clinicData} />
        <p>Diagnóstico</p>
        <TextArea rows={2} value={diagnosis} />
        <p>Tratamiento</p>
        <TextArea rows={2} value={treatment} />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 8 }} className="evolution_item-receta">
        <p>receta</p>
        <TextArea rows={5} value={prescriptions ? showPrescriptions(prescriptions) : ''} />
      </Col>
      <Form name={`updateMoney${key}`} onFinish={() => handlefinish(evoUid)}>
        <Row justify="space-around" align="middle" gutter={24}>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <Form.Item name={`total${key}`} label="Precio total: ">
              <Input
                type="number"
                name={`total${key}`}
                defaultValue={total}
                onChange={({ target }) =>
                  handleForm({ ...valuesOfUpdate, total: parseInt(target.value) })
                }
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <Form.Item name={`pago${key}`} label="Monto pagado: ">
              <Input
                type="number"
                name={`pago${key}`}
                defaultValue={pago}
                onChange={({ target }) =>
                  handleForm({ ...valuesOfUpdate, pago: parseInt(target.value) })
                }
              />
            </Form.Item>
          </Col>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: 'green' }}>
              Actualizar
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Row>
  )
}
EvolutionItem.propTypes = {
  createdAt: PropTypes.object,
  formEvolutionData: PropTypes.shape({
    clinicData: PropTypes.string,
    diagnosis: PropTypes.string,
    treatment: PropTypes.string
  }),
  prescriptions: PropTypes.string,
  total: PropTypes.number,
  pago: PropTypes.number,
  userUid: PropTypes.string,
  key: PropTypes.number,
  evoUid: PropTypes.string,
  valuesOfUpdate: PropTypes.object,
  handlefinish: PropTypes.func,
  handleForm: PropTypes.func
}
