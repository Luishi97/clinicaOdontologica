import { Button, Form, Radio } from 'antd'
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

export default function FormChecks({
  formCheckData: {
    cpo,
    hgb,
    usoc,
    oclusion,
    muscosabucal,
    muscosagng,
    fistulas,
    bolsaspatologicas,
    tartaro,
    movilidad,
    grg
  },
  handleFormCheckData,
  handleNext
}) {
  return (
    <Form {...layout} name="formChecks" onFinish={handleNext}>
      <Form.Item label="CPO." name="cpo">
        <Radio.Group
          defaultValue={cpo}
          buttonStyle="solid"
          name="cpo"
          onChange={({ target }) => handleFormCheckData({ ...target })}
        >
          <Radio.Button value="buena">Buena</Radio.Button>
          <Radio.Button value="regular">Regular</Radio.Button>
          <Radio.Button value="mala">Mala</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="HG.B." name="hgb">
        <Radio.Group
          defaultValue={hgb}
          buttonStyle="solid"
          name="hgb"
          onChange={({ target }) => handleFormCheckData({ ...target })}
        >
          <Radio.Button value="vsdia">VS DÍA</Radio.Button>
          <Radio.Button value="dpcomidas">DP COMIDAS</Radio.Button>
          <Radio.Button value="ocacional">OCACIONAL</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="USO. C." name="usoc">
        <Radio.Group
          defaultValue={usoc}
          buttonStyle="solid"
          name="usoc"
          onChange={({ target }) => handleFormCheckData({ ...target })}
        >
          <Radio.Button value="rego">REG. O.</Radio.Button>
          <Radio.Button value="sobreo">SOBRE O.</Radio.Button>
          <Radio.Button value="morda">MORD. A</Radio.Button>
          <Radio.Button value="artccruz">ARTC. CRUZ</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="OCLUSIÓN" name="oclusion">
        <Radio.Group
          defaultValue={oclusion}
          buttonStyle="solid"
          name="oclusion"
          onChange={({ target }) => handleFormCheckData({ ...target })}
        >
          <Radio.Button value="buena">BUENA</Radio.Button>
          <Radio.Button value="pro">PRO</Radio.Button>
          <Radio.Button value="prog">PROG.</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="MUSCOSA BUCAL" name="muscosabucal">
        <Radio.Group
          defaultValue={muscosabucal}
          buttonStyle="solid"
          name="muscosabucal"
          onChange={({ target }) => handleFormCheckData({ ...target })}
        >
          <Radio.Button value="sana">SANA</Radio.Button>
          <Radio.Button value="alterada">ALTERADA</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="MUSCOSA GNG" name="muscosagng">
        <Radio.Group
          defaultValue={muscosagng}
          buttonStyle="solid"
          name="muscosagng"
          onChange={({ target }) => handleFormCheckData({ ...target })}
        >
          <Radio.Button value="sana">SANA</Radio.Button>
          <Radio.Button value="alterada">ALTERADA</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="FÍSTULAS" name="fistulas">
        <Radio.Group
          defaultValue={fistulas}
          buttonStyle="solid"
          name="fistulas"
          onChange={({ target }) => handleFormCheckData({ ...target })}
        >
          <Radio.Button value="si">SI</Radio.Button>
          <Radio.Button value="no">NO</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="BOLSAS PATOLÓGICAS" name="bolsaspatologicas">
        <Radio.Group
          defaultValue={bolsaspatologicas}
          buttonStyle="solid"
          name="bolsaspatologicas"
          onChange={({ target }) => handleFormCheckData({ ...target })}
        >
          <Radio.Button value="si">SI</Radio.Button>
          <Radio.Button value="no">NO</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="TARTARO" name="tartaro">
        <Radio.Group
          defaultValue={tartaro}
          buttonStyle="solid"
          name="tartaro"
          onChange={({ target }) => handleFormCheckData({ ...target })}
        >
          <Radio.Button value="si">SI</Radio.Button>
          <Radio.Button value="no">NO</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="MOVILIDAD" name="movilidad">
        <Radio.Group
          defaultValue={movilidad}
          buttonStyle="solid"
          name="movilidad"
          onChange={({ target }) => handleFormCheckData({ ...target })}
        >
          <Radio.Button value="si">SI</Radio.Button>
          <Radio.Button value="no">NO</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="G. RG." name="grg">
        <Radio.Group
          defaultValue={grg}
          buttonStyle="solid"
          name="grg"
          onChange={({ target }) => handleFormCheckData({ ...target })}
        >
          <Radio.Button value="si">SI</Radio.Button>
          <Radio.Button value="no">NO</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Siguiente
        </Button>
      </Form.Item>
    </Form>
  )
}

FormChecks.propTypes = {
  formCheckData: PropTypes.shape({
    cpo: PropTypes.string,
    hgb: PropTypes.string,
    usoc: PropTypes.string,
    oclusion: PropTypes.string,
    muscosabucal: PropTypes.string,
    muscosagng: PropTypes.string,
    fistulas: PropTypes.string,
    bolsaspatologicas: PropTypes.string,
    tartaro: PropTypes.string,
    movilidad: PropTypes.string,
    grg: PropTypes.string
  }),
  handleFormCheckData: PropTypes.func,
  handleNext: PropTypes.func
}
