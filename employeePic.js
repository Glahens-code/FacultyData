console.log("employees",employees)
var getImages = function(employee){
 return employee.photo
}
var images= employees.map(getImages)

d3.select("body")
  .selectAll("img")
  .data(employees)
  .enter()
  .append("img")
  .attr("src",getImages)