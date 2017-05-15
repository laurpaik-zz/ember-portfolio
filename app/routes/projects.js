import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      {
        title: 'Need-a-Couch',
        link: 'https://laurpaik.github.io/need-a-couch/',
        frontEnd: 'https://github.com/laurpaik/need-a-couch',
        backEnd: 'https://github.com/laurpaik/need-a-couch-api',
        description: 'Need-a-Couch is a couchsurfing app that allows users to post when they need somewhere to stay for a night. This was my first Ember App, so I had an adventure building the structure on the front-end. For this project, I built a paper prototype to organize my components and routes. I used this as a map throughout the project, and it definitely saved me from getting lost in the code whenever I hit a wall. Documentation on my planning process and problem-solving strategy can be found in the front-end repo.',
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
        description: '0Squad Merch is an E-Commerce site for our brand, 0Squad. This was my first team project. We used Agile/Scrum methodology, and ultimately I learned a lot about playing up strengths and learning from my teammates to improve on weaknesses. For this project, our team decided to use a local storage object as our shopping cart. This model saved us from needing to send too many AJAX requests and slowing down our server. Documentation on team process can be found in the front-end repo and in the beginning of the back-end repo.',
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
        description: 'WorkIt is a workout log app that allows users to log when they do a workout. This was my first full-stack project, during which I learned much about how to de-scope my problems into something manageable. For this project I chose to add an \'athlete profile\' table to add an extra security layer between the user and their logged workouts. Documentation on my planning process and journey can be found in the front-end repo and in the end of the back-end repo.',
        image: 'https://s3.amazonaws.com/laurpaik/portfolio/workit',
        tech: [
          'JavaScript', 'jQuery', 'AJAX', 'Handlebars', 'Ruby', 'Ruby on Rails',
          'PostgreSQL'
        ]
      },
    ];
  },
});
