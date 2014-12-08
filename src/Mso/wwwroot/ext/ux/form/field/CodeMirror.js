Ext.define("Ext.ux.form.field.CodeMirror", {
    extend: 'Ext.form.field.TextArea',
    alias: ['widget.codemirror'],
    editor: null,

    onRender: function () {
        var me = this;
        me.callParent(arguments);
        me.editor = CodeMirror.fromTextArea(me.inputEl.dom, {
            lineNumbers: true,
            matchBrackets: true,
            mode: "text/x-csharp"
        });
    }
});
