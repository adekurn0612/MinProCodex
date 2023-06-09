import { reqDelSkillType, reqSkillType } from '@/redux/actions/actionReducer'
import React, { useEffect, useState } from 'react'
import { BsPencil } from 'react-icons/bs'
import { GrAddCircle } from 'react-icons/gr'
import { TiDeleteOutline } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import AddSkillType from './AddSkillType'
import Swal from 'sweetalert2';
import EditSkillType from './EditSkillType'

const SkillType = (props : any) => {
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [dataCat, setDataCat] = useState('');
  const dispatch = useDispatch();
  const handleDelete = async (data : string) => {
    console.log('1',{data})
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
  
      if (result.isConfirmed) {
        dispatch(reqDelSkillType(data))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      } else {
        Swal.fire(
          'Cancelled',
          'Your file is safe.',
          'info'
        );
      }
    } catch (error) {
      console.error('Error deleting data:', error);
      Swal.fire(
        'Error!',
        'Failed to delete data. Please try again.',
        'error'
      );
    }
  };

  return (
    <>
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
          <div className='border font-bold text-lg'>Skill Type</div>
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white-100 font-medium dark:border-neutral-500 dark:bg-neutral-600 bg-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-4 text-right">
                  <div className="flex justify-end pr-7 ">
                    <button className="flex items-center shadow w-auto bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold  px-4 py-2 rounded"
                    onClick={()=>setIsAdd(true)}>
                    <GrAddCircle className="mr-1"></GrAddCircle>
                    <span className="text-sm">Add</span>
                    </button>
                      </div>
                      </th>
                      </tr>
                    </thead>
                         <tbody >
                              {(props.skillType || []).map((stype : any, index : any) => (
                                  <tr
                                    key={index}
                                      className={index % 2 === 0 ? "bg-neutral-100 dark:bg-neutral-700" : "bg-white dark:bg-neutral-600"}
                                    >
                                      <td className="whitespace-nowrap px-6 py-4">{stype.skty_name}</td>
                                      <td className="whitespace-nowrap px-6 py-4 text-right">
                                      <div className="flex justify-end">
                                  <div className='pt-2 shadow w-auto bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold px-3 rounded-md'>
                                    <div className="flex items-center">
                                      <BsPencil className="mr-1" />
                                      <span className="font-bold">
                                    <button 
                                      onClick={() => {
                                        setDataCat(stype );
                                        setIsEdit(true);
                                      }}
                                  >
                            Edit
                          </button> 
                        </span>
                      </div>
                    </div>
                  <span className='px-0.5'></span>


                            <div className='py-2 shadow w-auto bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold  px-3 rounded-md'>
                            <div className="flex items-center">
                          <TiDeleteOutline className="mr-1" />
                          <span className="font-bold">
                          <button 
                          onClick={()=>handleDelete(stype)}
                          >Delete</button> 
                            </span>
                            </div>
                            </div>
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
    {isAdd?(
      <AddSkillType show={isAdd} closeModal={()=>setIsAdd(false)} />
    ):('')}
    {isEdit?(
      <EditSkillType show={isEdit} closeModal={()=>setIsEdit(false)} data={dataCat}/>
    ):('')}
    </>
  )
}

export default SkillType
