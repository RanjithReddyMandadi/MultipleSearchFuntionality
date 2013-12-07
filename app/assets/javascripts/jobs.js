/*$(document).ready( function () {
    $('#jobs').dataTable().columnFilter({aoColumns: [ null,
        { type: "text" },
        null,
        { type: "text" },
        null,
        null,
        null
    ]});
} );
    */

$.fn.dataTableExt.afnFiltering.push(
    function( oSettings, aData, iDataIndex ) {
        var iMin = parseInt(document.getElementById('minsal').value) * 1;
        var iMax = parseInt(document.getElementById('maxsal').value) * 1;
        var salary = aData[3].split(/-/)
        var salary1 = aData[3] == "-" ? 0 : parseInt(salary[0].replace(/[^\d.]/g,''))* 1;
        var salary2 = aData[3] == "-" ? 0 : parseInt(salary[1].replace(/[^\d.]/g,''))* 1;
         //var salary1 = aData[3]=="-" ? 0 : parseInt(aData[3])                                                                 //alert(salary);
        //salary[0] =
        //var salary1 = parseInt();


        if ( iMin == "" && iMax == "" )
        {
            return true;
        }
        else if (( iMin == "" && salary1 <= iMax )||( iMin == "" && salary2 <= iMax ))
        {
            return true;
        }
        else if (( iMin < salary1 && "" == iMax )||( iMin < salary2&& "" == iMax ))
        {
            return true;
        }
        else if (( iMin <= salary1 && salary1 <= iMax ) || ( iMin <= salary2 && salary2 <= iMax ))
        {
            return true;
        }
        return false;
    }
);


//$(document).ready(function() {
    /* Initialise datatables */
   // $('#jobs').dataTable();

    /* Add event listeners to the two range filtering inputs */
    //$('#minsal').keyup( function() { oTable.fnDraw(); } );
    //$('#maxsal').keyup( function() { oTable.fnDraw(); } );
//} ); */
/* Custom filtering function which will filter data in column four between two values */
/*$.fn.dataTableExt.afnFiltering.push(
    function( oSettings, aData, iDataIndex ) {
        var iMin = parseInt(document.getElementById('minsal').value) * 1;
        var iMax = parseInt(document.getElementById('maxsal').value) * 1;
        var iVersion = aData[4] == "-" ? 0 : aData[4]*1;
        if ( iMin == "" && iMax == "" )
        {
            return true;
        }
        else if ( iMin == "" && iVersion < iMax )
        {
            return true;
        }
        else if ( iMin < iVersion && "" == iMax )
        {
            return true;
        }
        else if ( iMin < iVersion && iVersion < iMax )
        {
            return true;
        }
        return false;
    }
);
     */
$(document).ready(function() {
    /* Initialise datatables */
    var oTable = $('#jobs').dataTable();

    /* Add event listeners to the two range filtering inputs */
    $('#minsal').keyup( function() { oTable.fnDraw(); } );
    $('#maxsal').keyup( function() { oTable.fnDraw(); } );
    oTable.columnFilter({aoColumns: [ null,
        { type: "text" },
        null,
        { type: "text" },
        null,
        null,
        null
    ]});
} );