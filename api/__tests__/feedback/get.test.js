
const mongoose = require("mongoose");
const {getFeedback}  = require("../../feedback/controllers");
const { DB404Error } = require("../../utils/handleErrors");

const {request, response} = require("../../utils/testing");


/*describe("testing the mock response and request objects", ()=> {
  test("if the request object has a body", ()=> {
    expect(request.body).toBeDefined();
  })
  test("if the request object has a params.id", ()=> {
    expect(request.params.id).toBeDefined();
  })
  test("if the rsposne status can be set, returning the response object again", ()=> {
    const sameRespObj = response.status(400);
    
    expect(response.statusCode).toEqual(400);
    expect(sameRespObj).toEqual(response);
  })
  test("if the rsposne can hold data passed to it", ()=> {
    response.status(200).json({name: "ali"});

    expect(response.statusCode).toEqual(200);
    expect(response.data).toEqual(JSON.stringify({name: "ali"}));

  })
})*/

describe("feedback get requests are handled as expected", ()=> {
  /*it ("should get a feedback when passed its id", async ()=> {
    
  })*/
  it("should throw an error if fake id is passed", async ()=> {
    //await expect(getFeedback(request)).rejects.toMatch('error');
    let error;
    try {
      await getFeedback(request)
    } catch(err) {
      error = err; 
    } finally {
      expect(error.name).toBe("CastError");
    }
  })
  it("should throw a 404 DB error if a document was not found", async ()=> {
   /*  const req = JSON.parse(JSON.stringify(request));
    req.params.id = new mongoose.Types.ObjectId();
    let error;
    try {
      await getFeedback(req)
    } catch(err) {
      error = err; 
    } finally {
      expect(error).toBeInstanceOf(DB404Error);
    }
    //getFeedback(req).catch(err=> expect(err).toBeInstanceOf(DB404Error))
    //expect(async ()=> await getFeedback(req)).toThrow(DB404Error); */
  })
})

/*it("should throw a DB404Error if the feedback's owner id is not passed", async ()=> {

})

it("should be able to delete a feedback doc and remove its presense from the owner feedback history and its related product document (if still present)", ()=>{

})*/