class Experience {

  constructor(id, position, dates, companyName, companyUrl = '', description = '') {

    this.id = id;
    this.position = position;
    this.dates = dates;
    this.companyName = companyName;
    this.companyUrl = companyUrl;
    this.description = description;

  }

  displayShort() {

    return `
    <section>
    <p>
      <ul>
        <li><strong>Id:</strong> ${this.id}</li>
        <li><strong>Position:</strong> ${this.position}</li>
        <li><strong>Company name:</strong> ${this.companyName}</li>
      </ul>
    </p>
    </section>
    `;

  }

  displayLong() {

    return `
    <section>
    <h4>Position: ${this.position}</h4>
    <p><strong>Company:</strong> ${this.companyName}</p>
    <p><strong>Dates:</strong> ${this.dates}</p>
    <p><strong>Company website:</strong> <a href="${this.companyUrl}" target="_blank">${this.companyUrl}</a></p>
    <p>
      <ul>
        <li><strong>Description:</strong> ${this.description}</li>
      </ul>
    </p>
    </section>
    `;

  }

}

export default Experience;
