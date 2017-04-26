import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      {
        title: 'Need-a-Couch',
        link: 'https://laurpaik.github.io/need-a-couch/',
        frontEnd: 'https://github.com/laurpaik/need-a-couch',
        backEnd: 'https://github.com/laurpaik/need-a-couch-api',
        description: 'DESCRIPTION NEEDACOUCH',
        image: 'https://s3.amazonaws.com/laurpaik/portfolio/needacouch',
        tech: [
          'Ember.js', 'JavaScript', 'Handlebars', 'Bootstrap', 'Ruby',
          'Ruby on Rails', 'PostgreSQL'
        ]
      }, {
        title: '0Squad Merch',
        link: '0squad.github.io/0squadmerch',
        frontEnd: 'https://github.com/0Squad/0squadmerch',
        backEnd: 'https://github.com/0Squad/0squadmerch-api',
        description: 'DESCRIPTION 0SQUAD',
        image: 'https://s3.amazonaws.com/laurpaik/portfolio/0Squad+Merch',
        tech: [
          'JavaScript', 'HTML/CSS', 'Bootstrap', 'Handlebars', 'jQuery', 'AJAX',
          'Stripe', 'Amazon S3', 'MongoDB', 'Mongoose', 'Node.js', 'Express.js'
        ]
      }, {
        title: 'WorkIt',
        link: 'https://laurpaik.github.io/WorkIt/',
        frontEnd: 'https://github.com/laurpaik/WorkIt',
        backEnd: 'https://github.com/laurpaik/WorkIt-API',
        description: 'DESCRIPTION WORKIT',
        image: 'https://s3.amazonaws.com/laurpaik/portfolio/workit',
        tech: [
          'JavaScript', 'jQuery', 'AJAX', 'Handlebars', 'Ruby', 'Ruby on Rails',
          'PostgreSQL'
        ]
      },
    ];
  },
});
