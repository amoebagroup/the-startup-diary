Single page apps 
================

a url in a sinlge page app looks something like this 
- "http://angular-ui.github.io/ui-router/sample/#/contacts"

A Deeper Look
 - location href 		: [origin, pathname, hash]
 - location origin   	: "http://angular-ui.github.io" // server, hosting our app
 - location pathname 	: "/ui-router/sample/"          // at this path server returns our app
 - location hash     	: "#/contacts"                  // app uses it to navigate between pages
 
 Single Page Apps, 
 - app launches when on entering (origin + pathname) in address bar.
 - when (origin + pathname) changes, app is closed.
 - location hash decides which page to render
 // [REMOVE]- on launch, app looks [cookie/location-hash/local-storage], and decides what to render next
 // - e.g. if session-id is missing in cookie, redirects to login page.
 //        or open a particular page for the user.
 //        or shows progress bar unless it downloads and add some data to local storage.

 e.g         
 - "#/<route>" 	: location hash represents which page to show
 - "#/"  		: usually represents home state [home/default view of app]

  Importance of location hash in a single page app
   -> location.hash is the part after "#" in current url (e.g. http://angular-ui.github.io/ui-router/sample/#/contacts)
     - it allows navigation to pages, within a sigle page app.
     - when part before # changes, page is relaoded(browsing context is lost)
     - browsing context encapsulates dom, js libraries, js objects in memory.
     - when page reloaded, browsing context is lost
     - with browsing context, we loose : dom, js libs, js objects in memory

Cross-origin-requests : CORS - cross origin resource sharing
- an ajax request to server at different location origin, than the page.
- such resoureces cant be accessed, unless specified explicitly
- allowed using "Access-Control-Allow-Origin" value in response header
- if it doesnt include our current location origin, browser doesnt allow access to it.

--------------------------------------------------------------------------
Single page app with angularjs and ui-router
================
Why angularjs : 
- and extension to browser, helpful in creating single page apps.
- its templates, directives, controller provides proverful way to generate html, manipulate dom, bind js logic and data to pages, 
- angularjs is not designed as a SinglePageApp framework 
- instead like am extension to browser.
- we design our singe-page-app on top of angular and ui-router.

- directives : 
	> hooks js code to html dom (controllers, app, validations logic etc.)
	> also provides a context to easily read/write on document pages ($scope and angular digest cycles)
	> create custom to manipulate dom, custom ui elements and element behaviours.

- services : 
    > allow sharing functionalities, throughout the app
    > some inbuilt services (always start with "$" sign) 
    	- $location for urls, 
    	- for async angular operations $timeout (digest cycles suck!)
    	- $http for ajax requests 
    > create custom to share common features across pages
    	- like get/update data from [server/cookie/storage/url].
	
- controllers : 
	> glues application logic to html templates. 
		- what data to show on page, 
		- what to do on user actions
	> interacts with services to get data to display and modify it on user action.

- filters     : 
	> for formatting logic shared across the pages
	> use like presenters/controller-helper
	> for logic like 
		- change to upper case,
		- round off a number

- templates :
	> for automatically rendering objects in memory, on html
	> awesome synchronization between in-memory objects and html page
	> angular digest cyclces ensure, every change in memory is reflected on html and vice versa.


Why ui router :  
- we design our app, as collection of pages.
- ui-router allows modeling the app, as a state-machine 
- each page is a state, and has 
	> a  route, 
	> an html template, 
	> a  controller.	
- navigating between pages means transition between states.
- easily 
	> change pages on url change (on loaction hash change).
	> do things before, after loading pages (e.g. clear search, warning messages, change tab)

--------------------------------------------------------------------------
Hands-on
========
1. create an angular app
 - every app is just another module.
 - every module has 
     > name,
     > list of depending modules
     
 - code  : 
  var myApp = angular.module("app", []); // module-name: "app", dependencies: none
  
 - how it works 
 angular.module = function(newModuleName, dependenciesArray){
 	// for all names in dependenciesArray, load modules, if not found  ?????
 	// create module with name newModuleName
 	// return new module
 }
 ????? -> when is the app actually created ? 
  
2. Create a home page
  - homepage will be like :
  	> router 	: "/#"
  	> htmleTemplate	: "pages/home/template.html"
  	> controller   	: "pages/home/controller.js"
  
  - steps to add the route : 
  	// a. we will add a config  to our app

  	var addHomeRoute = function($stateProvider){
  		// add new state(page) to stateProviderService
  	};

   	app.config(
   		['$stateProvider'], 
   		addHomeRoute
   	);

	- a.how congig works 
   	app.config = function( depndencyArray, callback) {
		// find all depndencies
   		// callback(depndency1, depndency2, ..)
   	}
   	//for example we could inject "$stateProvider and $urlProvider"
   	// $urlProvider is used to create redirects(YAGNI)

   	- b. how to register a state 


   	- about $stateProvider
   	 > defined by ui-router (ui.router.state.$stateProvider)
   	 > has a state method: 
   	 	$stateProvider.state = function(uniqueName, stateConfig){
   	 		// register state with (route, template, controller)
   	 	}
   	 > allows nesting of states(nested pages, redirects, before, after page load actions), 
   	 > dont worry, YAGNI

   	var addHomeRoute = function($stateProvider){
  		$stateProvider.state( 
  		  "home",{
			url 		: "", 							// part after '#', hence empty
    			templateUrl	: "pages/home/template.html",
    			controllers	: "pages/home/controller.js"
  		   }
  		);
  	};
 
 
 3. 
to do : 
--------------------------------------------------------------------------
     
3.display a list of items on home page
4. create another view to edit it.
5. another one to view it

-  How to register
   angular app can be configured like : 





     myapp.config([
    '$stateProvider', function ($stateProvider) {
      crawler.app.views.forEach(function (view) {
        $stateProvider.state(view.state, {
          url: "/home",
          views: {
            default: {
              templateUrl: view.template,
              controller: view.controller
            }
          }
        })
      });
      return $stateProvider;
    }
  ]);
