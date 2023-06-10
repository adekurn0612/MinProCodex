import React, { useState } from 'react'
import { BsPencil } from 'react-icons/bs'
import { GrAddCircle } from 'react-icons/gr'
import { TiDeleteOutline } from 'react-icons/ti'
import AddAddressType from './addAddressType'
import EditAddressType from './EditAddressType'
import Swal from 'sweetalert2'
import { reqDelAdressType } from '@/redux/actions/actionReducer'
import { useDispatch } from 'react-redux'

const AddressType = (props : any) => {
  const[isAdd , setIsAdd] = useState(false);
  const[isEdit , setIsEdit] = useState(false);
  const[dataAddType , setDataAddType]=useState('');
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
        dispatch(reqDelAdressType(data))
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
  }
  return (
    <>
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
          <div className='border font-bold text-lg'>Address Type</div>
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white-100 font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Address Type
                  </th>
                  <th scope="col" className="px-6 py-4 text-right">
                <div className="flex justify-end">
                    <button className="flex items-center"
                    onClick={()=>setIsAdd(true)}>
                    <GrAddCircle className="mr-1"></GrAddCircle>
                    <span className="text-sm">Add</span>
                    </button>
                </div>
                </th>
                </tr>
              </thead>
              <tbody>
                {props.addressType.map((addressType : any, index : any) => ( 
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-neutral-100 dark:bg-neutral-700" : "bg-white dark:bg-neutral-600"}
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{addressType.adty_name}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">
                    <div className="flex items-center justify-end">
                    <BsPencil className="mr-1" />
                          <span className="mr-4 font-bold">
                            <button onClick={() => {
                            setDataAddType(addressType );
                            setIsEdit(true);
                          }}>Edit</button> 
                            </span>
                          <TiDeleteOutline className="mr-1" />
                          <span className="font-bold">
                          <button
                           onClick={()=>handleDelete(addressType.adty_id)}
                          >Delete</button> 
                            </span>
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
      <AddAddressType show={isAdd} closeModal={()=>setIsAdd(false)} />
    ):('')}
    {isEdit?(
      <EditAddressType show={isEdit} closeModal={()=>setIsEdit(false)} data={dataAddType} />
    ):('')}
    </>
  )
}

export default AddressType
