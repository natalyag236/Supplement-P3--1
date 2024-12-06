const assert = require('assert');
const fs = require('fs');
const NumLinesFile = require('./NumLinesFile'); 

describe('NumLinesFile', function() {
  it('should return the correct number of lines in the file', function() {
    const testFilePath = './test.txt';
    const fileContent = 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5\n';  
    fs.writeFileSync(testFilePath, fileContent); 

    const lineCount = NumLinesFile(testFilePath); // Call the function to get line count
    assert.strictEqual(lineCount, 5); // Verify the line count is correct

    fs.unlinkSync(testFilePath); // Clean up the test file after the test
  });
});
