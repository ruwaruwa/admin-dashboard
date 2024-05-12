import React from 'react'
import DefaultLeyout from '../../layout/DefaultLayout'
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb'
import { Link } from 'react-router-dom'
export default function Patients() {
  return (
    <DefaultLeyout>
        {/* <Breadcrumb pageName='patient'>
      <Link to={'Addpatien'} className='text-4xl  bg-red-500'>Patients </Link>
    
        </Breadcrumb> */}
        <div>
        <div className=" flex justify-between">
        <Link to='/Addpatien' className='text-4xl  bg-black text-white rounded-lg p-2'>Patients </Link>
<input className='right-40 p-2 outline-none border-2' placeholder='Search patient'/>
        </div>

        <div className='fle mt-3'>

        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h3  className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top patients
      </h3>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-10">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              PiD
            </h5>
          </div>
          <div className="p-2.5 sm:xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 sm:xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Age
            </h5>
          </div>
          <div className="p-2.5 sm:xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Gender
            </h5>
          </div>
          <div className="p-2.5 sm:xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Phone
            </h5>
          </div>
          <div className="p-2.5 sm:xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Address
            </h5>
          </div>
          <div className="p-2.5 sm:xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date
            </h5>
          </div>
          <div className="p-2.5 sm:xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Pyment
            </h5>
          </div>
          <div className="p-2.5 sm:xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Update
            </h5>
          </div>
          <div className="p-2.5 sm:xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Delete
            </h5>
          </div>
        </div>

   
          <div
            // className={`grid grid-cols-3 sm:grid-cols-5 ${
            //   key === brandData.length - 1
            //     ? ''
            //     : 'border-b border-stroke dark:border-strokedark'
            // }`}
            // key={key}
         className='grid grid-cols-3 sm:grid-cols-10' >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                {/* <img src={brand.logo} alt="Brand" /> */}
              </div>
              <p className="hidden text-black dark:text-white sm:block">
               12
              </p>
            </div>

            <div className="fl ex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">ruwa</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">$40</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">99</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">%</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">99</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">%</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">99</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">y</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">d</p>
            </div>
          </div>
        {/* ))} */}
      </div>
    </div>
        </div>
      </div>
    </DefaultLeyout>

  )
}
