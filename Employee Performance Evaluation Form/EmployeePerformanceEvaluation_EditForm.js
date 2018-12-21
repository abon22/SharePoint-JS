<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"><span id="ms-rterangecursor-start" aria-hidden="true"></span><span id="ms-rterangecursor-end" aria-hidden="true"></span></script><script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script><script type="text/javascript" src="/_layouts/15/sp.js"></script><script type="text/javascript" src="/_layouts/15/SP.UserProfiles.js"></script> 
<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script>
<script type="text/javascript">


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

checkbox1 = 0;
checkbox2 = 0;
checkbox3 = 0;
checkbox4 = 0;
checkbox5 = 0;

//get the name of the current user
    var context = null;
    var web = null;
    var currentUser = null;

    ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, "sp.js");
    ExecuteOrDelayUntilScriptLoaded(init,'sp.js');


        function GetUserLoginName() 
        {
          context = new SP.ClientContext.get_current();
          web = context.get_web();
          this._currentUser = web.get_currentUser();
          context.load(this._currentUser);
          context.executeQueryAsync(Function.createDelegate(this, this.onSuccessMethod),
          Function.createDelegate(this, this.onFailureMethod));
        }

//onSuccessMethod
    function onSuccessMethod(sender, args) 
    {

        var Name = $("div[title='Employee Name']").text();
        var trimmedName = Name.replace(/[|&;$%@"<>()+,]/g, "");
        var evaluatorName = $("div[title='Evaluator Name']").text().trim();
        var trimmedevaluatorName = evaluatorName.replace(/[|&;$%@"<>()+,]/g, "");
        var get_preferredname = this._currentUser.get_title();
        var approvalStatus = $("Select[Title='Approval Status']").val();

        //console.log("trimmedName: "+Name);
        //console.log(trimmedevaluatorName);
            // if (get_preferredname == trimmedevaluatorName)
            // {

            //     document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1191_ctl00_ctl00_TextField').value =this._currentUser.get_title();


            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl00").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl01").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl02").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl03").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl04").disabled=true;
                
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl00").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl01").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl02").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl03").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl04").disabled=true; 

            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    
            //         if(checkbox1 == 0 || checkbox2 == 0 || checkbox3 == 0 || checkbox4 == 0 || checkbox5 == 0)
            //         {
            //             $('#Acknowledgements #acknowledge1').hide();
            //             $('#Acknowledgements #acknowledge2').hide();
            //             $('#Acknowledgements #acknowledge3').hide();
            //             $('#Acknowledgements #acknowledge4').hide();
            //             $('#Acknowledgements #acknowledge5').hide();
            //             $('#Acknowledgements #AcknowledgeBy').hide();
            //             $('#Acknowledgements #ApprovalStatus').hide();
            //             $('#Acknowledge #AcknowledgeBy').hide();
            //             $('#Acknowledge #Status').hide();

            //             if(get_preferredname == 'Alfie John Ortiz'.trim() || get_preferredname == 'Nino Rey Cresencio'.trim() || get_preferredname == 'Lito Abon Jr.'.trim() )
            //             {
            //                 $('#Acknowledgements #ApprovalStatus').show();
            //             }
            //         }
            //         else
            //         {           
            //             $("input[type=radio]").attr('disabled', true);                    

            //             document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1141_ctl00_ctl00_TextField').value =this._currentUser.get_title();
            //         //----------------------------------------------------------------------------------------------------------------
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff241_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff281_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff321_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff361_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff401_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff441_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff481_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff521_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff561_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff601_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff641_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff701_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff741_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff781_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff821_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff861_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff901_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff941_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff981_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1021_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1061_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

            //             $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff651_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
            //             $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff661_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

            //             $('#Acknowledgements #acknowledge1').show();
            //             $('#Acknowledgements #acknowledge2').show();
            //             $('#Acknowledgements #acknowledge3').show();
            //             $('#Acknowledgements #acknowledge4').show();
            //             $('#Acknowledgements #acknowledge5').show();
            //             $('#Acknowledge #AcknowledgeBy').show();
            //             $('#Acknowledge #Status').show();

	           //          document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1151_ctl00_ctl00").disabled=true;
	           //          document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1091_ctl00_ctl00").disabled=true;
	           //          document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1101_ctl00_ctl00").disabled=true;
	           //          document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1111_ctl00_ctl00").disabled=true;
	           //          document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1121_ctl00_ctl00").disabled=true;

	           //          $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1131_ctl00_DropDownChoice").prop("disabled", true);
	           //          $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1171_ctl00_DropDownChoice").prop("disabled", true);
            //         }
                
            // }
            // else if (get_preferredname == "Michelle Ybanez | My Office In.PH")
            // {

            //     document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1191_ctl00_ctl00_TextField').value =this._currentUser.get_title();


            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl00").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl01").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl02").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl03").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl04").disabled=true;
                
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl00").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl01").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl02").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl03").disabled=true;
            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl04").disabled=true; 

            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    
            //         if(checkbox1 == 0 || checkbox2 == 0 || checkbox3 == 0 || checkbox4 == 0 || checkbox5 == 0)
            //         {
            //             $('#Acknowledgements #acknowledge1').hide();
            //             $('#Acknowledgements #acknowledge2').hide();
            //             $('#Acknowledgements #acknowledge3').hide();
            //             $('#Acknowledgements #acknowledge4').hide();
            //             $('#Acknowledgements #acknowledge5').hide();
            //             $('#Acknowledgements #AcknowledgeBy').hide();
            //             $('#Acknowledgements #ApprovalStatus').hide();
            //             $('#Acknowledge #AcknowledgeBy').hide();
            //             $('#Acknowledge #Status').hide();

            //             if(get_preferredname == 'Alfie John Ortiz'.trim() || get_preferredname == 'Nino Rey Cresencio'.trim() || get_preferredname == 'Lito Abon Jr.'.trim() )
            //             {
            //                 $('#Acknowledgements #ApprovalStatus').show();
            //             }
            //         }
            //         else
            //         {           
            //             $("input[type=radio]").attr('disabled', true);                    

            //             document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1141_ctl00_ctl00_TextField').value =this._currentUser.get_title();
            //         //----------------------------------------------------------------------------------------------------------------
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff241_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff281_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff321_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff361_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff401_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff441_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff481_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff521_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff561_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff601_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff641_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff701_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff741_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff781_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff821_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff861_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff901_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff941_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff981_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1021_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //             $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1061_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

            //             $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff651_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
            //             $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff661_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

            //             $('#Acknowledgements #acknowledge1').show();
            //             $('#Acknowledgements #acknowledge2').show();
            //             $('#Acknowledgements #acknowledge3').show();
            //             $('#Acknowledgements #acknowledge4').show();
            //             $('#Acknowledgements #acknowledge5').show();
            //             $('#Acknowledge #AcknowledgeBy').show();
            //             $('#Acknowledge #Status').show();

	           //          document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1151_ctl00_ctl00").disabled=true;
	           //          document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1091_ctl00_ctl00").disabled=true;
	           //          document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1101_ctl00_ctl00").disabled=true;
	           //          document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1111_ctl00_ctl00").disabled=true;
	           //          document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1121_ctl00_ctl00").disabled=true;

	           //          $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1131_ctl00_DropDownChoice").prop("disabled", true);
	           //          $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1171_ctl00_DropDownChoice").prop("disabled", true);
            //         }
                
            // }
            // else if(get_preferredname == 'Alfie John Ortiz'.trim() || get_preferredname == 'Nino Rey Cresencio'.trim()  || get_preferredname == 'Lito Abon Jr.'.trim())//|| get_preferredname == 'Nowmar Calidro'.trim()
            // {
            //     //alert(this._currentUser.get_title());
            //     $('#Acknowledgements #ApprovalStatus').show();
            //     if(checkbox1 == 0 || checkbox2 == 0 || checkbox3 == 0 || checkbox4 == 0 || checkbox5 == 0)
            //     {
            //         $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1171_ctl00_DropDownChoice").prop("disabled", false);
            //         $('#Acknowledgements #ApprovalStatus').show();

            //         $('#Acknowledgements #acknowledge1').hide();
            //         $('#Acknowledgements #acknowledge2').hide();
            //         $('#Acknowledgements #acknowledge3').hide();
            //         $('#Acknowledgements #acknowledge4').hide();
            //         $('#Acknowledgements #acknowledge5').hide();
            //         $('#Acknowledgements #AcknowledgeBy').hide();
                    
            //         $('#Acknowledge #AcknowledgeBy').hide();
            //         $('#Acknowledge #Status').hide();
                    
            //         $('#Signatures #Signature1').hide();
            //         $('#Signatures #Signature2').hide();
            //         $('#Signatures #Signature3').hide();                    
            //     }
            //     else
            //     {   

            //         $('#Signatures #Signature1').show();
            //         $('#Signatures #Signature2').show();
            //         $('#Signatures #Signature3').show();

            //         $('#Acknowledgements #ApprovalStatus').show();
            //         document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1151_ctl00_ctl00").disabled=true;
            //         document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1091_ctl00_ctl00").disabled=true;
            //         document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1101_ctl00_ctl00").disabled=true;
            //         document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1111_ctl00_ctl00").disabled=true;
            //         document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1121_ctl00_ctl00").disabled=true;

            //         $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1171_ctl00_DropDownChoice").prop("disabled", true);

            //         $('#Acknowledgements #acknowledge1').show();
            //         $('#Acknowledgements #acknowledge2').show();
            //         $('#Acknowledgements #acknowledge3').show();
            //         $('#Acknowledgements #acknowledge4').show();
            //         $('#Acknowledgements #acknowledge5').show();
            //         $('#Acknowledgements #AcknowledgeBy').show(); 
            //         $('#Acknowledgements #ApprovalStatus').show(); 
            //         $('#Acknowledge #AcknowledgeBy').show(); 
            //         $('#Acknowledge #Status').show(); 
 
            //         $("input[type=radio]").attr('disabled', true); 

            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff241_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff281_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff321_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff361_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff401_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff441_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff481_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff521_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff561_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff601_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff641_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff701_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff741_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff781_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff821_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff861_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff901_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff941_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff981_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1021_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //         $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1061_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

            //         $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff651_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
            //         $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff661_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
            //     }

            //     	var status =$("Select[Title='Status']").val();
            //     if(status != "")
            //     {
            //     	document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_savebutton2_ctl00_diidIOSaveItem").style.display = "none";
            //     	$("input[type=radio]").attr('disabled', true);
            //     	$("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1131_ctl00_DropDownChoice").prop("disabled", true);
            //     }	


            // }
            // else if(get_preferredname == trimmedName)
            // {   
            //     $('#Signatures #Signature1').hide();
            //     $('#Signatures #Signature2').hide();
            //     $('#Signatures #Signature3').hide();    
                           
            //     $("input[type=radio]").attr('disabled', true);

            //     document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1141_ctl00_ctl00_TextField').value =this._currentUser.get_title();

            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff241_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff281_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff321_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff361_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff401_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff441_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff481_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff521_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff561_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff601_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff641_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff701_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff741_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff781_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff821_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff861_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff901_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff941_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff981_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1021_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1061_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

            //     $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff651_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
            //     $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff661_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

            //         if(checkbox1 == 0 || checkbox2 == 0 || checkbox3 == 0 || checkbox4 == 0 || checkbox5 == 0)
            //         {
            //             $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1171_ctl00_DropDownChoice").prop("disabled", true);
            //             $('#Acknowledgements #ApprovalStatus').show();

            //             $('#Acknowledgements #acknowledge1').show();
            //             $('#Acknowledgements #acknowledge2').show();
            //             $('#Acknowledgements #acknowledge3').show();
            //             $('#Acknowledgements #acknowledge4').show();
            //             $('#Acknowledgements #acknowledge5').show();
            //             $('#Acknowledge #AcknowledgeBy').hide();
            //             $('#Acknowledgements #ApprovalStatus').hide();
            //             $('#Acknowledge #Status').hide();
            //         }
            //         else
            //         {    
            //                 $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1171_ctl00_DropDownChoice").prop("disabled", true);
            //                 $('#Acknowledgements #acknowledge1').show();
            //                 $('#Acknowledgements #acknowledge2').show();
            //                 $('#Acknowledgements #acknowledge3').show();
            //                 $('#Acknowledgements #acknowledge4').show();
            //                 $('#Acknowledgements #acknowledge5').show();
            //                 $('#Acknowledge #AcknowledgeBy').show();
            //                 $('#Acknowledgements #ApprovalStatus').hide();
            //                 $('#Acknowledge #AcknowledgeBy').show();
            //                 $('#Acknowledge #Status').hide();

            //                 document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1151_ctl00_ctl00").disabled=true;
            //                 document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1091_ctl00_ctl00").disabled=true;
            //                 document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1101_ctl00_ctl00").disabled=true;
            //                 document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1111_ctl00_ctl00").disabled=true;
            //                 document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1121_ctl00_ctl00").disabled=true;
            //         }
            // }
            // else
            // {
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff241_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff281_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff321_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff361_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff401_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff441_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff481_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff521_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff561_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff601_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff641_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff701_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff741_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff781_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff821_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff861_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff901_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff941_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff981_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1021_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //     $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1061_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

            //     $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff651_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
            //     $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff661_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

            //     $('#Acknowledgements #acknowledge1').hide();
            //     $('#Acknowledgements #acknowledge2').hide();
            //     $('#Acknowledgements #acknowledge3').hide();
            //     $('#Acknowledgements #acknowledge4').hide();
            //     $('#Acknowledgements #acknowledge5').hide();
            //     $('#Acknowledgements #AcknowledgeBy').hide();
            //     $('#Acknowledgements #ApprovalStatus').hide();
            //     $('#Acknowledge #AcknowledgeBy').hide();
            //     $('#Acknowledge #Status').hide();

            //     $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

            //     document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_savebutton2_ctl00_diidIOSaveItem").style.display = "none";

            //     $("input[type=radio]").attr('disabled', true);
            //     //$("input:radio[name=options]").attr("disabled",true);

            //     $('#Signatures #Signature1').hide();
            //     $('#Signatures #Signature2').hide();
            //     $('#Signatures #Signature3').hide();
            // }

    }

    function onFaiureMethod(sender, args)
    {
        alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());
    }

