let t = 0;

function setup() {
  let cnv = createCanvas(700, 700);
  stroke(150, 20, 0, 150);
}

function organism(x, y) {
  let k = 9 * cos(x / 7 + sin(y / 11));
  let e = y / 5.5 * sin(y / 40) - 8;

  let d = pow(mag(k, e), 1.5) / 24 + 2.5;

  let angleTerm = atan2(k, e);
  let q = 55 - 8 * sin(angleTerm * e) + 5 * cos(angleTerm * 4);

  let wave = k * (2 + 9 / d * sin(sin(d * d * 0.4) - t * 3.3));

  let c = d / 2.5 + e / cos(e * 0.3) / 4 - t / 27;

  let xCoord = (q + wave) * sin(c) + 350;
  let yCoord = (q + d * 7) * cos(c) * (0.85 + 0.15 * sin(t + d)) + 350;

  point(xCoord, yCoord);
}

function draw() {
  background(0);
  t += PI / 18;

  for (let i = 0; i < 20000; i++) {
    let x = i % 113;
    let y = i / 47;
    organism(x, y);
  }
}
