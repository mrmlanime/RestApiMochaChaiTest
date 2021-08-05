var expect = require("chai").expect;
var request = require("request");

it("Main pge content",function(done){
  request("http://localhost:9090",function(error,response,body){
    console.log(body);
    expect(body).to.equal("welcome");
    done();
  });
});
