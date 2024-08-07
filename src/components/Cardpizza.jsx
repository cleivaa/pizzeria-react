import React from 'react'

export const Cardpizza = ({title,ingredients,price,more,add, img}) => {//
    return (
    <>
    <div className="card mx-2">
        <img 
          src={img}
          className="card-img-top" 
          alt="pizza" />
          <div className="card-body">
            <h5 className="card-title fw-light mb-3">
              {title}
            </h5>
            <p className="card-text h6 fw-light">{ingredients}</p>
            <hr />
            <ul className="list-group list-group-flush text-right">
                <span className="h5 fw-bold green ms-3">{price}</span>
            </ul>
            <button className='btn btn-light'>{more} </button>
            
            <button className='btn btn-dark' id="btn-add"> {add} </button>
          </div>
        </div>
    </>
  )
}