//Calculations of Evaluation--------------------------------------------------------------------------------

    //CalculationsProbationaryNoKPI
            function calculationsProbationaryNoKPI()
            {
            //     //Attendance
            //     $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl00]').change(function() 
            //     {
            //           var WeightedScore = 0.10 * 1;
            //         document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff111_ctl00_ctl00_TextField").value = WeightedScore;
            //         TotalWeightedScore_ProbationaryNoKPI();



            //     });
            //     $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl01]').change(function() 
            //      {
            //          var WeightedScore = 0.10 * 2;
            //         document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff111_ctl00_ctl00_TextField").value = WeightedScore;
            //         TotalWeightedScore_ProbationaryNoKPI();

            //     });
            //     $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl02]').change(function() 
            //      {
            //          var WeightedScore = 0.10 * 3;
            //         document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff111_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
            //         TotalWeightedScore_ProbationaryNoKPI();

            //     });
            //     $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl03]').change(function() 
            //      {
            //          var WeightedScore = 0.10 * 4;
            //         document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff111_ctl00_ctl00_TextField").value = WeightedScore;
            //         TotalWeightedScore_ProbationaryNoKPI();

            //     });
            //     $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl04]').change(function() 
            //      {
            //          var WeightedScore = 0.10 * 5;
            //         document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff111_ctl00_ctl00_TextField").value = WeightedScore;
            //         TotalWeightedScore_ProbationaryNoKPI();

            //     });                 

            // //Code of Conduct Adherence 
            //     $('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl00]').change(function() 
            //     {
            //          var WeightedScore = 0.10 * 1;
            //         document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
            //         TotalWeightedScore_ProbationaryNoKPI();

            //     });
            //     $('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl01]').change(function() 
            //      {
            //          var WeightedScore = 0.10 * 2;
            //         document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
            //         TotalWeightedScore_ProbationaryNoKPI();

            //     });
            //     $('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl02]').change(function() 
            //      {
            //          var WeightedScore = 0.10 * 3;
            //         document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
            //         TotalWeightedScore_ProbationaryNoKPI();

            //     });
            //     $('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl03]').change(function() 
            //      {
            //          var WeightedScore = 0.10 * 4;
            //         document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
            //         TotalWeightedScore_ProbationaryNoKPI();

            //     });
            //     $('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff141_ctl00_ctl04]').change(function() 
            //      {
            //          var WeightedScore = 0.10 * 5;
            //         document.getElementById("ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff151_ctl00_ctl00_TextField").value = WeightedScore;
            //         TotalWeightedScore_ProbationaryNoKPI();

            //     });     


                //Work Attitudes1 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.10 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.10 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.10 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.10 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.10 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });     

                //Work Attitudes2 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.15 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.15 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.15 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.15 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.15 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });     

                //Work Attitudes3  
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.15 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.15 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.15 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_ProbationaryNoKPI();
                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.15 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();


                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.15 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    }); 

                //Job Knowledge 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff421_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.20 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff431_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff421_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.20 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff431_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff421_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.20 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff431_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff421_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.20 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff431_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff421_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.20 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff431_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    }); 

                //Work Skills1 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff461_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.10 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff471_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff461_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.10 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff471_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff461_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.10 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff471_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff461_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.10 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff471_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff461_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.10 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff471_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });

                //Work Skills2 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff501_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.10 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff511_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff501_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.10 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff511_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff501_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.10 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff511_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff501_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.10 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff511_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryNoKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff501_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.10 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff511_ctl00_ctl00_TextField").value = WeightedScore;
                        
                        TotalWeightedScore2_ProbationaryNoKPI();
                    });                     
            }

    //TotalWeightedScore2_ProbationaryNoKPI
            function TotalWeightedScore2_ProbationaryNoKPI(){

                        var partialScore = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1071_ctl00_ctl00_TextField]').val())||0;
                        var WorkAttitudes1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField]').val())||0;
                        var WorkAttitudes2 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField]').val())||0;
                        var WorkAttitudes3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField]').val())||0;
                        var JobKnowledge = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff431_ctl00_ctl00_TextField]').val())||0;
                        var WorkSkills1  = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff471_ctl00_ctl00_TextField]').val())||0;
                        var WorkSkills2 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff511_ctl00_ctl00_TextField]').val())||0;
                        var TotalWeightedScore2 = partialScore + WorkAttitudes1 + WorkAttitudes2 + WorkAttitudes3 + JobKnowledge + WorkSkills1  + WorkSkills2;

                        $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1181_ctl00_ctl00_TextField').val(TotalWeightedScore2.toFixed(2));
                        //alert(TotalWeightedScore2);

                        Description_Equivalent_Remarks();

            }

    //CalculationsProbationaryWithKPI
            function calculationsProbationaryWithKPI()
            {
                //Work Attitudes1 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });     

                //Work Attitudes2 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });     

                //Work Attitudes3  
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.10 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.10 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.10 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.10 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();


                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.10 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    }); 

                //1st Month
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.20 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.20 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.20 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.20 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.20 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });     
                
                //2nd Month
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.20 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.20 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.20 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.20 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.20 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });   

                //3rd Month
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.20 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();
                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.20 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.20 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.20 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.20 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_ProbationaryWithKPI();

                    });         
                 
            }   

    //TotalWeightedScore2_ProbationaryWithKPI
            function TotalWeightedScore2_ProbationaryWithKPI(){

                var partialScore = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1071_ctl00_ctl00_TextField]').val())||0;
                var WorkAttitudes1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField]').val())||0;
                var WorkAttitudes2 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField]').val())||0;
                var WorkAttitudes3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField]').val())||0;
                var Month1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField]').val())||0;
                var Month2  = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField]').val())||0;
                var Month3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField]').val())||0;
                var TotalWeightedScore2 = partialScore + WorkAttitudes1 + WorkAttitudes2 + WorkAttitudes3 + Month1 + Month2  + Month3;

                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1181_ctl00_ctl00_TextField').val(TotalWeightedScore2.toFixed(2));
                //alert(TotalWeightedScore2);
                Description_Equivalent_Remarks();

            }   

    //CalculationsTeamLeads
            function CalculationsTeamLeads()
            {
                //Work Attitudes1 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.04 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.04 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.04 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.04 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.04 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });     

                //Work Attitudes2 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.04 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.04 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.04 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.04 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.04 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });     

                //Work Attitudes3  
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.04 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.04 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.04 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_TeamLeads();
                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.04 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();


                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.04 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    }); 
                
                //Work Attitudes4
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.04 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.04 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.04 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.04 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.04 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    }); 

                //Work Attitudes5
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.04 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.04 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.04 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff381_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.04 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();


                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.04 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();


                    });     

                //1st Month
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.15 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.15 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.15 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.15 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.15 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });     
                
                //2nd Month
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.15 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.15 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.15 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.15 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.15 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });   

                //3rd Month
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.15 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();
                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.15 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.15 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.15 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.15 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });         

                //Leadership Capabilities1
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });     
                
                //Leadership Capabilities2
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });   

                //Leadership Capabilities3
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_TeamLeads();

                    });     
            }

    //TotalWeightedScore2_TeamLeads
            function TotalWeightedScore2_TeamLeads(){

                var partialScore = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1071_ctl00_ctl00_TextField]').val())||0;
                var WorkAttitudes1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField]').val())||0;
                var WorkAttitudes2 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField]').val())||0;
                var WorkAttitudes3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField]').val())||0;
                var WorkAttitudes4 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField]').val())||0;
                var WorkAttitudes5 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField]').val())||0;
                var Month1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField]').val())||0;
                var Month2  = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField]').val())||0;
                var Month3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField]').val())||0;
                var LeadershipCapabilities1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField]').val())||0;
                var LeadershipCapabilities2  = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField]').val())||0;
                var LeadershipCapabilities3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField]').val())||0;
                var TotalWeightedScore2 = partialScore + WorkAttitudes1 + WorkAttitudes2 + WorkAttitudes3 + WorkAttitudes4 + WorkAttitudes5 + Month1 + Month2  + Month3 + LeadershipCapabilities1 + LeadershipCapabilities2 + LeadershipCapabilities3;

                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1181_ctl00_ctl00_TextField').val(TotalWeightedScore2.toFixed(2));
                //alert(TotalWeightedScore2);
                Description_Equivalent_Remarks();

            }   

    //CalculationsOfficers
            function CalculationsOfficers()
            {           
                //Personal Imange/ Personal Appearance
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff181_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff181_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff181_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff181_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff181_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    }); 

                //Work Attitudes1 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });     

                //Work Attitudes2 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });     

                //Work Attitudes3  
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Officers();
                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();


                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    }); 
                
                //Work Attitudes4
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl01]').change(function() 
                    {   
                        var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    }); 

                //Work Attitudes5
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Officers();
                    });
                    $('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff381_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();


                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();


                    });     
                    
                //1st Month
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.10 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.10 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.10 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.10 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.10 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });     
                
                //2nd Month
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.10 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.10 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.10 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.10 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.10 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });   

                //3rd Month
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.15 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();
                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.15 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.15 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.15 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.15 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    }); 

                //Leadership Capabilities1 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff721_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.02 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff721_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.02 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff721_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.02 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff721_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.02 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff721_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.02 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });     
                
                //Leadership Capabilities2
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff761_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.02 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff761_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.02 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff761_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.02 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff761_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.02 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff761_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.02 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });     

                //Leadership Capabilities3
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff801_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.02 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff801_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.02 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff801_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.02 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff801_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.02 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff801_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.02 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });     

                //Leadership Capabilities4
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.03 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.03 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.03 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.03 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.03 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });     
                
                //Leadership Capabilities5
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.03 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.03 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.03 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.03 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.03 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });   

                //Leadership Capabilities6
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.03 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.03 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.03 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.03 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.03 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Officers();

                    });     

            
            }

    //TotalWeightedScore2_Officers
            function TotalWeightedScore2_Officers(){

            var partialScore = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1071_ctl00_ctl00_TextField]').val())||0;
            var PersonalImangeAppearance = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes2 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes4 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes5 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField]').val())||0;
            var Month1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField]').val())||0;
            var Month2  = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField]').val())||0;
            var Month3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities2  = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities4 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities5  = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities6 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField]').val())||0;
            var TotalWeightedScore2 = partialScore + PersonalImangeAppearance + WorkAttitudes1 + WorkAttitudes2 + WorkAttitudes3 + WorkAttitudes4 + WorkAttitudes5 + Month1 + Month2  + Month3 + LeadershipCapabilities1 + LeadershipCapabilities2 + LeadershipCapabilities3 + LeadershipCapabilities4 + LeadershipCapabilities5 + LeadershipCapabilities6;

            $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1181_ctl00_ctl00_TextField').val(TotalWeightedScore2.toFixed(2));
            //alert(TotalWeightedScore2);

            Description_Equivalent_Remarks();

            }   

    //CalculationsManagers
        function CalculationsManagers()
        {
            //Personal Imange/ Personal Appearance
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff181_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff181_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff181_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff181_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff181_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    }); 

            //Work Attitudes1 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });     

            //Work Attitudes2 
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });     

            //Work Attitudes3  
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Managers();
                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();


                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    }); 
                
            //Work Attitudes4
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl01]').change(function() 
                    {   
                        var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    }); 

            //Work Attitudes5
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.05 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.05 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Managers();
                    });
                    $('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff381_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.05 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();


                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.05 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();


                    });     
                    
            //1st Month
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.10 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.10 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.10 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.10 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.10 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });     
                
            //2nd Month
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.10 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.10 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.10 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.10 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.10 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });   

            //3rd Month
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.10 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();
                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.10 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.10 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.10 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.10 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    }); 

            //Leadership Capabilities1 //2
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff721_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.03 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff721_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.03 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff721_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.03 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff721_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.03 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff721_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.03 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });     
                
            //Leadership Capabilities2 //3
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff761_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.03 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff761_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.03 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff761_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.03 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff761_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.03 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff761_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.03 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });     

            //Leadership Capabilities3 //4
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff801_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.03 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff801_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.03 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff801_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.03 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff801_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.03 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff801_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.03 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });       

            //Leadership Capabilities4 //7
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.03 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.03 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.03 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.03 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff921_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.03 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });     
                
            //Leadership Capabilities5 //9
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.03 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.03 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.03 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.03 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1001_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.03 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });   

            //Leadership Capabilities6 //10
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl00]').change(function() 
                    {
                         var WeightedScore = 0.03 * 1;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl01]').change(function() 
                     {
                         var WeightedScore = 0.03 * 2;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl02]').change(function() 
                     {
                         var WeightedScore = 0.03 * 3;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl03]').change(function() 
                     {
                         var WeightedScore = 0.03 * 4;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });
                    $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1041_ctl00_ctl04]').change(function() 
                     {
                         var WeightedScore = 0.03 * 5;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").value = WeightedScore;
                        TotalWeightedScore2_Managers();

                    });     
            
            //Leadership Capabilities7 //1
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff681_ctl00_ctl00]').change(function() 
                {
                     var WeightedScore = 0.03 * 1;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff691_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff681_ctl00_ctl01]').change(function() 
                 {
                     var WeightedScore = 0.03 * 2;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff691_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff681_ctl00_ctl02]').change(function() 
                 {
                     var WeightedScore = 0.03 * 3;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff691_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff681_ctl00_ctl03]').change(function() 
                 {
                     var WeightedScore = 0.03 * 4;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff691_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff681_ctl00_ctl04]').change(function() 
                 {
                     var WeightedScore = 0.03 * 5;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff691_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                }); 

            //Leadership Capabilities8//6
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff961_ctl00_ctl00]').change(function() 
                {
                     var WeightedScore = 0.03 * 1;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff971_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff961_ctl00_ctl01]').change(function() 
                 {
                     var WeightedScore = 0.03 * 2;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff971_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                }); 
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff961_ctl00_ctl02]').change(function() 
                 {
                     var WeightedScore = 0.03 * 3;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff971_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff961_ctl00_ctl03]').change(function() 
                 {
                     var WeightedScore = 0.03 * 4;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff971_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff961_ctl00_ctl04]').change(function() 
                 {
                     var WeightedScore = 0.03 * 5;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff971_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                });             
            
            //Leadership Capabilities9
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff841_ctl00_ctl00]').change(function() 
                {
                     var WeightedScore = 0.03 * 1;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff851_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff841_ctl00_ctl01]').change(function() 
                 {
                     var WeightedScore = 0.03 * 2;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff851_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff841_ctl00_ctl02]').change(function() 
                 {
                     var WeightedScore = 0.03 * 3;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff851_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff841_ctl00_ctl03]').change(function() 
                 {
                     var WeightedScore = 0.03 * 4;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff851_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff841_ctl00_ctl04]').change(function() 
                 {
                     var WeightedScore = 0.03 * 5;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff851_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();  
                });   

            //Leadership Capabilities10
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff881_ctl00_ctl00]').change(function() 
                {
                     var WeightedScore = 0.03 * 1;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff891_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff881_ctl00_ctl01]').change(function() 
                 {
                     var WeightedScore = 0.03 * 2;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff891_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff881_ctl00_ctl02]').change(function() 
                 {
                     var WeightedScore = 0.03 * 3;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff891_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff881_ctl00_ctl03]').change(function() 
                 {
                     var WeightedScore = 0.03 * 4;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff891_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff881_ctl00_ctl04]').change(function() 
                 {
                     var WeightedScore = 0.03 * 5;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff891_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Managers();
                });         
        }

    //TotalWeightedScore2_Managers
        function TotalWeightedScore2_Managers()
        {
            var partialScore = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1071_ctl00_ctl00_TextField]').val())||0;
            var PersonalImangeAppearance = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes2 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes4 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField]').val())||0;
            var WorkAttitudes5 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField]').val())||0;
            var Month1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField]').val())||0;
            var Month2  = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField]').val())||0;
            var Month3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff691_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities2  = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities4 = parseFloat($('input[id= ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities5  = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff851_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities6 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff891_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities7 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities8 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff971_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities9  = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField]').val())||0;
            var LeadershipCapabilities10 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField]').val())||0;
            var TotalWeightedScore2 = partialScore + PersonalImangeAppearance + WorkAttitudes1 + WorkAttitudes2 + WorkAttitudes3 + WorkAttitudes4 + WorkAttitudes5 + Month1 + Month2  + Month3 + LeadershipCapabilities1 + LeadershipCapabilities2 + LeadershipCapabilities3 + LeadershipCapabilities4 + LeadershipCapabilities5 + LeadershipCapabilities6 + LeadershipCapabilities7 + LeadershipCapabilities8 + LeadershipCapabilities9 + LeadershipCapabilities10;

                    $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1181_ctl00_ctl00_TextField').val(TotalWeightedScore2.toFixed(2));
                    //alert(TotalWeightedScore2.toFixed(2));
                    Description_Equivalent_Remarks();

        }

    //CalculationsRankandFile
        function CalculationsRankandFile()
        {
            //Work Attitudes1 
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl00]').change(function() 
                {
                     var WeightedScore = 0.04 * 1;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl01]').change(function() 
                 {
                     var WeightedScore = 0.04 * 2;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl02]').change(function() 
                 {
                     var WeightedScore = 0.04 * 3;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl03]').change(function() 
                 {
                     var WeightedScore = 0.04 * 4;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff221_ctl00_ctl04]').change(function() 
                 {
                     var WeightedScore = 0.04 * 5;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });     

            //Work Attitudes2 
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl00]').change(function() 
                {
                     var WeightedScore = 0.04 * 1;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl01]').change(function() 
                 {
                     var WeightedScore = 0.04 * 2;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl02]').change(function() 
                 {
                     var WeightedScore = 0.04 * 3;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl03]').change(function() 
                 {
                     var WeightedScore = 0.04 * 4;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff261_ctl00_ctl04]').change(function() 
                 {
                     var WeightedScore = 0.04 * 5;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });     

            //Work Attitudes3  
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl00]').change(function() 
                {
                     var WeightedScore = 0.04 * 1;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl01]').change(function() 
                 {
                     var WeightedScore = 0.04 * 2;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl02]').change(function() 
                 {
                     var WeightedScore = 0.04 * 3;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                    TotalWeightedScore2_TeamLeads();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl03]').change(function() 
                 {
                     var WeightedScore = 0.04 * 4;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();


                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff311_ctl00_ctl04]').change(function() 
                 {
                     var WeightedScore = 0.04 * 5;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                }); 
            
            //Work Attitudes4
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl00]').change(function() 
                {
                     var WeightedScore = 0.04 * 1;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl01]').change(function() 
                 {
                     var WeightedScore = 0.04 * 2;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl02]').change(function() 
                 {
                     var WeightedScore = 0.04 * 3;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl03]').change(function() 
                 {
                     var WeightedScore = 0.04 * 4;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff341_ctl00_ctl04]').change(function() 
                 {
                     var WeightedScore = 0.04 * 5;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                }); 

            //Work Attitudes5
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl00]').change(function() 
                {
                     var WeightedScore = 0.04 * 1;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl01]').change(function() 
                 {
                     var WeightedScore = 0.04 * 2;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl03]').change(function() 
                 {
                     var WeightedScore = 0.04 * 3;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore.toFixed(2);

                });
                $('input[type=radio][id=ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff381_ctl00_ctl03]').change(function() 
                 {
                     var WeightedScore = 0.04 * 4;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();


                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff381_ctl00_ctl04]').change(function() 
                 {
                     var WeightedScore = 0.04 * 5;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_TeamLeads();


                });     

            //1st Month
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl00]').change(function() 
                {
                     var WeightedScore = 0.20 * 1;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Officers();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl01]').change(function() 
                 {
                     var WeightedScore = 0.20 * 2;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Officers();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl02]').change(function() 
                 {
                     var WeightedScore = 0.20 * 3;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                    TotalWeightedScore2_Officers();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl03]').change(function() 
                 {
                     var WeightedScore = 0.20 * 4;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Officers();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff541_ctl00_ctl04]').change(function() 
                 {
                     var WeightedScore = 0.20 * 5;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Officers();

                });     
            
            //2nd Month
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl00]').change(function() 
                {
                     var WeightedScore = 0.20 * 1;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Officers();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl01]').change(function() 
                 {
                     var WeightedScore = 0.20 * 2;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Officers();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl02]').change(function() 
                 {
                     var WeightedScore = 0.20 * 3;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                    TotalWeightedScore2_Officers();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl03]').change(function() 
                 {
                     var WeightedScore = 0.20 * 4;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Officers();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff581_ctl00_ctl04]').change(function() 
                 {
                     var WeightedScore = 0.20 * 5;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Officers();

                });   

            //3rd Month
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl00]').change(function() 
                {
                     var WeightedScore = 0.20 * 1;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Officers();
                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl01]').change(function() 
                 {
                     var WeightedScore = 0.20 * 2;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Officers();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl02]').change(function() 
                 {
                     var WeightedScore = 0.20 * 3;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore.toFixed(1);
                    TotalWeightedScore2_Officers();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl03]').change(function() 
                 {
                     var WeightedScore = 0.20 * 4;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Officers();

                });
                $('input[type=radio][id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff621_ctl00_ctl04]').change(function() 
                 {
                     var WeightedScore = 0.20 * 5;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").value = WeightedScore;
                    TotalWeightedScore2_Officers();

                }); 
        }

        //TotalWeightedScore2_RankandFile
            function TotalWeightedScore2_RankandFile(){

                var partialScore = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1071_ctl00_ctl00_TextField]').val())||0;
                var PersonalImangeAppearance = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField]').val())||0;
                var WorkAttitudes1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField]').val())||0;
                var WorkAttitudes2 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField]').val())||0;
                var WorkAttitudes3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField]').val())||0;
                var WorkAttitudes4 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField]').val())||0;
                var WorkAttitudes5 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField]').val())||0;
                var Month1 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField]').val())||0;
                var Month2  = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField]').val())||0;
                var Month3 = parseFloat($('input[id=ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField]').val())||0;
                var TotalWeightedScore2 = partialScore + WorkAttitudes1 + WorkAttitudes2 + WorkAttitudes3 + WorkAttitudes4 + WorkAttitudes4 + Month1 + Month2  + Month3;

                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1181_ctl00_ctl00_TextField').val(TotalWeightedScore2.toFixed(2));
                alert(TotalWeightedScore2);
                Description_Equivalent_Remarks();

            }   

