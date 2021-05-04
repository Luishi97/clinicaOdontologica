import { Form, Input, Button, Row, Col, Avatar } from 'antd'
import { useContext } from 'react'
import { FaUser } from 'react-icons/fa'

import { ShowNotificationContext } from '../../context/ShowNotificationContext'
import { useHandleForm } from '../../hooks'
import logo from '../../assets/images/logo/logo.png'

import { handleLogin } from './interface/handleRegister'
import './login.css'

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
      span: 16
    },
    sm: {
      offset: 8,
      span: 16
    }
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
      <Row className="register-panel" gutter={24}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} className="register-panel-welcome">
          <p className="register-panel-text">
            <Avatar icon={<FaUser />} size={200} className="register-avatar" />
            <br />
            Bienvenido a su sistema de control consultorio dental
          </p>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} className="register-panel-form">
          <Form
            {...layout}
            name="register"
            onFinish={() => handleLogin({ ...formRegisterData, openNotificationWithIcon })}
            className="login-form"
          >
            <p className="form-name">Inicio de sesión</p>
            <img src={logo} alt="logo" className="register-logo" />
            <Form.Item
              className="form-items"
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
              className="form-items"
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
              <Button type="primary" htmlType="submit" className="register-button">
                Ingresar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
