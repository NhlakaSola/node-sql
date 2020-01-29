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
    'INSERT INTO VISITORS(visitorName, visitorAge,dateOfVisit,timeOfVisit,nameOfTheAssistant,comments) VALUES ($1,$2,$3,$4,$5,$6)', 
    [vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log('Saved');
    }
  );
};

const listAllVisitors = () => {
  pool.query(
    'SELECT * FROM VISITORS',(error, results) => {
      if (error) {
        throw error;
      }
      const data = results.rows;
      data.forEach(row => console.log(row.visitorid, row.visitorname));
    }
  );
};

const deleteVisitor = (id) => {
  pool.query(
    `DELETE FROM VISITORS WHERE visitorID = ${id}`,(error, results) => {
      if (error) {
        throw error;
      }
      console.log('Row deleted');
    }
  );
};

const viewVisitor = (id) => {
  pool.query(
    `SELECT * FROM VISITORS WHERE visitorID = ${id}`,(error, results) => {
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
    }
  );
};


