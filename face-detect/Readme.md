# Detect Face

Detect human faces in an image, return face rectangles, and optionally with faceIds, landmarks, and attributes.

[API Reference](https://westeurope.dev.cognitive.microsoft.com/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236/?wt.mc_id=github-readme-sicotin)

## Parameters

1. returnFaceId (optional): boolean

1. returnFaceLandmarks (optional): boolean

1. returnFaceAttributes (optional): age, gender, headPose, smile, facialHair, glasses, emotion, hair, makeup, occlusion, accessories, blur, exposure and noise

## Sample json request body

```json
{
  "image": "https://i.imgur.com/AMOTuIn.jpg",
  "returnFaceId": "true",
  "returnFaceLandmarks": "true",
  "returnFaceAttributes":"age,gender"
}
```

<details>
<summary><strong>Output</strong></summary>
<p>

```json
[
  {
    "faceId": "ab52821b-0903-4e56-9b1b-e61bd756e68d",
    "faceRectangle": {
      "top": 747,
      "left": 1542,
      "width": 379,
      "height": 379
    },
    "faceLandmarks": {
      "pupilLeft": {
        "x": 1641.5,
        "y": 855.6
      },
      "pupilRight": {
        "x": 1820.2,
        "y": 860.1
      },
      "noseTip": {
        "x": 1718.8,
        "y": 950.1
      },
      "mouthLeft": {
        "x": 1647,
        "y": 1013.1
      },
      "mouthRight": {
        "x": 1831.4,
        "y": 1020.8
      },
      "eyebrowLeftOuter": {
        "x": 1582,
        "y": 815.1
      },
      "eyebrowLeftInner": {
        "x": 1686.8,
        "y": 823.7
      },
      "eyeLeftOuter": {
        "x": 1616.6,
        "y": 855.2
      },
      "eyeLeftTop": {
        "x": 1642.2,
        "y": 845.7
      },
      "eyeLeftBottom": {
        "x": 1639.6,
        "y": 863.3
      },
      "eyeLeftInner": {
        "x": 1668.4,
        "y": 857.5
      },
      "eyebrowRightInner": {
        "x": 1760.7,
        "y": 819.9
      },
      "eyebrowRightOuter": {
        "x": 1904.2,
        "y": 827.2
      },
      "eyeRightInner": {
        "x": 1793.2,
        "y": 861.9
      },
      "eyeRightTop": {
        "x": 1818.4,
        "y": 852.8
      },
      "eyeRightBottom": {
        "x": 1817.7,
        "y": 869.5
      },
      "eyeRightOuter": {
        "x": 1845.9,
        "y": 864.7
      },
      "noseRootLeft": {
        "x": 1700,
        "y": 864.7
      },
      "noseRootRight": {
        "x": 1755.2,
        "y": 866.8
      },
      "noseLeftAlarTop": {
        "x": 1691,
        "y": 919.6
      },
      "noseRightAlarTop": {
        "x": 1761.6,
        "y": 921.5
      },
      "noseLeftAlarOutTip": {
        "x": 1672.7,
        "y": 948.3
      },
      "noseRightAlarOutTip": {
        "x": 1792.4,
        "y": 948.5
      },
      "upperLipTop": {
        "x": 1725.7,
        "y": 1010.6
      },
      "upperLipBottom": {
        "x": 1726.9,
        "y": 1024.1
      },
      "underLipTop": {
        "x": 1729.9,
        "y": 1041.2
      },
      "underLipBottom": {
        "x": 1730.8,
        "y": 1064.9
      }
    },
    "faceAttributes": {
      "gender": "female",
      "age": 28
    }
  }
]
```

</p>
</details>
