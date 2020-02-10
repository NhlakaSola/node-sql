require('dotenv').config();
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port:process.env.DB_PORT,
  database: process.env.DB_DATABASE
});

const addNewVisitor = async (vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments) => {
  await pool.query(
    'INSERT INTO VISITORS(vName, vAge,dateOfVisit,timeOfVisit,assistantName,comments) VALUES ($1,$2,$3,$4,$5,$6)',
    [vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments],
    (error, results) => {
      if (error) {
        throw error;
      }
      return results;
    }
  );
};

const listAllVisitors = async() => {
  await pool.query(
     'SELECT * FROM VISITORS',(error, results) => {
      if (error) {
        throw error;
      }
      const data = results.rows;
      let array = [];
      data.forEach(row => array.push(row['vid'],row['vname']));
      console.log(array);
      pool.end();
    }
  );
};

const deleteVisitor = async (id) => {
  await pool.query(
    `DELETE FROM VISITORS WHERE vid = $1`,[id],(error, results) => {
      if (error) {
        throw error;
      }
      return results;
    }
  );
};

const viewVisitor = async (id) => {
  await pool.query(
    `SELECT * FROM VISITORS WHERE vid = $1`,[id],(error, results) => {
      if (error) {
        throw error;
      }
      const data = results.rows;
      return data;
    }
  );
};



const deleteVisitors = async () => {
  await pool.query(
    'DELETE FROM VISITORS',(error, results) => {
      if (error) {
        throw error;
      }
      return results;
      
    }
  );
};

const updateVisitor = async (vid,vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments) => {
  await pool.query(
    'UPDATE VISITORS SET vName = $1, vAge = $2,dateOfVisit = $3,timeOfVisit=$4,assistantName = $5,comments =$6 WHERE vid = $7',
    [vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments,vid],
    (error, results) => {
      if (error) {
        throw error;
      }
      return results;
      
    }
  );
};

module.exports = {addNewVisitor,updateVisitor,deleteVisitor,deleteVisitors,listAllVisitors,viewVisitor}