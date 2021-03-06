angular.module('starter.addContact', [])
  .directive("addContact", AddContact);

function AddContact($cordovaContacts){
    return {
       restrict: 'E',   
       replace: true,
       scope: {contact: '='},
       templateUrl: 'templates/addContact.html',
      
       link: function(scope, elem, attrs){

          // Bound to ng-show in the template
          scope.contactAdded = false; 

          // Bound to ng-click: adds to native contacts
          scope.createContact = function(){

            var contactInfo ={ "displayName": scope.contact.name };
            
            $cordovaContacts.save(contactInfo).then(function(result) {     
                scope.contactAdded = true;        
            }, function(error){
                scope.contactAdded = false;
            });    
          }
        }
    };
 };