import React from 'react'
import TicketCard from './(components)/TicketCard';

const Dashborad = () => {
  return (
    <div className='p-5'>
      <div className='lg:grid grid-cols-4 xl:grid-flow-col-4'>
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  )
}

export default Dashborad