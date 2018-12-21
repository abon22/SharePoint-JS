<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript" src="https://intranet.houseofit.com.au/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="https://intranet.houseofit.com.au/SiteAssets/Scripts/jquery.timeago.js"></script><script src="https://intranet.houseofit.com.au/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript" src="https://intranet.houseofit.com.au/Lists/Survey%20Test/_layouts/15/sp.runtime.js"></script><script type="text/javascript" src="https://intranet.houseofit.com.au/Lists/Survey%20Test/_layouts/15/sp.js"></script>
<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script>
<script src="/_layouts/15/init.js" type="text/javascript"></script>
<script src="/_layouts/15/SP.UserProfiles.js" type="text/javascript"></script><script type="text/javascript">


var issue_id;
var status;
var avg_div;


 $(document).ready(function(){

    init();


  //  run_chart();
});

var userProfileProperties;

//ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
 var targetUser;

 function init(){
//SPUtility.GetSPField('Temp').MakeReadOnly();
//SPUtility.HideSPField('Temp');

        //------------------------
    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));
    

 }

 var get_preferredname;
  function onQuerySucceeded() {

    var account = targetUser.get_loginName();
//alert(account);
    targetUser_temp = account.substring(account.indexOf("|") +10);
    targetUser = targetUser_temp;
    //alert(targetUser);

SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');
  }

function getUserProperties() {
targetUser = 'hoitcebu\\'+targetUser;
//alert(targetUser);
var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);


    var profilePropertyNames = ["PreferredName"];
       var userProfilePropertiesForUser =
        new SP.UserProfiles.UserProfilePropertiesForUser(
            clientContext,
            targetUser,
            profilePropertyNames);

    userProfileProperties = peopleManager.getUserProfilePropertiesFor(
        userProfilePropertiesForUser);

    // Load the UserProfilePropertiesForUser object and send the request.
    clientContext.load(userProfilePropertiesForUser);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
}

function onRequestSuccess() {
    get_preferredname = userProfileProperties[0];
   //alert(targetUser);
   //get_cel();
   run_chart();
}


  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    //hide
    $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

}


function run_chart(){
             //Get the current context  
             var context = new SP.ClientContext();  
         //Get the Announcements list. Alter this code to match the name of your list  
         var list = context.get_web().get_lists().getByTitle('Continuing Education Logs');  
         //Create a new CAML query  
         var caml = new SP.CamlQuery();  
         //Create the CAML that will return only items with the titles that begin with 'T'  
        caml.set_viewXml("<Query><OrderBy><FieldRef Name='Created' /></OrderBy></Query>");
         //Specify the query and load the list oject  
        returnedItems = list.getItems(caml); 
         context.load(returnedItems);  
         //Run the query asynchronously, passing the functions to call when a response arrives  
         context.executeQueryAsync(onSucceededCallback, onFailedCallback);  
         
         avg_div = document.getElementById('averagehere');

         avg_div.innerHTML = "<table cellspacing='0' id='table_id' class='ms-rteTable-default' style='width: 865px;'> <tbody><tr class='ms-rteTableHeaderRow-default' style='background: #ffffff; text-align: center;'> <th class='ms-rteTableHeaderEvenCol-default' rowspan='1' colspan='14' style='border-color: #e5e5e5; width: 49px; text-align: center;'> <h1>My ​Yearly Continuing Education (hrs)<br/></h1> </th> </tr> <tr class='ms-rteTableEvenRow-default' style='text-align: center;'> <td class='ms-rteTableEvenCol-default' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'>​<b>Year</b><br/></span></td> <td class='ms-rteTableOddCol-default' colspan='1' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'>​<b>Jan</b><br/></span></td> <td class='ms-rteTableEvenCol-default' colspan='1' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'>​<b>Feb</b><br/></span></td> <td class='ms-rteTableOddCol-default' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'>​ <b>Mar</b><br/></span></td> <td class='ms-rteTableEvenCol-default' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'>​<b>Apr</b><br/></span></td> <td class='ms-rteTableOddCol-default' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'>​<b>May</b><br/></span></td> <td class='ms-rteTableEvenCol-default' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'>​<b>Jun</b><br/></span></td> <td class='ms-rteTableOddCol-default' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'>​<b>Jul</b><br/></span></td> <td class='ms-rteTableEvenCol-default' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'>​<b>Aug</b><br/></span></td> <td class='ms-rteTableOddCol-default' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'>​<b>Sept</b><br/></span></td> <td class='ms-rteTableEvenCol-default' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'><b>Oct</b>​<br/></span></td> <td class='ms-rteTableOddCol-default' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'>​<b>Nov</b><br/></span></td> <td class='ms-rteTableEvenCol-default' colspan='1' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'>​<b>Dec</b><br/></span></td> <td class='ms-rteTableEvenCol-default' colspan='1' style='width: 5%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 12px;'>​<b>Total </b><br/></span></td> </tr>  </tbody></table>";
}

 
 var returnedItems; 
