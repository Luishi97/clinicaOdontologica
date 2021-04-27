import { Link } from '@reach/router'
import { Card } from 'antd'
import PropTypes from 'prop-types'
import './cards.css'

const { Meta } = Card

export default function Cards({ title, description, image, to }) {
  return (
    <Link to={to}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="elem" src={image} />}
        className="cardSelectable"
      >
        <Meta title={title} description={description} className="cardSelectable_body" />
      </Card>
    </Link>
  )
}

Cards.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.node,
  to: PropTypes.string
}
