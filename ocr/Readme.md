# OCR

Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.

[API Reference](https://westcentralus.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/56f91f2e778daf14a499e1fc/?wt.mc_id=github-readme-sicotin)

## Parameters

1. detectOrientation (optional): true, false

1. language (optional): unk, zh-Hans, zh-Hant, zh, cs, da, nl, en, fi, fr, de, el, hu, it, ja, ko, nb, pl, pt, ru, es, sv, tr, ar, ro, sr-Cyrl, sr-Latn, sk

## Sample json request body

```json
{
  "image": "https://sicotinslides.blob.core.windows.net/slides/unfinished-fable.jpg",
  "language":"unk",
  "detectOrientation":"true"
}
```

<details>
<summary><strong>Output</strong></summary>
<p>

```json
{
  "language": "en",
  "textAngle": 0.0,
  "orientation": "Up",
  "regions": [{
    "boundingBox": "61,125,646,800",
    "lines": [{
      "boundingBox": "71,125,505,45",
      "words": [{
        "boundingBox": "71,149,48,21",
        "text": "The"
      }, {
        "boundingBox": "127,138,137,29",
        "text": "Unfinished"
      }, {
        "boundingBox": "273,133,71,25",
        "text": "Fable"
      }, {
        "boundingBox": "352,129,29,23",
        "text": "of"
      }, {
        "boundingBox": "385,128,46,22",
        "text": "the"
      }, {
        "boundingBox": "440,125,136,27",
        "text": "Sparrows"
      }]
    }, {
      "boundingBox": "98,170,607,47",
      "words": [{
        "boundingBox": "98,204,6,13",
        "text": "t"
      }, {
        "boundingBox": "109,204,29,12",
        "text": "was"
      }, {
        "boundingBox": "144,198,25,16",
        "text": "the"
      }, {
        "boundingBox": "175,192,111,20",
        "text": "nest-building"
      }, {
        "boundingBox": "292,192,61,14",
        "text": "season,"
      }, {
        "boundingBox": "360,185,29,17",
        "text": "but"
      }, {
        "boundingBox": "396,182,40,18",
        "text": "after"
      }, {
        "boundingBox": "442,180,40,22",
        "text": "days"
      }, {
        "boundingBox": "490,177,20,18",
        "text": "of"
      }, {
        "boundingBox": "514,177,41,22",
        "text": "long"
      }, {
        "boundingBox": "562,174,44,18",
        "text": "hard"
      }, {
        "boundingBox": "612,171,55,20",
        "text": "work,"
      }, {
        "boundingBox": "674,170,31,18",
        "text": "the"
      }]
    }
  }
}
```

</p>
</details>