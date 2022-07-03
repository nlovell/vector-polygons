export interface IPolygon {
  sides: number;
  radius: number;
  rotation?: number;
  origin?: Point;
}

interface Point {
  x: number;
  y: number;
}

export type Points = Array<Point>;

/**
 * Generate coordinates for a regular polygon along the circumference of a circle
 * @param poly
 * @returns array of coordinates
 */
export function Polygon(poly: IPolygon) {
  let rotate: number = poly.rotation ? poly.rotation : 0;
  let origin: Point = poly.origin ? poly.origin : { x: 0, y: 0 };

  let angles: number[] = [];

  for (let index = 0; index < poly.sides; index++) {
    angles[index] = toRadians((index * 360) / poly.sides + rotate);
  }

  let points: Points = [];

  for (let index = 0; index < angles.length; index++) {
    let x = Number(
      (poly.radius * Math.cos(angles[index]) + origin.x).toFixed(4)
    );
    let y = Number(
      (poly.radius * Math.sin(angles[index]) + origin.y).toFixed(4)
    );
    points.push({ x: x, y: y });
  }

  points.push(points[0]);
  return points;
}

/**
 * Converts input from degrees to radians
 * @param input in degrees
 * @returns number in radians
 */
function toRadians(input: number) {
  return input * (Math.PI / 180);
}
