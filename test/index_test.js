var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
     it('return the value of 5!', () => {
       //Setup
       const num = 5;
       const expected = 120;

       //Exercise
        const result = Calculate.factorial(num);

        //Verify
        assert.equal(result,expected);
  });

   it('code that will actually calculate the factorial of the input argument passed', () => {
       //Setup
       let num = 3;
       let expected = 6;

       //Exercise
        let result = Calculate.factorial(num);
        
        //Verify
        assert.equal(result,expected);
  });


  it('returns 1 when you pass in 0', ()=>{
    
    //Setup
    let num = 0;
    let expected = 1;

    //Exercise
    let result = Calculate.factorial(num);

    //Verify
    assert.equal(result,expected);
  });
  });
});