import Ember from 'ember';
import ajax from 'ic-ajax';
import config from './../config/environment';
const {PARTICLE} = config;

export default Ember.Route.extend({

  actions: {
    press() {
      let url = "https://api.spark.io/%@/devices/%@/garage";
      ajax({
        data: {
          access_token: PARTICLE.accessToken,
          params: 'door'
        },
        method: 'POST',
        url: url.fmt(PARTICLE.apiVersion, PARTICLE.deviceId)
      })
    }
  }

});
