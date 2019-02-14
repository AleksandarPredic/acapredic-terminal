import Crud from './crud';
import Project from './project';
import Experience from './experience';
import Education from './education';

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

    }

    getBasicInfo() {

        return `
        <h2>Basic info</h2>
        First Name: ${this.name}, <br />
        Last Name: ${this.lastName}, <br />
        Email: ${this.email}
        `;

    }

    getProjects() {

      let list = ['<h2>Projects</h2>'];

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

      let list = ['<h2>Experiences</h2>'];

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

      let list = ['<h2>Education</h2>'];

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

}

const info = new Info();

export default info;
