to do : 

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
  
2. create a home page(#/)
  - sub-route is the part after the "#", 
  - each sub-route represents a page in app
  - we add new page by adding a config for the page, and declaring an angular controller to use with it.
  - we add 

window.location: a deeper look
 - page-url          : http://angular-ui.github.io/ui-router/sample/#/contacts
 - location.origin   : "http://angular-ui.github.io" // server
 - location.pathname : "/ui-router/sample/"          // path at which ur web server, returns html page]
 - location.hash     : "#/contacts"                  // information of current page, appended to url
 
 Single Page Apps, 
 - identified by combination: [origin + pathname]
 - app launches when (origin + pathname) is invoked from adress bar 
 - when (origin + pathname) changes, app is closed.
 - app looks at part after [#, cookie, storage], and decides what to render next
 - e.g. if session-id is missing in cookie, redirects to login page.
        or open a particular page for the user.
        
 - "#/<route>" hash is used to store the routes, for navigating between pages ().
 - "#/"  : usually represent home view (u see when app starts for first time)
 
  Importance of location hash in a single page app
   -> location.hash is the part after "#" in current url (e.g. http://angular-ui.github.io/ui-router/sample/#/contacts)
     - it allows navigation to pages, within a sigle page app.
     - when part before # changes, page is relaoded(browsing context is lost)
     - browsing context encapsulates dom, js libraries, js objects in memory.
     - when page reloaded, browsing context is lost
     - with browsing context, we loose : dom, js libs, js objects in memory
     
3.display a list of items on home page
4. create another view to edit it.
5. another one to view it


--> googling tip : remove search result older than a year, always !!!


2. create home route ("/")
   register routes in app config
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
