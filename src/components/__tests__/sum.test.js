import { sum } from "../sum";


test ("Test to see addition of two numbers", ()=>{
      const result = sum(1, 2);
      
      //Assertion
      expect(result).toBe(3)
});