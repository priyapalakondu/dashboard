import React from 'react'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'

import investments from '../data'
import CompanyDetails from './CompanyDetails'
import './Dashboard.css'

function Dashboard() {
  const [sectorColors, setSectorColors] = useState({})

  useEffect(() => {
    let sectors = [
      ...new Set(
        investments.map((item) => {
          if (item.sector) return item.sector
          return 'XX'
        })
      ),
    ]
    const sc = {}
    sectors.forEach((sector) => {
      sc[sector] = randomColor()
    })
    setSectorColors({ ...sc })
  }, [])

  function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }

  return (
    <Container className='listContainer'>
      {investments.map((investment) => (
        <CompanyDetails
          key={investment.id}
          name={investment.name}
          sector={investment.sector}
          previousNames={investment.previousNames ?? null}
          color={
            investment.sector
              ? sectorColors[investment.sector]
              : sectorColors['xx']
          }
        />
      ))}
    </Container>
  )
}

export default Dashboard
