// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  return `
  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Guidelines
  ${answers.guidelines}

  ## Contribution(s)
  ${answers.contribution}

  ## Test(s)
  ${answers.test}

  ## Question(s)
  ${answers.questions}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-yellow.svg)

  ## Github
  ${answers.github}

  ## Email
  ${answers.email}

`;
}

module.exports = { generateMarkdown}
