import React from 'react'

export default function TableHeader({children}) {
  return (
    <thead className='border-0 ms-5'>
        {children}
    </thead>
  )
}
