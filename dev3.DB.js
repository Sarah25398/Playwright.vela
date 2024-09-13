const mysql = require('mysql2');

const moment = require( 'moment-timezone') ;
const fs = require('fs');
function readEmailFromFile(filename) {
  return fs.readFileSync(filename, 'utf8');
}
const emailFilename = 'email.txt';

const email = readEmailFromFile(emailFilename); 
const currentTime = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss.SSSSSS'); 
const expiredTime = moment(currentTime).add(48, 'hours'); 

const formattedExpiredTime = expiredTime.format('YYYY-MM-DD HH:mm:ss.SSSSSS');

const pool = mysql.createPool({
  host: '103.191.146.112',      
  user: 'dev3_qc',
  port: 23307,           
  password: 'aly0OikpzCAey2YjtEvG',   
  database: 'dev3_customerRfi',    
  waitForConnections: true,   
  connectionLimit: 1000,       
  queueLimit: 0              
});

const promisePool = pool.promise();

async function updateTable() {
  try {
    // Acquire a connection from the pool
    const sql = `
        UPDATE dev3_customerRfi.User
        SET Status = ?, Vetify = ?, ActivedTime = ?, ExpiredTime = ?
        WHERE email = ?; 
      

      `

    const values = [1,1,currentTime,formattedExpiredTime,email]; 
    
    
    const [result] = await promisePool.query(sql, values);
    
    console.log('Update successful:', result);
  } catch (error) {
    console.error('Error updating table:', error);
  }
}

// Run the update
updateTable();
