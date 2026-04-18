import { useState } from "react";
import { CalculatorTemplate } from "../../components/templates";

const allowedOperations = ['+', '-', '×', '÷'];
let currentValue: number = 0,
    previousValue: number = 0,
    currentOperation: string = '';

export const Calculator: React.FC = () => {
    const [value, setValue] = useState('0');
    const [history, setHistory] = useState('0');
    const [historyVisible, setHistoryVisible] = useState(false);
    
    function handleNumberPress(num: number) {
        setValue(prev => prev === '0' || currentOperation === '=' ? num.toString() : prev + num.toString());
        currentValue = parseFloat(value + num.toString());
        if (currentOperation === "=") {
            currentOperation = '';
            setHistory("0");
            setHistoryVisible(false);
            previousValue = 0;
        }
    }

    function handleOperationPress(operation: string) {
        if (operation === 'C') {
            setValue('0');
            setHistory('0');
            setHistoryVisible(false);
            currentValue = 0;
            previousValue = 0;
            currentOperation = '';
        } else if (operation === '±') {
            currentValue = -currentValue;
            setValue(currentValue.toString());
        } else if (operation === '%') {
            currentValue = currentValue / 100;
            setValue(currentValue.toString());
        } else if (operation === '=') {
            if (currentOperation && previousValue !== null) {
                let result: number;
                switch (currentOperation) {
                    case '+':
                        result = previousValue + currentValue;
                        break;
                    case '-':
                        result = previousValue - currentValue;
                        break;
                    case '×':
                        result = previousValue * currentValue;
                        break;
                    case '÷':
                        result = previousValue / currentValue;
                        break;
                    default:
                        return;
                }
                setValue(result.toString());
                setHistory(`${previousValue} ${currentOperation} ${currentValue} =`);
                setHistoryVisible(true);
                currentOperation = "=";
                currentValue = result;
            }
        } else if (allowedOperations.includes(operation)) {
            if (currentValue !== null) {
                previousValue = currentValue;
                currentValue = 0;
                setValue('0');
                setHistory(`${previousValue} ${operation}`);
                setHistoryVisible(true);
                currentOperation = operation;
            }
        } else if (operation === '.') {
            if (!value.includes('.')) {
                setValue(prev => prev + '.');
            }
        }
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