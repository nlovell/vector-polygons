// @ts-ignore - deno needs it, apparently
import { Points, polygonCoordinates } from "../src/polygon.ts";

/**
 * Formats an array of points into data I can use for testing
 * @param points
 * @returns a string that I can paste into Desmos
 */
function desmosPastable(points: Points) {
  let strung = "";
  for (var point of points)
    strung = strung + "(" + point.x + "," + point.y + "),";

  return strung.slice(0, -1);
}

console.log(
  desmosPastable(
    polygonCoordinates({
      sides: 1,
      radius: 100,
    })
  )
);

console.log(
  desmosPastable(
    polygonCoordinates({
      sides: 2,
      radius: 100,
    })
  )
);

// for (let i = 1; i < 10; i++) {
//   console.log(
//     desmosPastable(
//       polygonCoordinates(
//         {
//           sides: 9,
//           radius: 110 - i * 10,
//           rotation: i * 45,
//         },
//         3
//       )
//     ) + "\n"
//   );
// }
