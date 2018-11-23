# Collection of Azure Functions wrappers for Azure Cognitive Services API

## Computer Vision API

The Computer Vision API provides state-of-the-art algorithms to process images and return information. For example, it can be used to determine if an image contains mature content, or it can be used to find all the faces in an image. It also has other features like estimating dominant and accent colors, categorizing the content of images, and describing an image with complete English sentences. Additionally, it can also intelligently generate images thumbnails for displaying large images effectively.

### Analyze Image

This operation extracts a rich set of visual features based on the image content.

To run this function you need a Computer Vision instance.

You can create one either using the Azure portal or using the Azure CLI.

```
az cognitiveservices account create -n serverless-cvs -g serverlesscognitiveservices --kind "ComputerVision" --sku F0 -l WestUS2 --yes
```

Rename local.settings.sample.json to local.settings.json and replace API_URL and API_KEY with your settings. 

You can retrieve the API_KEY value either from the Azure Portal, on the Keys tab or using the Azure CLI:

```
az cognitiveservices account keys list -n serverless-cvs -g serverlesscognitiveservices
```

Same for the API_ENDPOINT, you can get it from the Overview page in the Azure Portal or using the Azure CLI:

```
az cognitiveservices account show -n serverless-cvs -g serverlesscognitiveservices
```

Go to *analyze-image* and run `npm i`. To run the project in VS Code click on the debug icon and then click start Debugging. This will start the Azure Functions runtime and generate a URL of this form [http://localhost:7071/api/analyze-image](http://localhost:7071/api/analyze-image)

This API accepts the following parameters:

1. visualFeatures (optional): Categories, ImageType, Faces, Tags, Description, Color, Adult

1. details (optional): Celebrities, Landmarks

1. language (optional): en, ja, pt, zh

Sample json request body:

```json
{
  "image": "https://sicotinslides.blob.core.windows.net/slides/charles-deluvio-540415-unsplash.jpg",
  "visualFeatures": "Categories, ImageType, Faces, Tags, Description, Color, Adult",
  "details": "Celebrities",
  "language": "en"
}
```
Photo by Charles Deluvio  on Unsplash

<details>
<summary><strong>Output</strong></summary>
<p>

```json
{
  "categories": [
    {
      "name": "animal_dog",
      "score": 0.984375
    },
    {
      "name": "others_",
      "score": 0.0078125
    }
  ],
  "adult": {
    "isAdultContent": false,
    "isRacyContent": false,
    "adultScore": 0.017013102769851685,
    "racyScore": 0.021180316805839539
  },
  "color": {
    "dominantColorForeground": "Black",
    "dominantColorBackground": "Red",
    "dominantColors": [
      "Red",
      "Black"
    ],
    "accentColor": "C4070B",
    "isBwImg": false
  },
  "imageType": {
    "clipArtType": 0,
    "lineDrawingType": 0
  },
  "tags": [
    {
      "name": "black",
      "confidence": 0.987987756729126
    },
    {
      "name": "red",
      "confidence": 0.97922062873840332
    },
    {
      "name": "wearing",
      "confidence": 0.97129017114639282
    },
    {
      "name": "dog",
      "confidence": 0.956075131893158
    },
    {
      "name": "hat",
      "confidence": 0.91791915893554688
    },
    {
      "name": "mammal",
      "confidence": 0.62262392044067383,
      "hint": "animal"
    },
    {
      "name": "pug",
      "confidence": 0.62262392044067383
    },
    {
      "name": "animal",
      "confidence": 0.13763867179024605
    }
  ],
  "description": {
    "tags": [
      "black",
      "red",
      "wearing",
      "dog",
      "hat",
      "indoor",
      "small",
      "sitting",
      "looking",
      "face",
      "head",
      "white",
      "camera",
      "neck",
      "brown",
      "close",
      "standing",
      "laying"
    ],
    "captions": [
      {
        "text": "a dog wearing a red hat and looking at the camera",
        "confidence": 0.95240041924344654
      }
    ]
  },
  "faces": [],
  "requestId": "801ae03a-f492-4d6e-b508-eda0c20d49f7",
  "metadata": {
    "width": 2683,
    "height": 3469,
    "format": "Jpeg"
  }
}
```
</p>
</details>

## More resources

1. API reference documentation [Computer Vision API](https://westus.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/56f91f2e778daf14a499e1fa/?wt.mc_id=github-readme-sicotin)

1. Azure CLI commands for [Azure Cognitive Services](https://docs.microsoft.com/en-us/cli/azure/cognitiveservices?view=azure-cli-latest&wt.mc_id=github-readme-sicotin)