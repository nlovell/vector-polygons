export interface IPolygon {
  sides: number;
  radius: number;
  rotation?: number;
  origin?: Point;
}

export interface Point {
  x: number;
  y: number;
}

export type Points = Array<Point>;

/**
 * Generate coordinates for a regular polygon along the circumference of a circle
 * @param poly
 * @param precision optional digits of precision for output coordinates. Default 4
 * @returns array of coordinates
 */
export function polygonCoordinates(poly: IPolygon, precision?: number) {
  const rotate: number = poly.rotation ? -poly.rotation : 0;
  const origin: Point = poly.origin ? poly.origin : { x: 0, y: 0 };
  const digitPrecision: number = precision ? precision : 4;

  let points: Points = [];

  for (let index = 0; index < poly.sides; index++) {
    let rad = toRadians((index * 360) / poly.sides + rotate);

    let x = rounded(poly.radius * Math.cos(rad) + origin.x, digitPrecision);
    let y = rounded(poly.radius * Math.sin(rad) + origin.y, digitPrecision);

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

function rounded(input: number, precision: number) {
  return Number(input.toFixed(precision));
}
