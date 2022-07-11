var swiper = new Swiper("#tabContent", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var _target         = $('#tabTitle');
var _targetList     = _target.find('> ul > li');
var _selectedIdx    = 0;

// 최초 로드 시 탭 타이틀 0번째에 class 활성화
swiperEvent(_selectedIdx);

// 스와이퍼 인덱스 체크
swiper.on('slideChange', function () {
  _selectedIdx = swiper.realIndex;
  swiperEvent(_selectedIdx);    
});

// 탭 타이틀 인덱스 체크
_targetList.on('click', '> a', function(e){
  _selectedIdx = $(e.target).closest('li').index();
  swiperEvent(_selectedIdx);
});

// 인덱스를 받아서 실행하는 함수를 스와이퍼, 탭 타이틀 양쪽에 사용
function swiperEvent(index){
  var _posCenter      = window.outerWidth / 2;
  var _pos            = 0;
  var _calcPosValue   = 0;
  
  // 인덱스에 맞는 탭 타이틀 class 활성화
  $(_targetList[index]).addClass('active').siblings('li').removeClass('active');

  // 선택된 탭 타이틀이 화면 중앙에 위치했을때의 값
  _calcPosValue = _targetList[index].offsetLeft + _targetList[index].offsetWidth / 2;
  
  // 디바이스의 중간 위치 값보다 작으면 동작 하지 않음
  if( _calcPosValue <= _posCenter ){
    _pos = 0;
  } else {
  // 디바이스의 중간 위치 값보다 크면 이동
    _pos = _calcPosValue - _posCenter;
  }
  
  $('#tabTitle').animate( { scrollLeft: _pos }, 300);
  swiper.slideTo(index);
}