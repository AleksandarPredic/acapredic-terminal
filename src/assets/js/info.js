import Crud from './crud';
import Project from './project';

class Info {

    constructor() {

      this.data = new Crud('./data.json').getJson();

      // All data we'll ever need
      this.name = this.data.basic.name;
      this.lastName = this.data.basic.lastName;
      this.email = this.data.basic.email;
      this.projects = this.data.projects;

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
          '',
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
        project.description
      )

      return singleProject.displayLong();
    }

}

const info = new Info();

export default info;
