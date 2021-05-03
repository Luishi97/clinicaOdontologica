import { Form, Input, Button, Row, Col } from 'antd'
import PropTypes from 'prop-types'

const { TextArea } = Input

const layout = {
  labelCol: {
    span: 0
  },
  wrapperCol: {
    span: 24
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8
  }
}

export default function FormEvolutionData({
  formEvolutionData: { clinicData, diagnosis, treatment },
  total,
  pago,
  handleFormEvolutionData,
  handleFinish
}) {
  return (
    <Form
      {...layout}
      name="horizontal_login"
      onFinish={handleFinish}
      className="search_patient-form_evolution"
    >
      <Row align="middle" justify="space-around" gutter={24}>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <Form.Item label="Datos clinicos" name="clinicData" wrapperCol={8}>
            <TextArea
              rows={6}
              name="clinicData"
              value={clinicData}
              onChange={({ target }) => handleFormEvolutionData(target)}
            />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <Form.Item label="Diagnóstico" name="diagnosis" wrapperCol={8}>
            <TextArea
              rows={6}
              name="diagnosis"
              value={diagnosis}
              onChange={({ target }) => handleFormEvolutionData(target)}
            />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <Form.Item label="Tratamiento" name="treatment" wrapperCol={8}>
            <TextArea
              rows={6}
              name="treatment"
              value={treatment}
              onChange={({ target }) => handleFormEvolutionData(target)}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="space-around" align="middle" gutter={24}>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <Form.Item name="total" label="Precio total: ">
            <Input
              type="number"
              name="total"
              value={total}
              onChange={({ target }) => handleFormEvolutionData(target)}
            />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <Form.Item name="pago" label="Monto pagado: ">
            <Input
              type="number"
              name="pago"
              value={pago}
              onChange={({ target }) => handleFormEvolutionData(target)}
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Guardar
        </Button>
      </Form.Item>
    </Form>
  )
}

FormEvolutionData.propTypes = {
  formEvolutionData: PropTypes.shape({
    clinicData: PropTypes.string,
    diagnosis: PropTypes.string,
    treatment: PropTypes.string
  }),
  total: PropTypes.number,
  pago: PropTypes.number,
  handleFormEvolutionData: PropTypes.func,
  handleFinish: PropTypes.func
}
