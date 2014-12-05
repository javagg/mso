Ext.define("Ext.ux.form.field.Ace", {
    extend: 'Ext.Component',
    alias: ['widget.ace'],
    editor: null,

    onRender: function () {
        var me = this;
        me.callParent(arguments);
        me.editor = ace.edit(me.getEl().dom.id);
        me.editor.setTheme("ace/theme/monokai");
        me.editor.getSession().setMode("ace/mode/csharp");        
    }
});
