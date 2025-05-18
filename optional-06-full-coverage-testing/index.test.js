import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Penjumlahan Dua Bilangan Positif
test('Menjumlahkan Dua Bilangan Positif', () => {
  assert.strictEqual(sum(5, 10), 15);
  assert.strictEqual(sum(100, 200), 300);
});

// Jika Salah Satu Angka Negatif
test('Mengembalikan 0 Jika Salah Satu Angka Negatif', () => {
  assert.strictEqual(sum(-5, 10), 0);
  assert.strictEqual(sum(10, -5), 0);
  assert.strictEqual(sum(-5, -10), 0);
});

// Jika Salah Satu Atau Kedua Nilai Bukan Angka
test('Mengembalikan 0 Jika Input Bukan Angka', () => {
  assert.strictEqual(sum('5', 10), 0);
  assert.strictEqual(sum(5, '10'), 0);
  assert.strictEqual(sum('a', 'b'), 0);
  assert.strictEqual(sum(null, undefined), 0);
});

// Jika Angka 0
test('Menjumlahkan Dengan Angka 0', () => {
  assert.strictEqual(sum(0, 10), 10);
  assert.strictEqual(sum(10, 0), 10);
  assert.strictEqual(sum(0, 0), 0);
});
