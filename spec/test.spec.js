let visit = require('../src/app');

describe('Add function ', function(){

  let visitor = visit.addNewVisitor('sthe',22,'2-2-2020','12:00','Skhokho','You the best.');
  console.log(visitor)
  it('adds a new visitor', () => {
    expect(visitor).toBe(results)
  
  })    
});

describe('view function ', function(){

  let visitor = visit.viewVisitor(12);
  it('views a visitor', () => {
    expect(visitor).toEqual(results)
  
  })    
});

describe('delete function ', function(){

  let visitor = visit.deleteVisitor(12);
  it('deletes a visitor', () => {
    expect(visitor).toEqual(results)
  
  })    
});

describe('update function ', function(){

  let visitor = visit.updateVisitor(18,'Nhlaka',16,'2018-12-01','12:00','Nhlaka','Very bad');
  it('updates a visitor', () => {
    expect(visitor).toEqual(results)
  
  })    
});
