# Analyze Image

This operation extracts a rich set of visual features based on the image content.

[API Reference](https://westcentralus.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/56f91f2e778daf14a499e1fe/?wt.mc_id=github-readme-sicotin)

## Parameters

1. visualFeatures (optional): Categories, ImageType, Faces, Tags, Description, Color, Adult

1. details (optional): Celebrities, Landmarks

1. language (optional): en, ja, pt, zh

## Sample json request body

```json
{
  "image": "https://sicotinslides.blob.core.windows.net/slides/charles-deluvio-540415-unsplash.jpg",
  "visualFeatures": "Categories, ImageType, Faces, Tags, Description, Color, Adult",
  "details": "Celebrities",
  "language": "en"
}
```

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