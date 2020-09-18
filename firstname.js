console.log("employees",employees)
var getFirstName = function(employee)
    {return employee.firstName}
var FirstNames = employees.map(getFirstName)
console.log("FirstNames",FirstNames)
d3.select("body")
  .selectAll("h2")
  .data(FirstNames)
  .enter()
  .append("h2")
  .text(function(getFirstName)
        {return getFirstName})

