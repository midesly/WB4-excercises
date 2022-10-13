function printContact(address){
    console.log(address.name);
    console.log(address.address);
    console.log(address.city + ",", address.state + ",", address.zipcode);

}



let myInfo = {
    name: "Pursalane Faye", 
    address: "121 Main Street",
    city: "Atlanta",
    state: "GA",
    zipcode: "30083"
    /* other properties not shown */
   };
   printContact(myInfo)