//Description_Equivalent_Remarks
	function Description_Equivalent_Remarks()
	{
		   //Total Weighted Score Summary
	        var totalWeightedScore = $("input[Title*='Total Weighted Score']").val();

	            if(totalWeightedScore == 5)
	            {
	                //alert("A+");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1211_ctl00_ctl00_TextField').val("A+");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1201_ctl00_ctl00_TextField').val("Extraordinary");
	            }
	            else if(totalWeightedScore >= 4.5)
	            {
	                //alert("A-");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1211_ctl00_ctl00_TextField').val("A");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1201_ctl00_ctl00_TextField').val("Outstanding");
	            }            
	            else if(totalWeightedScore >= 4)
	            {
	                //alert("A-");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1211_ctl00_ctl00_TextField').val("A-");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1201_ctl00_ctl00_TextField').val("Above Average");
	            }
	            else if(totalWeightedScore >= 3.5)
	            {
	                //alert("B+");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1211_ctl00_ctl00_TextField').val("B+");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1201_ctl00_ctl00_TextField').val("Slightly Above Average");
	            }
	            else if(totalWeightedScore >= 3)
	            {
	                // alert("B");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1211_ctl00_ctl00_TextField').val("B");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1201_ctl00_ctl00_TextField').val("Average");
	            }
	            else if(totalWeightedScore >= 2.5)
	            {
	                // alert("B-");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1211_ctl00_ctl00_TextField').val("B-");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1201_ctl00_ctl00_TextField').val("Slightly Below Average");
	            }
	            else if(totalWeightedScore >= 2)
	            {
	                // alert("C+");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1211_ctl00_ctl00_TextField').val("C+");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1201_ctl00_ctl00_TextField').val("Below Average");
	            }
	            else if(totalWeightedScore >= 1.5)
	            {
	                // alert("C");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1211_ctl00_ctl00_TextField').val("C");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1201_ctl00_ctl00_TextField').val("Poor");
	            }
	            else if(totalWeightedScore >= 1)
	            {
	                // alert("C-");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1211_ctl00_ctl00_TextField').val("C-");
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1201_ctl00_ctl00_TextField').val("Very Poor");
	            }

	            if(totalWeightedScore >= 2.5)
	            {
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1221_ctl00_ctl00_TextField').val("PASSED");   
	            }
	            else if(totalWeightedScore <=2.49)
	            {
	                $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1221_ctl00_ctl00_TextField').val("FAILED");   
	            }
	}

