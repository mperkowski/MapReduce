
var mapFunction =  function () { 
    var slowa = this.upload
	
    var sign = slowa.split("").sort().join("");
    emit(sign, slowa); 
}
var reduceFunction = function (key,value) {
    return (value.join(" "));  
}



db.runCommand(
	{
	mapReduce: "letters",
	map: mapFunction,
	reduce: reduceFunction,
	out: "anagram",
	verbose: true,
	}
)

db.anagram.find(
{ $where : "this.value.length > 7"}).sort({ _id : -1}).pretty()




