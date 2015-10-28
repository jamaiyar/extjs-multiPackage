/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('PackTwo.view.PackTwoMainView', {
    extend: 'Ext.container.Container',
    alias : 'widget.PackTwoMainView',
    cls: 'secondpack-mainview',

    title: 'Second package title',

    items: [{
        html: '<h2>Content for Package Two main view</h2>',
        cls: 'panel-title-cls'
    }]
});
