const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const app = express();
const port = process.env.PORT || 3000;

// Set up view engine
app.set('view engine', 'ejs');

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static(__dirname + '/node_modules/bootstrap/dist'));

// Initialize AWS SDK with your AWS credentials
AWS.config.update({ region: 'your_region', accessKeyId: 'your_access_key', secretAccessKey: 'your_secret_access_key' });

// Create AWS DataPipeline client
const dataPipeline = new AWS.DataPipeline();

// Route for the home page
app.get('/', async (req, res) => {
  // Get the list of pipelines
  const pipelines = await dataPipeline.listPipelines().promise();
  res.render('index', { pipelines: pipelines.pipelineIdList });
});

// Route for viewing a specific pipeline
app.get('/pipeline/:id', async (req, res) => {
  const pipelineId = req.params.id;
  const pipelineDefinition = await dataPipeline.getPipelineDefinition({ pipelineId }).promise();
  res.render('pipeline', { pipelineId, pipelineDefinition });
});

// Route for editing a specific pipeline
app.post('/pipeline/:id', async (req, res) => {
  const pipelineId = req.params.id;
  const pipelineObjects = req.body.pipelineObjects;
  await dataPipeline.putPipelineDefinition({ pipelineId, pipelineObjects }).promise();
  res.redirect(`/pipeline/${pipelineId}`);
});

// Route for creating a new pipeline
app.post('/create', async (req, res) => {
  const pipelineName = req.body.pipelineName;
  const newPipeline = await dataPipeline.createPipeline({ name: pipelineName, uniqueId: Date.now().toString() }).promise();
  res.redirect(`/pipeline/${newPipeline.pipelineId}`);
});

// Route for deleting a pipeline
app.post('/delete', async (req, res) => {
  const pipelineId = req.body.pipelineId;
  await dataPipeline.deletePipeline({ pipelineId }).promise();
  res.redirect('/');
});

// Route for getting pipeline status
app.get('/status/:id', async (req, res) => {
  const pipelineId = req.params.id;
  const pipelineStatus = await dataPipeline.describePipelines({ pipelineIds: [pipelineId] }).promise();
  res.json(pipelineStatus);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
