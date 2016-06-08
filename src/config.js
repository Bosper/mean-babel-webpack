var angular = require('angular');
var uiRouter = require('angular-ui-router');

const app = angular.module( 'app', [ uiRouter ] );

app.config(( $stateProvider, $urlRouterProvider, $locationProvider ) => {
  $urlRouterProvider.otherwise( '/' );
  $stateProvider
    .state( 'todos', {
      url: '/',
      template: require( 'todos/todos.html' )
    } )
    .state( 'about', {
      url: '/about',
      template: require( 'about/about.html' )
    } )

    $locationProvider.html5Mode( true );
} );

export default app;
