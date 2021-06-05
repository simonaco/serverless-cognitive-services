# Collection of Azure Functions wrappers for Azure Cognitive Services API

## Computer Vision API

The [Computer Vision API](https://docs.microsoft.com/azure/cognitive-services/computer-vision/?WT.mc_id=startup-0000-sicotin) provides state-of-the-art algorithms to process images and return information. For example, it can be used to determine if an image contains mature content, or it can be used to find all the faces in an image. It also has other features like estimating dominant and accent colors, categorizing the content of images, and describing an image with complete English sentences. Additionally, it can also intelligently generate images thumbnails for displaying large images effectively.

To run functions in this project you need a Computer Vision instance.

You can create one either using the [Azure Portal](https://aka.ms/portal-github) or using the [Azure CLI](https://docs.microsoft.com/cli/azure/cognitiveservices?view=azure-cli-latest&WT.mc_id=startup-0000-sicotin).

```
az cognitiveservices account create -n serverless-cvs -g serverlesscognitiveservices --kind "ComputerVision" --sku F0 -l WestUS2 --yes
```

Rename local.settings.sample.json to local.settings.json and replace API_URL and API_KEY with your settings.

You can retrieve the API_KEY value either from the [Azure Portal](https://aka.ms/portal-github), on the Keys tab or using the [Azure CLI](https://docs.microsoft.com/cli/azure/cognitiveservices?view=azure-cli-latest&WT.mc_id=startup-0000-sicotin):

```
az cognitiveservices account keys list -n serverless-cvs -g serverlesscognitiveservices
```

Same for the API_ENDPOINT, you can get it from the Overview page in the [Azure Portal](https://aka.ms/portal-github) or using the [Azure CLI](https://docs.microsoft.com/cli/azure/cognitiveservices?view=azure-cli-latest&WT.mc_id=startup-0000-sicotin):

```
az cognitiveservices account show -n serverless-cvs -g serverlesscognitiveservices
```

Install npm dependencies by running `npm i`. To run the project in VS Code click on the debug icon and then click start Debugging. This will start the Azure Functions runtime and generate URLs of this form [http://localhost:7071/api/analyze-image](http://localhost:7071/api/analyze-image)

## Test API

Deployed application at:

1. [Analyze Image](https://serverlesscv.azurewebsites.net/api/analyze-image)

1. [Describe Image](https://serverlesscv.azurewebsites.net/api/describe-image)

1. [Face Detect](https://serverlesscv.azurewebsites.net/api/face-detect)

1. [OCR](https://serverlesscv.azurewebsites.net/api/ocr)

1. [Tag Image](https://serverlesscv.azurewebsites.net/api/tag-image)

## More resources

1. API reference documentation [Computer Vision API](https://westus.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/56f91f2e778daf14a499e1fa/?WT.mc_id=startup-0000-sicotin)

1. Azure CLI commands for [Azure Cognitive Services](https://docs.microsoft.com/cli/azure/cognitiveservices?view=azure-cli-latest&WT.mc_id=startup-0000-sicotin)
