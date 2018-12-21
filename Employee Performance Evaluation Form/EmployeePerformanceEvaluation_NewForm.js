<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"><span id="ms-rterangecursor-start" aria-hidden="true"></span><span id="ms-rterangecursor-end" aria-hidden="true"></span></script><script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script><script type="text/javascript" src="/_layouts/15/sp.js"></script><script type="text/javascript" src="/_layouts/15/SP.UserProfiles.js"></script> 
<script type="text/javascript">


_spBodyOnLoadFunctionNames.push("dropDownTypeofEvaluation");
_spBodyOnLoadFunctionNames.push("Calculations");


//--------Change 'Save' to 'Submit'-----------------
    (function ($, undefined)
    {
        $("document").ready(function ()
        {
            var inputcontrols = document.getElementsByTagName("input");
            for(i = 0; i<inputcontrols.length; i++)
            {
                if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
                    inputcontrols[i].value = "Submit";
            }
            var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
            ribbonSave.text("Submit");
        });
    })(jQuery);

//------------------------------------

//userProfileProperties

    var userProfileProperties;
    ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
    var targetUser;


    function init(){

        this.clientContext2 = new SP.ClientContext.get_current();
        this.oWeb = clientContext2.get_web();
        targetUser = this.oWeb.get_currentUser();
        //targetUser = "hoitcebu\\litoa";
        //alert(targetUser.get_loginName());
        this.clientContext2.load(targetUser);
       
        this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));

        //=================================================

     }

     function onQuerySucceeded() {

        var account = targetUser.get_loginName();
        targetUser_temp = account.substring(account.indexOf("|") + 10);
        targetUser = targetUser_temp;
     //alert(targetUser);
      
        SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');
    }

    function onRequestFail(sender, args) {
         alert("Please contact administrator. Error: " + args.get_message());
    }


    function getUserProperties() {

        targetUser = 'hoitcebu\\'+targetUser;
        // Replace the placeholder value with the target user's credentials.
         //alert(targetUser);
         
         

        // Get the current client context and PeopleManager instance.
        var clientContext = new SP.ClientContext.get_current();
        var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
      

        // Specify the properties to retrieve and target user for the 
        // UserProfilePropertiesForUser object.
        var profilePropertyNames = ["PreferredName", "Department", "Manager"];
        var userProfilePropertiesForUser = 
            new SP.UserProfiles.UserProfilePropertiesForUser(
                clientContext,
                targetUser,
                profilePropertyNames);

        // Get user profile properties for the target user.
        // To get the value for only one user profile property, use the
        // getUserProfilePropertyFor method.
        userProfileProperties = peopleManager.getUserProfilePropertiesFor(userProfilePropertiesForUser);
        //alert(userProfileProperties );
        // Load the UserProfilePropertiesForUser object and send the request.
        clientContext.load(userProfilePropertiesForUser);
        clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
    }

    var immediate_head_var;
    // This function runs if the executeQueryAsync call succeeds.
    var log_in_preferred_name;
    function onRequestSuccess() {
        var requestorName = userProfileProperties[0];
        log_in_preferred_name = userProfileProperties[0]
        var department =  userProfileProperties[1];
        var manager =  userProfileProperties[2];
        //alert(requestorName);
        //document.getElementById('ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff61_ctl00_ctl00_TextField').value = requestorName;
        //document.getElementById('ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField').value = department;
        //alert(department);
    immediate_head_var = manager;

    //get_liquidation_forms();
    }

//---------------------------------------------------------------------------------------------------------

