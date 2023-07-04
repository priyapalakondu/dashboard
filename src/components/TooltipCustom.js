import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { QuestionCircle } from 'react-bootstrap-icons'

function TooltipCustom({ tooltipText }) {
  const renderTooltip = (props) => (
    <Tooltip {...props} className="myTooltip">
      <div style={{ marginRight: '20px' }}>Previously: </div>
      <div>
        {tooltipText.map((text, index) => (
          <div key={index}>{text}</div>
        ))}
      </div>
    </Tooltip>
  )

  return (
    <>
      {tooltipText && (
        <OverlayTrigger placement="right" overlay={renderTooltip}>
          <QuestionCircle color="grey" size={15} className="tooltipTrigger" />
        </OverlayTrigger>
      )}
    </>
  )
}

export default TooltipCustom
