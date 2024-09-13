
function writeEmailToFile(filename, email) {
  fs.writeFileSync(filename, email, 'utf8');
}
const emailFilename = 'email.txt'; 
const email = readEmailFromFile(emailFilename);


SELECT * FROM `dev3_customerRfi`.`User` where email = `${email}`; 

