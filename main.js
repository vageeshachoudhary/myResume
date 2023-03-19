const data = {
  name: "Vageesha Choudhary",
  emailID: "vageesha.choudhary@gmail.com",
  phone: "7783192064",
  githubLink: "https://github.com/vageeshachoudhary",
  designation: "Software Developer",
  summary:
    "Frontend Developer with experience in developing responsive web applications using modern JavaScript frameworks such as VueJS. Skilled in RESTful API development, troubleshooting and performance optimization, and delivering exceptional solutions that align with client requirements.Familiar with industry-standard practices such as Agile and Scrum and experienced in working with cross-functional teams. Strong background in implementing front-end solutions that are scalable,maintainable, and user-friendly.",
  skills: {
    technicalSkillsLabel: "Technical Skills",
    technicalSkills: [
      "Javascript Libraries and Frameworks: VueJS, Redux",
      "Familiarity with the Vue.js ecosystem, including Vue CLI, Vuex, Vue Router",
      "Proficient with the VueJS framework and its core principles, such as components, reactivity, and the virtual DOM",
      "Web Technologies: HTML5, CSS3, Sass, AJAX, jQuery, Bootstrap",
      "Scripting Languages: Javascript, Typescript",
      "Web Architecture",
      "Responsive Web Design",
    ],
    methodologyLabel: "Methodology",
    methodology: ["Agile/Scrum Methodology", "Software Development Lifecycle"],

    toolsLabel: "Tools",
    tools: [
      "Version Control Systems: Git, GitHub, GitLab",
      "VueJS ecosystem: Vue CLI, Vuex, Vue Router",
    ],
  },
  education: {
    eduLabel: "Education",
    educationDetails: [
      {
      course: "Bachelor of Technology in Computer Science And Engineering",
      startYear: "2016",
      endYear: "2020",
      institution: "Amity University",
      location: "Noida, Uttar Pradesh",
      cgpa: "Passed with 7.32 CGPA",
    },
    {
      course: "Post-Baccalaureate Diploma in Emerging Technology",
      startYear: "2022",
      endYear: "2024",
      institution: "Douglas College",
      location: "New Westminster, BC",
      cgpa: "Currently Enrolled",
    },
  ],
},
  workExperience: {
    title: "Work Experience",
    workExperienceDetails: [
      {
        position: "Software Engineer",
        startYear: "2020",
        startMonth:"Dec",
        endYear: "2021",
        endMonth: "Dec",
        company: "To The New",
        location: "Noida, Uttar Pradesh",
        responsibilities: [
          "Drafted custom source code and unit tests to meet technical requirements using VueJS, HTML5, CSS (Sass), Typescript, Express.js, jQuery, JSON and Ajax.",
          "Implemented quality and on-time technical solutions to align with business requirements.",
          "Used Vue.js events distribution and parent chain for parent-child component communication.",
          "Developed responsive Web Application using Vue.js ecosystem, including Vue CLI, Vuex, Vue Router",
          "Usage of version control systems Git, GitHub and GitLab.",
          "Conducted full lifecycle software development from planning to deployment and maintenance.",
        ],
      },
      {
        position: "Software Engineer Intern",
        startYear: "2020",
        startMonth: "Feb",
        endYear: "2020",
        endMonth: "Dec",
        company: "To The New",
        location: "Noida, Uttar Pradesh",
        responsibilities: [
          "Generated reports, wrote documents and prepared presentations.",
          "Learned and applied effective SEO practices to enhance development work.",
          "Built UI components compliant with ADA standards (Accessible Design) and in line with current user expectations.",
          "Utilized unit testing and other methods to enhance quality.",
        ],
      },
    ],
  },
};

console.log(data);

//introduction starts here
document.querySelectorAll("#introduction h1")[0].innerText = data.name;
document.querySelectorAll("#introduction span")[0].innerText = data.designation;
document.querySelectorAll("#introduction p")[0].innerText = data.summary;
document.querySelectorAll(".contact-details li")[0].innerHTML = `
${document.querySelectorAll(".contact-details li")[0].innerHTML} ${ data.emailID}  `;
document.querySelectorAll(".contact-details li")[1].innerHTML = ` ${document.querySelectorAll(".contact-details li")[1].innerHTML} ${data.phone} `;
document.querySelectorAll(".contact-details li")[2].innerHTML = ` ${document.querySelectorAll(".contact-details li")[2].innerHTML} ${data.githubLink} `;

