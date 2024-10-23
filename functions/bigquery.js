const { BigQuery } = require('@google-cloud/bigquery');

exports.handler = async function(event, context) {
  // Initialize BigQuery client
  const bigquery = new BigQuery();
const projectId = 'my-vue-app-435611';
const datasetId = 'Alifmart';
const tableId = 'Con';

  const query = `SELECT * FROM \`${projectId}.${datasetId}.${tableId}\``;;  // Update this with your BigQuery table
  
  try {
    const [rows] = await bigquery.query(query);
    return {
      statusCode: 200,
      body: JSON.stringify(rows)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
