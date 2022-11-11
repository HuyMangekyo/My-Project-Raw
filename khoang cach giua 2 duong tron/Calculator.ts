export class Calculator {
    private static readonly ADDITION  = '+';

    private static readonly SUBTRACTION  = '-';

    private static readonly MULTIPLICATION  = '*';

    private static readonly DIVISION  = '/';

    public static calculate(firstOperand : number, secondOperand : number, operator : string): number {
        switch (operator ) {
            case this.ADDITION :
                return firstOperand  + secondOperand ;
            case this.SUBTRACTION :
                return firstOperand  - secondOperand ;
            case this.MULTIPLICATION :
                return firstOperand  * secondOperand ;
            case this.DIVISION :
                if (secondOperand  != 0)
                    return firstOperand  / secondOperand ;
                else
                    console.log("Can not divide by 0");
            default:
                console.log("Unsupported operation");
        }
    }
}