
	(function(){
		var widgetIframe 	= document.getElementById('sc-widget');
		var widget      	= SC.Widget(widgetIframe);
		var songStart		= 55000;
		var songEnd			= 65000;
		var url2 			= 'http://api.soundcloud.com/users/1539950/favorites';
		
		
		//Template for adding event listeners.
		function addEvent(element, eventName, callback) {
        if (element.addEventListener) {
          element.addEventListener(eventName, callback, false);
        } else {
          element.attachEvent(eventName, callback, false);
        }
      }
		
		//Adding the functionality of reloading the widget with a given url.
		var reloadButton = document.querySelector('.reload');
		var widgetUrlInput = document.querySelector('.urlInput');
		addEvent(reloadButton, 'click', function() {
        widget.load(widgetUrlInput.value, {
			auto_play: true
			});
		});
		
		//Adding functionality to the seek button with the given input.
		var seekToButton = document.querySelector('.seekTo');
		var seekInput = seekToButton.querySelector('input');
		addEvent(seekToButton, 'click', function(e) {
			//'if' prevents the function to trigger when the input field is pressed.
			if (e.target !== this) {
				e.stopPropagation();
				return false;
			}
			widget.seekTo(seekInput.value)
		});
		
		//Adding functionality to the 'next' button.
		var reloadButton = document.querySelector('.next');
		addEvent(reloadButton, 'click', function() {
			widget.next()
		});
		
		//Adding functionality to the 'prev' button.
		var reloadButton = document.querySelector('.prev');
		addEvent(reloadButton, 'click', function() {
			widget.prev()
		});
		
		// Adding functionality to the Preview button. Seeks to a certain point in the music
		// and stops after a couple of seconds.
		var previewButton = document.querySelector('.preview');
		addEvent(previewButton, 'click', function(e) {			
			widget.bind(SC.Widget.Events.READY, function() {
				if(widget.isPaused(  function(paused) {
						if( paused) {			
							widget.play();
						}
					} ))
	  			widget.bind(SC.Widget.Events.PLAY,function(){
					widget.seekTo(songStart);
					widget.unbind(SC.Widget.Events.PLAY)
					widget.unbind(SC.Widget.Events.READY)
				});
			});
					
			widget.bind(SC.Widget.Events.PLAY_PROGRESS, function() {
				widget.getPosition(
					function(position) {
						if( position > songEnd) {			
							widget.pause();
							widget.unbind(SC.Widget.Events.PLAY_PROGRESS)
						}
					}
				);
			  });
		});
		
		var randomSnippet = document.querySelector('.randSnip');
		var randStart = randomSnippet.querySelector('value');
		addEvent(randomSnippet, 'click', function(e) {			
			widget.bind(SC.Widget.Events.READY, function() {
				if(widget.isPaused(  function(paused) {
						if( paused) {			
							widget.play();
						}
					} ))
	  			widget.bind(SC.Widget.Events.PLAY,function(){
					widget.seekTo(randStart);
					widget.unbind(SC.Widget.Events.PLAY)
					widget.unbind(SC.Widget.Events.READY)
				});
			});
					
			widget.bind(SC.Widget.Events.PLAY_PROGRESS, function() {
				widget.getPosition(
					function(position) {
						if( position > ( randStart + 3000 ) ) {			
							widget.pause();
							widget.unbind(SC.Widget.Events.PLAY_PROGRESS)
						}
					}
				);
			  });
		});
	}());