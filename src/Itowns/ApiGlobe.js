define([
    "itowns"
], function (
    itowns
) {

    "use strict";

<<<<<<< HEAD
    woodman.load("console");
    var logger = woodman.getLogger("GeoportalMousePosition");

    /**
     * @classdesc
     *
     * ApiGlobe
     *
     */
    function ApiGlobe () {
        this.controls = [];
    };

    /**
     * Constructor (alias)
     */
    ApiGlobe.prototype = itowns.viewer;

    /**
     * Constructor (alias)
     */
    ApiGlobe.prototype.constructor = ApiGlobe;

    /**
     * Add a widget.
     */
    ApiGlobe.prototype.addControl = function addControl(control) {
        control.setMap(this.scene.map);
        this.getControls().push(control);
    };

    /**
     * Returns all widgets.
     * @return     {array}  The array of widgets.
     */
    ApiGlobe.prototype.getControls = function getControls() {
        return this.controls;
    };

    /**
     * Remove a widget.
     * @param {object} Widget - The Widget object.
     */
    ApiGlobe.prototype.removeControl = function removeControl(control) {
        control.setMap();
        this.controls.delete(control);
    };

    return ApiGlobe;
=======
/* global Widget */
/* global itowns */

function ApiGlobe() {
    return;
}

/**
 * Copies all source object members to ApiGlobe prototype
 *
 * @param {Object} source - source object whose properties will be copied.
 * @private
 */
// ApiGlobe.prototype.assign = function ( source ) {
//     for ( var prop in source ) {
//         if ( source.hasOwnProperty(prop) ) {
//             console.log(this);
//             this[prop] = source[prop];
//         }
//     }
// };

// ApiGlobe.prototype.assign(itowns.viewer);

ApiGlobe.prototype = Object.create(itowns.viewer, {});


/**
 * Constructor (alias)
 *
 * @private
 */
ApiGlobe.prototype.constructor = ApiGlobe;

// ApiGlobe.prototype = Object.create(itowns.viewer.prototype, {});

/**
 * array of added widgets
 */
ApiGlobe.prototype.widgets = [];

/**
 * Add a widget.
 */

ApiGlobe.prototype.addWidget = function addWidget(widget) {
    widget.setMap(itowns.viewer.scene.getMap());
    this.widgets.push(widget);
};

/**
 * Returns all widgets.
 * @return     {array}  The array of widgets.
 */

ApiGlobe.prototype.getWidgets = function getWidget() {
    return this.widgets;
};

/**
 * Remove a widget.
 * @param {object} Widget - The Widget object.
 */

ApiGlobe.prototype.removeWidget = function removeWidget(widget) {
    widget.setMap();
    this.widgets.delete(widget);
};

return ApiGlobe;
>>>>>>> af10122... Extension de l'API itowns pour integration des widgets
});