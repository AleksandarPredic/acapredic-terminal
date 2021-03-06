import Crud from './crud';
import Project from './project';
import Experience from './experience';
import Education from './education';
import Volunteer from './volunteer';

class Info {

    constructor() {

      this.data = new Crud('./data.json').getJson();

      // All data we'll ever need
      this.name = this.data.basic.name;
      this.lastName = this.data.basic.lastName;
      this.email = this.data.basic.email;
      this.projects = this.data.projects;
      this.experience = this.data.experience;
      this.education = this.data.education;
      this.skills = this.data.skills;
      this.volunteer = this.data.volunteer;

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
          '',
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
        project.dates,
        project.url,
        '',
        project.description,
        project.stack
      );

      return singleProject.displayLong();
    }

    getExperiences() {

      let list = ['<h3>Experience</h3>'];

      Object.values(this.experience).forEach( experience => {

        let singleExperience = new Experience(
          experience.id,
          experience.position,
          experience.dates,
          experience.companyName
        );

        list.push(singleExperience.displayShort());
      } );

      return list.join('');

    }

    getExperience(id) {

      let experience = this.experience[id];

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

  getVolunteer() {

    let list = ['<h3>Volunteer Experience</h3>'];

    Object.values(this.volunteer).forEach( volunteer => {

      let singleVolunteer = new Volunteer(
        volunteer.id,
        volunteer.name,
        volunteer.company,
        volunteer.description
      );

      list.push(singleVolunteer.display());
    } );

    return list.join('');

  }

}

const info = new Info();

export default info;
