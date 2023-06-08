import React from 'react'
import { BsPencil } from 'react-icons/bs'
import { GrAddCircle } from 'react-icons/gr'
import { TiDeleteOutline } from 'react-icons/ti'
import Swal from 'sweetalert2'

const RouteActions = (props : any) => {
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
        // dispatch(reqDelSkillType(data))
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
  console.log('props.routeActions', props.routeActions)
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
          <div className='border font-bold text-lg'>Route Actions</div>
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white-100 font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Route Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Module Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Display
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Order By
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
              <tbody>
                {props.routeActions.map((roac : any, index :any) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-neutral-100 dark:bg-neutral-700" : "bg-white dark:bg-neutral-600"}
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{roac.roac_name}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{roac.roac_module_name}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {roac.roac_display === 1 ? (
                      <span>
                        <label className="switch">
                          <input type="checkbox" checked />
                          <span className="slider"></span>
                        </label>
                      </span>
                    ) : (
                      <span>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider"></span>
                        </label>
                      </span>
                    )}
                  </td>

                    <td className="whitespace-nowrap px-6 py-4 font-medium">{roac.roac_orderby}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">
                    <div className="flex items-center justify-end">
                    <BsPencil className="mr-1" />
                          <span className="mr-4 font-bold">
                            <button onClick={() => {
                            // setDataCat(stype );
                            // setIsEdit(true);
                          }}>Edit</button> 
                            </span>
                          <TiDeleteOutline className="mr-1" />
                          <span className="font-bold">
                          <button onClick={()=>handleDelete('12')}
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
  )
}

export default RouteActions