var no_of_response = 0;
var question_1 = 0;
var question_2 = 0;
var question_3 = 0;

var question_1_avg = 0;
var question_2_avg = 0;
var question_3_avg = 0;

var total_avg=0;



var count=0;

var jan_no_of_response=0;
var feb_no_of_response=0;
var mar_no_of_response=0;
var apr_no_of_response=0;
var may_no_of_response=0;
var jun_no_of_response=0;
var jul_no_of_response=0;
var aug_no_of_response=0;
var sep_no_of_response=0;
var oct_no_of_response=0;
var nov_no_of_response=0;
var dec_no_of_response=0;

var arr_months=[];
var arr_years=[];

var get_year="";

var output=[];

  var myArray = [[],[]];
  var array_column = ["Year","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var array_rows = [];

   function onSucceededCallback(sender, args) {  
   

        var enumerator = returnedItems.getEnumerator();  
var start = new Date("01/01/2016");      
var frmtstart = start.format('yyyy');
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();


// var jul_question_1 =0;
// var jul_question_2 =0;
// var jul_question_3 =0;



 
    var recCount = 2
    var n =0;
    var c = 0;
    var s = 0;


    


        
var startyear=2016;

    while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();  
        
        var created = listItem.get_item('Start_x0020_Time');


        var fmtcreatedyear = created.format('yyyy');
        var fmtcreatedmonth = created.format('MMM');

        arr_years[count]=fmtcreatedyear;
        count++;  

    }//end while

    var uniqueSet = new Set(arr_years.sort()); // {"a", "b"}
    var uniqueArr = Array.from(uniqueSet); // ["a", "b"]
    uniqueArr.join(", "); // "a, b"
    //console.log(uniqueArr);

    var row_loop=0;

    for(i=0;i<uniqueArr.length;i++){
            var enumerator = returnedItems.getEnumerator();  
            var count_by_year=0;
            var count_by_jan=0, count_by_feb=0, count_by_mar=0, count_by_apr=0, count_by_may=0, count_by_jun=0, count_by_jul=0, count_by_aug=0, count_by_sep=0, count_by_oct=0, count_by_nov=0, count_by_dec=0;

            var totalperjan = 0, totalperfeb = 0, totalpermar = 0, totalperapr = 0, totalpermay = 0, totalperjun = 0, totalperjul = 0, totalperaug = 0, totalpersept = 0, totalperoct = 0, totalpernov = 0, totalperdec = 0;

            var jan_question_1 = 0, jan_question_2 = 0, jan_question_3 = 0;
            var feb_question_1 = 0, feb_question_2 = 0, feb_question_3 = 0;
            var mar_question_1 = 0, mar_question_2 = 0, mar_question_3 = 0;
            var apr_question_1 = 0, apr_question_2 = 0, apr_question_3 = 0;
            var may_question_1 = 0, may_question_2 = 0, may_question_3 = 0;
            var jun_question_1 = 0, jun_question_2 = 0, jun_question_3 = 0;
            var jul_question_1 = 0, jul_question_2 = 0, jul_question_3 = 0;
            var aug_question_1 = 0, aug_question_2 = 0, aug_question_3 = 0;
            var sep_question_1 = 0, sep_question_2 = 0, sep_question_3 = 0;
            var oct_question_1 = 0, oct_question_2 = 0, oct_question_3 = 0;
            var nov_question_1 = 0, nov_question_2 = 0, nov_question_3 = 0;
            var dec_question_1 = 0, dec_question_2 = 0, dec_question_3 = 0;
            
            while (enumerator.moveNext()) {

                var listItem = enumerator.get_current();  
                var created = listItem.get_item('Start_x0020_Time');
                var fmtcreatedyear = created.format('yyyy');
                var fmtcreatedmonth = created.format('MMM');
                var created_by = listItem.get_item('Author').get_lookupValue();


            if(get_preferredname==created_by){

                //alert(uniqueArr[i]+" : "+fmtcreatedyear);
                if( uniqueArr[i]==fmtcreatedyear){
                    count_by_year++;

                    if(fmtcreatedmonth=="Jan"){
                        count_by_jan++;
                        jan_question_1 = jan_question_1+listItem.get_item('Total_x0020__x0023__x0020_of_x00'); 
                    
                    }else if(fmtcreatedmonth=="Feb"){
                        count_by_feb++;
                        feb_question_1 = feb_question_1+listItem.get_item('Total_x0020__x0023__x0020_of_x00'); 

                    }else if(fmtcreatedmonth=="Mar"){
                        count_by_mar++;
                        mar_question_1 = mar_question_1+listItem.get_item('Total_x0020__x0023__x0020_of_x00'); 

                    }else if(fmtcreatedmonth=="Apr"){
                        count_by_apr++;
                        apr_question_1 = apr_question_1+listItem.get_item('Total_x0020__x0023__x0020_of_x00'); 

                    }else if(fmtcreatedmonth=="May"){
                        count_by_may++;
                        may_question_1 = may_question_1+listItem.get_item('Total_x0020__x0023__x0020_of_x00'); 

                    }else if(fmtcreatedmonth=="Jun"){
                        count_by_jun++;

                        jun_question_1 = jun_question_1+listItem.get_item('Total_x0020__x0023__x0020_of_x00'); 

                    }else if(fmtcreatedmonth=="Jul"){
                        count_by_jul++;

                         jul_question_1 = jul_question_1+listItem.get_item('Total_x0020__x0023__x0020_of_x00'); 
                    }else if(fmtcreatedmonth=="Aug"){
                        count_by_aug++;
                        aug_question_1 = aug_question_1+listItem.get_item('Total_x0020__x0023__x0020_of_x00'); 
                    }else if(fmtcreatedmonth=="Sept"){
                        count_by_sep++;

                         sep_question_1 = sep_question_1+listItem.get_item('Total_x0020__x0023__x0020_of_x00'); 
                    }else if(fmtcreatedmonth=="Oct"){
                        count_by_oct++;
                         oct_question_1 = oct_question_1+listItem.get_item('Total_x0020__x0023__x0020_of_x00'); 

                    }else if(fmtcreatedmonth=="Nov"){
                        count_by_nov++;
                        nov_question_1 = nov_question_1+listItem.get_item('Total_x0020__x0023__x0020_of_x00'); 

                    }else if(fmtcreatedmonth=="Dec"){
                        count_by_dec++;
                        dec_question_1 = dec_question_1+listItem.get_item('Total_x0020__x0023__x0020_of_x00'); 
                    }

                }//end if 


                 
             }//end if(get_preferredname==created_by)
             



                

            }//end while

         //   //console.log("----------------------------------------------------------------")
          //  //console.log("Response by "+uniqueArr[i]+":" +count_by_year);
        var year_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+uniqueArr[i]+"</td>";

            totalperjan= jan_question_1;
            totalperjan = totalperjan || 0;
        
            var jan_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+parseFloat(totalperjan).toFixed(2)+"</td>";
    
            totalperfeb= feb_question_1;
            totalperfeb = totalperfeb || 0;
        
            var feb_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+parseFloat(totalperfeb).toFixed(2)+"</td>";

            totalpermar= mar_question_1;
            totalpermar = totalpermar || 0;
            var mar_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+parseFloat(totalpermar).toFixed(2)+"</td>";

            totalperapr= apr_question_1;
            totalperapr = totalperapr || 0;
            var apr_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+parseFloat(totalperapr).toFixed(2)+"</td>";

            totalpermay= may_question_1;
            totalpermay = totalpermay || 0;
            var may_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+parseFloat(totalpermay).toFixed(2)+"</td>";

            totalperjun= jun_question_1;
            totalperjun = totalperjun || 0;
            var jun_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+parseFloat(totalperjun).toFixed(2)+"</td>";

            totalperjul= jul_question_1;
            totalperjul = totalperjul || 0;
            var jul_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+parseFloat(totalperjul).toFixed(2)+"</td>";

            totalperaug= aug_question_1;
            totalperaug = totalperaug || 0;
            var aug_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+parseFloat(totalperaug).toFixed(2)+"</td>";

            totalpersep= sep_question_1;
            totalpersep = totalpersep || 0;
            var sep_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+parseFloat(totalpersep).toFixed(2)+"</td>";

            totalperoct= oct_question_1;
            totalperoct = totalperoct || 0;
            var oct_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+parseFloat(totalperoct).toFixed(2)+"</td>";

            totalpernov= nov_question_1;
            totalpernov = totalpernov || 0;
            var nov_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+parseFloat(totalpernov).toFixed(2)+"</td>";

            totalperdec= dec_question_1;
            totalperdec = totalperdec || 0;

            var dec_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+parseFloat(totalperdec).toFixed(2)+"</td>";

            var average_yearly = totalperjan + totalperfeb + totalpermar + totalperapr + totalpermay + totalperjun + totalperjul + totalperaug + totalpersep + totalperoct + totalpernov + totalperdec;

            var average_append ="<td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 5%; text-align: center;'> "+parseFloat(average_yearly).toFixed(2)+"</td>";

            $('#table_id').append("<tr class='ms-rteTableFooterRow-default'>"+year_append+""+jan_append+""+feb_append+""+mar_append+""+apr_append+""+may_append+""+jun_append+""+jul_append+""+aug_append+""+sep_append+""+oct_append+""+nov_append+""+dec_append+""+average_append+"</tr>");



array_rows.push(uniqueArr[i],+parseFloat(totalperjan).toFixed(2),+parseFloat(totalperfeb).toFixed(2),+parseFloat(totalpermar).toFixed(2),+parseFloat(totalperapr).toFixed(2),+parseFloat(totalpermay).toFixed(2),+parseFloat(totalperjun).toFixed(2),+parseFloat(totalperjul).toFixed(2),+parseFloat(totalperaug).toFixed(2),+parseFloat(totalpersep).toFixed(2),+parseFloat(totalperoct).toFixed(2),+parseFloat(totalpernov).toFixed(2),+parseFloat(totalperdec).toFixed(2))
   


    }//for loop



//console.log("myArray: "+myArray)

// google.load("visualization", "1", {packages:["corechart"]});
// google.setOnLoadCallback(updateChart);


google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(updateChart);

//console.log(array_rows);


}//end function


    
   //This function fires when the query fails  
   function onFailedCallback(sender, args) {  
      //Formulate HTML to display details of the error  
      var markup = '<p>The request failed: <br>';  
      markup += 'Message: ' + args.get_message() + '<br>';  
      //Display the details  
      alert(markup );
   } 
