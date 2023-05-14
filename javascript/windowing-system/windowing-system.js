// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    newSize.width = Math.max(1, newSize.width);
    newSize.height = Math.max(1, newSize.height);

    if (this.position.x + newSize.width > this.screenSize.width) {
      newSize.width = this.screenSize.width - this.position.x;
    }

    if (this.position.y + newSize.height > this.screenSize.height) {
      newSize.height = this.screenSize.height - this.position.y;
    }

    this.size = newSize;
  }

  move(newPosition) {
    newPosition.x = Math.max(0, newPosition.x);
    newPosition.y = Math.max(0, newPosition.y);

    if (this.size.width + newPosition.x > this.screenSize.width) {
      newPosition.x = this.screenSize.width - this.size.width;
    }

    if (this.size.height + newPosition.y > this.screenSize.height) {
      newPosition.y = this.screenSize.height - this.size.height;
    }

    this.position = newPosition;
  }
}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);

  programWindow.resize(newSize);
  programWindow.move(newPosition);

  return programWindow;
}
