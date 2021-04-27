import { Space, Spin } from 'antd'

export default function Loader() {
  return (
    <Space align="center">
      <Spin size="large" tip="Cargando" style={{ textAlign: 'center' }} />
    </Space>
  )
}
