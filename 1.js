$(document).ready(function() {

   wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
  wow.init();

  var score = 0; 
  	function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft/60) + ":"+ timeleft%60);
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    } else {
      console.log(score);
      if(score == 24 ) return false;
      $('.fadebg').css({'height':'1220px', 'background-color':'rgba(57, 59, 62, 0.74)', 'z-index':'1'});
      $('.col-xs-8 p').css({'visibility':'visible'});
      $('.loseGame').css({'opacity':'1', 'visibility':'visible'});
      document.getElementById("audio").pause();
      document.getElementById("lose").play();
    }
}; // set up function for progressBar

//////////////////////////////////////////////////////////
	$('i.fas.fa-volume-off').hide();

  	$('button.btn.btn-warning').click(function(event) {
  		$('.container-fluid .row8cards').addClass('showGame');
  		$('.progressBar').addClass('showGame');
  		$('i.fas.fa-volume-off').show();
  		$('i.fas.fa-volume-up').hide();
      document.getElementById("audio").play();

		  $('i.fas.fa-volume-off').click(function(event) {
  			document.getElementById("audio").pause();
  			$('i.fas.fa-volume-off').hide();
  			$('i.fas.fa-volume-up').show();
		});

		$('i.fas.fa-volume-up').click(function(event) {
			document.getElementById("audio").play();
			$('i.fas.fa-volume-up').hide();
			$('i.fas.fa-volume-off').show();
		});				

		// hiển thị game
		progress(75, 75, $('.progressBar')); // progressBarTime 75s
	});

	$(window).scroll(function(event) {
		var pos = $('html, body').scrollTop();
			console.log(pos);
          //	pos3 = $('.contact').offset().top;
        if(20 <= pos && pos <= 80) {
        	$('a.nav-link').removeClass('changeColor');
        	$('a.nav-link.a_rules').addClass('changeColor');
        } else if (81<pos && pos<=430) {
        	$('a.nav-link').removeClass('changeColor');
        	$('a.nav-link.a_gameplay').addClass('changeColor');
        } else if (431<pos) {
        	$('a.nav-link').removeClass('changeColor');
        	$('a.nav-link.a_contact').addClass('changeColor');
       	} else {
       		$('a.nav-link').removeClass('changeColor');
       	} 
    });

    $('a.nav-link.a_rules').click(function(event) {
    	$('a.nav-link').removeClass('changeColor');
    	$(this).addClass('changeColor');
      	$('html, body').animate({
        scrollTop: $('.rules').offset().top
      }, 200 )
    });

    $('a.nav-link.a_rules').click(function(event) {
    	$('a.nav-link').removeClass('changeColor');
    	$(this).addClass('changeColor');
      	$('html, body').animate({
        scrollTop: $('.rules').offset().top
      }, 200 )
    });

    $('a.nav-link.a_gameplay').click(function(event) {
    	$('a.nav-link').removeClass('changeColor');
    	$(this).addClass('changeColor');
      	$('html, body').animate({
        scrollTop: $('.gameplay').offset().top-100
      }, 200 )
    });

    $('a.nav-link.a_contact').click(function(event) {
    	$('a.nav-link').removeClass('changeColor');
    	$(this).addClass('changeColor');
      	$('html, body').animate({
        scrollTop: $('.contact').offset().top
      }, 200 )
    });
	//////////////////////// code for game loop ////////////////////////////////////
		
    var cards = [
                'aleister2.jpg','alice (1).jpg','butterfly6.jpg','astrid.jpg','cresht3.jpg','diaochan4.jpg','joker.jpg',
                'azzenka2.jpg','illumia2.jpg','grakk4.jpg','kahlii2.jpg','krixi (1).jpg','lubu.jpg','maloch4.jpg','mganga (1).jpg',
                'nakroth5.jpg','murad3.jpg','ormarr3.jpg','omega (1).jpg','payna2.jpg','raz.jpg','superman3.jpg','teemee.jpg',
                'valhein4.jpg','veera4.jpg','xeniel.jpg','wukong (1).jpg','yorn4.jpg','zephys3.jpg','zanis2.jpg','arum.jpg',
                'airi6.jpg','batman3 (1).jpg','flash.jpg','lauriel3.jpg','liliana.jpg','lindis.jpg','max.jpg','marja2.jpg',
                'omen.jpg','tulen.jpg','wisp.jpg','wonderwoman2.jpg','zuka4.jpg','arthur4.jpg','zill3.jpg'
                ];
  function shuffle(array) {

    var cur = 12, randomIndex;
      
    var finalArray = [];
    var test = [];

    for(var i = 0; i < 45; i++) {test[i] = true;}

    while(cur >= 0) {

      while(test[randomIndex] == false ) {

        randomIndex = Math.floor(Math.random() * array.length);
      }

        finalArray[cur] = array[randomIndex];
        cur--;
        test[randomIndex] = false;
    }
    finalArray.pop();
    return finalArray;
  }


  var finalCards = [];
  finalCards = shuffle(cards);


  finalCards = finalCards.concat(finalCards); //////////     x2 mảng    //////////
  finalCards.sort(function(a, b){return 0.5 - Math.random()});/////// xếp ngẫu nhiên mảng 24 quân ///////////

  document.getElementById("n1").src =  'imgs/' + finalCards[0];
  document.getElementById("n2").src =  'imgs/' + finalCards[1];
  document.getElementById("n3").src =  'imgs/' + finalCards[2];
  document.getElementById("n4").src =  'imgs/' + finalCards[3];
  document.getElementById("n5").src =  'imgs/' + finalCards[4];
  document.getElementById("n6").src =  'imgs/' + finalCards[5];
  document.getElementById("n7").src =  'imgs/' + finalCards[6];
  document.getElementById("n8").src =  'imgs/' + finalCards[7];
  document.getElementById("n9").src =  'imgs/' + finalCards[8];
  document.getElementById("n10").src =  'imgs/' + finalCards[9];     ///////  ĐẶT vào html  //////
  document.getElementById("n11").src =  'imgs/' + finalCards[10];
  document.getElementById("n12").src =  'imgs/' + finalCards[11];
  document.getElementById("n13").src =  'imgs/' + finalCards[12];
  document.getElementById("n14").src =  'imgs/' + finalCards[13];
  document.getElementById("n15").src =  'imgs/' + finalCards[14];
  document.getElementById("n16").src =  'imgs/' + finalCards[15];
  document.getElementById("n17").src =  'imgs/' + finalCards[16];
  document.getElementById("n18").src =  'imgs/' + finalCards[17];
  document.getElementById("n19").src =  'imgs/' + finalCards[18];
  document.getElementById("n20").src =  'imgs/' + finalCards[19];
  document.getElementById("n21").src =  'imgs/' + finalCards[20];
  document.getElementById("n22").src =  'imgs/' + finalCards[21];
  document.getElementById("n23").src =  'imgs/' + finalCards[22];
  document.getElementById("n24").src =  'imgs/' + finalCards[23];


  document.getElementById("n1").setAttribute('data-name',finalCards[0]);
  document.getElementById("n2").setAttribute('data-name',finalCards[1]);
  document.getElementById("n3").setAttribute('data-name',finalCards[2]);
  document.getElementById("n4").setAttribute('data-name',finalCards[3]);
  document.getElementById("n5").setAttribute('data-name',finalCards[4]);
  document.getElementById("n6").setAttribute('data-name',finalCards[5]);
  document.getElementById("n7").setAttribute('data-name',finalCards[6]);
  document.getElementById("n8").setAttribute('data-name',finalCards[7]);
  document.getElementById("n9").setAttribute('data-name',finalCards[8]);
  document.getElementById("n10").setAttribute('data-name',finalCards[9]);
  document.getElementById("n11").setAttribute('data-name',finalCards[10]);
  document.getElementById("n12").setAttribute('data-name',finalCards[11]);
  document.getElementById("n13").setAttribute('data-name',finalCards[12]);
  document.getElementById("n14").setAttribute('data-name',finalCards[13]);    //      set data-name     //
  document.getElementById("n15").setAttribute('data-name',finalCards[14]);
  document.getElementById("n16").setAttribute('data-name',finalCards[15]);
  document.getElementById("n17").setAttribute('data-name',finalCards[16]);
  document.getElementById("n18").setAttribute('data-name',finalCards[17]);
  document.getElementById("n19").setAttribute('data-name',finalCards[18]);
  document.getElementById("n20").setAttribute('data-name',finalCards[19]);
  document.getElementById("n21").setAttribute('data-name',finalCards[20]);
  document.getElementById("n22").setAttribute('data-name',finalCards[21]);
  document.getElementById("n23").setAttribute('data-name',finalCards[22]);
  document.getElementById("n24").setAttribute('data-name',finalCards[23]);


