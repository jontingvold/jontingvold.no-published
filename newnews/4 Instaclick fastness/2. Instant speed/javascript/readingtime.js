// Reading time – A script that shows a fixed element in bottom right corner with reading time and current page.
// © 2016. Jon Tingvold, Norway. All rights reserved.


// Settings
var words_pr_min = 275; // Source: Medium
var sec_pr_image = 12; // Source: Medium (should probably be degraded when many images)
var words_on_a4_page = 470; // Source: https://www.reference.com/education/many-words-single-spaced-typed-3b799a2e0894da55
                            // A average full written A4 page written with default Word-configurration contains 470 words.
var info_element_id = "readingtime"
var style = "position: fixed; \
z-index:50; \
right:0px; \
bottom:0px; \
padding: 3px 15px 3px 15px; \
background:rgba(255, 255, 255, 0.95); \
color:#888; \
font-size:14px; \
font-variant: all-small-caps;"

// Global variables
var readingtime_min = 0;
var pages = 1;
var readingtime_element = null;

// Init
document.body.onload = function() {
    readingtime_element = document.createElement("div");
    readingtime_element.id = info_element_id;
    readingtime_element.style.cssText = style;
    document.body.appendChild(readingtime_element);
    
    var article = document.getElementsByTagName("article")[0];
    var number_of_words = article.innerHTML.split(/\s+/).length;
    var number_of_images = article.getElementsByTagName("img").length;
    readingtime_min = Math.round(number_of_words / words_pr_min + number_of_images * sec_pr_image / 60);
    pages = Math.max(1, Math.ceil(number_of_words / words_on_a4_page));

    updateReadingTime(); // Init
};

// On scroll
window.onscroll = updateReadingTime;

function updateReadingTime() {
    if(readingtime_element != null) {
       var body = document.getElementsByTagName("body")[0];
       var scrolled_px = body.scrollTop + (window.innerHeight / 2);  // Measured from middle point on screen.
       var height_px = body.scrollHeight;

       var procent_scrolled = Math.max(0, scrolled_px / height_px); // Safari can have negative values.
       page = Math.min(pages, Math.floor(procent_scrolled * pages) + 1);

       readingtime_element.innerHTML = "Page "+page+"/"+pages+" · "+readingtime_min+" min";
    }
}