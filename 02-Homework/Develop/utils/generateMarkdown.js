function generateMarkdown(data) {
  return `
# ${data.title}
[![GitHub license](https://img.shields.io/badge/Repository-GitHub-orange.svg)](https://github.com/${data.login}/)
![license](https://img.shields.io/badge/License-${data.license}-orange.svg)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md) 


## Description
------

${data.description}

## Table of Contents 
------

* [Installation](#installation)

* [Usage](#usage)

* [Author](#author)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

* [License](#license)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.dependencies}

\`\`\`

## Usage 
------

${data.usage}

## Author
------

**${data.name}**

## Contributing
------

${data.contribute}

## Tests
------
\`\`\`
${data.test}

\`\`\`

## Questions
------

<img src="${data.avatar_url}" alt="${data.userAlt}" width="75px" height="75px">

If you have any questions, please contact me, [${data.name}](${data.userEmail}) directly at ${data.userEmail}

## License
------

Copyright 2020 ${data.name}

This project is ${data.license} licensed.

`;
}

module.exports = generateMarkdown;
