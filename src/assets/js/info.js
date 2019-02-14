import Crud from './crud';
import Project from './project';
import Experience from './experience';
import Education from './education';
import Volonteer from './volonteer';

class Info {

    constructor() {

      this.data = new Crud('./data.json').getJson();

      // All data we'll ever need
      this.name = this.data.basic.name;
      this.lastName = this.data.basic.lastName;
      this.email = this.data.basic.email;
      this.projects = this.data.projects;
      this.experiences = this.data.experiences;
      this.education = this.data.education;
      this.skills = this.data.skills;
      this.volonteer = this.data.volonteer;

    }

    getBasicInfo() {

      return `
      <section>
        <h3>Basic info</h3>
        <p><strong>First Name:</strong> ${this.name}</p>
        <p><strong>Last Name:</strong> ${this.lastName}</p>
        <p><strong>Email:</strong> ${this.email}</p>
      </section>
      `;

    }

    getProjects() {

      let list = ['<h3>Projects</h3>'];

      Object.values(this.projects).forEach( project => {

        let singleProject = new Project(
          project.id,
          project.name,
          project.url,
          project.shortDescription
        );

          list.push(singleProject.displayShort());
      } );

      return list.join('');

    }

    getProject(id) {

      let project = this.projects[id];

      if (typeof project === "undefined") {
        return `404. Project with requested id <strong>${id}</strong> doesn't exists`;
      }

      let singleProject = new Project(
        '',
        project.name,
        project.url,
        '',
        project.description,
        project.stack
      );

      return singleProject.displayLong();
    }

    getExperiences() {

      let list = ['<h3>Experiences</h3>'];

      Object.values(this.experiences).forEach( experience => {

        let singleExperience = new Experience(
          experience.id,
          experience.position,
          '',
          experience.companyName
        );

        list.push(singleExperience.displayShort());
      } );

      return list.join('');

    }

    getExperience(id) {

      let experience = this.experiences[id];

      if (typeof experience === "undefined") {
        return `404. Experience with requested id <strong>${id}</strong> doesn't exists`;
      }

      let singleExperience = new Experience(
        experience.id,
        experience.position,
        experience.dates,
        experience.companyName,
        experience.companyUrl,
        experience.description,
      );

      console.log(singleExperience);

      return singleExperience.displayLong();

    }

    getEducation() {

      let list = ['<h3>Education</h3>'];

      Object.values(this.education).forEach( education => {

        let singleEducation = new Education(
          education.id,
          education.name,
          education.institution,
          education.dates,
          education.description
        );

        list.push(singleEducation.display());
      } );

      return list.join('');

    }

  getSkills() {

    let list = [];

    Object.values(this.skills.list).forEach( skill => list.push(`<li>${skill}</li>`));

    return `<h3>Skills</h3><ul>${list.join('')}</ul>`

  }

  getVolonteer() {

    let list = ['<h3>Volunteer Experience</h3>'];

    Object.values(this.volonteer).forEach( volonteer => {

      let singleVolonteer = new Volonteer(
        volonteer.id,
        volonteer.name,
        volonteer.company,
        volonteer.description
      );

      list.push(singleVolonteer.display());
    } );

    return list.join('');

  }

}

const info = new Info();

export default info;
