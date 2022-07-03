interface IPolygon {
  sides: number;
  radius: number;
}

type Points = Array<[number, number]>;

const testPoly: IPolygon = {
  sides: 4,
  radius: 100,
};

/**
 * Generate a regular polygon along the circumference of a circle
 * @param poly
 * @returns
 */
export function Polygon(poly: IPolygon) {
  let angles = [-45];

  for (let index = 0; index < poly.sides; index++) {
    angles[index] = index * ((Math.PI / 180) * (360 / poly.sides));
  }

  console.log(angles);

  let points: Points = [];

  for (let index = 0; index < angles.length; index++) {
    let x = +(poly.radius * Math.cos(angles[index])).toFixed(4);
    let y = +(poly.radius * Math.sin(angles[index])).toFixed(4);
    points.push([x, y]);
  }

  points.push(points[0]);

  console.log(desmosPastable(points));
  return points;
}

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

Polygon(testPoly);
