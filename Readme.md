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
  "image": "https://i.imgur.com/mWGI4Ms.jpg",
  "visualFeatures": "Categories, ImageType, Faces, Tags, Description, Color, Adult",
  "details": "Celebrities",
  "language": "en"
}
```
<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@charlesdeluvio?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Charles Deluvio 🇵🇭🇨🇦"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Charles Deluvio 🇵🇭🇨🇦</span></a>

<details>
<summary><strong>Output</strong></summary>
<p>
```
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