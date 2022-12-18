import React from 'react'
import { useGlobalContext } from '../Context';

const AddRow = () => {

    const { createRow,totalCreditAmount,totalDebtAmount } = useGlobalContext();

  return (
    <tr className='w-full'>
    <td className='w-1/4 p-1 flex items-center justify-between space-x-16'>
              <button className='bg-blue-500 hover:bg-blue-400 py-2 px-4 block mx-auto rounded-md text-sm' onClick={createRow}>Add</button>
              <p className='flex-grow text-md font-bold'>Total</p>
    </td>
    <td className='w-1/4 p-1 text-center'>
              <p>{new Intl.NumberFormat('en-IN').format(totalDebtAmount)}</p>
    </td>
    <td className='w-1/4 p-1 text-center'>
              <p>{new Intl.NumberFormat('en-IN').format(totalCreditAmount)}</p>
    </td>
    <td className='w-1/4 '>
      
    </td>
</tr>
  )
}

export default AddRow;