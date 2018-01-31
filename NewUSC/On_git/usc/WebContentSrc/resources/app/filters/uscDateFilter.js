(function(app) {
    'use strict';
    app.filter('uscDate', uscDate);

    function uscDate() {
        return function(date, format) {
        	if(!date)
        		return '';
            format = format ? format : 'D, MMM YYYY, h:mm:ss A';
            return moment(date).format(format);
        }
    }
})(angular.module('selfcare'));
