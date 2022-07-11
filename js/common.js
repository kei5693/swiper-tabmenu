var swiper = new Swiper("#tabContent", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



var swiperEvent = {
  tabTitle: function(){
    var _target = $('#tabTitle');
    var _targetEl = _target.find('> ul > li a');
    
    _targetEl.on('click', function(e){
      var tabSelectedIdx = $(e.target).closest('li').index();

      //var posCenter   = window.outerWidth / 2;
      //var tabMenuBox  = this.$refs.tabMenuBox;
      //var tabs        = this.$refs.tabs;
      //var tabItem     = this.$refs.tabItem;
      //var tabBorder   = this.$refs.tabBorder;
      //var pos         = 0;
      //var posLimit    = tabs.offsetWidth - tabMenuBox.offsetWidth;




      swiper.slideTo(tabSelectedIdx);
    });
  }
}

swiperEvent.tabTitle();