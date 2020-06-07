define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/MyWidget.html"
], function(declare, _WidgetBase, _TemplatedMixin, Welcome) {
 
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: Welcome
    });
});
