import React, { Component } from 'react';



function Agency(props) {
    console.log('props',props);
    return(
    
        <div className="w-[300px] rounded-md border grid  place-items-center   ">
      <img
        src="agency.jpg"
        alt="mrx"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">realityeducation</h1>
        <p className="mt-3 text-sm text-gray-600">
        This is my software agency, we provides the highly transforming education through immersive learning experiences platforms websites and app.
        </p>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          View Projects
        </button>
      </div>
    </div>
    
    
    )
}


export default Agency;