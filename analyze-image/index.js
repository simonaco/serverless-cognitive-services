const axios = require('axios');
const analyzeImage = async context => {
  try {
    const response = await axios({
      url: process.env.API_ENDPOINT,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': process.env.API_KEY
      },
      data: {
        url: context.req.body.image
      },
      params: {
        visualFeatures: context.req.body.visualFeatures,
        details: context.req.body.details,
        language: context.req.body.language
      }
    });
    return response;
  } catch (error) {
    context.log(`Error code: ${error.code} message: ${error.message}`);
    throw new Error(error.message);
  }
};
module.exports = async function(context) {
  const result = await analyzeImage(context);
  context.res = {
    body: result.data
  };
};
