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
  'app/works/WorksPageSection.jsx',
  'app/Main/SectionProjects.jsx',
  'app/Main/SectionProjectsMobile.jsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Fix: / sizes="..." -> sizes="..." /
  content = content.replace(/\/ sizes=/g, 'sizes=');
  content = content.replace(/10vw, 5vw">/g, '10vw, 5vw" />');
  content = content.replace(/75vw, 50vw">/g, '75vw, 50vw" />');
  content = content.replace(/1200px\) 50vw, 33vw">/g, '1200px) 50vw, 33vw" />');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Fixed syntax in ' + file);
  }
});
