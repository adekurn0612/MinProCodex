import React, { useEffect } from 'react'
import SkillTemplete from './skillTemplete'
import SkillType from './skillType'
import BreadcrumbsSlice from '../shared/breadcrumbs'
import { useDispatch, useSelector } from 'react-redux'
import { reqSkillType } from '@/redux/actions/actionReducer'

const index = () => {
    const { skillTemplete } = useSelector((state:any) => state.skillTempeleteReducer);
    const { skillType, message, refresh } = useSelector((state:any) => state.skillTypeReducer);
    console.log(skillType)
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(reqSkillType());
    }, [refresh]);
  return (
    <><BreadcrumbsSlice />
    <div>
        <div >
            <div className="rounded bg-blue h-40 shadow-sm py-2">
              <SkillType skillType={skillType}/>
            </div>
            <div className="rounded bg-blue h-40 shadow-sm py-2">
              <SkillTemplete />
            </div>
          </div>
    </div>
    </>
  )
}

export default index