//Empty Type of Evaluation
	function empty()
	{

		$('#EvaluationForm #Columns').hide();
		$('#EvaluationForm #Attendance').hide();
	    $('#EvaluationForm #CodeofConductAdherence').hide();
	    $('#EvaluationForm #PersonalImageAppearance').hide();
	    $('#EvaluationForm #WorkAttitudes1').hide();
	    $('#EvaluationForm #WorkAttitudes2').hide();
	    $('#EvaluationForm #WorkAttitudes3').hide();
	    $('#EvaluationForm #WorkAttitudes4').hide();
	    $('#EvaluationForm #WorkAttitudes5').hide();
	    $('#EvaluationForm #JobKnowledge').hide();
	    $('#EvaluationForm #WorkSkills1').hide();
	    $('#EvaluationForm #WorkSkills2').hide();
	    $('#EvaluationForm #1stMonth').hide();
	    $('#EvaluationForm #2ndMonth').hide();
	    $('#EvaluationForm #3rdMonth').hide();
	    $('#EvaluationForm #LeadershipCapabilities1').hide();
	    $('#EvaluationForm #LeadershipCapabilities2').hide();
	    $('#EvaluationForm #LeadershipCapabilities3').hide();
	    $('#EvaluationForm #LeadershipCapabilities4').hide();
	    $('#EvaluationForm #LeadershipCapabilities5').hide();
	    $('#EvaluationForm #LeadershipCapabilities6').hide();
	    $('#EvaluationForm #LeadershipCapabilities7').hide();
	    $('#EvaluationForm #LeadershipCapabilities8').hide();
	    $('#EvaluationForm #LeadershipCapabilities9').hide();
	    $('#EvaluationForm #LeadershipCapabilities10').hide();
        $('#EvaluationForm #TotalWeightedScore').hide();
	    $('#partIIComments #DevelopmentalPlans').hide();
	    $('#partIIIComments #PerformanceTargetPeriod').hide();
	} 

