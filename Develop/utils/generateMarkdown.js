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
