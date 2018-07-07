!(function() {
  'use strict';
  angular.module('jkAngularRatingStars', ['jkAngularRatingStars.templates']);
})(),
  (function() {
    'use strict';
    function RatingStarsController($scope, $attrs, $timeout) {
      var that = this;
      void 0 === that.readOnly && (that.readOnly = !1),
        (that.initStarsArray = function() {
          (that.starsArray = that.getStarsArray()), that.validateStars();
        }),
        (that.getStarsArray = function() {
          for (
            var starsArray = [], index = 0;
            index < that.maxRating;
            index++
          ) {
            var starItem = { index: index, class: 'star-off' };
            starsArray.push(starItem);
          }
          return starsArray;
        }),
        (that.setRating = function(rating) {
          that.readOnly ||
            ((that.rating = rating),
            that.validateStars(that.rating),
            $timeout(function() {
              that.onRating({ rating: that.rating }), $scope.$apply();
            }));
        }),
        (that.setMouseOverRating = function(rating) {
          that.readOnly || that.validateStars(rating);
        }),
        (that.validateStars = function(rating) {
          if (that.starsArray && 0 !== that.starsArray.length)
            for (var index = 0; index < that.starsArray.length; index++) {
              var starItem = that.starsArray[index];
              rating - 1 >= index
                ? (starItem['class'] = 'star-on')
                : (starItem['class'] = 'star-off');
            }
        });
    }
    angular
      .module('jkAngularRatingStars')
      .controller('RatingStarsController', [
        '$scope',
        '$attrs',
        '$timeout',
        RatingStarsController,
      ]);
  })(),
  (function() {
    'use strict';
    function RatingStarsDirective() {
      function link(scope, element, attrs, ctrl) {
        (!attrs.maxRating || parseInt(attrs.maxRating) <= 0) &&
          (attrs.maxRating = '5'),
          scope.$watch('ctrl.maxRating', function(oldVal, newVal) {
            ctrl.initStarsArray();
          }),
          scope.$watch('ctrl.rating', function(oldVal, newVal) {
            ctrl.validateStars(ctrl.rating);
          });
      }
      return {
        restrict: 'E',
        replace: !0,
        templateUrl: 'rating-stars-directive.html',
        scope: {},
        controller: 'RatingStarsController',
        controllerAs: 'ctrl',
        bindToController: {
          maxRating: '@?',
          rating: '=?',
          readOnly: '=?',
          onRating: '&',
        },
        link: link,
      };
    }
    angular
      .module('jkAngularRatingStars')
      .directive('jkRatingStars', [RatingStarsDirective]);
  })(),
  (function() {
    angular.module('jkAngularRatingStars.templates', []).run([
      '$templateCache',
      function($templateCache) {
        $templateCache.put(
          'rating-stars-directive.html',
          '<div\n  class="jk-rating-stars-container"\n  layout="row" >\n\n  <a\n    class="button"\n    ng-click="ctrl.setRating(0)"\n    ng-if="!ctrl.readOnly" >\n    <i class="material-icons">remove_circle_outline</i>\n  </a>\n\n  <a\n    class="button star-button"\n    ng-class="item.class"\n    ng-mouseover="ctrl.setMouseOverRating($index + 1)"\n    ng-mouseleave="ctrl.setMouseOverRating(ctrl.rating)"\n    ng-click="ctrl.setRating($index + 1)"\n    ng-repeat="item in ctrl.starsArray" >\n    <i class="material-icons">star</i>\n  </a>\n\n</div>\n'
        );
      },
    ]);
  })();
