function solve(area, vol, input) {
  let data = JSON.parse(input);

  function calc(fig) {
    const areaObj = area.apply(fig);
    const volObj = vol.apply(fig);

    return {area: areaObj, volume: volObj};
  }

  return data.map(calc);
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}


console.log(solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`))
