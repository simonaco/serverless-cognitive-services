# Tag Image

This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag “cello” may be accompanied by the hint “musical instrument”. All tags are in English.

[API Reference](https://westcentralus.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/56f91f2e778daf14a499e1ff/?wt.mc_id=github-readme-sicotin)

## Sample json request body

```json
{
  "image": "https://sicotinslides.blob.core.windows.net/slides/charles-deluvio-540415-unsplash.jpg"
}
```

<details>
<summary><strong>Output</strong></summary>
<p>

```json
{
  "tags": [{
    "name": "black",
    "confidence": 0.987987756729126
  }, {
    "name": "red",
    "confidence": 0.97922062873840332
  }, {
    "name": "wearing",
    "confidence": 0.97129017114639282
  }, {
    "name": "dog",
    "confidence": 0.956075131893158
  }, {
    "name": "hat",
    "confidence": 0.91791915893554688
  }, {
    "name": "mammal",
    "confidence": 0.62262392044067383,
    "hint": "animal"
  }, {
    "name": "pug",
    "confidence": 0.62262392044067383
  }, {
    "name": "animal",
    "confidence": 0.13763867179024605
  }],
  "requestId": "207c56ae-aa4b-41ba-9d03-25aef2cc851f",
  "metadata": {
    "width": 2683,
    "height": 3469,
    "format": "Jpeg"
  }
}
```

</p>
</details>
