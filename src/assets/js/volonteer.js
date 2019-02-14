class Volonteer {

  constructor(id, name, company, description = '') {

    this.id = id;
    this.name = name;
    this.company = company;
    this.description = description;

  }

  display() {

    let list = [];

    for( let description of this.description ) {

      list.push(
        `<ul>
          <li><strong>Name:</strong>${description.name}</li>
          <li><strong>Dates:</strong>${description.dates}</li>
          <li><strong>Url:</strong>${description.url}</li>
          <li><strong>Description:</strong>${description.description}</li>
        </ul>`
      );

    }

    return `
    <section>
      <ul>
        <li><strong>Name:</strong> ${this.name}</li>
        <li><strong>Company:</strong> ${this.company}</li>
        <li><strong>Causes:</strong> ${list.join('')}</li>
      </ul>
    </section>
    `;

  }

}

export default Volonteer;
