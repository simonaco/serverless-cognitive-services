const axios = require('axios');
const detectFace = async context => {
  try {
    const response = await axios({
      url: `${process.env.API_ENDPOINT}/detect`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': process.env.API_KEY
      },
      data: {
        url: context.req.body.image
      },
      params: {
        returnFaceId: context.req.body.returnFaceId,
        returnFaceLandmarks: context.req.body.returnFaceLandmarks,
        returnFaceAttributes: context.req.body.returnFaceAttributes
      }
    });
    return response;
  } catch (error) {
    context.log(`Error code: ${error.code} message: ${error.message}`);
    throw new Error(error.message);
  }
};
module.exports = async function(context) {
  const result = await detectFace(context);
  context.res = {
    body: result.data
  };
};
