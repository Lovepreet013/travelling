import React from 'react'

const DestinationData = (props) => {
  return (
    <>
        <div className={props.cName}>
                <div className='description-text'>
                <h2>{props.title}</h2>
                <p>{props.para}</p>
            </div>
            <div className='image'>
                <img src={props.img1} alt="img" />
                <img src={props.img2} alt="img" />
            </div>
        </div>
    </>
  )
}

export default DestinationData;
