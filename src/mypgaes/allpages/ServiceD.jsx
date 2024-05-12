import React from 'react'
import {
    Table,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle
  } from "reactstrap";
import DefaultLayout from '../../layout/DefaultLayout';
export default function ServiceD() {
  return (
    <DefaultLayout>

<table class="border-separate border border-slate-400 m-auto ... w-full">
  <thead className=''>
    <tr className=''>
      <th class="border border-slate-300 ...">State</th>
      <th class="border border-slate-300 ...">City</th>
      

      <th class="border border-slate-300 ...">ACtions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
      <td class="border border-slate-300 ...">Indiana</td>
    
     
    </tr>
   
  </tbody>
</table>
    </DefaultLayout>
  )
}
