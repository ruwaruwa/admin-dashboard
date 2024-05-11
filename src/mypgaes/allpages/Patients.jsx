import React from 'react'
import DefaultLeyout from '../../layout/DefaultLayout'
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb'
export default function Patients() {
  return (
    <DefaultLeyout>
        <Breadcrumb pageName='patient'>
      <h1 className='text-4xl'>Patients</h1>
        </Breadcrumb>
    </DefaultLeyout>

  )
}
