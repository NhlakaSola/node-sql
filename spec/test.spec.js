describe("node sql", ()=>{
  const {addNewVisitor,listAllVisitors,deleteVisitor,deleteVisitors,viewVisitor,updateVisitor} = require('../src/app')
  const visitor = {
		name: 'Nhlakanipho',
		age: 20,
		date: new Date('01/08/2000'),
		time: '08:00:00',
		assistant: 'Nothile',
		comments: 'The best'
  }

  const newName = "Thabo Mahlaba";
	const newAge = 55;
  
  it("save data to the visitor table", async ()=>{
      
		const newVisitor = await addNewVisitor(
			visitor.name, 
			visitor.age, 
			visitor.date, 
			visitor.time, 
			visitor.assistant, 
			visitor.comments
    );
    expect(newVisitor[0].vname).toEqual(visitor.name);
    expect(newVisitor[0].vage).toEqual(visitor.age);
	expect(newVisitor[0].dateofvisit).toEqual(visitor.date);
	expect(newVisitor[0].timeofvisit).toEqual(visitor.time);
	expect(newVisitor[0].assistantname).toEqual(visitor.assistant);
	expect(newVisitor[0].comments).toEqual(visitor.comments);
  })

  it('Should get all visitors', async() => {
		const allVisitors = await listAllVisitors();
		expect(allVisitors).not.toEqual([]);
  });
  
  fit('Should delete all visitors', async() => {
		const allVisitors = await deleteVisitors();
		expect(allVisitors.rowCount).toEqual(0);
	});

})