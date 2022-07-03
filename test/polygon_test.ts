// @ts-ignore - deno needs it, apparently
// @ts-ignore - deno needs it, apparently
import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";
import { IPolygon, Point, Points, Polygon } from "../src/polygon.ts";

const origin0: Point = { x: 0, y: 0 };

/**
 * Testing Position of origin vertex under rotational conditions
 */

/**
 * When not rotated, the Origin Vertex should be at the rightmost position on the circumference
 * The Nth Vertex should overlap with the Origin Vertex
 */
Deno.test("Test Vertex 0 is in expected location", () => {
  const square100: IPolygon = {
    sides: 4,
    radius: 100,
    origin: origin0,
  };

  const points_square100: Points = Polygon(square100);

  const expectedPoint: Point = {
    x: square100.radius + origin0.x,
    y: origin0.y,
  };

  assertEquals(points_square100[0], expectedPoint);
  assertEquals(points_square100[points_square100.length - 1], expectedPoint);
});

/**
 * When rotated 90 degrees anticlockwise, the Origin Vertex should be at the uppermost position on the circumference
 * The Nth Vertex should overlap with the Origin Vertex
 */
Deno.test(
  "Test Vertex 0 is in expected location when rotated 90 degrees anticlockwise",
  () => {
    const square100r90: IPolygon = {
      sides: 8,
      radius: 100,
      origin: origin0,
      rotation: -90,
    };
    const points_square100r90: Points = Polygon(square100r90);

    const expectedPoint: Point = {
      x: origin0.x,
      y: square100r90.radius + origin0.y,
    };

    assertEquals(points_square100r90[0], expectedPoint);
    assertEquals(
      points_square100r90[points_square100r90.length - 1],
      expectedPoint
    );
  }
);

/**
 * When rotated 90 degrees clockwise, the Origin vertex should be at the lowermost position on the circumference
 * The Nth Vertex should overlap with the Origin Vertex
 */
Deno.test(
  "Test Vertex 0 and Vertex N are in expected location when rotated 90 degrees clockwise",
  () => {
    const square100r90: IPolygon = {
      sides: 8,
      radius: 100,
      origin: origin0,
      rotation: 90,
    };
    const points_square100r90: Points = Polygon(square100r90);

    const expectedPoint: Point = {
      x: origin0.x,
      y: -square100r90.radius + origin0.y,
    };

    assertEquals(points_square100r90[0], expectedPoint);
    assertEquals(
      points_square100r90[points_square100r90.length - 1],
      expectedPoint
    );
  }
);
