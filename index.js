var volunteerAll = $('#volunteerAll').DataTable({
        'processing': true,
        'serverSide': true,
        "ajax": {
            url: baseUrl+"/back-end/api/user/filter.php",
            method: "POST",
            data:function(d) {
                d.key = "volunteer";
                d.value = "1";
                return JSON.stringify(d);
            } 
        },
        "columns": [
            { "data": "sn" },
            { "data": "m_id" },
            { "data": "name_photo" },
            { "data": "phone_action" },
            { "data": "blood_group" },
            { "data": "team_name" },
            { "data": "author_name" },
            { "data": "u_role" },
            { "data": "status_name" },
            { "data": "created" },
            { "data": "action" }
        ],
        "columnDefs": [
            { "targets": [9], 'orderable': false, 'className': 'text-center' }
        ],
        "order": [],
        "drawCallback": function (settings) {
            feather.replace();
        }
    });
