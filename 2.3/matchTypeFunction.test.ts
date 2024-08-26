//Write three functions checking for string, number, and boolean
//first step is the keword function followed by the name of the function and then parameters and arguments
function stringCheck(x){
    return typeof x == 'string';
};
function numberCheck(x){
    return typeof x == 'number';
};
function booleanCheck(x){
    return typeof x == 'boolean';
};

// now to write tests

describe('testing our functions', () => {
    test('testing string', () => {
        expect(stringCheck('Functions are so much fun')).toBeTruthy();
        expect(stringCheck(500)).toBeFalsy();
    });
    test('number check should work', () =>{
        expect(numberCheck(9000)).toBeTruthy();
        expect(numberCheck(true)).toBeFalsy();
    });
    test('boolean checker', () => {
        expect(booleanCheck(5 < 10)).toBeTruthy();
        expect(booleanCheck('false')).toBeFalsy();
    });
});