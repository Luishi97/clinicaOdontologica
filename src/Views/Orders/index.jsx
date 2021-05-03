import { Col, Row, Form, Input, Button } from 'antd'
import { useState } from 'react'
import '../../components/CustomModal/PrescriptionModal/prescription.css'
import OrderPreview from './OrderPreview'

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
export default function Orders() {
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState('')
  const handleNext = () => {
    setPage(1)
  }

  if (page === 1) return <OrderPreview order={order} handleBack={setPage} />

  if (page === 0)
    return (
      <div className="body_prescription">
        <Row align="middle" justify="center">
          <Col span={24} className="text-align-center">
            Descripción
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
            <Form.Item
              name={'product'}
              fieldKey={'product'}
              style={{ flex: 1 }}
              rules={[{ required: false }]}
            >
              <Input.TextArea
                rows={6}
                value={order}
                onChange={({ target }) => setOrder(target.value)}
                placeholder="Descripción de la orden"
                className="form-register_input"
                autoComplete={false}
              />
            </Form.Item>
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
