# Describe Image

This operation generates a description of an image in human readable language with complete sentences. The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image. Descriptions are ordered by their confidence score. All descriptions are in English.

[API Reference](https://westcentralus.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/56f91f2e778daf14a499e1fe/?wt.mc_id=github-readme-sicotin)

## Parameters

1. maxCandidates (optional): any number (i.e. 1)

1. language (optional): en, ja, pt, zh

## Sample json request body

```json
{
  "image": "https://sicotinslides.blob.core.windows.net/slides/charles-deluvio-540415-unsplash.jpg",
  "maxCandidates": "2",
  "language": "en"
}
```

<details>
<summary><strong>Output</strong></summary>
<p>

```json
{
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
      },
      {
        "text": "a dog wearing a red and black hat",
        "confidence": 0.94480562570993876
      }
    ]
  },
  "requestId": "50b3786a-1acf-4547-b938-cc4ee393b2f4",
  "metadata": {
    "width": 2683,
    "height": 3469,
    "format": "Jpeg"
  }
}
```

</p>
</details>