//$(document).ready(function()
    $(document).ready(function()
    {


    	//$('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1181_ctl00_ctl00_TextField').val().toFixed(2);

    //.change function checkboxes
      $("input[type='checkbox'][name='ctl00$ctl42$g_de5c2089_1e7b_4ccf_9061_895538ade459$ff1151$ctl00$ctl00']").change(function()
        {
          //alert(chk1);
          if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1151_ctl00_ctl00').checked){
            checkbox1=1;
            //alert(chk1);
          }

        });
        $("input[type='checkbox'][name='ctl00$ctl42$g_de5c2089_1e7b_4ccf_9061_895538ade459$ff1091$ctl00$ctl00']").change(function()
          {
            //alert(chk1);
            if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1091_ctl00_ctl00').checked){
              checkbox2=1;
              //alert(chk1);
            }

          });
        $("input[type='checkbox'][name='ctl00$ctl42$g_de5c2089_1e7b_4ccf_9061_895538ade459$ff1101$ctl00$ctl00']").change(function()
          {
            //alert(chk1);
            if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1101_ctl00_ctl00').checked){
              checkbox3=1;
              //alert(chk1);
            }

          });
        $("input[type='checkbox'][name='ctl00$ctl42$g_de5c2089_1e7b_4ccf_9061_895538ade459$ff1111$ctl00$ctl00']").change(function()
        {
            //alert(chk1);
            if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1111_ctl00_ctl00').checked){
              checkbox4=1;
              //alert(chk1);
            }

          });
        $("input[type='checkbox'][name='ctl00$ctl42$g_de5c2089_1e7b_4ccf_9061_895538ade459$ff1121$ctl00$ctl00']").change(function()
        {
            //alert(chk1);
            if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1121_ctl00_ctl00').checked){
              checkbox5=1;
              //alert(chk1);
            }

          });

      if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1151_ctl00_ctl00').checked){
          checkbox1=1;
          //alert(chk1);
        }if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1091_ctl00_ctl00').checked){
          checkbox2=1;
          //alert(chk1);
        }if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1101_ctl00_ctl00').checked){
          checkbox3=1;
          //alert(chk1);
        }if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1111_ctl00_ctl00').checked)
        {
          checkbox4=1;
          //alert(chk1);
        }if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1121_ctl00_ctl00').checked){
          checkbox5=1;
          //alert(chk1);
        }
        
    //Hide Fields
    $('#EvaluationForm #TotalWeightedScore1').hide();
    $('#EvaluatorAcknowledgement #EvaluatorAcknowledgement_tr').hide();
    // $('#Acknowledgements #acknowledge1').hide();
    // $('#Acknowledgements #acknowledge2').hide();
    // $('#Acknowledgements #acknowledge3').hide();
    // $('#Acknowledgements #acknowledge4').hide();
    // $('#Acknowledgements #acknowledge5').hide();
    // $('#Acknowledgements #Status').hide();
    $('#Signatures #Signature1').hide();
    $('#Signatures #Signature2').hide();
    $('#Signatures #Signature3').hide();

    //Type of Evaluation Form

        var val=$("Select[Title='Type of Evaluation']").val();
               //alert(val);
            
            if(val == "")
            {
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
                $('#EvaluationForm #TotalWeightedScore2').hide();
                $('#partIIComments #DevelopmentalPlans').hide();
                $('#partIIIComments #PerformanceTargetPeriod').hide();
            }    
            else if(val=="Probationary (NO KPI)")
            {
                $('#EvaluationForm #Attendance').show();
                $('#EvaluationForm #Attendance').show();
                $('#EvaluationForm #CodeofConductAdherence').show();
                $('#EvaluationForm #PersonalImageAppearance').hide();
                $('#EvaluationForm #WorkAttitudes1').show();
                $('#EvaluationForm #WorkAttitudes2').show();
                $('#EvaluationForm #WorkAttitudes3').show();
                $('#EvaluationForm #WorkAttitudes4').hide();
                $('#EvaluationForm #WorkAttitudes5').hide();
                $('#EvaluationForm #JobKnowledge').show();
                $('#EvaluationForm #WorkSkills1').show();
                $('#EvaluationForm #WorkSkills2').show();
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
                $('#EvaluationForm #TotalWeightedScore22').show();
                $('#partIIComments #DevelopmentalPlans').show();
                $('#partIIIComments #PerformanceTargetPeriod').hide();

                calculationsProbationaryNoKPI();
                TotalWeightedScore2_ProbationaryNoKPI();
           
            }
            else if(val=="Probationary (WITH KPI)")
            {
                $('#EvaluationForm #Attendance').show();
                $('#EvaluationForm #Attendance').show();
                $('#EvaluationForm #CodeofConductAdherence').show();
                $('#EvaluationForm #PersonalImageAppearance').hide();
                $('#EvaluationForm #WorkAttitudes1').show();
                $('#EvaluationForm #WorkAttitudes2').show();
                $('#EvaluationForm #WorkAttitudes3').show();
                $('#EvaluationForm #WorkAttitudes4').hide();
                $('#EvaluationForm #WorkAttitudes5').hide();
                $('#EvaluationForm #JobKnowledge').hide();
                $('#EvaluationForm #WorkSkills1').hide();
                $('#EvaluationForm #WorkSkills2').hide();
                $('#EvaluationForm #1stMonth').show();
                $('#EvaluationForm #2ndMonth').show();
                $('#EvaluationForm #3rdMonth').show();
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
                $('#EvaluationForm #TotalWeightedScore2').show();
                $('#partIIComments #DevelopmentalPlans').show();
                $('#partIIIComments #PerformanceTargetPeriod').hide();

                calculationsProbationaryWithKPI();
                TotalWeightedScore2_ProbationaryWithKPI();


            }
            else if(val=="Team Leads")
            {
                $('#EvaluationForm #Attendance').show();
                $('#EvaluationForm #Attendance').show();
                $('#EvaluationForm #CodeofConductAdherence').show();
                $('#EvaluationForm #PersonalImageAppearance').hide();
                $('#EvaluationForm #WorkAttitudes1').show();
                $('#EvaluationForm #WorkAttitudes2').show();
                $('#EvaluationForm #WorkAttitudes3').show();
                $('#EvaluationForm #WorkAttitudes4').show();
                $('#EvaluationForm #WorkAttitudes5').show();
                $('#EvaluationForm #JobKnowledge').hide();
                $('#EvaluationForm #WorkSkills1').hide();
                $('#EvaluationForm #WorkSkills2').hide();
                $('#EvaluationForm #1stMonth').show();
                $('#EvaluationForm #2ndMonth').show();
                $('#EvaluationForm #3rdMonth').show();
                $('#EvaluationForm #LeadershipCapabilities1').hide();
                $('#EvaluationForm #LeadershipCapabilities2').hide();
                $('#EvaluationForm #LeadershipCapabilities3').hide();
                $('#EvaluationForm #LeadershipCapabilities4').hide();
                $('#EvaluationForm #LeadershipCapabilities5').hide();
                $('#EvaluationForm #LeadershipCapabilities6').hide();
                $('#EvaluationForm #LeadershipCapabilities7').show();
                $('#EvaluationForm #LeadershipCapabilities8').hide();
                $('#EvaluationForm #LeadershipCapabilities9').show();
                $('#EvaluationForm #LeadershipCapabilities10').show();
                $('#EvaluationForm #TotalWeightedScore2').show();
                $('#partIIComments #DevelopmentalPlans').show();
                $('#partIIIComments #PerformanceTargetPeriod').show();

                CalculationsTeamLeads();
                TotalWeightedScore2_TeamLeads();
               
            }
            else if(val=="Officers")
            {
                $('#EvaluationForm #Attendance').show();
                $('#EvaluationForm #Attendance').show();
                $('#EvaluationForm #CodeofConductAdherence').show();
                $('#EvaluationForm #PersonalImageAppearance').show();
                $('#EvaluationForm #WorkAttitudes1').show();
                $('#EvaluationForm #WorkAttitudes2').show();
                $('#EvaluationForm #WorkAttitudes3').show();
                $('#EvaluationForm #WorkAttitudes4').show();
                $('#EvaluationForm #WorkAttitudes5').show();
                $('#EvaluationForm #JobKnowledge').hide();
                $('#EvaluationForm #WorkSkills1').hide();
                $('#EvaluationForm #WorkSkills2').hide();
                $('#EvaluationForm #1stMonth').show();
                $('#EvaluationForm #2ndMonth').show();
                $('#EvaluationForm #3rdMonth').show();
                $('#EvaluationForm #LeadershipCapabilities1').hide();
                $('#EvaluationForm #LeadershipCapabilities2').show();
                $('#EvaluationForm #LeadershipCapabilities3').show();
                $('#EvaluationForm #LeadershipCapabilities4').show();
                $('#EvaluationForm #LeadershipCapabilities5').hide();
                $('#EvaluationForm #LeadershipCapabilities6').hide();
                $('#EvaluationForm #LeadershipCapabilities7').show();
                $('#EvaluationForm #LeadershipCapabilities8').hide();
                $('#EvaluationForm #LeadershipCapabilities9').show();
                $('#EvaluationForm #LeadershipCapabilities10').show();
                $('#EvaluationForm #TotalWeightedScore2').show();
                $('#partIIComments #DevelopmentalPlans').show();
                $('#partIIIComments #PerformanceTargetPeriod').show();

                CalculationsOfficers();
                TotalWeightedScore2_Officers();
               
            }
            else if(val=="Managers")
            {
                $('#EvaluationForm #Attendance').show();
                $('#EvaluationForm #Attendance').show();
                $('#EvaluationForm #CodeofConductAdherence').show();
                $('#EvaluationForm #PersonalImageAppearance').show();
                $('#EvaluationForm #WorkAttitudes1').show();
                $('#EvaluationForm #WorkAttitudes2').show();
                $('#EvaluationForm #WorkAttitudes3').show();
                $('#EvaluationForm #WorkAttitudes4').show();
                $('#EvaluationForm #WorkAttitudes5').show();
                $('#EvaluationForm #JobKnowledge').hide();
                $('#EvaluationForm #WorkSkills1').hide();
                $('#EvaluationForm #WorkSkills2').hide();
                $('#EvaluationForm #1stMonth').show();
                $('#EvaluationForm #2ndMonth').show();
                $('#EvaluationForm #3rdMonth').show();
                $('#EvaluationForm #LeadershipCapabilities1').show();
                $('#EvaluationForm #LeadershipCapabilities2').show();
                $('#EvaluationForm #LeadershipCapabilities3').show();
                $('#EvaluationForm #LeadershipCapabilities4').show();
                $('#EvaluationForm #LeadershipCapabilities5').show();
                $('#EvaluationForm #LeadershipCapabilities6').show();
                $('#EvaluationForm #LeadershipCapabilities7').show();
                $('#EvaluationForm #LeadershipCapabilities8').show();
                $('#EvaluationForm #LeadershipCapabilities9').show();
                $('#EvaluationForm #LeadershipCapabilities10').show();
                $('#EvaluationForm #TotalWeightedScore2').show();
                $('#partIIComments #DevelopmentalPlans').show();
                $('#partIIIComments #PerformanceTargetPeriod').show();   

                CalculationsManagers();
                TotalWeightedScore2_Managers(); 
                
            }
            else if(val=="Rank and File")
            {
                $('#EvaluationForm #Attendance').show();
                $('#EvaluationForm #Attendance').show();
                $('#EvaluationForm #CodeofConductAdherence').show();
                $('#EvaluationForm #PersonalImageAppearance').hide();
                $('#EvaluationForm #WorkAttitudes1').show();
                $('#EvaluationForm #WorkAttitudes2').show();
                $('#EvaluationForm #WorkAttitudes3').show();
                $('#EvaluationForm #WorkAttitudes4').show();
                $('#EvaluationForm #WorkAttitudes5').show();
                $('#EvaluationForm #JobKnowledge').hide();
                $('#EvaluationForm #WorkSkills1').hide();
                $('#EvaluationForm #WorkSkills2').hide();
                $('#EvaluationForm #1stMonth').show();
                $('#EvaluationForm #2ndMonth').show();
                $('#EvaluationForm #3rdMonth').show();
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
                $('#EvaluationForm #TotalWeightedScore2').show();
                $('#partIIComments #DevelopmentalPlans').show();
                $('#partIIIComments #PerformanceTargetPeriod').show();

                CalculationsRankandFile();
                TotalWeightedScore2_RankandFile();               
            } 

    //Read Only Fields
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1211_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1221_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1141_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

        $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDate').prop('readonly', true);
        $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff51_ctl00_ctl00_DateTimeField_DateTimeFieldDate').prop('readonly', true);

        $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff51_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage').remove();
        $('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage').remove();

        $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff71_ctl00_Lookup").prop("disabled", true);
        $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff41_ctl00_Lookup").prop("disabled", true);
        $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1161_ctl00_DropDownChoice").prop("disabled", true);
        $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff81_ctl00_DropDownChoice").prop("disabled", true);
        $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff51_ctl00_ctl00_DateTimeField_DateTimeFieldDate").prop("disabled", true);
        $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDate").prop("disabled", true);

        $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff31_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
        $( "a[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff31_ctl00_ctl00_UserField_checkNames']" ).empty();
        $( "a[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff31_ctl00_ctl00_UserField_browse']" ).empty();

        $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1081_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
        $( "a[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1081_ctl00_ctl00_UserField_checkNames']" ).empty();
        $( "a[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1081_ctl00_ctl00_UserField_browse']" ).empty();

        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff61_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');  
        
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff131_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff171_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff211_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff251_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff291_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff331_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff371_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff411_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff451_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff491_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff531_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff571_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff611_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff671_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff711_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff751_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff831_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff871_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff911_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff951_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff991_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1031_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff791_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');

        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff151_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff431_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff471_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff511_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff691_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff851_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff891_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff971_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');

        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1181_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        $("input[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1071_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff241_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff281_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff321_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff361_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff401_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff441_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff481_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff521_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff561_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff601_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff641_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff701_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
     //    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff741_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        // $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff781_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        // $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff821_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        // $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff861_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        // $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff901_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        // $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff941_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        // $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff981_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        // $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1021_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        // $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1061_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

        // $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff651_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
        // $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff661_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

    //Resizing Fields
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1201_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1211_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1221_ctl00_ctl00_TextField").style.width = "100px";

        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1141_ctl00_ctl00_TextField").style.width = "150px";
    	document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff11_ctl00_ctl00_TextField").style.width = "120px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff91_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff131_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff171_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff211_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff251_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff291_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff331_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff371_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff411_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff451_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff491_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff531_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff571_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff611_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff671_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff711_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff751_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff831_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff871_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff911_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff951_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff991_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1031_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff791_ctl00_ctl00_TextField").style.width = "100px";

        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff111_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff151_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff431_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff471_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff511_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff691_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff851_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff891_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff971_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").style.width = "100px";

        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1071_ctl00_ctl00_TextField").style.width = "100px";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1181_ctl00_ctl00_TextField").style.width = "100px";

    //No Border Fields
        // document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1201_ctl00_ctl00_TextField").style.border = "none";
        // document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1211_ctl00_ctl00_TextField").style.border = "none";
        // document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1221_ctl00_ctl00_TextField").style.border = "none";

    	document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff91_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff131_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff171_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff211_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff251_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff291_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff331_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff371_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff411_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff451_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff491_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff531_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff571_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff611_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff671_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff711_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff751_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff831_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff871_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff911_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff951_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff991_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1031_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff791_ctl00_ctl00_TextField").style.border = "none";

        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff111_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff151_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff191_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff231_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff271_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff301_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff351_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff391_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff431_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff471_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff511_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff551_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff591_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff631_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff691_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff731_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff771_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff811_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff851_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff891_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff931_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff971_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1011_ctl00_ctl00_TextField").style.border = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1051_ctl00_ctl00_TextField").style.border = "none";

    //No Resize Fields
    	document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff201_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff241_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff281_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff321_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff361_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff401_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff441_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff481_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff521_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff561_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff601_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff641_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff701_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff741_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff781_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff821_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff861_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff901_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff941_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff981_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1021_ctl00_ctl00_TextField").style.resize = "none";
        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1061_ctl00_ctl00_TextField").style.resize = "none";

        document.getElementById("sideNavBox").style.display = "none";
        document.getElementById("DeltaPlaceHolderMain").style.marginRight = "200px";

    //Total Weighted Score Summary
 	Description_Equivalent_Remarks();

    });

