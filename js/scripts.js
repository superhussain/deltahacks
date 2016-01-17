(function ($) {
  jQuery(document).ready(function ($) {
    scroll();
  });
})(jQuery);

scroll = function () {
  $(".scroll").click(function (event) { // When a link with the .scroll class is clicked
    event.preventDefault(); // Prevent the default action from occurring
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500); // Animate the scroll to this link's href value
  });
}

var data = [
  {
    "id": "01",
    "title": "Resume/Cover Letter Workshop",
    "long": "43.341118",
    "lat": "-79.883503",
    "location": "YMCA Employment Services 427 Dundas Street East, Unit 1 Waterdown, ON L0R 2H1",
    "date": "10/16/2014",
    "time": "11:40 AM",
    "desc": "Need help with your resume and cover letter? Learn how to make an effective resume and cover letter by attending this workshop! Please call 905-690-9927 to register.",
  },
  {
    "id": "02",
    "title": "Interview Skills Workshop",
    "long": "43.341118",
    "lat": "-79.883503",
    "location": "YMCA Employment Services 427 Dundas Street East, Unit 1 Waterdown, ON L0R 2H1",
    "date": "12/10/2014",
    "time": "11:50 AM",
    "desc": "Learn how to prepare effectively for an interview to get the job that you want! Please call The YMCA Employment Services at 905-690-9927 to register.",
  },
  {
    "id": "03",
    "title": "Talk with someone about substance use",
    "long": "43.257862",
    "lat": "-79.845322",
    "location": "Mission Services of Hamilton 196 Wentworth St N, Hamilton, ON L8L 5V7",
    "date": "Monday to Friday",
    "time": "9:00 am to 4:30 pm",
    "desc": "We’ve helped many people understand their substance use and discover a healthier lifestyle. We can help you, too.  ",
   },
  {
    "id": "04",
    "title": "Canada Revenue Agency TIPS",
    "long": "43.259713",
    "lat": "-79.873641",
    "location": "55 Bay St N Hamilton ON L8N 3E1",
    "date": "Monday - Friday",
    "time": " 9AM - 5PM ",
    "desc": "Provides personal and general tax information from the automated Tax Information Phone Service (TIPS). Offers several different services depending on the time of year: * Telerefund * GST/HST credit * Canada Child Tax Benefit (CCTB) * Universal Child Care Benefit (UCCB) * Registered Retirement Savings Plan (RRSP) * Business Information * Tax Free Savings Account (TFSA",
  },
]
