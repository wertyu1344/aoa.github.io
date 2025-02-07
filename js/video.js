// JavaScript Document



		$(document).ready(function() {

			//Activate FancyBox

			$("p#test1 a").fancybox({

				'hideOnContentClick': true

			});

			

			$("p#test2 a").fancybox({

				'zoomSpeedIn':	0, 

				'zoomSpeedOut':	0, 

				'overlayShow':	true

			});

			

			$("a#custom_2, a#custom_3, a#custom_4, a#custom_5, a#custom_6, a#custom_7, a#custom_8, a#custom_9, a#custom_10, a#custom_11, a#custom_12, a#custom_13, a#custom_14, a#custom_15, a#custom_16, a#custom_17, a#custom_18, a#custom_19, a#custom_20 ").fancybox({

				'itemLoadCallback': getGroupItems

			});

			

			$("a#custom_2, a#custom_3, a#custom_4, a#custom_5, a#custom_6, a#custom_7, a#custom_8 , a#custom_9, a#custom_10, a#custom_11, a#custom_12, a#custom_13, a#custom_14, a#custom_15, a#custom_16, a#custom_17, a#custom_18, a#custom_19, a#custom_20 " ).fancybox({

				'zoomSpeedIn':	0, 

				'zoomSpeedOut':	0

			});

			//---

						

			$("p#test3 a").fancybox({

				'zoomSpeedIn':	0, 

				'zoomSpeedOut':	0, 

				'overlayShow':	true

			});

			

			$("a#custom_2, a#custom_3, a#custom_4, a#custom_5, a#custom_6, a#custom_7, a#custom_8,a#custom_9, a#custom_10, a#custom_11, a#custom_12, a#custom_13, a#custom_14, a#custom_15, a#custom_16, a#custom_17, a#custom_18, a#custom_19, a#custom_20 ").fancybox({

				'itemLoadCallback': getGroupItems

			});

			

			$("a#custom_2, a#custom_3, a#custom_4, a#custom_5, a#custom_6, a#custom_7, a#custom_8,a#custom_9, a#custom_10, a#custom_11, a#custom_12, a#custom_13, a#custom_14, a#custom_15, a#custom_16, a#custom_17, a#custom_18, a#custom_19, a#custom_20 " ).fancybox({

				'zoomSpeedIn':	0, 

				'zoomSpeedOut':	0

			});

			//--

						

			$("p#test4 a").fancybox({

				'zoomSpeedIn':	0, 

				'zoomSpeedOut':	0, 

				'overlayShow':	true

			});

			

			$("a#custom_2, a#custom_3, a#custom_4, a#custom_5, a#custom_6, a#custom_7, a#custom_8,a#custom_9, a#custom_10, a#custom_11, a#custom_12, a#custom_13, a#custom_14, a#custom_15, a#custom_16, a#custom_17, a#custom_18, a#custom_19, a#custom_20 ").fancybox({

				'itemLoadCallback': getGroupItems

			});

			

			$("a#custom_2, a#custom_3, a#custom_4, a#custom_5, a#custom_6, a#custom_7, a#custom_8,a#custom_9, a#custom_10, a#custom_11, a#custom_12, a#custom_13, a#custom_14, a#custom_15, a#custom_16, a#custom_17, a#custom_18, a#custom_19, a#custom_20 " ).fancybox({

				'zoomSpeedIn':	0, 

				'zoomSpeedOut':	0

			});

			

			

			

			//Some lines for this page

			$("div#donate").bind("click", function() {

				$("#donate_form").submit()

			});

			

			$("#comment_form").attr("action", "/fancy/add_comment"); $("#age").val('fancy'); //die spamers, die...

		});



		//List can contain mixed media too

		//Parameter "o" ir optional and used to override settings, example: {url: "http://www.google.com", title: false,  o: {'frameWidth': 200} }

		var imageList = [

			{url: "images/6_b.jpg", title: "First image"},

			{url: "images/7_b.jpg", title: "Second image"},

			{url: "images/8_b.jpg", title: "Third image"}

		];

		

		function getGroupItems(opts) {

			jQuery.each(imageList, function(i, val) {

		        opts.itemArray.push(val);

		    });

		}

		
