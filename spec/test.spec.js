let visit = require('../src/app');

describe('Add function ', function(){

  let visitor = visit.addNewVisitor('sthe',22,'2-2-2020','12:00','Skhokho','You the best.');
  it('adds a new visitor', () => {
    expect(visitor).toBe('success')
  
  })    
});

describe('view function ', function(){

  let visitor = visit.viewVisitor(12);
  it('views a visitor', () => {
    expect(visitor).toEqual("{vid: 12,vname: 'Nothile',vage: 13,dateofvisit: '2019-12-01',timeofvisit: '12:02:00',assistantname: 'Mzito',comments: 'Good boy.'}")
  
  })    
});

describe('delete function ', function(){

  let visitor = visit.deleteVisitor(12);
  it('deletes a visitor', () => {
    expect(visitor).toEqual('Row deleted')
  
  })    
});

describe('update function ', function(){

  let visitor = visit.updateVisitor(18,'Nhlaka',16,'2018-12-01','12:00','Nhlaka','Very bad');
  it('updates a visitor', () => {
    expect(visitor).toEqual('updated')
  
  })    
});
