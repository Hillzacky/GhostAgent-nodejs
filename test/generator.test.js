const assert = require('assert');
const { generate } = require('../src/engine');

function test() {
    console.log("Running Tests...");

    // 1. Test apakah fungsi mengembalikan string
    const ua = generate('desktop');
    assert.strictEqual(typeof ua, 'string', "UA harus bertipe string");

    // 2. Test apakah format mengandung angka versi (major)
    // Mengecek apakah string mengandung angka minimal 1 digit
    assert.ok(/\d+/.test(ua), "UA harus mengandung angka versi");

    // 3. Test apakah fungsi menangani device tidak dikenal (fallback)
    const fallbackUA = generate('unknown-device');
    assert.ok(fallbackUA.length > 0, "Harus memberikan default jika device salah");

    console.log("Semua tes berhasil dilewati!");
}

test();

const assert = require('assert');
const generator = require('../src/index');

console.log("Running unit tests...");
const ua = generator({ device: 'desktop' });
assert.ok(ua.includes('Mozilla'), "Test gagal: Format UA tidak valid");
console.log("Test passed!");
