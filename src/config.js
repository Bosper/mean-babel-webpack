import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoController from 'todos/todos';

const app = angular.module( 'app', [ uiRouter ] );

app.config(( $stateProvider, $urlRouterProvider, $locationProvider ) => {
  $urlRouterProvider.otherwise( '/' );
  $stateProvider
    .state( 'todos', {
      url: '/',
      template: require( 'todos/todos.html' ),
      controller: todoController
    } )
    .state( 'about', {
      url: '/about',
      template: require( 'about/about.html' )
    } );

    $locationProvider.html5Mode( true );
} );

export default app;
