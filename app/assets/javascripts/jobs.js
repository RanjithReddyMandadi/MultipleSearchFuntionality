
$.fn.dataTableExt.afnFiltering.push(
    function( oSettings, aData, iDataIndex ) {
        var iMin1 = document.getElementById('minsal').value * 1;
        var iMax1 = document.getElementById('maxsal').value * 1;
        var salary = aData[3].split(/-/);
        var salary1 = aData[3] == "-" ? 0 : parseInt(salary[0].replace(/[^\d.]/g,''))* 1;
        var salary2 = aData[3] == "-" ? 0 : parseInt(salary[1].replace(/[^\d.]/g,''))* 1;
         var iMin = parseInt(iMin1);
		 var iMax = parseInt(iMax1);

        if ( iMin1 == "" && iMax1 == "" )
        {
            return true;
        }
        else if (( iMin == "" && salary1 <= iMax )||( iMin == "" && salary2 <= iMax ))
        {
            return true;
        }
        else if (( iMin < salary1 && "" == iMax )||( iMin < salary2 && "" == iMax ))
        {
            return true;
        }
       
	else if (( iMin <= salary1 || iMin <= salary2) && (iMax>salary1 && (iMax<=salary2 || iMax>=salary2)))
        {
            return true;
           
        }
	
        return false;
    }
);



$(document).ready(function() {
    /* Initialise datatables */
    var oTable = $('#jobs').dataTable();

    /* Add event listeners to the two range filtering inputs */
   
    oTable.columnFilter({aoColumns: [ { type: "text" },
        { type: "text" },
        null,
        null,
        null,
        null,
        null
    ]});
	 $('#minsal').keyup( function() { oTable.fnDraw(); } );
    $('#maxsal').keyup( function() { oTable.fnDraw(); } );
} );
