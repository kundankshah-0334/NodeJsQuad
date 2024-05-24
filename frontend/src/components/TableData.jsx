import React, { useEffect, useState } from 'react'
// import { getUser } from '../service/api'
import { getUser } from "../service/api";


const TableData = () => {

  const [user, setuser] = useState([]);

  useEffect(() => {
    // Fetch initial data
    getAllUsers();

    // Fetch data every minute
    const intervalId = setInterval(() => {
      getAllUsers();
    }, 10000); // 60000 milliseconds = 1 minute

    // Clean up function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);


  const getAllUsers = async () => {

    let response = await getUser();
    setuser(response.data);
    // console.log(response)
  }




  return (
    <div>
      <table class="table   table-borderless">
        <thead className=''>
          <tr className='tableBg'>
            <th className='tableBg' scope="col">#</th>
            <th className='tableBg' scope="col">Platform</th>
            <th className='tableBg' scope="col">Last Trade Price</th>
            <th className='tableBg' scope="col">Buy / Sell Price</th>
            <th className='tableBg' scope="col">Difference</th>
            <th className='tableBg' scope="col">Saving</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((user, index) => (
              <tr key={index} className='tabletr'>
                <th className='tableBgth' scope="row">{index + 1}</th>
                <td className='tableBgth' >{user?.name}</td>
                <td className='tableBgth' >₹ {user?.last}</td>
                <td className='tableBgth' >₹ {user?.buy} / ₹ {user?.sell}</td>
                <td className='tableBgth' >

                  {((user?.sell - user?.buy) / user?.buy * 100).toFixed(2)}%
                  {/*  difference in percentage */}
                </td>
                <td className='tableBgth' >₹ {user?.sell - user?.buy}</td>
                {/* savings  */}
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default TableData
