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
  - sub route is the part after the "#", 
  - each route represents a page in app
  - we a page by adding a config for app
  - we add 

  # -> we call it sub-route here, more later.
     -  it allows navigation to pages,
     	within a sigle page app
     	(if part before # changes, page is relaoded, browsing context is lost)
     	browsing context encapsulates dom, js libs, js runtime, 
     	as it changes, so does every thing else

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
