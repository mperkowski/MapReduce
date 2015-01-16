db.runCommand(
{
	mapreduce: "people",
	map:
		function(){ emit( this.first_name, 1)},

	reduce: 
		function(key,values) { return Array.sum(values);},
	out: "result"
})


