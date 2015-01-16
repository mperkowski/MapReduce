#Anagramy
```js
2015-01-16T13:45:11.909+0100 check 9 8200
2015-01-16T13:45:12.159+0100 imported 8199 objects
```
```js
db.anagram.find(
    { $where : "this.value.length > 7"}
        ).sort({ _id : -1}
          ).pretty()
          
{ "_id" : "rssttu", "value" : "struts trusts" }
{ "_id" : "orsttu", "value" : "trouts tutors" }
{ "_id" : "opttuu", "value" : "output putout" }
{ "_id" : "opsstu", "value" : "spouts stoups tossup" }
{ "_id" : "oprstu", "value" : "sprout stupor" }
{ "_id" : "oprsst", "value" : "sports strops" }
{ "_id" : "oorsst", "value" : "torsos roosts" }
{ "_id" : "noopss", "value" : "snoops spoons" }
{ "_id" : "nooprt", "value" : "pronto proton" }
{ "_id" : "loppsy", "value" : "sloppy polyps" }
{ "_id" : "loopss", "value" : "sloops spools" }
{ "_id" : "llorst", "value" : "stroll trolls" }
{ "_id" : "iqrstu", "value" : "squirt quirts" }
{ "_id" : "inqstu", "value" : "squint quints" }
{ "_id" : "inprst", "value" : "sprint prints" }
{ "_id" : "inopst", "value" : "pintos points piston pitons" }
{ "_id" : "inoprs", "value" : "prions prison" }
{ "_id" : "inoopt", "value" : "option potion" }
{ "_id" : "innosu", "value" : "unions unison" }
{ "_id" : "imnost", "value" : "inmost monist" }
```

# MapReduce

Skorzystalem z wlasnych danych, wygenerowanych json'ów:<br />
Wyszukiwanie najczesciej wystepujacych slow:
```js
db.result.find().sort({ value: -1 })

{ "_id" : "Aaron", "value" : 11 }
{ "_id" : "Janice", "value" : 11 }
{ "_id" : "Roger", "value" : 11 }
{ "_id" : "Julie", "value" : 10 }
{ "_id" : "Andrea", "value" : 9 }
{ "_id" : "Antonio", "value" : 9 }
{ "_id" : "Christopher", "value" : 9 }
{ "_id" : "Irene", "value" : 9 }
{ "_id" : "Jessica", "value" : 9 }
{ "_id" : "Joseph", "value" : 9 }
{ "_id" : "Stephen", "value" : 9 }
{ "_id" : "Amy", "value" : 8 }
{ "_id" : "Andrew", "value" : 8 }
{ "_id" : "Ashley", "value" : 8 }
{ "_id" : "Charles", "value" : 8 }
{ "_id" : "Daniel", "value" : 8 }
{ "_id" : "Douglas", "value" : 8 }
{ "_id" : "Evelyn", "value" : 8 }
{ "_id" : "Howard", "value" : 8 }
{ "_id" : "Jason", "value" : 8 }
Type "it" for more
```



