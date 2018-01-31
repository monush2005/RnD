(function(H) {
  'use strict';
    H.wrap(H.Axis.prototype, 'drawCrosshair', function(proceed) {
        var axis = this;
        var wasRendered = !!axis.cross; // on init, cross is not defiend
        proceed.apply(axis, Array.prototype.slice.call(arguments, 1));

        if (!wasRendered && axis.cross && axis.options.clickOnCrosshair) {
            axis.cross.on('click', function(e) {
                var point = axis.chart.hoverPoint;
                axis.options.clickOnCrosshair(e, point);
            });
        }

    });
})(Highcharts);