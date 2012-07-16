/**
 * The List of agendas.
 */
OKnesset.app.views.AgendaListView = new Ext.extend(Ext.List, {
    id: 'AgendaListView',
    store: OKnesset.AgendaStore,
    itemTpl: '<div class="agendaName">{name}</div>',
    onItemDisclosure: true
});

Ext.reg('AgendaListView', OKnesset.app.views.AgendaListView);