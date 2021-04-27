import { Form, Input, Button, DatePicker, Row, Col } from 'antd'
import { Fragment } from 'react'
import { FcMinus, FcPlus } from 'react-icons/fc'
import PropTypes from 'prop-types'
import QueueAnim from 'rc-queue-anim'

const layout = {
  wrapperCol: {
    xs: {
      span: 24
    },
    md: {
      span: 24
    }
  }
}
const tailLayout = {
  wrapperCol: {
    xs: {
      offset: 0,
      span: 8
    },
    md: {
      offset: 8,
      span: 8
    }
  }
}
export default function FormGeneralData({ formGeneralData: { registro }, handleNext }) {
  return (
    <Fragment>
      <Row align="middle" justify="center">
        <Col span={12} style={{ textAlign: 'center' }}>
          Fecha
        </Col>
        <Col span={12} style={{ textAlign: 'center' }}>
          Registro Enfermedades - Sistémica alérgica
        </Col>
      </Row>

      <Form
        {...layout}
        name="dynamic_form_nest_item"
        onFinish={handleNext}
        autoComplete={false}
        autoSave={false}
      >
        <Form.List name="registro" initialValue={registro}>
          {(fields, { add, remove }) => (
            <>
              <QueueAnim component="Form.Item" type={['bottom', 'top']} leaveReverse>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Form.Item key={key} align="baseline" className="form-register_item-second">
                    <Row>
                      <Col md={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item
                          {...restField}
                          name={[name, 'date']}
                          fieldKey={[fieldKey, 'date']}
                          style={{ flex: 1 }}
                          rules={[{ required: false }]}
                        >
                          <DatePicker autoComplete={false} className="form-register_input" />
                        </Form.Item>
                      </Col>
                      <Col md={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item
                          {...restField}
                          name={[name, 'description']}
                          fieldKey={[fieldKey, 'description']}
                          rules={[{ required: false }]}
                          style={{ flex: 1 }}
                        >
                          <Input placeholder="Registro" className="form-register_input" />
                        </Form.Item>
                        <FcMinus
                          onClick={() => remove(name)}
                          size={20}
                          className="form-register_input-icon"
                        />
                      </Col>
                    </Row>
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<FcPlus />}>
                    Agregar registro
                  </Button>
                </Form.Item>
              </QueueAnim>
            </>
          )}
        </Form.List>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className="form-button-submit">
            Siguiente
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  )
}

FormGeneralData.propTypes = {
  formGeneralData: PropTypes.array,
  handleNext: PropTypes.func
}
