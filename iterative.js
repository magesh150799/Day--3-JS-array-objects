const StudentObject = { Name: "Raj", age: "26", dept: "ECE", degree: "B.tech"} 

//For Loop

const keys = Object.keys(StudentObject)
for (let i=0; i<keys.length; i++){
    console.log(keys[i], ":", StudentObject[keys[i]])
}


//For In 

for (let studentdetails in StudentObject){
    console.log(studentdetails, ":", StudentObject[studentdetails])
}



