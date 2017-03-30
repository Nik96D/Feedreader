$(function() {
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have a URL defined', function() {
            allFeeds.forEach(function (feed) {
            var urlFeed = feed.url;
            expect (urlFeed).toBeDefined();
            expect (urlFeed.length).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have a Name defined', function() {
            allFeeds.forEach(function (feed) { 
                var nameFeed = feed.name;
            expect (nameFeed).toBeDefined();
            expect (nameFeed.length).not.toBe(0);
        });
    });
});



/* TODO: Write a new test suite named "The menu" */
describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            var bodyDocument = document.body;
            expect ($(bodyDocument).hasClass('menu-hidden')).toBe(true);
        });
            
          /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it ('displays when clicked and hides when clicked again', function (){
            $('a.menu-icon-link').click();
            expect(document.body.className).not.toContain('menu-hidden');
            
            $('a.menu-icon-link').click();
            expect(document.body.className).toContain('menu-hidden');
        });
});
    /* TODO: Write a new test suite named "Initial Entries" */

describe('Initial Entries', function() {
        beforeEach(function (done) {
            loadFeed(0, done);
       });
         it('ensures loadFeed is called and there is at least a single .entry element within the .feed container.', function(done) {
             expect( $('.feed').length ).toBeGreaterThan(0);
             done();
            });
    
     
//TODO: Write a new test suite named "New Feed Selection"
describe('New Feed Selection', function() {
         /*TODO: Write a test that ensures when a new feed is loaded
         by the loadFeed function that the content actually changes.
          Remember, loadFeed() is asynchronous.*/
        resetFeed(function(done) {
            var oldFeed;
            loadFeed(0, function(){
                oldFeed = $('.feed .entry > h2').first().text();
            done();
            });
        });
        

        beforeEach(function(done) {
            loadFeed(2, done);
        });



    it ('ensures that the loadFeed function loads a new feed', function (done){
        var newFeed = $('.feed .entry > h2').first().text();
        expect( newFeed ).not.toBe( oldFeed );
     

     });    
   });



});
}());
