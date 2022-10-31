// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    gnuplv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  if (license) {
    return badge[license]
  } else {
    return ''
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const link = {
    mit: '[MIT](https://choosealicense.com/licenses/mit/)',
    gnuplv3: '[GNUPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
    isc: '[ISC](https://choosealicense.com/licenses/isc/)',
    apache: '[APACHE](https://choosealicense.com/licenses/apache-2.0/)',
    mozilla: '[MOZILLA](https://choosealicense.com/licenses/mpl-2.0/)'
  }
  if (license) {
    return link[license]
  } else {
    return ''
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This is given the license of ${renderLicenseLink(license)}`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Content
  - [Project description](#Description)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Installation](#Installation)
  - [Questions](#Questions)
  - [License](#License)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Contribution
  ${data.contribution}

  ## Questions
  ${data.email}
  ${data.github}

  ## License
  ${renderLicenseSection(data.license)}

`;
}

module.exports = {generateMarkdown};
