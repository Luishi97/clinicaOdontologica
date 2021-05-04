import { Form, Input, Button } from 'antd'
import { useContext } from 'react'
import { ShowNotificationContext } from '../../../../context/ShowNotificationContext'
import { useHandleForm } from '../../../../hooks'

import { handleRegister } from '../../interface/handleRegister'
import '../../login.css'

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

export default function Login() {
  const { formData: formRegisterData, handleForm: handleRegisterForm } = useHandleForm({
    email: '',
    password: ''
  })
  const { openNotificationWithIcon } = useContext(ShowNotificationContext)
  return (
    <div className="register-container">
      <Form
        {...layout}
        name="register"
        onFinish={() => handleRegister({ ...formRegisterData, openNotificationWithIcon })}
        className="register-form"
      >
        <Form.Item
          label="Correo electónico"
          name="email"
          rules={[{ required: true, message: 'Ingrese su email' }]}
        >
          <Input
            value={formRegisterData.email}
            name="email"
            placeholder="email@ejemplo.com"
            onChange={({ target }) => handleRegisterForm(target)}
          />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: 'Ingrese su contraseña' }]}
        >
          <Input.Password
            value={formRegisterData.password}
            name="password"
            onChange={({ target }) => handleRegisterForm(target)}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
