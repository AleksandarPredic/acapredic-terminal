class Project {

  constructor(id, name, dates, url = '', shortDescription = '', description = '', stack = '') {

    this.id = id;
    this.name = name;
    this.dates = dates;
    this.stack = stack;
    this.url = url;
    this.shortDescription = shortDescription;
    this.description = description;

  }

  displayShort() {

    let url = this.url ? `<li><strong>Url:</strong> <a href="${this.url}" target="_blank" rel="nofollow">${this.url}</a></li>` : '';

    return `
    <section>
    <ul>
      <li><strong>Id:</strong> ${this.id}</li>
      <li><strong>Project name:</strong> ${this.name}</li>
      <li><strong>Short description:</strong> ${this.shortDescription}</li>
      ${url}
    </ul>
    </section>
    `;

  }

  displayLong() {

    let url = this.url ? `<li><strong>Url:</strong> <a href="${this.url}" target="_blank" rel="nofollow">${this.url}</a></li>` : '';

    return `
    <section>
    <h4>Project name: ${this.name}</h4>
    <p><strong>Dates:</strong> ${this.dates}</p>
    <ul>
      ${url}
      <li><strong>Stack:</strong> ${this.stack}</li>
      <li><strong>Description:</strong> ${this.description}</li>
    </ul>
    </section>
    `;

  }

}

export default Project;
