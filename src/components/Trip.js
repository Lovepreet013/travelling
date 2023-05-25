import React from 'react'
import TripData from './TripData'
import "./Styles/TripStyles.css"

const Trip = () => {
  return (
    <>
      <div className='trip'>
        <h1>Recent Trips</h1>
        <p className='d'>You can discover unique destinations using Google maps</p>

        <div className='trip-card'>
            <TripData
                heading="Trip in Italy"
                text="Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s 'David' and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital."  
                img="/assets/5.jpg"
            />
             <TripData
                heading="Trip in Malaysia"
                text="Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s 'David' and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital."  
                img="/assets/8.jpg"
            />
             <TripData
                heading="Trip in Rome"
                text="Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s 'David' and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital."  
                img="/assets/6.jpg"
            />
        </div>
      </div>
    </>
  )
}

export default Trip
