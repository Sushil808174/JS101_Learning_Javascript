let database_userName="namekumar@345";
let database_password="abe@123";
let userName="namekumar@345";
let user_pass="abe@123";
if (database_userName==userName){
  if (database_password==user_pass){
    console.log("Login successful");
  }else{
    console.log("Wrong password")
  }
}else{
  console.log("Wrong userName");
}