import React from 'react'
import { useSelector } from 'react-redux'

export const CatPage = () => {
  const cats=useSelector((state)=>state.cats)

  return (
    <div className='cat_page'>
    {cats.cats.length===0?<h1 className='choose_category_text'>Choose category for images</h1>:null}
    {cats.cats.map((cat,idx)=>{

      return(
        <div className='div_img'>
          <img src={cat.url} alt="" />
        </div>
      )
    })}
    </div>
  )
}