//Type of Evaluation----------------------------------------------------------------------------------------

    //probationaryNoKPI
    	function probationaryNoKPI()
    	{
    		$('#EvaluationForm #Columns').show();
    		$('#EvaluationForm #Attendance').show();
            $('#EvaluationForm #CodeofConductAdherence').show();
            $('#EvaluationForm #PersonalImageAppearance').hide();
            $('#EvaluationForm #WorkAttitudes1').hide();
            $('#EvaluationForm #WorkAttitudes2').hide();
            $('#EvaluationForm #WorkAttitudes3').hide();
            $('#EvaluationForm #WorkAttitudes4').hide();
            $('#EvaluationForm #WorkAttitudes5').hide();
            $('#EvaluationForm #JobKnowledge').hide();
            $('#EvaluationForm #WorkSkills1').hide();
            $('#EvaluationForm #WorkSkills2').hide();
            $('#EvaluationForm #1stMonth').hide();
            $('#EvaluationForm #2ndMonth').hide();
            $('#EvaluationForm #3rdMonth').hide();
            $('#EvaluationForm #LeadershipCapabilities1').hide();
            $('#EvaluationForm #LeadershipCapabilities2').hide();
            $('#EvaluationForm #LeadershipCapabilities3').hide();
            $('#EvaluationForm #LeadershipCapabilities4').hide();
            $('#EvaluationForm #LeadershipCapabilities5').hide();
            $('#EvaluationForm #LeadershipCapabilities6').hide();
            $('#EvaluationForm #LeadershipCapabilities7').hide();
            $('#EvaluationForm #LeadershipCapabilities8').hide();
            $('#EvaluationForm #LeadershipCapabilities9').hide();
            $('#EvaluationForm #LeadershipCapabilities10').hide();
            $('#EvaluationForm #TotalWeightedScore').show();
            $('#partIIComments #DevelopmentalPlans').show();
            $('#partIIIComments #PerformanceTargetPeriod').hide();

            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff91_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff131_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff211_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff251_ctl00_ctl00_TextField').val('15%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff291_ctl00_ctl00_TextField').val('15%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff411_ctl00_ctl00_TextField').val('20%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff451_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff491_ctl00_ctl00_TextField').val('10%');         

    	}

    //probationaryWithKPI
    	function probationaryWithKPI()
    	{
    		$('#EvaluationForm #Columns').show();
    		$('#EvaluationForm #Attendance').show();
            $('#EvaluationForm #Attendance').show();
            $('#EvaluationForm #CodeofConductAdherence').show();
            $('#EvaluationForm #TotalWeightedScore').show();
            $('#partIIComments #DevelopmentalPlans').show();

            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff91_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff131_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff211_ctl00_ctl00_TextField').val('5%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff251_ctl00_ctl00_TextField').val('5%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff291_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff531_ctl00_ctl00_TextField').val('20%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff571_ctl00_ctl00_TextField').val('20%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff611_ctl00_ctl00_TextField').val('20%');      
    	}

    //teamLeads
    	function teamLeads()
    	{
    		$('#EvaluationForm #Columns').show();
            $('#EvaluationForm #Attendance').show();
            $('#EvaluationForm #Attendance').show();
            $('#EvaluationForm #CodeofConductAdherence').show();
            $('#EvaluationForm #TotalWeightedScore').show();
            $('#partIIComments #DevelopmentalPlans').show();
            $('#partIIIComments #PerformanceTargetPeriod').show();


            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff91_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff131_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff211_ctl00_ctl00_TextField').val('4%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff251_ctl00_ctl00_TextField').val('4%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff291_ctl00_ctl00_TextField').val('4%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff331_ctl00_ctl00_TextField').val('4%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff371_ctl00_ctl00_TextField').val('4%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff531_ctl00_ctl00_TextField').val('15%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff571_ctl00_ctl00_TextField').val('15%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff611_ctl00_ctl00_TextField').val('15%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff911_ctl00_ctl00_TextField').val('5%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff991_ctl00_ctl00_TextField').val('5%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1031_ctl00_ctl00_TextField').val('5%');   
    	}

    //officers
    	function officers()
    	{
    		$('#EvaluationForm #Columns').show();
    		$('#EvaluationForm #Attendance').show();
            $('#EvaluationForm #Attendance').show();
            $('#EvaluationForm #CodeofConductAdherence').show();
            $('#EvaluationForm #TotalWeightedScore').show();
            $('#partIIComments #DevelopmentalPlans').show();
            $('#partIIIComments #PerformanceTargetPeriod').show();

            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff91_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff131_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff171_ctl00_ctl00_TextField').val('5%'); 
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff211_ctl00_ctl00_TextField').val('5%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff251_ctl00_ctl00_TextField').val('5%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff291_ctl00_ctl00_TextField').val('5%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff331_ctl00_ctl00_TextField').val('5%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff371_ctl00_ctl00_TextField').val('5%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff531_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff571_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff611_ctl00_ctl00_TextField').val('15%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff711_ctl00_ctl00_TextField').val('2%'); 
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff751_ctl00_ctl00_TextField').val('2%'); 
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff791_ctl00_ctl00_TextField').val('2%'); 
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff911_ctl00_ctl00_TextField').val('3%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff991_ctl00_ctl00_TextField').val('3%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1031_ctl00_ctl00_TextField').val('3%');                
    	}

    //managers
    	function managers()
    	{
    				$('#EvaluationForm #Attendance').show();
                    $('#EvaluationForm #Attendance').show();
                    $('#EvaluationForm #CodeofConductAdherence').show();
                    $('#EvaluationForm #TotalWeightedScore').show();
                    $('#partIIComments #DevelopmentalPlans').show();
                    $('#partIIIComments #PerformanceTargetPeriod').show();

                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff91_ctl00_ctl00_TextField').val('5%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff131_ctl00_ctl00_TextField').val('5%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff171_ctl00_ctl00_TextField').val('5%'); 
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff211_ctl00_ctl00_TextField').val('5%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff251_ctl00_ctl00_TextField').val('5%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff291_ctl00_ctl00_TextField').val('5%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff331_ctl00_ctl00_TextField').val('5%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff371_ctl00_ctl00_TextField').val('5%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff531_ctl00_ctl00_TextField').val('10%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff571_ctl00_ctl00_TextField').val('10%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff611_ctl00_ctl00_TextField').val('10%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff671_ctl00_ctl00_TextField').val('3%'); 
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff711_ctl00_ctl00_TextField').val('3%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff831_ctl00_ctl00_TextField').val('3%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff871_ctl00_ctl00_TextField').val('3%');   
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff751_ctl00_ctl00_TextField').val('3%'); 
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff791_ctl00_ctl00_TextField').val('3%'); 
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff911_ctl00_ctl00_TextField').val('3%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff951_ctl00_ctl00_TextField').val('3%'); 
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff991_ctl00_ctl00_TextField').val('3%');
                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1031_ctl00_ctl00_TextField').val('3%');
    	}

    //rank and file
    	function rankandfile()
    	{
    		$('#EvaluationForm #Columns').show();
    		$('#EvaluationForm #Attendance').show();
            $('#EvaluationForm #CodeofConductAdherence').show();
            $('#EvaluationForm #TotalWeightedScore').show();
            $('#partIIComments #DevelopmentalPlans').show();
            $('#partIIIComments #PerformanceTargetPeriod').show();

            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff91_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff131_ctl00_ctl00_TextField').val('10%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff211_ctl00_ctl00_TextField').val('4%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff251_ctl00_ctl00_TextField').val('4%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff291_ctl00_ctl00_TextField').val('4%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff331_ctl00_ctl00_TextField').val('4%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff371_ctl00_ctl00_TextField').val('4%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff531_ctl00_ctl00_TextField').val('20%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff571_ctl00_ctl00_TextField').val('20%');
            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff611_ctl00_ctl00_TextField').val('20%');
    	}
    
