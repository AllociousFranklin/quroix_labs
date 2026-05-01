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

  // Add sizes attribute to <Image > tags that don't have one
  content = content.replace(/<Image([^>]+)>/g, (match, props) => {
    if (!props.includes('sizes=')) {
      // Determine appropriate sizes based on usage
      let sizes = '"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"';
      if (props.includes('1920')) {
          sizes = '"(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"';
      } else if (props.includes('512') || props.includes('128')) {
          sizes = '"(max-width: 768px) 10vw, 5vw"';
      }
      return `<Image${props} sizes=${sizes}>`;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Added sizes to ' + file);
  }
});
