/**
 * Problem 1.
 * Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
 * Sam, Tech, Manager, 40000, true
 * Mary, Finance, Trainee, 18500, true
 * Bill, HR, Executive, 21200, false
 *
 * Print JSON(s) to console.
 **/

 let employee={
 "employees": [
   {
     "firstName": "Sam",
     "department": "Tech",
     "designation": "Manager",
     "salary": 40000,
     "raiseEligible": true
   },
   {
     "firstName": "Mary",
     "department": "Finance",
     "designation": "Trainee",
     "salary": 18500,
     "raiseEligible": true
   },
   {
     "firstName": "Bill",
     "department": "HR",
     "designation": "Executive",
     "salary": 21200,
     "raiseEligible": false
   }
 ]
}
 console.log(employee);



/**
 * Problem 2.
 *
 * Create JSON for the company with the following details (companyName, website, employees)
 * Tech Stars, www.techstars.site, array of Employees
 *
 * Print JSON to console.
 **/
 let company = {
   "companyName": "Tech Stars",
   "website": "www.techstars.site",
   "employees": [
     {
       "firstName": "Sam",
       "department": "Tech",
       "designation": "Manager",
       "salary": 40000,
       "raiseEligible": true
     },
     {
       "firstName": "Mary",
       "department": "Finance",
       "designation": "Trainee",
       "salary": 18500,
       "raiseEligible": true
     },
     {
       "firstName": "Bill",
       "department": "HR",
       "designation": "Executive",
       "salary": 21200,
       "raiseEligible": false
     }
   ]
 }
 console.log(company);




/**
 * Problem 3.
 *
 * A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
 * Anna, Tech, Executive, 25600, false
 *
 * Write function to add a new employee
 *
 * Print updated JSON to console.
 **/
 function addEmployee(company, efirstName, edepartment, edesignation, esalary, eraiseEligible) {
   let employee = {
     "firstName": efirstName,
     "department": edepartment,
     "designation": edesignation,
     "salary": esalary,
     "raiseEligible": eraiseEligible
   };
   return employee;
 }
let newEmployee = addEmployee(company, "Anna", "Tech", "Executive", 25600, false);
company['employees'].push(newEmployee);
console.log(company.employees);


/**
 * Problem 4.
 *
 * Given the JSON for the company, calculate the total salary for all company employees.
 *
 * Print total salary to console.
 **/
console.log(company.employees[0]["salary"]+company.employees[1]["salary"]+company.employees[2]["salary"]+company.employees[3]["salary"]);



/**
 * Problem 5.
 *
 * It's raise time. If an employee is raise eligible, increase their salary by 10%.
 * Given the JSON of the company and its employees, write a function to update the salary
 * for each employee who is raised eligible, then set their eligibility to false.
 *
 * Print names of employees who got a raise to console, list original and new salary.
 **/
function raise(number) {
  return number * 1.1;
}
for(var i = 0; i < company.employees.length; i++){
  if(company.employees[i].raiseEligible == true){
    company.employees[i].salary = raise(company.employees[i].salary);
    company.employees[i].raiseEligible = false;
    }
  }
console.log(company.employees);

/**
 * Problem 6.
 *
 * Some employees have decided to work from home. The following array indicates who is working from home.
 * Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true or false
 *
 * Working from home: ['Anna', 'Sam']
 *
 * Print updated JSON to console.
 **/
 const employeesWFH = ['Anna', 'Sam'];
 for (var i =0; i < company.employees.length; i++){
   if(employeesWFH.includes(company.employees[i].firstName)){
     company.employees[i].wfh = true;
   }
   else{
     company.employees[i].wfh= false;
   }
 }
 console.log(company.employees);
