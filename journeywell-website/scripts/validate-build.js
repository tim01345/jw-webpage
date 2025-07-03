#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating JourneyWell website build...\n');

// Check if required files exist
const requiredFiles = [
  'package.json',
  'next.config.js',
  'tsconfig.json',
  'tailwind.config.js',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/not-found.tsx'
];

let hasErrors = false;

console.log('📁 Checking required files...');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    hasErrors = true;
  }
});

// Check package.json
console.log('\n📦 Checking package.json...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  if (packageJson.scripts && packageJson.scripts.build) {
    console.log('✅ Build script found');
  } else {
    console.log('❌ Build script missing');
    hasErrors = true;
  }
  
  if (packageJson.dependencies && packageJson.dependencies.next) {
    console.log(`✅ Next.js version: ${packageJson.dependencies.next}`);
  } else {
    console.log('❌ Next.js dependency missing');
    hasErrors = true;
  }
} catch (error) {
  console.log('❌ Error reading package.json:', error.message);
  hasErrors = true;
}

// Check app directory structure
console.log('\n🏗️  Checking app directory structure...');
const appDir = 'src/app';
if (fs.existsSync(appDir)) {
  const appFiles = fs.readdirSync(appDir);
  console.log(`✅ App directory exists with ${appFiles.length} files`);
  appFiles.forEach(file => {
    console.log(`   - ${file}`);
  });
} else {
  console.log('❌ App directory missing');
  hasErrors = true;
}

// Check for common issues
console.log('\n🔧 Checking for common issues...');

// Check if there's a conflicting pages directory
if (fs.existsSync('src/pages')) {
  console.log('⚠️  Warning: pages directory found - this might conflict with app directory');
}

// Check TypeScript config
try {
  const tsConfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
  if (tsConfig.compilerOptions && tsConfig.compilerOptions.baseUrl) {
    console.log('✅ TypeScript path mapping configured');
  }
} catch (error) {
  console.log('⚠️  Could not validate TypeScript config');
}

// Final result
console.log('\n🎯 Validation Results:');
if (hasErrors) {
  console.log('❌ Build validation failed - please fix the errors above');
  process.exit(1);
} else {
  console.log('✅ Build validation passed - ready for deployment!');
  console.log('\n📝 Next steps:');
  console.log('1. Run: npm run build');
  console.log('2. Test locally: npm run start');
  console.log('3. Deploy to Vercel: git push origin main');
} 