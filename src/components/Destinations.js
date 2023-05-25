import React from 'react'
import DestinationData from './DestinationData';
import "./Styles/DestinationStyles.css"

const Destinations = () => {
  return (
    <>
        <div className='destination'>
            <h1>Popular Destinations</h1>      
        
            <DestinationData 
                title="Taal Volcano, Batangas"
                para = "Taal Volcano is the second most active volcano found in the province of Batangas.  A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation.  It offers a very a spectacular view seen from Tagaytay Ridge.  Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines."
                img1="/assets/1.jpg"                
                img2="/assets/2.jpg"
                cName='first-description'
            />

            <DestinationData 
                title="Paris, France"
                para = "Paris, city and capital of France, situated in the north-central part of the country. People were living on the site of the present-day city, located along the Seine River some 233 miles (375 km) upstream from the river’s mouth on the English Channel (La Manche), by about 7600 BCE. The modern city has spread from the island (the Île de la Cité) and far beyond both banks of the Seine."
                img1="/assets/3.jpg"                
                img2="/assets/4.jpg"
                cName='first-description-reverse'
            />

        </div>

    </>

  )
}

export default Destinations
