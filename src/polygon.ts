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
 * @returns
 */
export function Polygon(poly: IPolygon) {
  let rotate: number = poly.rotation ? poly.rotation : 0;
  let o: Point = poly.origin ? poly.origin : { x: 0, y: 0 };

  let angles: number[] = [];

  for (let index = 0; index < poly.sides; index++) {
    angles[index] = index * ((Math.PI / 180) * (360 / poly.sides));
  }

  let points: Points = [];

  for (let index = 0; index < angles.length; index++) {
    let x = Number((poly.radius * Math.cos(angles[index]) + o.x).toFixed(4));
    let y = Number((poly.radius * Math.sin(angles[index]) + o.y).toFixed(4));
    points.push({ x: x, y: y });
  }

  points.push(points[0]);
  return points;
}
