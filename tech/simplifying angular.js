to do : 

Single page apps : 
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
 - on launch, app looks [cookie/location-hash/local-storage], and decides what to render next
 - e.g. if session-id is missing in cookie, redirects to login page.
        or open a particular page for the user.
        or shows progress bar unless it downloads and add some data to local storage.

 e.g         
 - "#/<route>" 	: locaiton hash represents which page to show
 - "#/"  		: usually represents home state [home/default view of app]
 
  Importance of location hash in a single page app
   -> location.hash is the part after "#" in current url (e.g. http://angular-ui.github.io/ui-router/sample/#/contacts)
     - it allows navigation to pages, within a sigle page app.
     - when part before # changes, page is relaoded(browsing context is lost)
     - browsing context encapsulates dom, js libraries, js objects in memory.
     - when page reloaded, browsing context is lost
     - with browsing context, we loose : dom, js libs, js objects in memory
--------------------------------------------------------------------------


1. create an agular app
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
  
2. Create a home page(#/)
  - sub-route is the part after the "#", 
  - each sub-route represents a page in app
  - we add new page by adding a config for the page, and declaring an angular controller to use with it.
  - we add 

     
3.display a list of items on home page
4. create another view to edit it.
5. another one to view it

-  How to register
   angular app can be configured like : 

   	//assumption
   app.config = function( depndencyArray, callback) {
   	// find all depndencies
   	// callback(depndency1, depndency2, ..)
   }


   app.config(
   		['$stateProvider'], 
   		function(stateProvider){
   			// add new state
   		}
   );

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
