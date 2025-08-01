/**
 * DataTables Extensions (jquery)
 */

'use strict';

$(function () {
  var dt_select_table = $('.dt-select-table');

  // Select
  // --------------------------------------------------------------------

  if (dt_select_table.length) {
    var dt_select = dt_select_table.DataTable({
      dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>><"table-responsive"t><"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      language: {
        paginate: {
          next: '<i class="ti ti-chevron-right ti-sm"></i>',
          previous: '<i class="ti ti-chevron-left ti-sm"></i>'
        }
      }/*,
      select: {
        // Select style
        style: 'multi'
      }*/
    });
  }

  // Filter form control to default size
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 200);
});
