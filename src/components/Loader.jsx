import { Space, Spin } from 'antd'

export default function Loader() {
  return (
    <Space>
      <Spin size="large" tip="Cargando" style={{ textAlign: 'center' }} />
    </Space>
  )
}
