var chai = require("chai");
var add = require("./add.js");

describe("add",function(){
    it("should give back sum of a and b", function(){
       chai.expect(add.add(2, 4)).to.eql(6); 
    });
});