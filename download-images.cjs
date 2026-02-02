const fs = require('fs');
const https = require('https');
const path = require('path');

const mapping = JSON.parse(fs.readFileSync('unsplash-mapping.json', 'utf8'));

// Function to download image
function downloadImage(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlink(filePath, () => {});
        return downloadImage(response.headers.location, filePath).then(resolve).catch(reject);
      }
      
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(filePath);
        });
      } else {
        file.close();
        fs.unlink(filePath, () => {});
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function processFiles() {
  const baseDir = path.join(__dirname, 'public');
  
  for (const item of mapping) {
    const localPath = item.localPath;
    const fullPath = path.join(baseDir, localPath);
    const dir = path.dirname(fullPath);
    
    // Ensure directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Check if file exists
    if (fs.existsSync(fullPath)) {
      console.log(`✓ Already exists: ${item.localPath}`);
      continue;
    }
    
    // Download if missing
    try {
      console.log(`⬇ Downloading: ${item.description}...`);
      await downloadImage(item.url, fullPath);
      console.log(`✓ Downloaded: ${item.localPath}`);
    } catch (error) {
      console.error(`✗ Failed to download ${item.url}:`, error.message);
    }
  }
}

processFiles().then(() => {
  console.log('\n✅ All files processed!');
}).catch(console.error);
