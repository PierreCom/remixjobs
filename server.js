var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/remixjobs'); // connect to our database
var Jobs     = require('./app/models/jobs');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'Welcome to RemixJobs api!' });
});

// Routes with Jobs
// ----------------------------------------------------
router.route('/jobs')

  // create a new job (with Postman:  POST http://localhost:8080/jobs)
  // ---------------------------------------------------- OKKK
  .post(function(req, res) {

  var job = new Jobs();		// create a new instance of the Bear model
  job.Tags = req.body.Tags;
  job.Dates = req.body.Dates;
  job.Contract = req.body.Contract;
  job.Other_description = req.body.Other_description;
  job.Description = req.body.Description;
  job.Category = req.body.Category;
  job.Localization = req.body.Localization;
  job.Company = req.body.Company;
  job.Job_title = req.body.Job_title;

  job.save(function(err) {
    if (err)
      res.send(err);

			res.json({ message: 'New Job created!' });
		});


	})

	// get all jobs (with Postman:  GET http://localhost:8080/api/jobs)
  // ---------------------------------------------------- OKKK
  .get(function(req, res) {
		Jobs.find(function(err, job) {
			if (err)
				res.send(err);

			res.json(job);
		});
	});


// Return information of a job (with Postman:  GET http://localhost:8080/api/jobs/job_id)
// ---------------------------------------------------- OKKK
router.route('/jobs/:job_id')

	.get(function(req, res) {
		Jobs.findById(req.params.job_id, function(err, job) {
			if (err)
				res.send(err);
			res.json(job);
		});
	})

  // Update a job (with Postman:  PUT http://localhost:8080/api/jobs/job_id)
	// ----------------------------------------------------  OKKK
	.put(function(req, res) {
		Jobs.findById(req.params.job_id, function(err, job) {

			if (err)
				res.send(err);

        job.Tags = req.body.Tags;
        job.Dates = req.body.Dates;
        job.Contract = req.body.Contract;
        job.Other_description = req.body.Other_description;
        job.Description = req.body.Description;
        job.Category = req.body.Category;
        job.Localization = req.body.Localization;
        job.Company = req.body.Company;
        job.Job_title = req.body.Job_title;

			job.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Job updated!' });
			});

		});
	})

	// Delete a Job (with Postman:  DELETE http://localhost:8080/api/jobs/job_id)
  // ---------------------------------------------------- OKKK
	.delete(function(req, res) {
		Jobs.remove({
			_id: req.params.job_id
		}, function(err, job) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});




// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
