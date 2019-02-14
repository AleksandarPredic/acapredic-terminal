class Project {

  constructor(id, name, url = '', shortDescription = '', description = '', stack = '') {

    this.id = id;
    this.name = name;
    this.stack = stack;
    this.url = url;
    this.shortDescription = shortDescription;
    this.description = description;

  }

  displayShort() {

    return `
    <section>
    <ul>
      <li><strong>Id:</strong> ${this.id}</li>
      <li><strong>Project name:</strong> ${this.name}</li>
      <li><strong>Short description:</strong> ${this.shortDescription}</li>
      <li><strong>Url:</strong> <a href="${this.url}" target="_blank">${this.url}</a></li>
    </ul>
    </section>
    `;

  }

  displayLong() {

    return `
    <section>
    <h4>Project name: ${this.name}</h4>
    <p><strong>Stack:</strong> ${this.stack}</p>
    <ul>
      <li><strong>Url:</strong> <a href="${this.url}" target="_blank" rel="nofollow">${this.url}</a></li>
      <li><strong>Description:</strong> ${this.description}</li>
    </ul>
    </section>
    `;

  }

}

export default Project;
