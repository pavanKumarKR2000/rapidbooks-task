import Select from 'react-select';
import { useGlobalContext } from '../Context';

const options = [
    { value: 'Account 1', label: 'Account 1' },
    { value: 'Account 2', label: 'Account 2' },
    { value: 'Account 3', label: 'Account 3' }
];

const TableRow = ({ id, debtAmount, creditAmount,  }) => {
    
    const { deleteRow, updateDebtAmount, updateCreditAmount } = useGlobalContext();  
    
    const debt_amount_human_readable = (debtAmount)?.toLocaleString('en-IN');
    const credit_amount_human_readable = (creditAmount)?.toLocaleString('en-IN');

  return (
      <tr className='border border-gray-200 '>
          <td className='w-1/4 p-1 '>
              <Select options={options} style={{height:"2rem"}} />
          </td>
          <td className='w-1/4 p-1'>
              <input className='h-9 w-full outline-none text-center rounded-sm border border-gray-400' type="text" value={debt_amount_human_readable} onChange={(e)=>updateDebtAmount(e.target.value,id)} />
          </td>
          <td className='w-1/4 p-1'>
              <input className='h-9 w-full outline-none text-center rounded-sm border border-gray-400' type="text" value={credit_amount_human_readable} onChange={(e)=>updateCreditAmount(e.target.value,id)} />
          </td>
          <td className='w-1/4 '>
              <button className='bg-orange-700 hover:bg-orange-600 py-2 px-4 block mx-auto rounded-md text-sm' onClick={()=>deleteRow(id)}>Delete</button>
          </td>
      </tr>
  )
}

export default TableRow;