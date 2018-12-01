// #KEYWORDS :- [mocha function syntax.EXPECT package, DESCRIBE BLOCK FOR MOCHA TESTING, TEST CASE SEPARATION]
const utils=require('./utils')
// Check the documentation of expect assertion library at https://github.com/mjackson/expect
const expect=require('expect');

describe('UTILS',()=>{
	describe('add',()=> {
			it("Should add 2 no's",()=>{
			var res=utils.add(22,31);
			expect(res).toBe(53).toBeA('number')
			// if (res!=55) throw new Error(`ADD OF 22 AND 33 IS NOT 55. ITS ${res}`);
	})


	})

})




describe('SETNAME',()=> {
	describe('SHOULD EXIST',()=> {
			it('Should Exist',()=>{
			const names=utils.setName({},'aryan   sharma');
			expect(names).toExist();
	
			})
	})


	describe('SHOULD INCLUDE 1STNAME',()=> {
		it('Should include firstNAME',()=>{
		const names=utils.setName({},'aryan sharma');
		expect(names).toInclude({firstName:'aryan'});
	
		})

	})

	describe('SHOULD CONTAIN ONLY 1 SPACE',()=>{
		// if you check for lastName : 'sharma ' the test should fail and it fails.

		it('Should contain only one space',()=>{
			const obj={age : 39};
			const names=utils.setName(obj,'aryan sharma');
			expect(names).toInclude({lastName : ' sharma'});
			
		})

	})

})







