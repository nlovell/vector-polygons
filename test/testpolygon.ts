// @ts-ignore - demo needs it, apparently
import { IPolygon, Points, Polygon } from '../src/polygon.ts';


/**
 * Formats an array of points into data I can use for testing
 * @param points
 * @returns a string that I can paste into Desmos
 */
 function desmosPastable(points: Points) {
    let strung = "";
    for (var point of points)
      strung = strung + "(" + point[0] + "," + point[1] + "),";
  
    return strung.slice(0, -1);
  }

const testPoly: IPolygon = {
    sides: 4,
    radius: 100,
    rotation: 20,
  };


  for(let i = 2; i<10; i++){
    console.log(desmosPastable(Polygon({sides: i, radius: 100, rotation:45})) + "\n");
  }
