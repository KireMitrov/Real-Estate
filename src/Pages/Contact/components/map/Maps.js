import React from 'react'
import "./map.css"

function Maps() {
    return (
        <div className='google-maps-container'>
            <iframe loading="lazy" src="https://maps.google.com/maps?q=1584%20Biscayne%20Blvd%2C%20Miami%2C%20FL%2033132&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near" title="1584 Biscayne Blvd, Miami, FL 33132" aria-label="1584 Biscayne Blvd, Miami, FL 33132"></iframe>
        </div>
    )
}

export default Maps