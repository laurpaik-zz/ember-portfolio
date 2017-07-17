import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  credentials: storageFor('auth'),
  isAuthenticated: Ember.computed.bool('credentials.token'),

  signIn (credentials) {
    // this return prevents us from breaking the promis chain in sign-up.js!
    return this.get('ajax').post('/sign-in', {
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password,
        },
      },
    })
    // this promise lets us stay signed in! #crazywow #coolcool
    .then((result) => {
      this.get('credentials').set('id', result.user.id);
      this.get('credentials').set('email', result.user.email);
      this.get('credentials').set('token', result.user.token);
    });
  },

  changePassword (passwords) {
    return this.get('ajax').patch(`/change-password/${this.get('credentials.id')}`, {
      data: {
        passwords: {
          old: passwords.previous,
          new: passwords.next,
        },
      },
    });
  },

  signOut () {
    return this.get('ajax').del(`/sign-out/${this.get('credentials.id')}`)
    // plz never forget to clear out local storage
    .finally(() => this.get('credentials').reset());
  },
});
