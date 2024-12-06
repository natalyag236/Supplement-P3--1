const fs = require('fs');
const assert = require('assert');
const path = require('path');

function readFromFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

describe('readFromFile', function() {
    const testFilePath = path.join(__dirname, 'testFile.txt');
    const testContent = 'Kendrick Lamar';

    // Setup: Create the test file before running the test
    before(function() {
        fs.writeFileSync(testFilePath, testContent, 'utf8');
    });

    // Test if the file can be read correctly
    it('should return the correct data from the file', function() {
        const data = readFromFile(testFilePath);
        assert.strictEqual(data, testContent, 'The content of the file should match the expected data');
    });

    // Cleanup: Remove the test file after the test
    after(function() {
        fs.unlinkSync(testFilePath);
    });
});
