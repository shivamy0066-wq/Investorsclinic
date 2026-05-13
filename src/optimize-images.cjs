const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    } else {
      if (file.endsWith('.tsx')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const files = walkSync(__dirname);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Add loading="lazy" to img tags if they don't have it and don't have fetchPriority="high"
  // Using a replacer function
  content = content.replace(/<img\s([^>]+)>/g, (match, attrs) => {
    if (attrs.includes('loading=') || attrs.includes('fetchPriority="high"')) {
      return match;
    }
    return `<img loading="lazy" ${attrs}>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log('Image optimization complete.');
