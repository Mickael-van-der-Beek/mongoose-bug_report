This repository was created to let you reproduce a bug in Mongoose.

The bug itself happens when you set the "explain" flag to true when using four 
arguments in a find().

1) conditions	-	set it to anything you want

2) fields		-	set it to null

3) options		-	set it to { explain: true }

4) callback		-	your usual callback

The bug is that the callback will return the schema of the collection you 
queried merged with the explain object.

Tested in the following environnement :

Mongoose	->	v3.6.20 (latest version at the time)
MongoDB		-> 	v2.4.3
