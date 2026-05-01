const fs = require('fs');

const files = [
  'app/about/AboutPageSection.jsx',
  'app/contact/ContactPageSection.jsx',
  'app/loading.jsx',
  'app/Main/Main.jsx',
  'app/Main/SectionFlower.jsx',
  'app/Main/SectionTechstack.jsx',
  'app/Main/SectionTestimonials.jsx',
  'app/Navigation.jsx',
  'app/works/casestudy-bim/CaseStudyBIMContent.jsx',
  'app/works/casestudy-gym/CaseStudyGymContent.jsx',
  'app/works/casestudy-mep/CaseStudyMEPContent.jsx',
  'app/works/casestudy-smma/CaseStudySMMAContent.jsx',
  'app/works/WorksPageSection.jsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Add import if missing - robust prepend
  if (!content.includes('import Image from "next/image"') && !content.includes("import Image from 'next/image'")) {
    // Some files start with "use client"; which must be the very first line
    if (content.startsWith('"use client"') || content.startsWith("'use client'")) {
      content = content.replace(/^(["']use client["'];?\s*)/, '$1\nimport Image from "next/image";\n');
    } else {
      content = 'import Image from "next/image";\n' + content;
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Fixed imports in ' + file);
  }
});
