export class Calculator {
    public static calculate(a: number, b: number, o: string): number {
        switch (o) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b != 0)
                    return a / b;
                else
                    console.log("Can not divide by 0");
            default:
                console.log("Unsupported operation");
        }
    }
}