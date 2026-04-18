import { useState } from "react";
import { CalculatorTemplate } from "../../components/templates";

export const Calculator: React.FC = () => {
    const [value, setValue] = useState('0');
    const [history, setHistory] = useState('0');
    const [historyVisible, setHistoryVisible] = useState(false);

    function handleNumberPress(num: number) {
        setValue(num.toString());
    }

    function handleOperationPress(operation: string) {
        setHistory(operation);
    }

    return (
        <CalculatorTemplate 
            currentValue={value} 
            historyValue={history} 
            showHistory={historyVisible}
            NumberOnHandle={handleNumberPress} 
            OperationOnHandle={handleOperationPress} />
    );
};