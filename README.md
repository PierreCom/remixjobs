# Remixjobs

J'ai réussi à remplir la base MongoDb en localhost.
lien pour créer une base de donnée avec mongodb après avoir installé MongoDb : http://theholmesoffice.com/how-to-create-a-mongodb-database/

N"oubliez pas de lancer mondogb.exe ( C:\Program Files\MongoDB\Server\3.0\bin ), puis de taper "mongo" dans votre ligne de commande !

pour L'API j'arrive presque à  faire /jobs
/jobs

    Return all jobs
    Create a new job
    Return information of a job
    Update a jobs
	
	
	il reste à faire : 
	
Non exhaustive parameters
parameters 	description:

q 	 the query
contract 	 filter by contract (cdi, cdd...)
category 	design, dev...
where 	 localization
limit 	 Jobs number

/jobs/latest

    Return all jobs of the current day

/companies

    Return all companies
    Return all jobs of a the given companies
	
	
tuto pour l'API : https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4