/////////////////////////////////////////////////////////////////////////

  var current = null,nextCurrent = null; 
  $('.cards').click(function(event) {

    $(this).find('.back').toggleClass('backFlip');
    $(this).find('.front').toggleClass('frontFlip');

    if(!current) {
      current = $(this);
    } else {
        nextCurrent = $(this);

        if(nextCurrent.find('.front img').attr('data-name') != current.find('.front img').attr('data-name') ) {
          // 2 dataname khác nhau
/*          console.log(current.find('.front img').attr('id'));
          console.log(nextCurrent.find('.front img').attr('id'));
          console.log("khác nhau");
*/
          setTimeout(function(){
            nextCurrent.find('.back').removeClass('backFlip');
            nextCurrent.find('.front').removeClass('frontFlip');
            nextCurrent = null;

            current.find('.back').removeClass('backFlip');
            current.find('.front').removeClass('frontFlip');
            current = null;
          }, 360);

        } else {
          // giống nhau
/*          console.log(current.find('.front img').attr('id'));
          console.log(nextCurrent.find('.front img').attr('id'));*/
          if(nextCurrent.find('.front img').attr('id') == current.find('.front img').attr('id')) return false;
          current.css({'opacity':'0', 'transition':'0.7s', 'cursor': 'default'});
          nextCurrent.css({'opacity':'0', 'transition':'0.7s', 'cursor': 'default'});
          current = null;
          nextCurrent = null;
          score+= 2;
        }
    }
    
    if(score == 24) {
      $('.fadebg').css({'height':'1220px', 'background-color':'rgba(57, 59, 62, 0.74)', 'z-index':'1'});
      $('.col-xs-8 p').css({'visibility':'visible'});
      $('.winGame').css({'opacity':'1', 'visibility':'visible'});
      document.getElementById("audio").pause();
      document.getElementById("victory").play();
    }

  });

  $('button.restart').click(function(event) {
    location.reload();
  });


});