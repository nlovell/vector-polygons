export interface IPolygon {
  sides: number;
  radius: number;
  rotation?: number;
  origin?: Point;
}

/**
 * Coordinate pair defining a single point on a 2D plane.
 *
 * @interface Point
 * @member x Single numerical coordinate
 * @member y Single numerical coordinate
 */
export interface Point {
  x: number;
  y: number;
}

/**
 * Array of coordinates used to define the vertex points of a polygon.
 */
export type Points = Point[];

/**
 * Generate coordinates for a regular polygon along the circumference of a circle.
 *
 * @param poly
 * @param precision optional digits of precision for output coordinates. Default 4
 * @returns array of coordinates
 *
 * Basic Usage Example:
 *
 * ```
 * polygonCoordinates({sides: 4, radius 100, rotation: -90, origin: {x:0, y:0}})
 * ```
 */
export function polygonCoordinates(poly: IPolygon, precision?: number) {
  const rotate: number = poly.rotation ? -poly.rotation : 0;
  const origin: Point = poly.origin ? poly.origin : { x: 0, y: 0 };
  const digitPrecision: number = precision ? precision : 4;

  const points: Points = [];

  for (let index = 0; index < poly.sides; index++) {
    const rad = toRadians((index * 360) / poly.sides + rotate);

    const x = rounded(poly.radius * Math.cos(rad) + origin.x, digitPrecision);
    const y = rounded(poly.radius * Math.sin(rad) + origin.y, digitPrecision);

    points.push({ x, y });
  }

  points.push(points[0]);
  return points;
}

/**
 * Converts input from degrees to radians
 *
 * @param input in degrees
 * @returns number in radians
 */
function toRadians(input: number) {
  return input * (Math.PI / 180);
}

/**
 * Rounds input number to a given degree of precision
 *
 * @param input
 * @param precision
 * @returns
 */
function rounded(input: number, precision: number) {
  return Number(input.toFixed(precision));
}
