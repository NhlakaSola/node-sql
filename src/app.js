"use strict"

require('dotenv').config();
const Pool = require("pg").Pool;
const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	password: process.env.DB_PASSWORD,
	port:process.env.DB_PORT,
	database: process.env.DB_DATABASE
});

const addNewVisitor  = async(vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments) =>{
	return new Promise(async(resolve, reject)=>{
	  await pool.query(`INSERT INTO VISITORS( vName, vAge, dateOfVisit, timeOfVisit, assistantName, comments) VALUES($1,$2,$3,$4,$5,$6) RETURNING *` , 
	  [vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments],
	  (err,results)=> {
		if (err) {
			reject(err);
		} 
		console.log(results.rows);
		resolve(results.rows);
		});
	})	  
}

const listAllVisitors = async() => {
	return new Promise(async(resolve,reject)=>{
	  await pool.query(
		'SELECT * FROM VISITORS',(err, results) => {
		if (err) {
			reject(err);
		}
		let array= [];
		for (let index = 0; index < results.rows.length; index++) {
			const element = results.rows[index].vid;
			const name = results.rows[index].vname;
			const person = [element,name]
			array.push(person)
			console.log(person)
		}
		 resolve(results.rows);
		 pool.end();
	   	}
	);
	})
};

const deleteVisitor = async (id) => {
	return new Promise(async(resolve,reject)=>{
		await pool.query(
			`DELETE FROM VISITORS WHERE vid = $1`,[id],(err, results) => {
			  if (err) {
				reject(err);
			  }
			  resolve(results.rows);
			}
		  );
	}
)};

const deleteVisitors = async () => {
	return new Promise(async(resolve,reject)=>{
		await pool.query(
			`DELETE FROM VISITORS `,(err, results) => {
			  if (err) {
				reject(err);
			  }
			  resolve(results);
			}
		  );
	}
)};

const viewVisitor = async (id) => {
	return new Promise(async(resolve,reject)=>{
		await pool.query(
			`SELECT * FROM VISITORS WHERE vid = $1`,[id],(err, results) => {
			  if (err) {
				reject(err);
			  }
			  console.log(results.rows)
			  resolve(results.rows);
			}
		  );
	}
)};

const updateVisitor = async (vid,vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments) => {
	return new Promise(async(resolve,reject)=>{
		await pool.query(
			`UPDATE VISITORS SET vName = $2, vAge = $3,dateOfVisit = $4,timeOfVisit=$5,assistantName = $6,comments =$7 WHERE vid = $1`,
			[vid,vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments],
			(err, results) => {
			  if (err) {
				reject(err);
			  }
			  resolve(results.rows);
			}
		  );
	}
)};

module.exports = {addNewVisitor,listAllVisitors,deleteVisitor,deleteVisitors,viewVisitor,updateVisitor}