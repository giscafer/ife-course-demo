import React from 'react'
import Good from './Good';
import './GoodList.css';

export default ({goods=[]})=>{
    return (
        <div className='good-column'>
            {
                goods.map((good,index)=>{
                  return  <Good key={index}  good={good}/>
                })
            }
        </div>
    )
}