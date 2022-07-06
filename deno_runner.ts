// @ts-ignore - deno needs it, apparently
import { Points, polygonCoordinates } from "./src/polygon.ts";

function desmosPastable(points: Points) {
  let strung = "";
  for (var point of points)
    strung = strung + "(" + point.x + "," + point.y + "),";

  return strung.slice(0, -1);
}

console.log(
  desmosPastable(
    polygonCoordinates({
      sides: Deno.args[0],
      radius: Deno.args[1],
      rotation: Deno.args[2],
    })
  )
);
