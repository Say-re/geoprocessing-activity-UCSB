/**
 * @jest-environment node
 * @group unit
 */
 import Handler from "./centerPoint";
 import {
   getExamplePolygonSketchAll,
   writeResultOutput,
 } from "@seasketch/geoprocessing/scripts/testing";
 
 const calculateCenterPoint = Handler.func;

 const samplePoints = {
  type: "FeatureCollection",
  features: [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50, 100
        ]
      },
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100, 50
        ]
      },
    }
  ],
  "properties": {
    "name": "randomSketchCollection"
  },
 }
 
 describe("Basic Unit Test", () => {
   test("tests run against all examples", async () => {
    const result = await calculateCenterPoint(samplePoints);
    expect(result.centerPoint.geometry.coordinates).toEqual([75, 75]);
    writeResultOutput(result, "calculateArea", samplePoints.properties.name);
   });
 });
