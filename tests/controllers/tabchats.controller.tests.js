describe('tab-chats', function(){

    // Locals
    var $scope, $compile, $templateCache, compileProvider, Chats, template, ctrl;

    // Load app & ng-html2js pre-processed templates
    beforeEach(module('starter'));
    beforeEach(module('templates'));

    // Inject $compileProvider
    beforeEach(module(function($compileProvider) {   
        compileProvider = $compileProvider;
    }));

    // Inject services, 
    // Spin up the template as a directive with ChatsCtrl as its controller
    beforeEach(inject(function(_$rootScope_, _$compile_, _Chats_){
        
        $scope = _$rootScope_;
        $compile = _$compile_;
        Chats = _Chats_;

        // Behind the scenes, templateUrl will grab the template from $templateCache
        compileProvider.directive('chatsCtrlTest', function(){
            return {
                controller: 'ChatsCtrl',
                templateUrl:'templates/tab-chats.html'
            }
        });

        // Compile it and bind to $scope.
        template = angular.element('<chats-ctrl-test></chats-ctrl-test>');
        $compile(template)($scope);
        $scope.$digest();

        // If the Ionic starter app used 'controller as' syntax and bound its 
        // variables to 'this', we could get the controller instance like this:
        ctrl = template.controller();
    }));
    
    // Tests 
    describe('tab-chats', function(){

        it('should show a list of chats', function(){
     
           var list = template.find('ion-item');
           var number_of_chats = $scope.chats.length;
     
           expect(list.length).toEqual(number_of_chats);
     
        });
     
        it('should call the remove method when delete is tapped', function(){
     
           var first_item = template.find('ion-item').first();
           var first_chat = $scope.chats[0];
           var button = first_item.find('ion-option-button');
     
           spyOn($scope, 'remove');
           button.triggerHandler('click');
           $scope.$digest();
     
           expect($scope.remove).toHaveBeenCalledWith(first_chat);
     
        });
     
        it('should link each item to the correct detail view', function(){
     
           var first_item = template.find('ion-item').first();
           var first_chat = $scope.chats[0];
           var expected_link = '#/tab/chats/' + first_chat.id;
     
           expect(first_item.attr('href')).toEqual(expected_link);
        })
     });

});