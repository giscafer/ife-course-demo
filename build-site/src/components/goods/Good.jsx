/* eslint-disable */
import React from 'react'

export default ({good = {}}) => {
    return (
        <div className='good'>
            <a href={good.url} target='_blank'>
                <div className='icon'>
                    <img src={good.img} alt={good.name} className='good-img'/>
                </div>
                <div className='good-name' title={good.name}>
                    {good.name}<br />
                </div>
            </a>
        </div>
    )
}