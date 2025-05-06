import React from 'react'

const Timsea = () => {
  return (
   <div className='yoho'>
    <h2>Our Services Timeline</h2>
     <div className='table'>
      <table border={1} width="60%">
        <thead className='t-header'>
            <tr>
            <th>Day</th>
            <th>Time</th>
            </tr>
           
        </thead>

        <tbody className='t-header'>
            <tr>
                <td>Monday</td>
                <td>8.00AM - 6.00PM</td>                
            </tr>

            <tr>
                <td>Tuesday</td>
                <td>8.00AM - 6.00PM</td>                
            </tr>

            <tr>
                <td>Wednesday</td>
                <td>8.00AM - 6.00PM</td>                
            </tr>

            <tr>
                <td>Thursday</td>
                <td>8.00AM - 6.00PM</td>                
            </tr>

            <tr>
                <td>Friday</td>
                <td>8.00AM - 6.00PM</td>                
            </tr>

            <tr>
                <td>Saturday</td>
                <td>9.00AM - 4.00PM</td>                
            </tr>
           
        </tbody>

      </table>
    </div>
   </div>
  )
}

export default Timsea
