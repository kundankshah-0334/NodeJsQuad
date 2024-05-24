import React from 'react'

const Header = () => {
  return (
    <div>
    <h1 className='text-center mt-3 bestPrice'>Best Price to Trade</h1>
      
    <table class="table  table-borderless">
  <thead>
    <tr>
      <th className='text-center tableBgHeader' scope="col">6.28 %</th>
      <th className='text-center tableBgHeader' scope="col">0.28 %</th>
      <th className='center-amount tableBgHeader' scope="col">₹ 57,21,778</th>
      <th className='text-center tableBgHeader' scope="col">0.52 %</th>
      <th className='text-center tableBgHeader' scope="col">4.46 %</th>
    </tr>
  </thead>
  <thead>
    <tr>
      <th className='text-center tableBgHeader1' scope="col">1 Hour</th>
      <th className='text-center tableBgHeader1' scope="col">5 Minuts</th>
      <th scope="col" className='center-text tableBgHeader1'>Average BTC/INR net price including commission</th>
      <th className='text-center tableBgHeader1' scope="col">1 Day</th>
      <th className='text-center tableBgHeader1'  scope="col">7 Day</th>
    </tr>
  </thead>
 
</table>

    </div>
  )
}

export default Header
