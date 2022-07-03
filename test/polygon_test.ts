// @ts-ignore - deno needs it, apparently
import {
  assertEquals,
  assertExists,
} from "https://deno.land/std@0.146.0/testing/asserts.ts";
// @ts-ignore - deno needs it, apparently
import { IPolygon, Point, Points, polygonCoordinates } from "../src/polygon.ts";

const origin0: Point = { x: 0, y: 0 };
const min = 1;
const max = 200;

/**
 * Ensure that the creation of a 0-sided polygon returns an Undefined object
 */
Deno.test("Tests return 'undefined' on Zero sided polygons", () => {
  const polygon0: IPolygon = {
    sides: 0,
    radius: 100,
    origin: origin0,
  };

  const points_polygon0: Points = polygonCoordinates(polygon0);

  assertExists(!points_polygon0[0]);
});

/**
 * Testing Position of origin vertex under rotational conditions
 */

/**
 * When not rotated, the Origin Vertex should be at the rightmost position on the circumference
 * The Nth Vertex should overlap with the Origin Vertex
 */
Deno.test("Test Vertex 0 is in expected location", () => {
  for (let i = min; i < max; i++) {
    const polygon100: IPolygon = {
      sides: i,
      radius: 100,
      origin: origin0,
    };

    const points_square100: Points = polygonCoordinates(polygon100);

    const expectedPoint: Point = {
      x: polygon100.radius + origin0.x,
      y: origin0.y,
    };

    assertEquals(points_square100[0], expectedPoint);
    assertEquals(points_square100[points_square100.length - 1], expectedPoint);
  }
});

/**
 * When rotated 90 degrees anticlockwise, the Origin Vertex should be at the uppermost position on the circumference
 * The Nth Vertex should overlap with the Origin Vertex
 */
Deno.test(
  "Test Vertex 0 is in expected location when rotated 90 degrees anticlockwise",
  () => {
    for (let i = min; i < max; i++) {
      const polygon100r90: IPolygon = {
        sides: i,
        radius: 100,
        origin: origin0,
        rotation: -90,
      };
      const points_square100r90: Points = polygonCoordinates(polygon100r90);

      const expectedPoint: Point = {
        x: origin0.x,
        y: polygon100r90.radius + origin0.y,
      };

      assertEquals(points_square100r90[0], expectedPoint);
      assertEquals(
        points_square100r90[points_square100r90.length - 1],
        expectedPoint
      );
    }
  }
);

/**
 * When rotated 90 degrees clockwise, the Origin vertex should be at the lowermost position on the circumference
 * The Nth Vertex should overlap with the Origin Vertex
 */
Deno.test(
  "Test Vertex 0 and Vertex N are in expected location when rotated 90 degrees clockwise",
  () => {
    for (let i = min; i < max; i++) {
      const polygon100r90: IPolygon = {
        sides: i,
        radius: 100,
        origin: origin0,
        rotation: 90,
      };
      const points_square100r90: Points = polygonCoordinates(polygon100r90);

      const expectedPoint: Point = {
        x: origin0.x,
        y: -polygon100r90.radius + origin0.y,
      };

      assertEquals(points_square100r90[0], expectedPoint);
      assertEquals(
        points_square100r90[points_square100r90.length - 1],
        expectedPoint
      );
    }
  }
);