//Calculations of Evaluation--------------------------------------------------------------------------------

    //CalculationsProbationaryNoKPI
    	function calculationsProbationaryNoKPI()
    	{
    		//Attendance
    			$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl00]').change(function() 
    			{
    				  var WeightedScore = 0.10 * 1;
    		        document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore_ProbationaryNoKPI();



    		    });
             	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl01]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 2;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore_ProbationaryNoKPI();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl02]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 3;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                    TotalWeightedScore_ProbationaryNoKPI();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl03]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 4;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore_ProbationaryNoKPI();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl04]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 5;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore_ProbationaryNoKPI();

    	    	});           		

        	//Code of Conduct Adherence 
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl00]').change(function() 
    			{
    				 var WeightedScore = 0.10 * 1;
    		        document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore_ProbationaryNoKPI();

    		    });
    	     	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl01]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 2;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore_ProbationaryNoKPI();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl02]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 3;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                    TotalWeightedScore_ProbationaryNoKPI();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl03]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 4;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore_ProbationaryNoKPI();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl04]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 5;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore_ProbationaryNoKPI();

    	    	});		

    	}

    //TotalWeightedScore_ProbationaryNoKPI
        function TotalWeightedScore_ProbationaryNoKPI(){

                    var Attendance = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField]').val())||0;
                    var CodeofConductAdherence = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField]').val())||0;
     
                    var TotalWeightedScore = Attendance + CodeofConductAdherence;

                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1071_ctl00_ctl00_TextField').val(TotalWeightedScore);
                    //alert(TotalWeightedScore);

        }

    //CalculationsProbationaryWithKPI
    	function calculationsProbationaryWithKPI()
    	{
    		//Attendance
    			$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl00]').change(function() 
    			{
    				  var WeightedScore = 0.10 * 1;
    		        document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    		        TotalWeightedScore_ProbationaryWithKPI();

    		    });
             	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl01]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 2;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_ProbationaryWithKPI();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl02]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 3;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
    	            TotalWeightedScore_ProbationaryWithKPI();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl03]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 4;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_ProbationaryWithKPI();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl04]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 5;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_ProbationaryWithKPI();

    	    	});           		

        	//Code of Conduct Adherence
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl00]').change(function() 
    			{
    				 var WeightedScore = 0.10 * 1;
    		        document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    		        TotalWeightedScore_ProbationaryWithKPI();

    		    });
    	     	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl01]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 2;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_ProbationaryWithKPI();


    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl02]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 3;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
    	            TotalWeightedScore_ProbationaryWithKPI();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl03]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 4;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_ProbationaryWithKPI();


    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl04]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 5;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_ProbationaryWithKPI();

    	    	});		


    	}	

    //TotalWeightedScore_ProbationaryWithKPI
    	function TotalWeightedScore_ProbationaryWithKPI(){

                    var Attendance = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField]').val())||0;
                    var CodeofConductAdherence = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField]').val())||0;
                   
                    var TotalWeightedScore = Attendance + CodeofConductAdherence;

                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1071_ctl00_ctl00_TextField').val(TotalWeightedScore);
                    //alert(TotalWeightedScore);

        }	

    //CalculationsTeamLeads
    	function CalculationsTeamLeads()
    	{
    		//Attendance
    			$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl00]').change(function() 
    			{
    				  var WeightedScore = 0.10 * 1;
    		        document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    		        TotalWeightedScore_TeamLeads();

    		    });
    	     	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl01]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 2;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_TeamLeads();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl02]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 3;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
    	            TotalWeightedScore_TeamLeads();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl03]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 4;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_TeamLeads();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl04]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 5;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_TeamLeads();

    	    	});

    	    //Code of Conduct Adherence
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl00]').change(function() 
    			{
    				 var WeightedScore = 0.10 * 1;
    		        document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    		        TotalWeightedScore_TeamLeads();

    		    });
    	     	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl01]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 2;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_TeamLeads();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl02]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 3;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
    	            TotalWeightedScore_TeamLeads();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl03]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 4;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_TeamLeads();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl04]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 5;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_TeamLeads();

    	    	});		
    		
    	}

    //TotalWeightedScore_TeamLeads
    	function TotalWeightedScore_TeamLeads(){

                    var Attendance = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField]').val())||0;
                    var CodeofConductAdherence = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField]').val())||0;
                   
                    var TotalWeightedScore = Attendance + CodeofConductAdherence;

                    $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1071_ctl00_ctl00_TextField').val(TotalWeightedScore);
                    //alert(TotalWeightedScore);

        }	

    //CalculationsOfficers
    	function CalculationsOfficers()
    	{
    		//Attendance
    			$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl00]').change(function() 
    			{
    				  var WeightedScore = 0.10 * 1;
    		        document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    		        TotalWeightedScore_Officers();

    		    });
    	     	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl01]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 2;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_Officers();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl02]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 3;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
    	            TotalWeightedScore_Officers();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl03]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 4;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_Officers();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl04]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 5;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_Officers();

    	    	});

    	    //Code of Conduct Adherence
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl00]').change(function() 
    			{
    				 var WeightedScore = 0.10 * 1;
    		        document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    		        TotalWeightedScore_Officers();

    		    });
    	     	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl01]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 2;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_Officers();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl02]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 3;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
    	            TotalWeightedScore_Officers();

    	            
    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl03]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 4;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_Officers();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl04]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 5;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_Officers();

    	    	});		
    		
    	}

    //TotalWeightedScore_Officers
    	function TotalWeightedScore_Officers(){

            var Attendance = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField]').val())||0;
            var CodeofConductAdherence = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField]').val())||0;
           
            var TotalWeightedScore = Attendance + CodeofConductAdherence;

            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1071_ctl00_ctl00_TextField').val(TotalWeightedScore);
            //alert(TotalWeightedScore);

        }	

    //CalculationsManagers
    	function CalculationsManagers()
    	{
    		//Attendance
    			$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl00]').change(function() 
    			{
    				  var WeightedScore = 0.05 * 1;
    		        document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    		        TotalWeightedScore_Managers();

    		    });
    	     	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl01]').change(function() 
    			 {
    			     var WeightedScore = 0.05 * 2;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_Managers();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl02]').change(function() 
    			 {
    			     var WeightedScore = 0.05 * 3;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
    	            TotalWeightedScore_Managers();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl03]').change(function() 
    			 {
    			     var WeightedScore = 0.05 * 4;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_Managers();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl04]').change(function() 
    			 {
    			     var WeightedScore = 0.05 * 5;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_Managers();

    	    	});

    	    //Code of Conduct Adherence
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl00]').change(function() 
    			{
    				 var WeightedScore = 0.05 * 1;
    		        document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    		        TotalWeightedScore_Managers();

    		    });
    	     	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl01]').change(function() 
    			 {
    			     var WeightedScore = 0.05 * 2;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_Managers();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl02]').change(function() 
    			 {
    			     var WeightedScore = 0.05 * 3;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
    	            TotalWeightedScore_Managers();         

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl03]').change(function() 
    			 {
    			     var WeightedScore = 0.05 * 4;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_Managers();

    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl04]').change(function() 
    			 {
    			     var WeightedScore = 0.05 * 5;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_Managers();

    	    	});		
    		
    	}

    //TotalWeightedScore_Managers
    	function TotalWeightedScore_Managers(){

        var Attendance = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField]').val())||0;
        var CodeofConductAdherence = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField]').val())||0;    
        var TotalWeightedScore = Attendance + CodeofConductAdherence;

        $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1071_ctl00_ctl00_TextField').val(TotalWeightedScore);
        //alert(TotalWeightedScore);

        }

    //CalculationsRankandFile
    	function CalculationsRankandFile()
    	{
    		//Attendance
    			$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl00]').change(function() 
    			{
    				  var WeightedScore = 0.10 * 1;
    		        document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    		        TotalWeightedScore_RankandFile();
    		    });
             	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl01]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 2;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_RankandFile();
    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl02]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 3;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
    	            TotalWeightedScore_RankandFile();
    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl03]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 4;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_RankandFile();
    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff101_ctl00_ctl04]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 5;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_RankandFile();
    	    	});           		

        	//Code of Conduct Adherence
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl00]').change(function() 
    			{
    				 var WeightedScore = 0.10 * 1;
    		        document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    		        TotalWeightedScore_RankandFile();
    		    });
    	     	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl01]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 2;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_RankandFile();
    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl02]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 3;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
    	            TotalWeightedScore_RankandFile();
    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl03]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 4;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_RankandFile();
    	    	});
    	    	$('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl04]').change(function() 
    			 {
    			     var WeightedScore = 0.10 * 5;
    	            document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
    	            TotalWeightedScore_RankandFile();
    	    	});	
    	}

	//TotalWeightedScore_RankandFile
        	function TotalWeightedScore_RankandFile(){

            var Attendance = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField]').val())||0;
            var CodeofConductAdherence = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes1 = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff231_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes2 = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff271_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes3 = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff301_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes4 = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff351_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes5 = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff391_ctl00_ctl00_TextField]').val())||0;
            var Month1 = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff551_ctl00_ctl00_TextField]').val())||0;
            var Month2  = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff591_ctl00_ctl00_TextField]').val())||0;
            var Month3 = parseFloat($('input[id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff631_ctl00_ctl00_TextField]').val())||0;
            var TotalWeightedScore = Attendance + CodeofConductAdherence + WorkAttitudes1 + WorkAttitudes2 + WorkAttitudes3 + WorkAttitudes4 + WorkAttitudes4 + Month1 + Month2  + Month3;

            $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1071_ctl00_ctl00_TextField').val(TotalWeightedScore);
            //alert(TotalWeightedScore);

            }	

