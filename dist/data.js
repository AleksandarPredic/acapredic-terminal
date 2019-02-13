export default {
  basic: {
    name: 'Aleksandar',
    lastName: 'Predic',
    email: 'info@acapredic.com',
    position: 'Web development team Lead, lead WP developer at Shindiri Studio | #WCEU organizing team | #WPNis community Co-organizer'
  },
  projects: {
    1: {
      id: 1,
      name: 'WooCommerce external API integration - products import - custom WP plugin',
      stack: 'PHP, HTML, CSS, JS, REST API, WooCommerce, WordPress',
      url: 'https://grafomis.rs',
      shortDescription: 'WooCommerce was used as a base to import 6000+ products from external API.',
      description: `
      WooCommerce was used as a base to import 6000+ products from external API. Custom WordPress plugin was created to handle authentication, 
      automatic import and synchronization of all data (taxonomies, post types, attributes...) for fully functional online shop. 
      Additionally, WooCommerce was customized on frontend to fit needs of printing company.
      `
    },

    2: {
      id: 2,
      name: 'WordPress custom business solution',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: 'https://www.physicianpartnersofamerica.com',
      shortDescription: 'Custom WordPress solution heavily relying on Google maps javascript API.',
      description: `
      Custom WordPress solution heavily relying on Google maps javascript API. Project included custom WP theme and plugins, integrating various external API's. 

      My role was a team lead of small dev team consisting of 3 members covering both frontend and backend tasks. Close cooperation with designer was also important for better design implementation. 
      
      Performance-wise I write a lot of requested features to avoid using plugins that add extra functionalities which are not needed on the site.
      
      Used on project: PHP, jQuery, JavaScript, SCSS, Gulp, Composer, WordPress
      
      Website description: Doctors and clinics listing using Google maps displaying results by distance from visitor location. Live search on Google maps for locations. Other common website pages are also implemented and designed.
      `
    },

    3: {
      id: 3,
      name: 'WordPress Widget Builder Framework',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: 'https://github.com/AleksandarPredic/WordPress-Widget-Builder',
      shortDescription: 'The WordPress Widget Builder serves as a framework to quickly build your WordPress widgets.',
      description: `
      The WordPress Widget Builder serves as a framework to quickly build your WordPress widgets.

      You can make configuration array of desired widget name, description, fields... and the framework will create widget admin part for you. Leaving you to worry only about widget frontend output.
      `
    }
  }
};
