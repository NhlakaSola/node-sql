const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432
});

const addNewVisitor = (vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments) => {
  pool.query(
    'INSERT INTO VISITORS(vName, vAge,dateOfVisit,timeOfVisit,assistantName,comments) VALUES ($1,$2,$3,$4,$5,$6)',
    [vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results);
    }
  );
};

const listAllVisitors = async() => {
  pool.query(
    await 'SELECT * FROM VISITORS',(error, results) => {
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

const deleteVisitor = (id) => {
  pool.query(
    `DELETE FROM VISITORS WHERE vid = $1`,[id],(error, results) => {
      if (error) {
        throw error;
      }
      console.log('Row deleted');
    }
  );
};

const viewVisitor = (id) => {
  pool.query(
    `SELECT * FROM VISITORS WHERE vid = $1`,[id],(error, results) => {
      if (error) {
        throw error;
      }
      const data = results.rows;
      data.forEach(row => console.log(row));;
    }
  );
};



const deleteVisitors = () => {
  pool.query(
    'DELETE FROM VISITORS',(error, results) => {
      if (error) {
        throw error;
      }
      console.log('All rows deleted');
      pool.end();
    }
  );
};

const updateVisitor = (vid,vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments) => {
  pool.query(
    'UPDATE VISITORS SET vName = $1, vAge = $2,dateOfVisit = $3,timeOfVisit=$4,assistantName = $5,comments =$6 WHERE vid = $7',
    [vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments,vid],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log('updated');
      pool.end();
    }
  );
};


module.exports = {addNewVisitor,updateVisitor,deleteVisitor,deleteVisitors,listAllVisitors,viewVisitor}