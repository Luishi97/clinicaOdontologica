import { Button, Form, Input } from 'antd'
import PropTypes from 'prop-types'

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
}
export default function FormObservations({
  formObservationsData: { observations },
  submitText,
  handleFormObservationsData,
  handleFinish
}) {
  return (
    <Form {...layout} name="observ" onFinish={handleFinish}>
      <Form.Item label="Observaciones" name="observations">
        <Input.TextArea
          rows={4}
          defaultValue={observations}
          value={observations}
          onChange={({ target }) =>
            handleFormObservationsData({ name: 'observations', value: target.value })
          }
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {submitText}
        </Button>
      </Form.Item>
    </Form>
  )
}

FormObservations.propTypes = {
  submitText: PropTypes.string,
  formObservationsData: PropTypes.shape({
    observations: PropTypes.string
  }),
  handleFormObservationsData: PropTypes.func,
  handleFinish: PropTypes.func
}
