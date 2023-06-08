import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SkillTemplete from './skillTemplete/skillTemplete';
import SkillType from './skillType/skillType';
import BreadcrumbsSlice from '../shared/breadcrumbs';
import { reqSkillType } from '@/redux/actions/actionReducer';

const Index = () => {
  const { skillTemplete } = useSelector((state : any) => state.skillTempeleteReducer);
  const { skillType, message, refresh } = useSelector((state :any) => state.skillTypeReducer);
  const dispatch = useDispatch();
console.log(skillTemplete , skillType)


  useEffect(() => {
    dispatch(reqSkillType());
  }, [refresh]);

  return (
    <>
      <BreadcrumbsSlice />
      <div>
        <div>
          <div className="rounded bg-blue h-auto shadow-sm py-2">
            <SkillType skillType={skillType} />
          </div>
          <div className="rounded bg-blue h-auto shadow-sm py-2">
            <SkillTemplete skillTemplete={skillTemplete} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
