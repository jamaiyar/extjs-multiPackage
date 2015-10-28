/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('PackOne.view.PackOneMainView', {
    extend: 'Ext.container.Container',
    alias : 'widget.PackOneMainView',
    cls: 'packone-mainview',

    requires: [
        'PackOne.view.PackOneMainController'
    ],

    controller: 'PackOneMainController',

    title: 'First package title',

    items: [
        {
            html: '<h2>Content for Package One main view</h2> <h2>This font color is picked from package level css</h2>',
            itemId: 'panelTitleId',
            cls: 'panel-title-cls'
        },
        {
            xtype: 'button',
            text: 'Test Button',
            handler: 'toggleString'
        }
    ]
});
