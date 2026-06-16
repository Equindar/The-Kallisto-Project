export interface Test {
    name: string,
    age: number
}

export function test(args: Test) {
    return args;
};