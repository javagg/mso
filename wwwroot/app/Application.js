Ext.define('Mso.Application', {
    extend: 'Ext.app.Application',
    autoCreateViewport: 'Mso.view.main.Main',
    onBeforeLaunch: function () {
        this.callParent();
    }
});
