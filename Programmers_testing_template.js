// Programmers testing template

/* ====== Import belof lines on playground ======

const testModule = require('./Programmers_testing_template');
const tester = testModule.fn_test;
const TestScenario = testModule.Class_TestScenario;

tester('한 자리 수', new TestScenario({
  'givenArr': [2],
  'whenFn': solution,
  'thenVal': 4,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))
=======*/
class TestScenario {
    constructor({givenArr, whenFn, thenVal, assertionFn}) {
        this.given = givenArr; 
        this.when = whenFn;
        this.then = thenVal;
        this.assertion = assertionFn;
    }
}

function test(testTopicStr, testScenarioObj) {
    const {when, given, then, assertion} = testScenarioObj;
    
    let actualResult = when(...given);
    
    const testResult = expect(then).toBe(actualResult, assertion);
    console.log(`${testTopicStr} : ${testResult}`);
}

function expect(expectedResult) {
    return {
        'expectedResult': expectedResult,
        toBe(actualResult, comparisonMethod) {
            if ( comparisonMethod(this.expectedResult, actualResult) ) return 'OK'
            
            return `FAIL (expectedResult is ${this.expectedResult}, actualResult is ${actualResult})`;;
        },
    }
}


module.exports = {
    Class_TestScenario: TestScenario,
    fn_test: test,
    fn_expect: expect,
};