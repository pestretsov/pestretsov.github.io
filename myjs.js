

/*
var viewModel = kendo.observable({
    isVisible: true,
    onSave: function(e) {
        kendoConsole.log("event :: save(" + kendo.stringify(e.model, null, 4) + ")");
    },
    products: new kendo.data.DataSource({
        schema: {
            model: {
                id: "ProductID"
            }
        },
        batch: true,
        transport: {
            read: {
                url: "http://demos.telerik.com/kendo-ui/service/products",
                dataType: "jsonp"
            },
            update: {
                url: "http://demos.telerik.com/kendo-ui/service/products/update",
                dataType: "jsonp"
            },
            destroy: {
                url: "http://demos.telerik.com/kendo-ui/service/products/create",
                dataType: "jsonp"
            },
            parameterMap: function(options, operation) {
                if (operation !== "read" && options.models) {
                    return {models: kendo.stringify(options.models)};
                }
            }
        }
    })
});
*/
