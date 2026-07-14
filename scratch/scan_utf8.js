const fs = require('fs');
const path = require('path');

const extensions = ['.html', '.css', '.js', '.json'];

let totalFFFD = 0;
let scannedFiles = 0;

function scanDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'scratch' && file !== '.agents') {
        scanDir(fullPath);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        scannedFiles++;
        checkFile(fullPath);
      }
    }
  }
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('\uFFFD') || content.includes('')) {
    console.log(`[CORRUPT] ${filePath} contains replacement character (\\uFFFD)`);
    totalFFFD++;
  }
}

console.log('UTF-8 scan started...');
scanDir('.');
console.log(`Scan complete. Scanned files: ${scannedFiles}, Corrupted files: ${totalFFFD}`);
