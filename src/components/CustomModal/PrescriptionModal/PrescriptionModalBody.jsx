import { useContext, useState } from 'react'
import { Col, Row, Form, Input, Button } from 'antd'
import { FcMinus, FcPlus } from 'react-icons/fc'
import QueueAnim from 'rc-queue-anim'

import PreviewPrescriptionModal from './PreviewPrescriptionModal'
import { ShowModalContext } from '../../../context/ShowModalContext'
import './prescription.css'

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

export default function PrescriptionModalBody() {
  const [page, setPage] = useState(0)
  const {
    additionalHandlers: { formPrescriptionData, handleFormPrescriptionData }
  } = useContext(ShowModalContext)

  const handleNext = (data) => {
    handleFormPrescriptionData({ name: 'prescriptions', value: data.prescriptions })
    setPage(1)
  }

  if (page === 1)
    return (
      <PreviewPrescriptionModal
        prescriptions={formPrescriptionData.prescriptions}
        handleBack={setPage}
      />
    )

  if (page === 0)
    return (
      <div className="body_prescription">
        <Row align="middle" justify="center">
          <Col span={8} className="text-align-center">
            Producto
          </Col>
          <Col span={8} className="text-align-center">
            Frecuencia
          </Col>
          <Col span={8} className="text-align-center">
            Cantidad
          </Col>
        </Row>
        <Row align="middle" justify="center" gutter={24}>
          <Form
            {...layout}
            name="dynamic_form_nest_item_prescription"
            onFinish={handleNext}
            autoComplete={false}
            autoSave={false}
            className="prescription-form"
            style={{ width: '100%' }}
          >
            <Form.List name="prescriptions" initialValue={formPrescriptionData.prescriptions}>
              {(fields, { add, remove }) => (
                <>
                  <QueueAnim component="Form.Item" type={['bottom', 'top']} leaveReverse>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Form.Item key={key} align="baseline" className="form-prescription_item">
                        <Row gutter={24}>
                          <Col md={{ span: 8 }} xs={{ span: 24 }}>
                            <Form.Item
                              {...restField}
                              name={[name, 'product']}
                              fieldKey={[fieldKey, 'product']}
                              style={{ flex: 1 }}
                              rules={[{ required: false }]}
                            >
                              <Input
                                placeholder="Medicamento, dosis"
                                className="form-register_input"
                                autoComplete={false}
                              />
                            </Form.Item>
                          </Col>
                          <Col md={{ span: 8 }} xs={{ span: 24 }}>
                            <Form.Item
                              {...restField}
                              name={[name, 'frecuencia']}
                              fieldKey={[fieldKey, 'frecuencia']}
                              rules={[{ required: false }]}
                              style={{ flex: 1 }}
                            >
                              <Input
                                placeholder="Frecuencia"
                                className="form-register_input"
                                autoComplete={false}
                              />
                            </Form.Item>
                          </Col>
                          <Col md={{ span: 8 }} xs={{ span: 24 }}>
                            <Form.Item
                              {...restField}
                              name={[name, 'quantity']}
                              fieldKey={[fieldKey, 'quantity']}
                              rules={[{ required: false }]}
                              style={{ flex: 1 }}
                            >
                              <Input
                                placeholder="Cantidad"
                                className="form-register_input"
                                autoComplete={false}
                              />
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
                        Agregar medicamento
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
        </Row>
      </div>
    )
}
