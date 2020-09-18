var getFirstName = function(employee)
    {
        return employee.firstName }
var getLastName = function(employee){
    return employee.lastName
}
// lastNames = employees.map(getLasname);
var getname = function(employee){
    return getFirstName(employee) + " " + getLastName(employee)
}
d3.select("body")
  .selectAll("h2")
  .data(employees)
  .enter()
  .append("h2")
  .text(getname)