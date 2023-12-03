$('#slider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols:8,
    boxRows: 4,
    animSpeed: 500,
    pauseTime: 3000,
    startSlide: 0,
    directionNav: true,
    controlNav: false,
    controlNavThumbs: true,
    pauseOnHover: true,
    manualAdvance: true,
    prevText: 'Prev',
    nextText: 'Next',
    randomStart: false,
    beforeChange: function(){},
    afterChange: function(){},
    slideshowEnd: function(){},
    lastSlide: function(){},
    afterLoad: function(){}
    });


