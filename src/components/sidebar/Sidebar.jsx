import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { incrementAsync } from '../../features/categories/categoriesSlice';
import { incrementAsyncCat } from '../../features/cats/catsSlices';
import { NavLink } from 'react-router-dom';


export const Sidebar = () => {
  const dispatch = useDispatch()
  const categories=useSelector((state)=>state.categories)
  useEffect(()=> dispatch(incrementAsync()),[])
  return (
    <div className='sidebar'>
    <h1>Categories</h1>
    {categories.categories.map((category,idx)=>{
      return(
        <div key={idx}>
        <NavLink to={'cats'} className={({ isActive }) => (isActive ? 'category_btn sel' : 'category_btn')}  style={({ isActive }) => ({color:isActive ? 'sel' : ''})}

        onClick={()=>dispatch(incrementAsyncCat(idx+1))}
        >
            {category.name}  
        </NavLink>
        </div>
      )
    })}
    </div>
  )
}

