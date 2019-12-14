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
    <ul>
      <li><strong>Id:</strong> ${this.id}</li>
      <li><strong>Position:</strong> ${this.position}</li>
      <li><strong>Company name:</strong> ${this.companyName}</li>
      <li><strong>Dates:</strong> ${this.dates}</li>
    </ul>
    </section>
    `;

  }

  displayLong() {

    let list = this.description.map(description => `<li>${description}</li>`).join('');

    return `
    <section>
    <h4>Position: ${this.position}</h4>
    <p><strong>Company:</strong> ${this.companyName}</p>
    <p><strong>Dates:</strong> ${this.dates}</p>
    <p><strong>Company website:</strong> <a href="${this.companyUrl}" target="_blank" rel="nofollow">${this.companyUrl}</a></p>
    <ul>
      <li><strong>Description:</strong> <ul>${list}</ul></li>
    </ul>
    </section>
    `;

  }

}

export default Experience;
