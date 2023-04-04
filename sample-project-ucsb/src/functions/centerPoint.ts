import center from "@turf/center";
import {
  GeoprocessingHandler,
  Sketch,
  SketchCollection,
} from "@seasketch/geoprocessing";

export interface CenterPointResult {
  /* Determine the center point of a Sketch or Sketch collection */
  centerPoint: Sketch;
}

async function calculateCenterPoint(
  sketch: Sketch | SketchCollection
): Promise<CenterPointResult> {
  return {
    centerPoint: center(sketch),
  };
}

export default new GeoprocessingHandler(calculateCenterPoint, {
  title: "calculateCenterPoint",
  description: "Determines the center point of a sketch or sketch collection.",
  timeout: 2, // seconds
  memory: 256, // megabytes
  executionMode: "async",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});
