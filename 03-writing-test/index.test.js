import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("Menjumlahkan Dua Angka Positif", () => {
  assert.strictEqual(sum(20, 30), 50);
});

test("Menjumlahkan Angka Positif Dan Negatif", () => {
  assert.strictEqual(sum(100, -40), 60);
});

test("Menjumlahkan Dua Angka Negatif", () => {
  assert.strictEqual(sum(-15, -10), -25);
});

test("Menjumlahkan Dengan Nol", () => {
  assert.strictEqual(sum(77, 0), 77);
});

test("Menjumlahkan Dua Angka Desimal", () => {
  assert.strictEqual(sum(5.5, 2.5), 8);
});

test("Menjumlahkan Dua Angka Dengan Jumlah Besar", () => {
  assert.strictEqual(sum(50000, 75000), 125000);
});