</script>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 

 <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
      // google.load("visualization", "1", {packages:["corechart"]});
      // google.setOnLoadCallback(drawChart);

    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

        
      var chart;
      var data;
      var options;
      
      function drawChart() {
        dataTable = google.visualization.arrayToDataTable([
         ['Year', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        ]);


           var options = {
          chart: {
            title: 'My Continuing Education Chart (hrs)',
            subtitle: '',
          }
        };


        var chart = new google.charts.Bar(document.getElementById('chart_div'));
        chart.draw(dataTable, google.charts.Bar.convertOptions(options));

      }
        
      // function to update the chart with new data.
      function updateChart() {


 var options = {
          chart: {
            title: 'My Continuing Education Chart (hrs)',
            subtitle: '',
          }
        };


       
          dataTable = new google.visualization.DataTable();

    
          var newData = [
          ['Year', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            ];




          //  var newData = myArray;

        
          // determine the number of rows and columns.
          //console.log("newdata: "+newData);

          var numRows = newData.length;
          //console.log("number of rows: "+numRows);
          var numCols = newData[0].length;
           //console.log("numCols: "+numCols);

        
          // in this case the first column is of type 'string'.
          dataTable.addColumn('string', newData[0][0]);
        
          // all other columns are of type 'number'.
          for (var i = 1; i < numCols; i++)
            dataTable.addColumn('number', newData[0][i]);           
        
          // now add the rows.
          for (var i = 1; i < numRows; i++) 


            dataTable.addRow(newData[i]);  

          // //console.log("average: "+newData[i]) ;         

          // redraw the chart.
          // chart.draw(dataTable, options);  

var splice=13;
var arr = array_rows;
var newarr = new Array();

//console.log("newarr_column: "+array_column);

for (var i=0; i<arr.length; i=i+splice) {
    newarr.push(arr.slice(i,i+splice));
    //console.log("slice: "+arr.slice(i,i+splice))
    dataTable.addRow(arr.slice(i,i+splice));  
}      

var chart = new google.charts.Bar(document.getElementById('chart_div'));
chart.draw(dataTable, google.charts.Bar.convertOptions(options));




      }
        
    </script>
<style>
#table_id tr:nth-child(even) {background: #F2F2F2}
#table_id tr:nth-child(odd) {background: #FFF}
</style>

<div id="chart_div"style="width: 1500px; height: 450px;"></div>
<br>
<div id="averagehere" ></div>