import { CalculatorTemplate } from "../../components/templates";

export const Calculator: React.FC = () => {
    return (
        <CalculatorTemplate currentValue="0" historyValue="" NumberOnHandle={() => {}} OperationOnHandle={() => {}} />
    );
};