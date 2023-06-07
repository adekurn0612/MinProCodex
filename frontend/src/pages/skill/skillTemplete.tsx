import { reqSkillTemplete } from '@/redux/actions/actionReducer'
import React, { useEffect } from 'react'
import { BsPencil } from 'react-icons/bs'
import { GrAddCircle } from 'react-icons/gr'
import { TiDeleteOutline } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'

const SkillTemplete = (props : any) => {

   
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className='border font-bold text-lg'>Skill Templete</div>
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white-100 font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Skill
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Deskription
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Week
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Order By
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Parent
                  </th>
                  <th scope="col" className="px-6 py-4 text-right">
                <div className="flex justify-end">
                    <button className="flex items-center">
                    <GrAddCircle className="mr-1"></GrAddCircle>
                    <span className="text-sm">Add</span>
                    </button>
                </div>
                </th>
                </tr>
              </thead>
              <tbody >
                {props.skillTemplete.map((st : any, index : any) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-neutral-100 dark:bg-neutral-700" : "bg-white dark:bg-neutral-600" }
                  >
                    <td className="whitespace-nowrap px-6 py-4">1</td>
                    <td className="whitespace-nowrap px-6 py-4">1</td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4">{}</td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4">{}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">
                    <div className="flex items-center justify-end">
                        <BsPencil className="mr-1"></BsPencil>
                        <span className="mr-4 font-bold">Edit</span>
                        <TiDeleteOutline className="mr-1"></TiDeleteOutline>
                        <span className="font-bold">Delete</span>
                    </div>
                    </td>
                  </tr>
                 ))} 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillTemplete
