const expect = require( 'chai' ).expect
const query = require('../database.js')

describe( 'getAll()', ()=> {
  it( 'List every guest for hotel', ()=> {
    return query.getAll()
    .then( results => {
      console.log('these are the results shoppers', results)
      expect(results[0].guest_name).to.equal('John Doe')
      expect(results[1].guest_name).to.equal('Jon Dough')
    })
  })
})
describe( 'getAllRooms()', ()=> {
  it( 'List every guest for hotel', ()=> {
    return query.getAllRooms()
    .then( results => {
      console.log('these are the results shoppers', results)
      expect(results[0].roomnumber).to.equal('101')
      expect(results[1].roomnumber).to.equal('102')
    })
  })
})