import React, { useEffect } from 'react'
import AddressType from './addressType/addressType'
import Country from './country/country'
import Province from './provinces/province'
import City from './city/city'
import BreadcrumbsSlice from '../shared/breadcrumbs'
import { useDispatch, useSelector } from 'react-redux'
import { reqGetAdressType, reqGetCity, reqGetCountry, reqGetProv } from '@/redux/actions/actionReducer'

const index = () => {
  const { addressType , refresh} = useSelector((state : any) => state.addressTypeReducer);
  const { country } = useSelector((state :any) => state.countryReducer);
  const { prov } = useSelector((state : any) => state.provReducer);
  const { city } = useSelector((state :any) => state.cityReducer);
  const dispatch = useDispatch();
console.log('object' , prov.data )

  useEffect(() => {
    dispatch(reqGetAdressType());
    dispatch(reqGetCountry());
    dispatch(reqGetProv());
    dispatch(reqGetCity());
  }, [refresh]);

  return (
    <><BreadcrumbsSlice />
    <div>
            <div className="rounded bg-blue h-auto shadow-sm py-2">
              <AddressType addressType={addressType}/>
            </div>
            <div className="rounded bg-blue h-auto shadow-sm py-2">
              <Country country={country}/>
            </div>
            <div className="rounded bg-blue h-auto shadow-sm py-2">
              <Province prov={prov.data} country={country}/>
            </div>
            <div className="rounded bg-blue h-auto shadow-sm py-2">
              <City city={city.data} prov={prov.data}/>
            </div>
    </div>
    </>
  )
}

export default index
