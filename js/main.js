 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll',
    horizontalOffset: 0,
	  verticalOffset: 0
  });

  // Scrollax
  $.Scrollax();


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1,
	        nav:false
	      },
	      600:{
	        items:1,
	        nav:false
	      },
	      1000:{
	        items:1,
	        nav:false
	      }
	    }
		});
		$('.carousel-work').owlCarousel({
			autoplay: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding:0,
			nav: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1,
					stagePadding: 0
				},
				600:{
					items: 2,
					stagePadding: 50
				},
				1000:{
					items: 3,
					stagePadding: 100
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

 
	
	

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('.appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('.appointment_time').timepicker();




})(jQuery);

window.addEventListener('load', function() {
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Close the popup when the background is clicked
document.getElementById('popup').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

 


// 		// JavaScript to show/hide left tabs and content based on the top tab selected
// 		const topTabs = document.getElementById("top-tabs");
// 		const leftTabs = document.getElementById("left-tabs");
// 		const contentArea = document.getElementById("v-pills-tabContent");
	  
// 		// Store the content of Ground School left tabs
// 		const groundSchoolContent = {
// 		  "gs-ppl": {
// 			title: "PPL Ground Classes",
// 			text: "",
// 		  },
// 		  "gs-cpl": {
// 			title: "CPL Ground Classes",
// 			text: "A well structured training program for pilot aspirants meeting international standards. 600 Hours of extensive training covering all subjects which will prepare the student pilot for first flight experience",
// 		  },
// 		  "gs-atpl": {
// 			title: "ATPL Theory",
// 			text: "ATPL Theory classes for professional licence holders looking forward to their career progression. The course is a combination of face-to-face sessions and interactive CBTs meeting EASA ATPL Standards as well as DGCA ATPL Theory Exams.",
// 		  },
// 		  "gs-ap": {
// 			title: "Airline Prep Classes",
// 			text: "With Aviation industry booming and Airlines going on expansion spree, the future of aviation is looking bright.  Join our Airline Prep course, you can make it through to any airline in the very first attempt.",
// 		  },
// 		};

// 		const flightSchoolContent = {
// 		  "fs-ppl": {
// 			title: "Private Pilot Licence",
// 			text: "Have you ever dreamed of being a pilot? With a private pilot licence, you can make that dream a reality! A private pilot licence allows you to fly for hobby or leisure purposes. You will need to undergo minimum amount of theory classes and practical flight training, then complete written exams and flight tests in order to obtain your licence. Once you have your licence, you can start flying right away! The process of obtaining a private pilot licence is exciting and empowering. You will feel like you are accomplishing something great when you finally receive your licence. Hobby flying is a great way to relieve stress and enjoy the outdoors. Leisure flying is also a great way to see the world from a different perspective. There is no better feeling than taking to the skies and experiencing the freedom of flight!",
// 		  },
// 		  "fs-cpl": {
// 			title: "Commercial Pilot Licence",
// 			text: "So you want to become a professional pilot and fly for the airlines? It all starts with getting your Commercial Pilot License (CPL). To do that, you’ll need to complete an approved commercial pilot training program. There are many different types of commercial pilot training programs out there, so it’s important to do your research and find one that’s right for you. But once you’ve found a program and completed it successfully, you’ll be one step closer to achieving your dream of becoming an airline pilot. Commercial Pilot training will teach you everything you need to know about flying a plane. You’ll learn how to take off, land, and navigate safely in all kinds of weather conditions. You’ll also learn about aircraft systems and how to troubleshoot problems mid-flight. In addition, you’ll develop vital skills like communication and teamwork that will be essential in your career as an airline pilot. So if you’re ready to take your first step towards becoming a professional pilot, Aviacons is the right choice for you.",
// 		  },
// 		  "fs-ir": {
// 			title: "Instrument Rating (SE/ME)",
// 			text: "An instrument rating is an endorsement on a pilot’s license that permits the holder to fly under Instrument Flight Rules (IFR). Flying during night, or in other poor visibility conditions, can be extremely hazardous. With an instrument rating, however, a pilot can confidently navigate through these conditions using only instruments, rather than visual cues. Instrument-rated pilots are also able to fly on routes that are not necessarily straight lines. This allows for greater flexibility when planning a flight, as well as the ability to avoid adverse weather conditions. To earn an instrument rating, a pilot must first obtain a Professional Pilot license. Then, he or she must complete additional training and pass a written examination and flight test. In a typical Commercial Pilot Licence Training program, this is a built in module.",
// 		  },
// 		  "fs-mer": {
// 			title: "Multi Engine Rating (MER)",
// 			text: "A Multi Engine Endorsement allows a pilot to fly multi engine aeroplanes, commercial aeroplanes and twin engine piston aeroplane certification. This type of endorsement is necessary for those who wish to pursue a career in flying or become a professional pilot. The process of obtaining a Multi Engine Endorsement involves completing a training course which covers all aspects of flying multi engine aircraft. Once the training is complete, the pilot must pass a written exam and flight test in order to obtain their certification.",
// 		  },
// 		  "fs-fir": {
// 			title: "Flight Instructor Rating",
// 			text: "If you’re interested in becoming a flight instructor, there are a few things you should know. First, you’ll need to obtain a flight instructor rating from the Civil Aviation Authority. This rating allows you to teach others how to fly and is typically obtained after completing a rigorous training program. Once you have your rating, you can begin working as a flight instructor. Instructional flying can be both rewarding and challenging, as you’ll be responsible for teaching others the basics of flying. However, with proper training and preparation, it can be an enjoyable and rewarding experience.",
// 		  },
// 		  "fs-oc": {
// 			title: "Other Courses",
// 			text: "Jet Orientation Course (JOC), Multi Crew Cooperation Course (MCC), Foreign Professional Licence Conversion, Type rating",
// 		  },
// 		};

// 		const communictionSchoolContent = {
// 		  "cs-rtr": {
// 			title: "Radio Telephony (RTR) Classes",
// 			text: "3 weeks of extensive hands on practical training program to help you pass Certificate of Proficiency, Radio Telephony (Restricted) –  COP RTR Examination delivered by Experienced Pilots and retired Air Force Air Traffic Controllers. Live ATC monitoring with Radio Lab to enhance the learning experience.",
// 		  },
// 		  "cs-elptrain": {
// 			title: "Aviation English Language Proficiency Training",
// 			text: "Online Training Program for Ab Initio Pilots approved by DGCA.  Convenient Dates, Flexible Timings and training delivered by trainers with more than 10 years of experience in Language Training and Aviation English.",
// 		  },
// 		  "cs-elptest": {
			
// 			title: "Aviation English Language Proficiency Testing",
// 			text: "India’s Only Aviation English Language Proficiency Test Center to be approved by DGCA India, UK CAA as well as EASA. We offer ELP Testing on all Week Days. Most preferred ELP test Center by Airlines, Professional Pilots, Student Pilots and majority of General Aviation and Non Scheduled Operators across the Country.",
		
// 			  },
		 
// 		};
// 		const trainTheTrainerContent = {
// 		  "tt-it": {
// 			title: "Recurrent Training for AELP raters/Interlocutors",
// 			text: "Annual Recurrent Training Program for Aviation English Language Proficiency Examiners of AELP Test Centers approved by DGCA India. Training SCHEDULED AND DELIVERED ON DEMAND",
// 		  },
// 		  
// 		   "tt-lt": {Aviation
// 			title: " Indoctrination Training For Language Trainers",
// 			text:"Annual Recurrent Training Program for Aviation English Language Proficiency Raters of AELP Test Centers approved by DGCA India. Training SCHEDULED AND DELIVERED ON DEMAND",
// 		   },
// "tt-lt": {Aviation
  // 			title: " Rter course for elp exm",
  // 			text:"Annual Recurrent Training Program for Aviation English Language Proficiency Raters of AELP Test Centers approved by DGCA India. Training SCHEDULED AND DELIVERED ON DEMAND",
  // 		   },
// 		};
	  // "tt-lt": {Aviation
  // 			title: " Inter course for elp exm",
  // 			text:"Annual Recurrent Training Program for Aviation English Language Proficiency Raters of AELP Test Centers approved by DGCA India. Training SCHEDULED AND DELIVERED ON DEMAND",
  // 		   },
// 		};
	  
// 		topTabs.addEventListener("click", (e) => {
// 		  if (e.target.classList.contains("nav-link")) {
// 			// Clear existing left tabs and content
// 			leftTabs.innerHTML = "";
// 			contentArea.innerHTML = "";
	  
// 			// Determine the selected top tab
// 			const selectedTabId = e.target.id;
	  
// 			if (selectedTabId === "top-gs-tab") {
// 			  // Show Ground School left tabs and content
// 			  for (const tabId in groundSchoolContent) {
// 				createLeftTab(tabId, groundSchoolContent[tabId].title, false);
// 				createContent(tabId, groundSchoolContent[tabId].title, groundSchoolContent[tabId].text, false);
// 			  }
// 			}

// 			if (selectedTabId === "top-fs-tab") {
// 			  // Show Ground School left tabs and content
// 			  for (const tabId in flightSchoolContent) {
// 				createLeftTab(tabId, flightSchoolContent[tabId].title, false);
// 				createContent(tabId, flightSchoolContent[tabId].title, flightSchoolContent[tabId].text, false);
// 			  }
// 			}

// 			if (selectedTabId === "top-cs-tab") {
// 			  // Show Ground School left tabs and content
// 			  for (const tabId in communictionSchoolContent) {
// 				createLeftTab(tabId, communictionSchoolContent[tabId].title, false);
// 				createContent(tabId, communictionSchoolContent[tabId].title, communictionSchoolContent[tabId].text, false);
// 			  }
// 			}

// 			if (selectedTabId === "top-tt-tab") {
// 			  // Show Ground School left tabs and content
// 			  for (const tabId in trainTheTrainerContent) {
// 				createLeftTab(tabId, trainTheTrainerContent[tabId].title, false);
// 				createContent(tabId, trainTheTrainerContent[tabId].title, trainTheTrainerContent[tabId].text, false);
// 			  }
// 			}
// 		  }
// 		});
		  
 
// function createLeftTab(id, text, isActive) {
// 	const li = document.createElement("li");
// 	li.className = "nav-item";
// 	const a = document.createElement("a");
// 	a.className = "nav-link";
// 	a.id = `left-${id}-tab`;
// 	a.className = "left-tab";
// 	a.setAttribute("data-toggle", "pill");
// 	a.href = `#left-${id}`;
// 	a.role = "tab";
// 	a.setAttribute("aria-controls", `left-${id}`);
// 	a.setAttribute("aria-selected", isActive ? "true" : "false");
  
// 	// Create a container to hold the icon and text
// 	const container = document.createElement("div");
// 	container.className = "tab-content-container";
  
// 	// Create an icon element (e.g., using Font Awesome)
// 	const defaultIcon = document.createElement("i");
// 	defaultIcon.className = "icon-beside-tab ion-md-airplane"; // Replace with the appropriate icon class
  
// 	// Create a text element for the left tab
// 	const tabText = document.createElement("p");
// 	tabText.textContent = text;
  
// 	// Append the icon and text to the container
// 	container.appendChild(defaultIcon);
// 	container.appendChild(tabText);
  
// 	a.appendChild(container);
// 	li.appendChild(a);
// 	leftTabs.appendChild(li);
//   }
//   function createContent(id, title, text, isActive) {
//     const content = document.createElement("div");
//     content.className = "tab-pane fade" + (isActive ? " show active" : "");
//     content.id = `left-${id}`;
//     content.role = "tabpanel";
//     content.setAttribute("aria-labelledby", `left-${id}-tab`);

//     const h3 = document.createElement("h3");
//     h3.textContent = title;


//     const p = document.createElement("p");
//     p.textContent = text;
	
//     // Create a "Learn More" button
//     const button = document.createElement("button");
// 	button.href = "",
//     button.className = "btn btn-primary btn-outline-primary"; // Add Bootstrap button classes or customize as needed
//     button.textContent = "Learn More";

//     // Attach a click event to the button
//     button.addEventListener("click", () => {
//       // Handle the button click event (e.g., show additional information)
//       alert(`You clicked the button for ${title}`);
//     });

//     const buttonContainer = document.createElement("div");
//     buttonContainer.appendChild(button);

//     content.appendChild(h3);
//     content.appendChild(p);
//     content.appendChild(buttonContainer);

//     contentArea.appendChild(content);
//   }



// let valueDisplays = document.querySelectorAll(".num");
// let intervel = 5000;

// valueDisplays.forEach((valueDisplays) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplays.getAttribute("data-number"));
//   let duration = Math.floor(intervel / endValue);
//   let counter = setInterval(function(){
//     startValue += 1;
//     valueDisplay.textContent = startValue;
//     if (startValue == endValue){
//       clearInterval(counter);
//     }
//     }, duration);

// });
//  $(document).ready(function () {
//     var counters = [];

//     function initializeCounters() {
//       counters.push(new CountUp('years-number', 0, 15, 0, 2, { separator: '' }));
//       counters.push(new CountUp('clients-number', 0, 60000, 0, 2, { separator: ',' }));
//       counters.push(new CountUp('students-number', 0, 1500, 0, 2, { separator: '' }));
//       counters.push(new CountUp('training-hours-number', 0, 60000, 0, 2, { separator: ',' }));
//     }

//     function startCountUpAnimations() {
//       counters.forEach(function (counter) {
//         inView(counter.target)
//           .on('enter', function () {
//             counter.start();
//             this.destroy(); // Remove the listener after triggering the animation
//           });
//       });
//     }

//     initializeCounters();
//     startCountUpAnimations();
//   });
 
const counts = document.querySelectorAll('.count')
const speed = 150

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})

 

 