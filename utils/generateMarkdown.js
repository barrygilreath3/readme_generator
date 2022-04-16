// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "None" ){
    return ``
  }
  else {
    return `License: ${data.license}`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  return `License: ${data.license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data)}
  ## Description
  ${data.motivation}\n
  ${data.usefulness}\n
  ${data.learn}\n
  ${data.uniqueness}\n
  ## Table of Contents
  ${data.contents}
  ## Installation Instructions
  ${data.installInstructions}
  ## Contribution Guidelines
  ${data.contributionGuidelines}
  ## Test Instructions
  ${data.testInstructions}
  ## Questions
  ### "How can I contact you?"
  Email: ${data.email}
  ### "What is your Github account?"
  http://www.github.com/${data.github}/
  ## URL's
  ### Repository
  ${data.repo}
  ### Deployed Website
  ${data.website}

`;
}

module.exports = generateMarkdown;
