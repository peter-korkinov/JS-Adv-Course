function rectangle(widthIn, heightIn, colorIn) {
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  return {
    width: Number(widthIn),
    height: Number(heightIn),
    color: colorIn.capitalize(),
    calcArea() {
      return this.width * this.height;
    }
  };
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
