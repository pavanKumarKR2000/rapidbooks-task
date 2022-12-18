import { useGlobalContext } from "../Context";
import AddRow from "./AddRow";
import TableRow from "./TableRow";

const Table = () => {

    const {rowContent} = useGlobalContext();

  return (
      <table className="w-full border border-gray-200 border-collapse  ">
          <tr className="text-lg bg-gray-300">
              <th className="p-2">Accounts</th>
              <th className="p-2">Debit Amount</th>
              <th className="p-2">Credit Amount</th>
              <th></th>
          </tr> 
          {
              rowContent.map((rc) => <TableRow {...rc} key={rc.id} />)    
          }
          <AddRow/>
      </table>
  )
}

export default Table;