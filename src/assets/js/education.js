class Education {

  constructor(id, name, institution, dates) {

    this.id = id;
    this.name = name;
    this.institution = institution;
    this.dates = dates;

  }

  display() {

    return `
    <section>
    <ul>
      <li><strong>Name:</strong> ${this.name}</li>
      <li><strong>Institution:</strong> ${this.institution}</li>
      <li><strong>Dates:</strong> ${this.dates}</li>
    </ul>
    </section>
    `;

  }

}

export default Education;
