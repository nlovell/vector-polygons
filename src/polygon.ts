export interface IPolygon {
  sides: number;
  radius: number;
  rotation?: number;
}

export type Points = Array<[number, number]>;

/**
 * Generate coordinates for a regular polygon along the circumference of a circle
 * @param poly
 * @returns
 */
export function Polygon(poly: IPolygon) {
  let angles: number[] = [];
  let rotate: number = poly.rotation ? poly.rotation : 0;
  console.log(poly.rotation + " " + rotate)

  for (let index = 0; index < poly.sides; index++) {
    angles[index] = (index+rotate/2) * ((Math.PI / 180) * (360 / poly.sides));
  }

  let points: Points = [];

  for (let index = 0; index < angles.length; index++) {
    let x = +(poly.radius * Math.cos(angles[index])).toFixed(4);
    let y = +(poly.radius * Math.sin(angles[index])).toFixed(4);
    points.push([x, y]);
  }

  points.push(points[0]);
  return points;
}
