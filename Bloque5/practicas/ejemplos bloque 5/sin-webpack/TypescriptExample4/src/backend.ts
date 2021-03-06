import { Promise } from "es6-promise";

/**
 * Usando promesas de ES2015 (ES6)
 */
export class Backend {
    static getSum(num1: number, num2: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num1 + num2);
            }, 3000);
        });
    }
}