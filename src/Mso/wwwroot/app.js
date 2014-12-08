Ext.Loader.setPath('Ext.ux', 'ext/ux');
Ext.require([
    'Ext.ux.form.field.Ace',
    'Ext.ux.form.field.CodeMirror',
    'Ext.ux.HighStock' 
]);

Ext.application({
    name: "Mso",
    extend: 'Mso.Application'
});
