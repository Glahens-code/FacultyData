console.log("employees",employees)
var getLastName = function(employee){
    return employee.lastName
}

d3.select("body")
  .append("ol")
  .selectAll("li")
  .data(employees)
  .enter()
  .append("li")
  .text(getLastName)
  