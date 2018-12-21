​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>


(function ($, undefined)
    {
        $("document").ready(function ()
        {
            // var inputcontrols = document.getElementsByTagName("input");
            // for(i = 0; i<inputcontrols.length; i++)
            // {
            //     if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
            //         inputcontrols[i].value = "Submit";
            // }
            // var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
            // ribbonSave.text("Submit");
            document.getElementById("Date_x0020_of_x0020_use_26ea2e35-15c4-4add-9d22-920f3ba9f84c_$DateTimeFieldDateDatePickerImage").style.display = "none";
            document.getElementById("Date_x0020_of_x0020_return_649b6046-74b1-4aa3-bc75-b08530ecbc17_$DateTimeFieldDateDatePickerImage").style.display = "none";
            document.getElementById("Purpose_c2f59d44-587c-4156-a696-72887327d99e_$TextField").style.resize = "none";
            document.getElementById("Note_c9cac09a-b6a7-44fe-9d80-42afa6be9f68_$TextField").style.resize = "none";
    		document.getElementById("sideNavBox").style.display = "none";
			document.getElementById("DeltaPlaceHolderMain").style.marginRight = "200px";
        });
    })(jQuery);


$(document).ready(function()
{	
    
	
	$("input[id='Name_x0020_of_x0020_driver_9d7e7f89-7230-43b5-bd74-3dd5d8c84711_$TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
	$("textarea[id='Purpose_c2f59d44-587c-4156-a696-72887327d99e_$TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
	$("input[id='Date_x0020_of_x0020_use_26ea2e35-15c4-4add-9d22-920f3ba9f84c_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
	$("input[id='Destination_6b51929f-97e6-4210-ae1a-ebac8f7ba979_$TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
	$("input[id='Previous_x0020_reading_x0020_odo_85d6a62b-ab79-4620-a729-229b593067fb_$TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
	$("input[id='Date_x0020_of_x0020_return_649b6046-74b1-4aa3-bc75-b08530ecbc17_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#FFFFFF');


	var afterOdometer = $("input[id='After_x0020_reading_x0020_odomet_686ad336-36b8-4abd-bbc8-f22970d1817b_$TextField']").val();
    var Note = $("textarea[id='Note_c9cac09a-b6a7-44fe-9d80-42afa6be9f68_$TextField']").val();
		if(afterOdometer != "" || Note != "")
		{
			$("input[type=text]").attr('disabled', true);
			$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
            document.getElementById("ctl00_ctl43_g_90abfec2_8c60_44fb_a340_8c059cf2c3e9_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "none";
            $("textarea[id='Note_c9cac09a-b6a7-44fe-9d80-42afa6be9f68_$TextField']").attr('readonly', 'readonly').css('background-color','#FFFFFF');
		}

});

</script> <div id='NoteHide'><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i></div>
