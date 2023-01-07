/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr2 = [
  { id: 4, name: "elon", age: "25", profession: "ceo" },
  { id: 5, name: "vishen", age: "25", profession: "ceo" },
  { id: 6, name: "dhanu", age: "16", profession: "programmer" },
];

function PrintDeveloperswithMap() {
  //Write your code here
   arr.map((data) =>{
          if(data.profession=="developer"){
            console.log(data.name)
          }
   })
}

function PrintDeveloperbyForEach() {
  //Write your code here
   arr.forEach((data) => {
       if(data.profession == "developer"){
        console.log(data.name)
       }
   })
}

function addData() {
  //Write your code here
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
}

function removeAdmin() {
  //Write your code here 
  arr = arr.filter(function(ele){
     return ele.profession != "admin"
  })
  console.log(arr);
}

function concatenateArray() {
  //Write your code here
   arr = arr.concat(arr2);
  console.log(arr)
}
