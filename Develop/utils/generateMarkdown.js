// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return `![GitHub license](https://img.shields.io/badge/license-APACHE2.0-blue.svg)`
  } 
  if (license === 'MIT') {
    return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`
  } 
  if (license === 'GPL 3.0') {
    return `![GitHub license](https://img.shields.io/badge/license-GPL3.0-blue.svg)`
  } 
  if (license === 'BSD 3') {
    return `![GitHub license](https://img.shields.io/badge/license-BSD3-blue.svg)`
  } 

  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project is licensed under ${license}`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
   ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}

module.exports = generateMarkdown;
