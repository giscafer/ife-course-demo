import React from 'react'
import Good from './Good';
import CircleLoading from '../common/CircleLoading';
import './GoodList.css';

export default ({goods = []}) => {
    return (
        <div className='good-column'>
            {goods.length === 0 && <CircleLoading />}
            {goods.length !== 0 &&
                goods.map((good, index) => {
                    return <Good key={index} good={good}/>
                })
            }

        </div>
    )
}