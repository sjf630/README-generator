const licensesObj = {
  'Apache License 2.0': 'Apache License 2.0',
  'The Unlicense': 'The Unlicense',
  'MIT': 'MIT',
  'IBM Public License Version 1.0': 'IBM Public License Version 1.0'
}

function renderLicenseBadge(license) {
  const licenseBadges = {
    'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'IBM Public License Version 1.0': '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  };

  return licenseBadges[license] || '';
}

function renderLicenseLink(license) {
  const licenseLinks = {
    'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'The Unlicense': 'http://unlicense.org/',
    'MIT': 'https://opensource.org/licenses/MIT',
    'IBM Public License Version 1.0': 'https://opensource.org/licenses/IPL-1.0'
  };

  return licenseLinks[license] || '';
}

function renderSection(title, data) {
  return data ? `### ${title}\n${data}` : '';
}

function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}\n
  ${renderLicenseLink(data.License)}\n

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  ${data.Usage ? '* [Usage](#usage)' : ''}
  ${data.License ? '* [License](#license)' : ''}
  ${data.Contributing ? '* [Contributing](#contributing)' : ''}
  ${data.Tests ? '* [Tests](#tests)' : ''}
  * [Questions](#questions)

  ${renderSection('Description', data.Description)}

  ${renderSection('Installation', data.Installation)}

  ${renderSection('Usage', data.Usage)}

  ${renderSection('License', licensesObj[data.License])}

  ${renderSection('Contributing', data.Contributing)}

  ${renderSection('Tests', data.Tests)}

  ### Questions
  * GitHub: http://github.com/${data.GitHub}
  ${data.Email ? `* Email: ${data.Email}` : ''}
  `;
}

module.exports = generateMarkdown;
