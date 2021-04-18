import { Form, Input, Button, TimePicker } from 'antd'
import { useContext } from 'react'
import { ShowModalContext } from '../../../context/ShowModalContext'

const format = 'HH:mm'

const layout = {
  labelCol: {
    span: 12
  },
  wrapperCol: { span: 16 }
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

const handleOnChangeHourSelected = (hourSelected, dateSelected) => {
  dateSelected.setHours(hourSelected.getHours(), hourSelected.getMinutes(), 0)
  return dateSelected
}
export default function CreateMeet() {
  const { additionalHandlers, modalData } = useContext(ShowModalContext)

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  if (!additionalHandlers) return <div>loading...</div>

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={additionalHandlers.handleOnSave}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Nombre del cliente"
        name="client"
        rules={[{ required: true, message: 'Ingrese el nombre del cliente' }]}
      >
        <Input
          value={additionalHandlers.formData.name && ''}
          className="form-register_input"
          onChange={({ target }) =>
            additionalHandlers.handleForm({ name: 'name', value: target.value })
          }
        />
      </Form.Item>

      <Form.Item
        label="Hora de inicio de la cita"
        name="timeInitMeet"
        rules={[{ required: true, message: 'Ingrese la hora de inicio de la cita' }]}
      >
        <TimePicker
          minuteStep={15}
          name="initOfMeet"
          format={format}
          value={additionalHandlers.formData.initOfMeet && ''}
          className="form-register_input"
          onChange={(val) =>
            val &&
            additionalHandlers.handleForm({
              name: 'initOfMeet',
              value: handleOnChangeHourSelected(val.toDate(), modalData.date)
            })
          }
        />
      </Form.Item>

      <Form.Item
        label="Hora de fin de la cita"
        name="timeEndMeet"
        rules={[{ required: true, message: 'Ingrese la hora del fin de la cita' }]}
      >
        <TimePicker
          minuteStep={15}
          name="endOfMeet"
          format={format}
          value={additionalHandlers.formData.endOfMeet && ''}
          className="form-register_input"
          onChange={(val) =>
            val &&
            additionalHandlers.handleForm({
              name: 'endOfMeet',
              value: handleOnChangeHourSelected(val.toDate(), modalData.date)
            })
          }
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          className="form-button-submit"
          style={{ borderRadius: 5 }}
          loading={additionalHandlers.isLoading}
        >
          Registrar
        </Button>
      </Form.Item>
    </Form>
  )
}