//dropDownTypeofEvaluation
    function dropDownTypeofEvaluation()
    {
        $("Select[Title='Type of Evaluation']").change(function () {
            var val=$("Select[Title='Type of Evaluation']").val();
            
            if($(this).val()=="")
            {
                empty();
            }
            else if($(this).val()=="Probationary (NO KPI)")
            {
               probationaryNoKPI();
               calculationsProbationaryNoKPI();
            }
            else if($(this).val()=="Probationary (WITH KPI)")
            {                
            	probationaryWithKPI();
            	calculationsProbationaryWithKPI();
            }
            else if($(this).val()=="Team Leads")
            {
               teamLeads();
               CalculationsTeamLeads();
            }
            else if($(this).val()=="Officers")
            {
               officers();
               CalculationsOfficers();
            }
            else if($(this).val()=="Managers")
            {
                managers();
                CalculationsManagers();            
            }
            else if($(this).val()=="Rank and File")
            {
             	rankandfile();
             	CalculationsRankandFile();                    
            }


        });
    }


$(document).ready(function()
{

//#EvaluationForm #ProbationaryNOKPI
	$('#EvaluationForm #Columns').hide();
    $('#EvaluationForm #Attendance').hide();
    $('#EvaluationForm #Attendance').hide();
    $('#EvaluationForm #CodeofConductAdherence').hide();
    $('#EvaluationForm #PersonalImageAppearance').hide();
    $('#EvaluationForm #WorkAttitudes1').hide();
    $('#EvaluationForm #WorkAttitudes2').hide();
    $('#EvaluationForm #WorkAttitudes3').hide();
    $('#EvaluationForm #WorkAttitudes4').hide();
    $('#EvaluationForm #WorkAttitudes5').hide();
    $('#EvaluationForm #JobKnowledge').hide();
    $('#EvaluationForm #WorkSkills1').hide();
    $('#EvaluationForm #WorkSkills2').hide();
    $('#EvaluationForm #1stMonth').hide();
    $('#EvaluationForm #2ndMonth').hide();
    $('#EvaluationForm #3rdMonth').hide();
    $('#EvaluationForm #LeadershipCapabilities1').hide();
    $('#EvaluationForm #LeadershipCapabilities2').hide();
    $('#EvaluationForm #LeadershipCapabilities3').hide();
    $('#EvaluationForm #LeadershipCapabilities4').hide();
    $('#EvaluationForm #LeadershipCapabilities5').hide();
    $('#EvaluationForm #LeadershipCapabilities6').hide();
    $('#EvaluationForm #LeadershipCapabilities7').hide();
    $('#EvaluationForm #LeadershipCapabilities8').hide();
    $('#EvaluationForm #LeadershipCapabilities9').hide();
    $('#EvaluationForm #LeadershipCapabilities10').hide();
    $('#EvaluationForm #TotalWeightedScore').hide();
    $('#partIIComments #DevelopmentalPlans').hide();
    $('#partIIIComments #PerformanceTargetPeriod').hide();  

//Comments PartII_PartIII
     var div = document.getElementById('ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff651_ctl00_ctl00_TextField_inplacerte');
        div.innerHTML = "<table cellspacing='0' width='100%' class='ms-rteTable-default'> <tbody> <tr style='text-align: center;'> <td class='ms-rteTable-default' style='width: 25%; text-align: center;'> <strong>​PROFESSIONAL CAPABILITIES</strong><br/></td> <td class='ms-rteTable-default' style='width: 25%;'>​<strong>AREAS OF IMPROVEMENT (NEEDS)</strong><br/></td> <td class='ms-rteTable-default' style='width: 25%;'>​<strong>SUGGESTED DEVELOPMENTAL PLANS BY EMPLOYEES</strong><br/></td> <td class='ms-rteTable-default' style='width: 25%;'> <strong>​</strong><strong>IMMEDIATE SUPERIOR&#39;S COMMENTS</strong><br/></td> </tr> <tr> <td class='ms-rteTable-default'>​<br/><br/>Attendance Punctuality and Code of Conduct Adherence<br/><br/></td> <td class='ms-rteTable-default'>​<br/></td> <td class='ms-rteTable-default'>​<br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'> <br/> <br/>​Work Habits\Attitude<br/><br/><br/></td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​<br/><br/> <div>Job Knowledge</div> <div>(Professional and Technical)&#160; &#160;&#160;<br/></div> <br/> <br/> </td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'> <br/>​Work Skills<br/><br/><br/></td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​<br/></td> </tr> </tbody></table>";

     var div = document.getElementById('ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff661_ctl00_ctl00_TextField_inplacerte');
        div.innerHTML = "<table cellspacing='0' width='100%' class='ms-rteTable-default'> <tbody> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 33.3333%; text-align: center;'> <strong>​AREA OF CONCERN</strong><br/></td> <td class='ms-rteTableOddCol-default' style='width: 33.3333%; text-align: center;'>​<strong>TARGET</strong><br/></td> <td class='ms-rteTableEvenCol-default' style='width: 33.3333%; text-align: center;'> <strong>​ACTION PLAN</strong><br/></td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default'>​<br/><br/><br/><br/></td> <td class='ms-rteTableOddCol-default'>​<br/></td> <td class='ms-rteTableEvenCol-default'>​<br/></td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default'>​<br/><br/><br/><br/></td> <td class='ms-rteTableOddCol-default'>​</td> <td class='ms-rteTableEvenCol-default'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default'>​<br/><br/><br/><br/></td> <td class='ms-rteTableOddCol-default'>​</td> <td class='ms-rteTableEvenCol-default'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default'>​<br/><br/><br/><br/></td> <td class='ms-rteTableOddCol-default'>​<br/></td> <td class='ms-rteTableEvenCol-default'>​<br/></td> </tr> </tbody></table><p></p>";   

//Resizing Fields
	document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff11_ctl00_ctl00_TextField").style.width = "120px";    
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff91_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff131_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff171_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff211_ctl00_ctl00_TextField").style.width = "100px";    
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff251_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff291_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff331_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff371_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff531_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff571_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff611_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff671_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff711_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff751_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff791_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff831_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff871_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff911_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff951_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff951_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff991_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1031_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff411_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff451_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff491_ctl00_ctl00_TextField").style.width = "100px";

    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff191_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff231_ctl00_ctl00_TextField").style.width = "100px";    
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff271_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff301_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff351_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff391_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff431_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff471_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff511_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff551_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff591_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff631_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff691_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff731_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff771_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff811_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff851_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff891_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff931_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff971_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1011_ctl00_ctl00_TextField").style.width = "100px";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1051_ctl00_ctl00_TextField").style.width = "100px";

    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1071_ctl00_ctl00_TextField").style.width = "100px";

//Load Value Weight
        $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff91_ctl00_ctl00_TextField').val('10%');
        $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff131_ctl00_ctl00_TextField').val('10%');
        $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff211_ctl00_ctl00_TextField').val('10%');
        $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff251_ctl00_ctl00_TextField').val('10%');
        $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff291_ctl00_ctl00_TextField').val('15%');
        $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff411_ctl00_ctl00_TextField').val('20%');
        $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff451_ctl00_ctl00_TextField').val('10%');
        $('#ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff491_ctl00_ctl00_TextField').val('10%');

//Read Only Fields	
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff131_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff171_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff211_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF')    
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff251_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff291_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff331_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff371_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff531_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff571_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff611_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff671_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff711_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff751_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff791_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff831_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff871_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff911_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff951_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff951_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff991_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1031_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff411_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff451_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff491_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff231_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');    
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff271_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff301_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff351_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff391_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff431_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff471_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff511_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff551_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff591_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff631_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff691_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff731_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff771_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff811_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff851_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff891_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff931_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff971_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1011_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1051_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');     
    $("input[id='ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1071_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

//No Border Fields
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff91_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff131_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff171_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff211_ctl00_ctl00_TextField").style.border = "none";    
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff251_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff291_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff331_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff371_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff531_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff571_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff611_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff671_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff711_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff751_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff791_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff831_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff871_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff911_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff951_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff951_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff991_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1031_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff411_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff451_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff491_ctl00_ctl00_TextField").style.border = "none";

    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff191_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff231_ctl00_ctl00_TextField").style.border = "none";    
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff271_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff301_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff351_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff391_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff431_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff471_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff511_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff551_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff591_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff631_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff691_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff731_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff771_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff811_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff851_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff891_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff931_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff971_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1011_ctl00_ctl00_TextField").style.border = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1051_ctl00_ctl00_TextField").style.border = "none";

    //document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1071_ctl00_ctl00_TextField").style.border = "none";    

//No Resize Fields
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff121_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff161_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff241_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff281_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff321_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff441_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff481_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff201_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff521_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff361_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff401_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff561_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff601_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff641_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff701_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff741_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff781_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff821_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff861_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff901_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff941_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff981_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1021_ctl00_ctl00_TextField").style.resize = "none";
    document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff1061_ctl00_ctl00_TextField").style.resize = "none";

document.getElementById("sideNavBox").style.display = "none";
document.getElementById("DeltaPlaceHolderMain").style.marginRight = "200px";

});





</script> ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​<div id='NoteHide'><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i></div>

