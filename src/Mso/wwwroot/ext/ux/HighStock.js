Ext.define("Ext.ux.HighStock", {
    extend: 'Ext.Component',
    alias: ['widget.highstock'],
    chart: null,

    onRender: function () {
        var me = this;
        me.callParent(arguments);
        var id = me.getEl().dom.id;
        this.chart = new Highcharts.Chart({
            chart: {
                renderTo: this.getEl().dom.id
            }
        });
    }
});
