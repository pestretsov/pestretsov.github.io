<script>
    var localData = new kendo.data.DataSource({
        data: courses
    });
    $("#listView").kendoListView({
        dataSource: localData,
        template: kendo.template($("#template").html())
    });
</script>
<script>
    $(document).ready(function() {
        // create a template using the above definition
        var template = kendo.template($("#template").html());
        var dataSource = new kendo.data.DataSource({
            data: courses,
            change: function() { // subscribe to the CHANGE event of the data source
                $("#courses tbody").html(kendo.render(template, this.view())); // populate the table
            }
        });
        // читаем JSON'ки из файлика courses.js
        dataSource.read();
    });
</script>

// V2.0 BETA

<script>
    var coursesNextID = courses.length + 1;

    function getIndexById(id) {
        var idx,
        l = courses.length;

        for (var j; j < l; j++) {
            if (courses[j].CourseID == id) {
                return j;
            }
        }
        return null;
    }

    $(document).ready(function() {
        var localData = new kendo.data.DataSource({
            transport: {
                read: function (e) {
                    // get and print on success
                    e.success(courses);
                },
                create: function (e) {
                    // assign an ID to the new item
                    e.data.CourseID = coursesNextID++;
                    // save data item to the original datasource
                    courses.push(e.data);
                    e.success(e.data);
                },
                parameterMap: function(options, operation) {
                    if (operation !== "read" && options.models) {
                        return {models: kendo.stringify(options.models)};
                    }
                },
                update: function (e) {
                    // locate item in original datasource and update it
                    courses[getIndexById(e.data.CourseID)] = e.data;
                    e.success();
                }
            },
            error: function (e) {
                // handle data operation error
                alert("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            pageSize: 10,
            batch: false,
            schema: {
                model: {
                    id: "CourseID",
                    fields: {
                        title: { validation: { required: true } },
                        description: { validation: { required: true } },
                        year: { type: "date" }
                    }
                }
            }

        });

        var listView = $("#listView").kendoListView({
            dataSource: localData,
            template: kendo.template($("#template").html()),
        }).data("kendoListView");


    });

</script>
