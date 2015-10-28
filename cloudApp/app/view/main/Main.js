/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('CloudApp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'CloudApp.view.main.MainController',
        'CloudApp.view.main.MainModel'
    ],

    xtype: 'app-main',
    cls: 'app-main-cls',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    // layout: {
    //     type: 'border'
    // },

    items: [{
        xtype: 'tabpanel',
        items:[
        {
            xtype: 'PackOneMainView'
        },
        {
            xtype: 'PackTwoMainView'
        }
        ]
    }]
});
