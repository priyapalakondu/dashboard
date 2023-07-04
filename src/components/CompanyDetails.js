import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import TooltipCustom from './TooltipCustom'

function CompanyDetails({ name, sector, previousNames, color }) {
  return (
    <Row className='itemRow align-items-center'>
      <Col xs={1} sm={1} className='colorBlobDiv'>
        <div
          className='colorBlob'
          style={{ backgroundColor: color }}
        ></div>
      </Col>
      <Col>
        <h5>
          <span
            style={{
              paddingRight: '10px',
            }}
          >
            {name}
          </span>
          <TooltipCustom tooltipText={previousNames} />
        </h5>
        <p style={{ marginBottom: '0' }}>{sector}</p>
      </Col>
      <Col>
        <Button variant='custom'>Details</Button>
      </Col>
    </Row>
  )
}

export default CompanyDetails
