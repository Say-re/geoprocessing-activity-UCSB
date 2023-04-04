/**
 * @jest-environment node
 * @group smoke
 */
 import Handler from "./centerPoint";
 import {
   getExamplePolygonSketchAll,
   writeResultOutput,
 } from "@seasketch/geoprocessing/scripts/testing";
 
 const calculateCenterPoint = Handler.func;
 
 describe("Basic smoke tests", () => {
   test("handler function is present", () => {
     expect(typeof calculateCenterPoint).toBe("function");
   });
   test("tests run against all examples", async () => {
     const examples = await getExamplePolygonSketchAll();
     for (const example of examples) {
       const result = await calculateCenterPoint(example);
       expect(result).toBeTruthy();
       console.log(result.centerPoint.geometry.coordinates)
       writeResultOutput(result, "calculateCenterPoint", example.properties.name);
     }
   });
 });
