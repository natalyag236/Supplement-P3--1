const fs = require('fs');
const assert = require('assert');

const writeToFile = (filePath, content) => {
    fs.writeFileSync(filePath, content, 'utf8');
};

describe('writeFile', () => {
    const testFilePath = 'test-output.txt';
    const testContent = 'Yoo, YOO!';

    afterEach(() => {
        if (fs.existsSync(testFilePath)) {
            fs.unlinkSync(testFilePath);
        }
    });

    it('should write content to the specified file', () => {
        
        writeToFile(testFilePath, testContent);


        const writtenContent = fs.readFileSync(testFilePath, 'utf8');
        assert.strictEqual(writtenContent, testContent, 'The file content should match the expected content');
    });

    it('should overwrite the file if it already exists', () => {
        // Arrange
        writeToFile(testFilePath, 'Old content');

        // Act
        writeToFile(testFilePath, testContent);

        // Assert
        const writtenContent = fs.readFileSync(testFilePath, 'utf8');
        assert.strictEqual(writtenContent, testContent, 'The file content should overwrite with new content');
    });
});
