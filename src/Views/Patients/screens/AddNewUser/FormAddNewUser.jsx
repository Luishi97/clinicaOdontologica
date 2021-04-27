import { Form, Input, Button, Radio, DatePicker } from 'antd'
import ProptTypes from 'prop-types'

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

export function FormAddNewUser({
  formPersonalData: { lastName, apMat, firstName, sex, birthday },
  handleFormPersonalData,
  handleNext
}) {
  return (
    <Form {...layout} name="personalPrev" onFinish={handleNext}>
      <Form.Item label="Apellido paterno" name="lastName">
        <Input
          defaultValue={lastName}
          value={lastName}
          onChange={({ target }) =>
            handleFormPersonalData({ name: 'lastName', value: target.value })
          }
        />
      </Form.Item>

      <Form.Item label="Apellido materno" name="apMat">
        <Input
          defaultValue={apMat}
          value={apMat}
          onChange={({ target }) => handleFormPersonalData({ name: 'apMat', value: target.value })}
        />
      </Form.Item>

      <Form.Item label="Nombre completo" name="firstName">
        <Input
          defaultValue={firstName}
          value={firstName}
          onChange={({ target }) =>
            handleFormPersonalData({ name: 'firstName', value: target.value })
          }
        />
      </Form.Item>

      <Form.Item label="Sexo" name="sex">
        <Radio.Group
          options={[
            { label: 'Masculino', value: 'male' },
            { label: 'Femenino', value: 'famale' }
          ]}
          onChange={({ target }) => handleFormPersonalData({ name: 'sex', value: target.value })}
          defaultValue={sex}
          value={sex}
          optionType="button"
        />
      </Form.Item>

      <Form.Item label="Fecha de nacimiento" name="birthday">
        <DatePicker
          style={{ width: '100%' }}
          defaultValue={birthday}
          value={birthday}
          onChange={(value) => handleFormPersonalData({ name: 'birthday', value })}
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Siguiente
        </Button>
      </Form.Item>
    </Form>
  )
}

FormAddNewUser.propTypes = {
  formPersonalData: ProptTypes.shape({
    lastName: ProptTypes.string,
    apMat: ProptTypes.string,
    firstName: ProptTypes.string,
    sex: ProptTypes.string,
    birthday: ProptTypes.object
  }),
  handleFormPersonalData: ProptTypes.func,
  handleNext: ProptTypes.func
}
