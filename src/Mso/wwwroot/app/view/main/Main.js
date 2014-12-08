Ext.define('Mso.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    layout: 'border',

    items: [
          {
            region: 'north',
            xtype: 'panel',
            layout: {
                type: 'hbox',
                align: 'center'
            },
            cls: 'appBanner',
            items: [{
                padding: 5,
                html: "<b>Mequanta Studio Online</b>",

            }, {
                xtype: 'panel',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                flex: 1,
                items: [{
                    xtype: "toolbar",
                    flex: 1,
                    layout: 'hbox',
                    border: false,
                    items: [{
                        text: "File",
                        menu: {
                            items: [{
                                text: 'Save'
                            }, {
                                text: 'Load'
                            }]
                        }
                    }, {
                        text: "Edit",
                        menu: {
                            items: [{
                                text: 'Copy'
                            }, {
                                text: 'Paste'
                            }]
                        }
                    }, '->', {
                        text: "Help",
                        menu: {
                            items: [{
                                text: "About"
                            }]
                        }
                    }]
                }, {
                    xtype: "toolbar",
                    flex: 0,
                    items: [{
                        text: "Open",
                        xtype: "splitbutton"
                    }, {
                        text: "Build",
                        xtype: "splitbutton"
                    }, '-', {
                        text: "Run",
                        xtype: "splitbutton"
                    }]
                }, ]
            }],
        },{
            xtype: 'panel',
            title: 'Providers',
            region: 'west',
            html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
            width: 200,
            minWidth: 175,
            maxWidth: 400,
            collapsible: true,
            animCollapse: true,
            split: true,
            layout: 'accordion',
            items: [{
                title: 'Navigation',
                iconCls: 'nav' // see the HEAD section for style used
            }, {
                title: 'Settings',
                html: '<p>Some settings in here.</p>',
                iconCls: 'settings'
            }, {
                title: 'Information',
                html: '<p>Some info in here.</p>',
                iconCls: 'info'
            }]
        },{
            region: 'south',
            split: true,
            height: 100,
            minSize: 100,
            maxSize: 200,
            collapsible: true,
            collapsed: true,
            title: 'South',
            margins: '0 0 0 0'
        },{
            xtype: 'tabpanel',
            region: 'east',
            title: 'East Side',
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                items: ['->', {
                    xtype: 'button',
                    text: 'test',
                    tooltip: 'Test Button'
                }]
            }],
            animCollapse: true,
            collapsible: true,
            split: true,
            width: 225, // give east and west regions a width
            minSize: 175,
            maxSize: 400,
            margins: '0 5 0 0',
            activeTab: 1,
            tabPosition: 'bottom',
            items: [{
                html: '<p>A TabPanel component can be a region.</p>',
                title: 'A Tab',
                autoScroll: true
            }, {
                xtype: 'propertygrid',
                title: 'Property Grid',
                closable: true,
                source: {
                    "(name)": "Properties Grid",
                    "grouping": false,
                    "autoFitColumns": true,
                    "productionQuality": false,
                    "created": Ext.Date.parse('10/15/2006', 'm/d/Y'),
                    "tested": false,
                    "version": 0.01,
                    "borderWidth": 1
                }
            }]
        },{
            region: 'center',
            xtype: 'tabpanel',
            items: [{
                title: 'Code',
                value: "using System;",
                autoScroll: true,
                xtype: 'ace'
            }, {
                title: 'Chart',
                xtype: 'highstock',
                closable: true,
                autoScroll: true
            }, {
                title: 'code2',
                value: 'using System;',
                xtype: 'codemirror',
                closable: true,
                autoScroll: true
            }]
        }
    ]
});
