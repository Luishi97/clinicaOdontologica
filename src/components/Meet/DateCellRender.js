import { Badge } from 'antd'
import { useContext } from 'react'
import { ShowModalContext } from '../../context/ShowModalContext'

function getListData(value, meetsOfMont) {
  let listData = []
  if (!meetsOfMont) return []

  listData = meetsOfMont
    .filter(
      (data) =>
        `${data.initOfMeet.toDate().getFullYear()}-${
          data.initOfMeet.toDate().getMonth() - 1
        }-${data.initOfMeet.toDate().getDate()}` ===
        `${value.year()}-${value.month() - 1}-${value.date()}`
    )
    .map((date) => ({ type: 'warning', content: date.name }))

  return listData || []
}

export default function DateCellRender(value) {
  const { additionalHandlers } = useContext(ShowModalContext)
  const listData = getListData(value, additionalHandlers.meetsOfMont)

  const handleCellClassNames = () => {
    let classNames = 'cell '
    if (new Date().getDate() === value.date()) classNames += 'cell-today '
    return classNames
  }

  return (
    <div className={handleCellClassNames()}>
      <p className="cell-date_nunmber">{value.date()}</p>
      <ul className="cell-meets">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    </div>
  )
}
