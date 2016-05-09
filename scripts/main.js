$(function () {

var $vm = new Vue({
  data: {
    status: {}
  },
  el : 'body',
  methods: {
    fetchStatus : function () {
      var self = this;
      $.ajax({
        url: '//api.twitcasting.tv/api/livestatus?user=kakaka_88',
        dataType: 'jsonp'
      }).then(function (res) {
        self.status = res;
        setTimeout(self.fetchStatus, 3 * 1000);
      })
    }
  },
  ready: function () {
    $('h1.title').fitText(0.6);
    this.fetchStatus();
  }
});

});
