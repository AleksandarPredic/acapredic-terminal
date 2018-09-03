class Project {

  constructor(id, name, url = '', shortDescription = '', description = '') {

    this.id = id;
    this.name = name;
    this.url = url;
    this.shortDescription = shortDescription;
    this.description = description;

  }

  displayShort() {

    return `
    <section>
    <p>
      <ul>
        <li><strong>Id:</strong> ${this.id}</li>
        <li><strong>Project name:</strong> ${this.name}</li>
        <li><strong>Short description:</strong> ${this.shortDescription}</li>
      </ul>
    </p>
    </section>
    `;

  }

  displayLong() {

    return `
    <section>
    <h3>Project name: ${this.name}</h3>
    <p>
      <ul>
        <li><strong>Url:</strong> <a href="${this.url}" target="_blank">${this.url}</a></li>
        <li><strong>Description:</strong> ${this.description}</li>
      </ul>
    </p>
    </section>
    `;

  }

}

export default Project;