var userProfileProperties;

var targetUser;
function init(){
  //alert("Init running...");

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
   get_nccar();
    
}



  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}


 function get_nccar(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Employee Performance Evaluation Form');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query></View>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback, onFailedCallback);

 }

var created_by;


function onSucceededCallback(sender, args) {
         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();
        var employee_name = $("div[title='Employee Name']").text().trim();
        var trimmedName = employee_name.replace(/[|&;$%@"<>()+,]/g, "");
        var id = listItem.get_item('ID') 
        
        if(itemId==id){//if


            created_by= listItem.get_item('Author').get_lookupValue();
            var evaluator_name = listItem.get_item('Evaluator_x0020_Name').get_lookupValue();

            console.log("get_preferredname: "+get_preferredname+" || employee_name: "+trimmedName)
             //console.log(employee_name);
            
            if (get_preferredname == evaluator_name)
            {

                console.log("get_preferredname: "+get_preferredname+" || evaluator_name: "+evaluator_name);

                  document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1191_ctl00_ctl00_TextField').value =get_preferredname;


                document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl00").disabled=true;
                document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl01").disabled=true;
                document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl02").disabled=true;
                document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl03").disabled=true;
                document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff101_ctl00_ctl04").disabled=true;
                
                document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl00").disabled=true;
                document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl01").disabled=true;
                document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl02").disabled=true;
                document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl03").disabled=true;
                document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff141_ctl00_ctl04").disabled=true; 

                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    
                    if(checkbox1 == 0 || checkbox2 == 0 || checkbox3 == 0 || checkbox4 == 0 || checkbox5 == 0)
                    {
                        $('#Acknowledgements #acknowledge1').hide();
                        $('#Acknowledgements #acknowledge2').hide();
                        $('#Acknowledgements #acknowledge3').hide();
                        $('#Acknowledgements #acknowledge4').hide();
                        $('#Acknowledgements #acknowledge5').hide();
                        $('#Acknowledgements #AcknowledgeBy').hide();
                        $('#Acknowledgements #ApprovalStatus').hide();
                        $('#Acknowledge #AcknowledgeBy').hide();
                        $('#Acknowledge #Status').hide();

                        if(get_preferredname == 'Alfie John Ortiz' || get_preferredname == 'Nino Rey Cresencio' || get_preferredname == 'Lito Abon Jr.')
                        {
                            $('#Acknowledgements #ApprovalStatus').show();
                        }
                    }
                    else
                    {           
                        $("input[type=radio]").attr('disabled', true);                    

                        document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1141_ctl00_ctl00_TextField').value =get_preferredname;
                    //----------------------------------------------------------------------------------------------------------------
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff241_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff281_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff321_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff361_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff401_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff441_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff481_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff521_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff561_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff601_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff641_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff701_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff741_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff781_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff821_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff861_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff901_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff941_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff981_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1021_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                        $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1061_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

                        $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff651_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
                        $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff661_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

                        $('#Acknowledgements #acknowledge1').show();
                        $('#Acknowledgements #acknowledge2').show();
                        $('#Acknowledgements #acknowledge3').show();
                        $('#Acknowledgements #acknowledge4').show();
                        $('#Acknowledgements #acknowledge5').show();
                        $('#Acknowledge #AcknowledgeBy').show();
                        $('#Acknowledge #Status').show();

                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1151_ctl00_ctl00").disabled=true;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1091_ctl00_ctl00").disabled=true;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1101_ctl00_ctl00").disabled=true;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1111_ctl00_ctl00").disabled=true;
                        document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1121_ctl00_ctl00").disabled=true;

                        $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1131_ctl00_DropDownChoice").prop("disabled", true);
                        $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1171_ctl00_DropDownChoice").prop("disabled", true);
                    }

            }
             else if(get_preferredname == 'Alfie John Ortiz' || get_preferredname == 'Nino Rey Cresencio' || get_preferredname == 'Lito Abon Jr.')//|| currentName == 'Nowmar Calidro'.trim()
            {
                //alert(this._currentUser.get_title());
                $('#Acknowledgements #ApprovalStatus').show();
                if(checkbox1 == 0 || checkbox2 == 0 || checkbox3 == 0 || checkbox4 == 0 || checkbox5 == 0)
                {
                    $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1171_ctl00_DropDownChoice").prop("disabled", false);
                    $('#Acknowledgements #ApprovalStatus').show();

                    $('#Acknowledgements #acknowledge1').hide();
                    $('#Acknowledgements #acknowledge2').hide();
                    $('#Acknowledgements #acknowledge3').hide();
                    $('#Acknowledgements #acknowledge4').hide();
                    $('#Acknowledgements #acknowledge5').hide();
                    $('#Acknowledgements #AcknowledgeBy').hide();
                    
                    $('#Acknowledge #AcknowledgeBy').hide();
                    $('#Acknowledge #Status').hide();
                    
                    $('#Signatures #Signature1').hide();
                    $('#Signatures #Signature2').hide();
                    $('#Signatures #Signature3').hide();                    
                }
                else
                {   

                    $('#Signatures #Signature1').show();
                    $('#Signatures #Signature2').show();
                    $('#Signatures #Signature3').show();

                    $('#Acknowledgements #ApprovalStatus').show();
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1151_ctl00_ctl00").disabled=true;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1091_ctl00_ctl00").disabled=true;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1101_ctl00_ctl00").disabled=true;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1111_ctl00_ctl00").disabled=true;
                    document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1121_ctl00_ctl00").disabled=true;

                    $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1171_ctl00_DropDownChoice").prop("disabled", true);

                    $('#Acknowledgements #acknowledge1').show();
                    $('#Acknowledgements #acknowledge2').show();
                    $('#Acknowledgements #acknowledge3').show();
                    $('#Acknowledgements #acknowledge4').show();
                    $('#Acknowledgements #acknowledge5').show();
                    $('#Acknowledgements #AcknowledgeBy').show(); 
                    $('#Acknowledgements #ApprovalStatus').show(); 
                    $('#Acknowledge #AcknowledgeBy').show(); 
                    $('#Acknowledge #Status').show(); 
 
                    $("input[type=radio]").attr('disabled', true); 

                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff241_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff281_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff321_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff361_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff401_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff441_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff481_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff521_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff561_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff601_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff641_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff701_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff741_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff781_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff821_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff861_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff901_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff941_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff981_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1021_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                    $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1061_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

                    $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff651_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
                    $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff661_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
                }

                    var status =$("Select[Title='Status']").val();
                        if(status != "")
                        {
                            document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_savebutton2_ctl00_diidIOSaveItem").style.display = "none";
                            $("input[type=radio]").attr('disabled', true);
                            $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1131_ctl00_DropDownChoice").prop("disabled", true);
                        }   
            }
            else if(get_preferredname == trimmedName)
            {   
                $('#Signatures #Signature1').hide();
                $('#Signatures #Signature2').hide();
                $('#Signatures #Signature3').hide();    
                           
                $("input[type=radio]").attr('disabled', true);

                document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1141_ctl00_ctl00_TextField').value =get_preferredname;

                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff241_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff281_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff321_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff361_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff401_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff441_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff481_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff521_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff561_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff601_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff641_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff701_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff741_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff781_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff821_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff861_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff901_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff941_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff981_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1021_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1061_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

                $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff651_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
                $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff661_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

                    if(checkbox1 == 0 || checkbox2 == 0 || checkbox3 == 0 || checkbox4 == 0 || checkbox5 == 0)
                    {
                        $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1171_ctl00_DropDownChoice").prop("disabled", true);
                        $('#Acknowledgements #ApprovalStatus').show();

                        $('#Acknowledgements #acknowledge1').show();
                        $('#Acknowledgements #acknowledge2').show();
                        $('#Acknowledgements #acknowledge3').show();
                        $('#Acknowledgements #acknowledge4').show();
                        $('#Acknowledgements #acknowledge5').show();
                        $('#Acknowledge #AcknowledgeBy').hide();
                        $('#Acknowledgements #ApprovalStatus').hide();
                        $('#Acknowledge #Status').hide();
                    }
                    else
                    {    
                            $("#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1171_ctl00_DropDownChoice").prop("disabled", true);
                            $('#Acknowledgements #acknowledge1').show();
                            $('#Acknowledgements #acknowledge2').show();
                            $('#Acknowledgements #acknowledge3').show();
                            $('#Acknowledgements #acknowledge4').show();
                            $('#Acknowledgements #acknowledge5').show();
                            $('#Acknowledge #AcknowledgeBy').show();
                            $('#Acknowledgements #ApprovalStatus').hide();
                            $('#Acknowledge #AcknowledgeBy').hide();
                            $('#Acknowledge #Status').hide();

                            document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1151_ctl00_ctl00").disabled=true;
                            document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1091_ctl00_ctl00").disabled=true;
                            document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1101_ctl00_ctl00").disabled=true;
                            document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1111_ctl00_ctl00").disabled=true;
                            document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1121_ctl00_ctl00").disabled=true;

                            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

                			document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_savebutton2_ctl00_diidIOSaveItem").style.display = "none";
                    }

                    console.log(" Match");
            }            
            else
            {
                console.log("Dili Match");
                //console.log(get_preferredname);

                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff241_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff281_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff321_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff361_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff401_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff441_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff481_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff521_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff561_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff601_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff641_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff701_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff741_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff781_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff821_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff861_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff901_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff941_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff981_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1021_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                $("textarea[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1061_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

                $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff651_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
                $("div[id='ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff661_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

                $('#Acknowledgements #acknowledge1').hide();
                $('#Acknowledgements #acknowledge2').hide();
                $('#Acknowledgements #acknowledge3').hide();
                $('#Acknowledgements #acknowledge4').hide();
                $('#Acknowledgements #acknowledge5').hide();
                $('#Acknowledgements #AcknowledgeBy').hide();
                $('#Acknowledgements #ApprovalStatus').hide();
                $('#Acknowledge #AcknowledgeBy').hide();
                $('#Acknowledge #Status').hide();

                $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

                document.getElementById("ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_savebutton2_ctl00_diidIOSaveItem").style.display = "none";

                $("input[type=radio]").attr('disabled', true);
                //$("input:radio[name=options]").attr("disabled",true);

                $('#Signatures #Signature1').hide();
                $('#Signatures #Signature2').hide();
                $('#Signatures #Signature3').hide();
            }
            

        
      }  //end if

  } //end while
}


