Remixjobs


Group : Pierre Comalada - Bruno Moricet - Mathieu Journeau




    Unofficial Remixjobs API

Introduction

RemixJobs is the best French job board for the Web Industry.

Today, no (un)official API was developed to allow developers to add jobs in their web application
Workshop in 1 sentence

Build a remixjobs RESTful API
How to do that?

Transcript the API description in code ;)

The goal is write enough endpoints with the right filters and fields to build a specific job boards as:

    A job board for JavaScript intership
    A job board for remote jobs on Big Data
    A job board for Designers who want sunny weather... so in South Of France

Etc, etc, etc...
Stack

    Node.js
    Express 4
    MongoDB
    Postman

Api description

We could define a job by its

    Job title
    Company
    Localization
    Category
    Description
    Contract
    Date
    Tags

/jobs

    Return all jobs
    Create a new job
    Return information of a job
    Update a jobs

Non exhaustive parameters
parameters 	description
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

Jobs model

I think that the first step is to scrap datas from RemixJobs website and fill a mongoDB database.

Once database filled, your api will fetch/save/update data from this database in a real API consuming.
API rules (at least to follow)

    RESTful URLs and actions
    Plural noun
    Version via the url
    Query parameters for advanced filtering, sorting and searching
    Limit fields are returned from the APO
    JSON only
    snake_case for resources
    Use HTTP Status codes

Licence

Uncopyrighted