import Ember from 'ember';
import ajax from 'ic-ajax';
import config from './../config/environment';
const {PARTICLE} = config;

export default Ember.Route.extend({

  sendParams(params) {
    let url = "https://api.spark.io/%@/devices/%@/garage".fmt(PARTICLE.apiVersion, PARTICLE.deviceId);

    console.log('sendParams', params);
    console.log('sendParams', url);

    return ajax({
      data: {
        access_token: PARTICLE.accessToken,
        params: params
      },
      method: 'POST',
      url: url
    });
  },

  actions: {
    press() {
      this.sendParams('open').then((response) => {
        if (response.return_value === 1) {
          this.sendParams('close');
        }
      });
    }
  }

});