//skills section starts here
document.querySelectorAll("#skills h4")[0].innerHTML = ` ${document.querySelectorAll("#skills h4")[0].innerHTML} ${data.skills.technicalSkillsLabel} `;

for (let i = 0; i < data.skills.technicalSkills.length; i++) {
  document.querySelectorAll("#skills li")[i].innerText =
    data.skills.technicalSkills[i];
}

document.querySelectorAll("#skills #methodology-skill h4")[0].innerHTML = ` ${document.querySelectorAll("#skills #methodology-skill h4")[0].innerHTML} ${data.skills.methodologyLabel} `;

for (let i = 0; i < data.skills.methodology.length; i++) {
  document.querySelectorAll("#methodology-skill li")[i].innerText = data.skills.methodology[i];
}

document.querySelectorAll("#tool-skill h4")[0].innerHTML = ` ${document.querySelectorAll("#tool-skill h4")[0].innerHTML} ${data.skills.toolsLabel} `;

for (let i = 0; i < data.skills.tools.length; i++) {
  document.querySelectorAll("#tool-skill li")[i].innerText = data.skills.tools[i];
}

//education section starts here
document.querySelectorAll("#education h4")[0].innerHTML = ` ${document.querySelectorAll("#education h4")[0].innerHTML} ${data.education.eduLabel} `;

for (let i = 0; i < data.education.educationDetails.length; i++) {
  document.querySelectorAll(`#education section`)[i].querySelectorAll('.date span')[0].innerText = data.education.educationDetails[i].startYear;
  document.querySelectorAll(`#education section`)[i].querySelectorAll('.date span')[1].innerText = data.education.educationDetails[i].endYear;
  document.querySelectorAll(`#education section`)[i].querySelectorAll('h3')[0].innerText = data.education.educationDetails[i].course;
  document.querySelectorAll(`#education section`)[i].querySelectorAll('.place')[0].innerHTML = `${ document.querySelectorAll(`#education section`)[i].querySelectorAll('.place')[0].innerHTML} ${data.education.educationDetails[i].institution}`;
  document.querySelectorAll(`#education section`)[i].querySelectorAll('.location')[0].innerText = data.education.educationDetails[i].location;
  document.querySelectorAll(`#education section`)[i].querySelectorAll('.details li')[0].innerHTML = data.education.educationDetails[i].cgpa;

}

//work experience section starts here

document.querySelectorAll('#workExperience h4')[0].innerHTML = ` ${document.querySelectorAll('#workExperience h4')[0].innerHTML} ${data.workExperience.title} `;

for (let i = 0; i < data.workExperience.workExperienceDetails.length; i++) {
    document.querySelectorAll('#workExperience .date span')[i].innerHTML = `${data.workExperience.workExperienceDetails[i].startYear}<br>${data.workExperience.workExperienceDetails[i].startMonth}`;

    document.querySelectorAll('#workExperience .date span')[i].innerHTML = `${data.workExperience.workExperienceDetails[i].endYear}<br>${data.workExperience.workExperienceDetails[i].endMonth}`;

    document.querySelectorAll('#workExperience h3')[i].innerHTML = data.workExperience.workExperienceDetails[i].company;
    document.querySelectorAll('#workExperience .place')[i].innerHTML = ` 
    ${document.querySelectorAll('#workExperience .place')[i].innerHTML} 
    ${data.workExperience.workExperienceDetails[i].position}`;
    document.querySelectorAll('#workExperience .location')[i].innerText = data.workExperience.workExperienceDetails[i].location;
    for (let j = 0; j < data.workExperience.workExperienceDetails[i].responsibilities.length; j++) {
      document.querySelectorAll('#workExperience .details')[i].getElementsByTagName('li')[j].innerText = data.workExperience.workExperienceDetails[i].responsibilities[j];
   }
}

