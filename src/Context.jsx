import { createContext, useContext, useState ,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    let initialRowContent = [
        { id: uuidv4(), debtAmount:null, creditAmount: null },
        { id: uuidv4(), debtAmount:null, creditAmount:null},
        { id: uuidv4(), debtAmount:null, creditAmount:null}
    ]

    const [rowContent, setRowContent] = useState(initialRowContent);
    const [totalCreditAmount, setTotalCreditAmount] = useState(0);
    const [totalDebtAmount, setTotalDebtAmount] = useState(0);

    

    const updateDebtAmount = (amount, ID) => {
        amount = Number(amount.replaceAll(',', '').trim()) || null;
        const i = rowContent.findIndex((rc) => rc.id === ID);
        const {id,creditAmount} = rowContent.find((rc) => rc.id === ID);
        const arr = rowContent;
        arr[i] = { id: id, debtAmount:amount, creditAmount:creditAmount}
        setRowContent([...arr]);
    }

    const updateCreditAmount = (amount, ID) => {
        amount = Number(amount.replaceAll(',', '').trim()) || null;
        const i = rowContent.findIndex((rc) => rc.id === ID);
        const {id,debtAmount} = rowContent.find((rc) => rc.id === ID);
        const arr = rowContent;
        arr[i] = { id: id, debtAmount: debtAmount, creditAmount:amount }
        setRowContent([...arr]);
    }

    const deleteRow = (ID) => {
        const filteredRow = rowContent.filter((rc) => rc.id !== ID);
        setRowContent(filteredRow);
    }

    const createRow = () => {
        setRowContent([...rowContent, { id: uuidv4(), debtAmount: null, creditAmount: null }]);
    }

    useEffect(() => {
        let total_credit_amount = 0;
        
        total_credit_amount= rowContent.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.creditAmount;
        },0);

        setTotalCreditAmount(total_credit_amount);

        let total_debt_amount = 0;

        total_debt_amount=rowContent.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.debtAmount;
        },0);

        setTotalDebtAmount(total_debt_amount);

    }, [rowContent])
    
    
    return (
        <AppContext.Provider value={{ rowContent,updateDebtAmount,updateCreditAmount,createRow,deleteRow,totalCreditAmount,totalDebtAmount}}>{children}</AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}




export default AppContextProvider;