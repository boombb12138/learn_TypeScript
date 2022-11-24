// type Direction = "left" | "right" | "top" | "bottom"

enum Direction {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  TOP = "TOP",
  BOTTOM = "BOTTOM",
}

let d: number = 123;
let direction: Direction = Direction.BOTTOM;

function turnDirection(direction: Direction) {
  console.log(direction);
  switch (direction) {
    case Direction.RIGHT:
      console.log("转变方向为右");
      break;
    case Direction.TOP:
      console.log("转变方向为左");
      break;
    case Direction.BOTTOM:
      console.log("转变方向为下");
      break;
    case Direction.LEFT:
      console.log("转变方向为左");
      break;
    default:
      const foo: never = direction;
      break;
  }
}

turnDirection(Direction.LEFT);
turnDirection(Direction.RIGHT);
turnDirection(Direction.TOP);
turnDirection(Direction.BOTTOM);