function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

      $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }

//function PreSaveAction()
    function PreSaveAction()
    {
    	//$('#ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1181_ctl00_ctl00_TextField').val().toFixed(2);

        $("select[name$=DropDownChoice]").removeAttr("disabled");
        $("select[name$=Lookup]").removeAttr("disabled");
        $("input[name$=RadioButtons]").removeAttr("disabled");
        $("input[name$=ctl00]").removeAttr("disabled");

 

    //check the checkBoxes
        if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1151_ctl00_ctl00').checked){
          checkbox1=1;
          //alert(checkbox1);
        }if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1091_ctl00_ctl00').checked){
          checkbox2=1;
          //alert(checkbox2);
        }if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1101_ctl00_ctl00').checked){
          checkbox3=1;
          //alert(checkbox3);
        }if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1111_ctl00_ctl00').checked)
        {
          checkbox4=1;
          //alert(checkbox4);
        }if(document.getElementById('ctl00_ctl43_g_de5c2089_1e7b_4ccf_9061_895538ade459_ff1121_ctl00_ctl00').checked){
          checkbox5=1;
          //alert(checkbox5);
        }

    //    
        var approvalStatus = $("Select[Title='Approval Status']").val();
        var Name = $("div[title='Employee Name']").text();
        //var trimmedName = Name.replace(/[|&;$%@"<>()+,]/g, "");
        //var get_preferredname = this._currentUser.get_title();

            if(get_preferredname == Name)
            {
                if(checkbox1==0 || checkbox2==0 || checkbox3==0 || checkbox4==0 || checkbox5==0)
                {
                  alert("Please check all the acknowledgement to submit");
                  return false;      
                }
                else if (checkbox1==1 && checkbox2==1 && checkbox3==1 && checkbox4==1 && checkbox5==1)
                {
                  return true;//true
                }
            }   
            
        var approvalStatus = $("Select[Title='Total Weighted Score']").val();


        return true;//true
    }

 function printDiv(divID) {
            //Get the HTML of div
            var divElements = document.getElementById(divID).innerHTML;
            //Get the HTML of whole page
            var oldPage = document.body.innerHTML;

            //Reset the page's HTML with div's HTML only
            document.body.innerHTML = 
              "<html><head><title></title></head><body>" + 
              divElements + "</body>";

            //Print Page
            window.print();

            //Restore orignal HTML
            document.body.innerHTML = oldPage;

          
        }


    </script> ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​<div id='NoteHide'><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i></div>


<input value="Print Item" onclick="javascript:printDiv(&#39;printableDiv&#39;)" type="button"/> 