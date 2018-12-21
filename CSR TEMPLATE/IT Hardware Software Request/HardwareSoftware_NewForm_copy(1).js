
​​​​​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script> ​​​<script src="/SiteAssets/Scripts/jquery.timeago.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script type="text/javascript">

//--------Change 'Save' to 'Submit'-----------------

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function are_cookies_enabled()
{
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled)
    { 
        document.cookie="testcookie";
        cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }
    return (cookieEnabled);
}



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

        
        $("input[id=ctl00_ctl43_g_3d9a876e_da1c_43d1_aba9_cdb321a0a431_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem]").attr("disabled", "disabled");

        // document.getElementById("Requestor_x0027_s_x0020_Name_830abf27-3b1b-40e4-b667-9c03c1e96781_$TextField").style.border = "none";
        // document.getElementById("Requestor_x0027_s_x0020_Name_830abf27-3b1b-40e4-b667-9c03c1e96781_$TextField").readOnly  = true;
        // document.getElementById("Requestor_x0027_s_x0020_Name_830abf27-3b1b-40e4-b667-9c03c1e96781_$TextField"). style.color = 'blue';

        // document.getElementById("Department_8ce26bfb-1875-42a5-b44d-bacc6b77fd1b_$TextField").style.border = "none";
        // document.getElementById("Department_8ce26bfb-1875-42a5-b44d-bacc6b77fd1b_$TextField").readOnly  = true;
        // document.getElementById("Department_8ce26bfb-1875-42a5-b44d-bacc6b77fd1b_$TextField"). style.color = 'blue';

        // document.getElementById("Immediate_x0020_Head_e3e66f07-d796-4860-bbdb-b1059bebdc4e_$ClientPeoplePicker").style.border = "none";
        // document.getElementById("Immediate_x0020_Head_e3e66f07-d796-4860-bbdb-b1059bebdc4e_$ClientPeoplePicker").readOnly  = true;

        SPUtility.HideSPField('Name of New Hire');
        SPUtility.HideSPField("New Hire's Department");

        SPUtility.HideSPField("New Hire's Department Head");

        SPUtility.HideSPField('Software Description');
        SPUtility.HideSPField("Hardware Description");
        SPUtility.HideSPField('Purpose');

        SPUtility.HideSPField('Department Head Approval');

        SPUtility.HideSPField('Reporting Purpose');
        SPUtility.HideSPField('Specific Employee');
        SPUtility.HideSPField('Issue Description');
        SPUtility.HideSPField('Date Needed');
        SPUtility.HideSPField('Notes');

        // document.getElementById("onetIDListForm").style.borderBottom = "thin solid black";

        document.getElementById("Software_x0020_Description_dad53b21-4ea5-4215-b4ef-98a233596c23_$TextField").style.resize = "none";
        document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").style.resize = "none";
        document.getElementById("Hardware_x0020_Description_6e9cb74b-0230-436c-bc87-78754a6cf8be_$TextField").style.resize = "none";
        document.getElementById("Issue_x0020_Description_4489ab5d-d95f-4750-87e2-b3e99514292d_$TextField").style.resize = "none";  
        document.getElementById("Notes_942bc3ff-6edc-4a6a-b5a1-1a654968281b_$TextField").style.resize = "none";  
        
        document.getElementById("Software_x0020_Description_dad53b21-4ea5-4215-b4ef-98a233596c23_$TextField").style.overflow = "hidden";
        document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").style.overflow = "hidden";
        document.getElementById("Hardware_x0020_Description_6e9cb74b-0230-436c-bc87-78754a6cf8be_$TextField").style.overflow = "hidden";
        document.getElementById("Issue_x0020_Description_4489ab5d-d95f-4750-87e2-b3e99514292d_$TextField").style.overflow = "hidden";
        document.getElementById("Notes_942bc3ff-6edc-4a6a-b5a1-1a654968281b_$TextField").style.overflow = "hidden";

        document.getElementById("RequestorSeparator").style.display = "none";
        document.getElementById("RequestorSeparator_9eae759a-702f-4f34-9ff1-c05bc8675772_$TextField").style.height = "1px";
        document.getElementById("RequestorSeparator_9eae759a-702f-4f34-9ff1-c05bc8675772_$TextField").style.overflow = "hidden";
        document.getElementById("RequestorSeparator_9eae759a-702f-4f34-9ff1-c05bc8675772_$TextField").readOnly = true;
        document.getElementById("RequestorSeparator_9eae759a-702f-4f34-9ff1-c05bc8675772_$TextField").style.border = "none";  
        document.getElementById("RequestorSeparator_9eae759a-702f-4f34-9ff1-c05bc8675772_$TextField").style.borderBottom = "thin solid black";
        document.getElementById("RequestorSeparator_9eae759a-702f-4f34-9ff1-c05bc8675772_$TextField").style.resize = "none";    

        SPUtility.HideSPField('Default Access');
        document.getElementById("Default_x0020_Access_afe4b330-8544-402e-a18e-a7efe39d6936_$TextField").value = "PayrollHero" +
        "\nEmail Account Setup" +
        "\nSharePoint Access" +
        "\nRFID" +
        "\nBiometrics";
        document.getElementById("Default_x0020_Access_afe4b330-8544-402e-a18e-a7efe39d6936_$TextField").readOnly = true;
        document.getElementById("Default_x0020_Access_afe4b330-8544-402e-a18e-a7efe39d6936_$TextField").style.border = "none";
        document.getElementById("Default_x0020_Access_afe4b330-8544-402e-a18e-a7efe39d6936_$TextField").style.borderBottom = "thin solid black";
        document.getElementById("Default_x0020_Access_afe4b330-8544-402e-a18e-a7efe39d6936_$TextField").style.resize = "none";

        SPUtility.HideSPField('Back Office Applications');
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").value = "CargoWise One" +
        "\nSQL Developer - Microsoft SQL Management Studio"+
        "\nSQL Developer - Visual Studio";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").readOnly = true;
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").style.border = "none";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").style.borderBottom = "thin solid black";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").style.height = "60px";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").style.resize = "none";


        SPUtility.HideSPField('Default Applications');
        document.getElementById("Default_x0020_Applications_9ff272bd-7a24-4a34-8855-2efccbde1d7d_$TextField").value = "Micrsoft Office Tools" +
        "\nSpotify";
        document.getElementById("Default_x0020_Applications_9ff272bd-7a24-4a34-8855-2efccbde1d7d_$TextField").readOnly = true;
        document.getElementById("Default_x0020_Applications_9ff272bd-7a24-4a34-8855-2efccbde1d7d_$TextField").style.border = "none";
        document.getElementById("Default_x0020_Applications_9ff272bd-7a24-4a34-8855-2efccbde1d7d_$TextField").style.borderBottom = "thin solid black";
        document.getElementById("Default_x0020_Applications_9ff272bd-7a24-4a34-8855-2efccbde1d7d_$TextField").style.height = "50px";
        document.getElementById("Default_x0020_Applications_9ff272bd-7a24-4a34-8855-2efccbde1d7d_$TextField").style.resize = "none";


        SPUtility.HideSPField('Workstation Setup');
        document.getElementById("Workstation_x0020_Setup_2afb8f4f-fd67-4ec9-9555-aa4c307a3a0b_$TextField").value = "Monitors" +
        "\nNUC"+
        "\nKeyboard"+
        "\nMouse"+
        "\nHeadset";
        document.getElementById("Workstation_x0020_Setup_2afb8f4f-fd67-4ec9-9555-aa4c307a3a0b_$TextField").readOnly = true;
        document.getElementById("Workstation_x0020_Setup_2afb8f4f-fd67-4ec9-9555-aa4c307a3a0b_$TextField").style.border = "none";
        document.getElementById("Workstation_x0020_Setup_2afb8f4f-fd67-4ec9-9555-aa4c307a3a0b_$TextField").style.borderBottom = "thin solid black";
        document.getElementById("Workstation_x0020_Setup_2afb8f4f-fd67-4ec9-9555-aa4c307a3a0b_$TextField").style.resize = "none";


        SPUtility.HideSPField('IT Applications');
        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").value = "IT Technician - Autotask Access" +
        "\nTeamViewer"+
        "\nManage Office - X-Lite"+
        "\nSlack"+
        "\nSharePoint Developer - Sublime Text"+
        "\nSharePoint Developer - SharePoint Designer";
        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").readOnly = true;
        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").style.border = "none";
        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").style.borderBottom = "thin solid black";
        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").style.height = "120px";
        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").style.resize = "none";


        SPUtility.HideSPField('DMCS Applications');
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").value = "Graphics - Adobe Photoshop CC" +
        "\nGraphics - Adobe Illustrator CC"+
        "\nGraphics - Adobe InDesign CC"+
        "\nGraphics - Adobe Lightroom"+
        "\nGraphics - Adobe After Effects CC"+
        "\nGraphics - Adobe Premiere"+
        "\nGraphics - Adobe Animator"+
        "\nGraphics - Adobe Audition CC"+
        "\nGraphics - Adobe Character Animator  CC"+
        "\nGraphics - Adobe Media Encoder CC"+
        "\nGraphics - Adobe Camera Raw CC"+
        "\nWeb Developer - Sublime Text";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").readOnly = true;
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").style.border = "none";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").style.borderBottom = "thin solid black";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").style.height = "230px";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").style.resize = "none";


    });
})(jQuery);
//------------------------------------

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

//----------------------------------------------------------------------------------------------------------------


 $(function() {
 
   $('select[id=Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice]').change( function() {
   request_type= $('select[id=Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice]').val();


  if(request_type=="Hardware"){
    SPUtility.HideSPField('Name of New Hire');
    SPUtility.HideSPField("New Hire's Department");
    SPUtility.HideSPField("New Hire's Department Head");
    SPUtility.ShowSPField('Hardware Description');
    SPUtility.HideSPField('Software Description');
    SPUtility.ShowSPField("Purpose");
    SPUtility.ShowSPField('Date Needed');
    SPUtility.HideSPField("Issue Description"); 
    SPUtility.HideSPField('Specific Employee');
    SPUtility.HideSPField('Reporting Purpose');
    SPUtility.HideSPField('Notes');

    SPUtility.HideSPField('Workstation Setup');
    SPUtility.HideSPField('Default Access');
    SPUtility.HideSPField('Default Applications');
    SPUtility.HideSPField('Back Office Applications');
    SPUtility.HideSPField('IT Applications');
    SPUtility.HideSPField('DMCS Applications');    

    document.getElementById("Reporting_x0020_Own_x0020_Issue__3585143b-e450-4d3f-9f5d-7718ac4ba18b_$DropDownChoice").selectedIndex = "0"; 

  }else if(request_type=="Software"){
    SPUtility.HideSPField('Name of New Hire');
    SPUtility.HideSPField("New Hire's Department");
    SPUtility.HideSPField("New Hire's Department Head");
    SPUtility.ShowSPField('Software Description');
    SPUtility.HideSPField("Hardware Description");
    SPUtility.ShowSPField("Purpose");
    SPUtility.ShowSPField('Date Needed');
    SPUtility.HideSPField("Issue Description"); 
    SPUtility.HideSPField('Specific Employee');
    SPUtility.HideSPField('Reporting Purpose');
    SPUtility.HideSPField('Notes');

    SPUtility.HideSPField('Workstation Setup');
    SPUtility.HideSPField('Default Access');
    SPUtility.HideSPField('Default Applications');
    SPUtility.HideSPField('Back Office Applications');
    SPUtility.HideSPField('IT Applications');
    SPUtility.HideSPField('DMCS Applications');  

    document.getElementById("Reporting_x0020_Own_x0020_Issue__3585143b-e450-4d3f-9f5d-7718ac4ba18b_$DropDownChoice").selectedIndex = "0"; 

  }else if(request_type=="Issue Report"){
    SPUtility.HideSPField('Name of New Hire');
    SPUtility.HideSPField("New Hire's Department");
    SPUtility.HideSPField("New Hire's Department Head");
    SPUtility.HideSPField('Software Description');
    SPUtility.HideSPField("Hardware Description");
    SPUtility.ShowSPField("Issue Description");
    SPUtility.HideSPField('Date Needed');
    SPUtility.HideSPField('Department Head Approval');
    SPUtility.HideSPField('Purpose');
    SPUtility.ShowSPField('Reporting Purpose');
    SPUtility.HideSPField('Notes');

    SPUtility.HideSPField('Workstation Setup');
    SPUtility.HideSPField('Default Access');
    SPUtility.HideSPField('Default Applications');
    SPUtility.HideSPField('Back Office Applications');
    SPUtility.HideSPField('IT Applications');
    SPUtility.HideSPField('DMCS Applications');   

    document.getElementById("Reporting_x0020_Own_x0020_Issue__3585143b-e450-4d3f-9f5d-7718ac4ba18b_$DropDownChoice").selectedIndex = "0"; 

  }else if(request_type=="New Hire Setup"){
    SPUtility.ShowSPField('Name of New Hire');
    SPUtility.ShowSPField("New Hire's Department");
    SPUtility.ShowSPField("New Hire's Department Head");
    SPUtility.HideSPField('Department Head Approval');
    SPUtility.HideSPField("Issue Description"); 
    SPUtility.HideSPField('Software Description');
    SPUtility.HideSPField("Purpose");
    SPUtility.HideSPField('Specific Employee');
    SPUtility.HideSPField('Reporting Purpose');
    SPUtility.ShowSPField('Notes');

    SPUtility.ShowSPField('Workstation Setup');
    SPUtility.ShowSPField('Default Access');
    SPUtility.ShowSPField('Default Applications');

    document.getElementById("Reporting_x0020_Own_x0020_Issue__3585143b-e450-4d3f-9f5d-7718ac4ba18b_$DropDownChoice").selectedIndex = "0"; 
  }
  else if(request_type==""){
    SPUtility.HideSPField('Name of New Hire');
    SPUtility.HideSPField("New Hire's Department");
    SPUtility.ShowSPField("New Hire's Department Head");
    SPUtility.HideSPField('Software Description');
    SPUtility.HideSPField("Hardware Description");
    SPUtility.HideSPField('Purpose');
    SPUtility.HideSPField("Issue Description"); 
    SPUtility.HideSPField('Specific Employee');
    SPUtility.HideSPField('Reporting Purpose');
    SPUtility.HideSPField('Date Needed');
    SPUtility.HideSPField('Notes');

    SPUtility.HideSPField('Workstation Setup');
    SPUtility.HideSPField('Default Access');
    SPUtility.HideSPField('Default Applications');
    SPUtility.HideSPField('Back Office Applications');
    SPUtility.HideSPField('IT Applications');
    SPUtility.HideSPField('DMCS Applications');   

    document.getElementById("Reporting_x0020_Own_x0020_Issue__3585143b-e450-4d3f-9f5d-7718ac4ba18b_$DropDownChoice").selectedIndex = "0";  
  }

  });


       $('select[id=New_x0020_Hire_x0027_s_x0020_Dep_3a3f4b8e-b4f5-4025-9232-dfef9fe9d98e_$LookupField]').change( function() {
         // dept = $('select[id=New_x0020_Hire_x0027_s_x0020_Dep_3a3f4b8e-b4f5-4025-9232-dfef9fe9d98e_$LookupField]').val();

        var dept = document.getElementById("New_x0020_Hire_x0027_s_x0020_Dep_3a3f4b8e-b4f5-4025-9232-dfef9fe9d98e_$LookupField");
        var dept_txt= dept.options[dept.selectedIndex].text;

        if(dept_txt == "CHROD"){
            SPUtility.HideSPField('Back Office Applications');
            SPUtility.HideSPField('IT Applications');
            SPUtility.HideSPField('DMCS Applications');

        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").value = "";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").value = "";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").value = "";

        }
        else if(dept_txt == "BACK OFFICE" || dept_txt == "HOIT-BO" || dept_txt == "TBOS"){
             SPUtility.ShowSPField('Back Office Applications');
             SPUtility.HideSPField('IT Applications');
             SPUtility.HideSPField('DMCS Applications');

        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").value = "CargoWise One" +
        "\nSQL Developer - Microsoft SQL Management Studio"+
        "\nSQL Developer - Visual Studio";

        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").value = "";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").value = "";        

         }
        else if(dept_txt == "DMCS"){
            SPUtility.HideSPField('Back Office Applications');
            SPUtility.HideSPField('IT Applications');
            SPUtility.ShowSPField('DMCS Applications');

        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").value = "Graphics - Adobe Photoshop CC" +
        "\nGraphics - Adobe Illustrator CC"+
        "\nGraphics - Adobe InDesign CC"+
        "\nGraphics - Adobe Lightroom"+
        "\nGraphics - Adobe After Effects CC"+
        "\nGraphics - Adobe Premiere"+
        "\nGraphics - Adobe Animator"+
        "\nGraphics - Adobe Audition CC"+
        "\nGraphics - Adobe Character Animator  CC"+
        "\nGraphics - Adobe Media Encoder CC"+
        "\nGraphics - Adobe Camera Raw CC"+
        "\nWeb Developer - Sublime Text";            

        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").value = "";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").value = "";  

        }      
        else if(dept_txt == "TQM"){
            SPUtility.HideSPField('Back Office Applications');
            SPUtility.HideSPField('IT Applications');
            SPUtility.HideSPField('DMCS Applications');

        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").value = "";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").value = "";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").value = "";            

        }                
        else if(dept_txt == "IT"){
            SPUtility.HideSPField('Back Office Applications');
            SPUtility.ShowSPField('IT Applications');
            SPUtility.HideSPField('DMCS Applications');

        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").value = "IT Technician - Autotask Access" +
        "\nTeamViewer"+
        "\nManage Office - X-Lite"+
        "\nSlack"+
        "\nSharePoint Developer - Sublime Text"+
        "\nSharePoint Developer - SharePoint Designer";            

        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").value = "";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").value = "";          

        }    
        else if(dept_txt == "PAS"){
            SPUtility.HideSPField('Back Office Applications');
            SPUtility.HideSPField('IT Applications');
            SPUtility.HideSPField('DMCS Applications');

        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").value = "";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").value = "";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").value = "";            

        }      
        else if(dept_txt == "FINANCE"){
            SPUtility.HideSPField('Back Office Applications');
            SPUtility.HideSPField('IT Applications');
            SPUtility.HideSPField('DMCS Applications');

        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").value = "";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").value = "";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").value = "";            

        }     
        else if(dept_txt == "TOP MANAGEMENT"){
            SPUtility.HideSPField('Back Office Applications');
            SPUtility.HideSPField('IT Applications');
            SPUtility.HideSPField('DMCS Applications');

        }                 
        else if(dept_txt == "SALES"){
            SPUtility.HideSPField('Back Office Applications');
            SPUtility.HideSPField('IT Applications');
            SPUtility.HideSPField('DMCS Applications');

        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").value = "";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").value = "";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").value = "";

        }  
        else if(dept_txt == "EXECUTIVE"){
            SPUtility.HideSPField('Back Office Applications');
            SPUtility.HideSPField('IT Applications');
            SPUtility.HideSPField('DMCS Applications');

        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").value = "";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").value = "";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").value = "";

        }          
        else if(dept_txt == "LIFELENSE"){
            SPUtility.HideSPField('Back Office Applications');
            SPUtility.HideSPField('IT Applications');
            SPUtility.HideSPField('DMCS Applications');

        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").value = "";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").value = "";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").value = "";

        }    
        else if(dept_txt == "LEASED AND MANAGED OFFICE"){
            SPUtility.HideSPField('Back Office Applications');
            SPUtility.HideSPField('IT Applications');
            SPUtility.HideSPField('DMCS Applications');

        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").value = "";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").value = "";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").value = "";

        }

        });


   $('select[id=Reporting_x0020_Own_x0020_Issue__3585143b-e450-4d3f-9f5d-7718ac4ba18b_$DropDownChoice]').change( function() {
   issue_purpose= $('select[id=Reporting_x0020_Own_x0020_Issue__3585143b-e450-4d3f-9f5d-7718ac4ba18b_$DropDownChoice]').val();

        if(issue_purpose=="Own Issue"){
            SPUtility.HideSPField('Specific Employee');
        }
        else if(issue_purpose=="For Another Employee"){
            SPUtility.ShowSPField('Specific Employee');
        }        

    });


    // $(document).on('change',"#New_x0020_Hire_x0027_s_x0020_Dep_3a3f4b8e-b4f5-4025-9232-dfef9fe9d98e_$LookupField", function() { 
    //   alert( $(this).val());
 
    // });


//------------------------------------------------------------------------------------------------------------------


})
  
  
    function init(){

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
   
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));
    
 }
 
 function onQuerySucceeded() {

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;
  
    SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');
}

function onRequestFail(sender, args) {
    document.getElementById('Requestor_x0027_s_x0020_Name_830abf27-3b1b-40e4-b667-9c03c1e96781_$TextField').value = "Error: " + args.get_message();
    document.getElementById('Department_8ce26bfb-1875-42a5-b44d-bacc6b77fd1b_$TextField').value = "Error: " + args.get_message();
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
    userProfileProperties = peopleManager.getUserProfilePropertiesFor(
        userProfilePropertiesForUser);
//alert(userProfileProperties );
    // Load the UserProfilePropertiesForUser object and send the request.
    clientContext.load(userProfilePropertiesForUser);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
}

var immediate_head_var;
// This function runs if the executeQueryAsync call succeeds.
var Requestor;
function onRequestSuccess() {
    var requestorName = userProfileProperties[0];
    var department =  userProfileProperties[1];
    var manager =  userProfileProperties[2];

    Requestor = userProfileProperties[0];
    //alert(manager);
    document.getElementById('Requestor_x0027_s_x0020_Name_830abf27-3b1b-40e4-b667-9c03c1e96781_$TextField').value = requestorName;
    document.getElementById('Department_8ce26bfb-1875-42a5-b44d-bacc6b77fd1b_$TextField').value = department;

    SPUtility.GetSPField("Requestor's Name").MakeReadOnly();
    SPUtility.GetSPField('Department').MakeReadOnly();

   immediate_head_var = manager;

    // immediate_head();
    if(Requestor != "Dianna Rose Gabayan" &&
        Requestor != "Nino Rey Cresencio" &&
        Requestor != "Jeanne Mamalo" &&
        Requestor != "Lito Abon Jr." &&
        Requestor != "Idrian Belleza" &&
        Requestor != "Vanessa Monleon" &&
        Requestor != "Fernando Durano Singson Jr."){
        document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").removeChild(document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").options[4]);

    }

}

function immediate_head() {

var immediate_head_temp = immediate_head_var;
var res_immediate = immediate_head_temp.substring(9);
var key_var = "i:0#.w|hoitcebu\\"+res_immediate;


ExecuteOrDelayUntilScriptLoaded(function () {
    setTimeout(function () {

        var dispTitle = "Immediate Head Required Field";
        var pickerDiv = $("[id$='ClientPeoplePicker'][title='" + dispTitle + "']");
        var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[pickerDiv[0].id];
        var usrObj = { 'Key': key_var};
        peoplePicker.AddUnresolvedUser(usrObj,true); 

    }, 500);
}, "clientpeoplepicker.js");


}
 
//---------------------------------------------------------------------------------------------------------------


function PreSaveAction()

{
    var flag=false;

    console.log("Hit")
var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();


// document.getElementById('Date_x0020_and_x0020_Time_x0020__68803519-b1f5-46f2-9827-2631b86655bc_$TextField').value = datetime;

    var issue_purpose= $('select[id=Reporting_x0020_Own_x0020_Issue__3585143b-e450-4d3f-9f5d-7718ac4ba18b_$DropDownChoice]').val();
    if(issue_purpose=="For Another Employee"){
        if (document.getElementById("Specific_x0020_Employee_b53f1dea-4ec8-4540-b7ed-7b85a70fde82_$ClientPeoplePicker_HiddenInput").value == []) {
            alert("Please Specifiy the Employee");
            flag=false;
        }else{
            flag=true;  
        }
        console.log("1")
    }     
    else if(document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "Software"){
        if(document.getElementById("Date_x0020_Needed_7213a4c9-64f9-49a3-a1ca-98f30d6fc883_$DateTimeFieldDate").value == "" ||
            document.getElementById("Software_x0020_Description_dad53b21-4ea5-4215-b4ef-98a233596c23_$TextField").value == "" ||
            document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").value == ""){
            alert("Please fill all the fields");
            flag=false;  
        }else{
            flag=true;  
        }
        console.log("2")
    }
    else if(document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "Hardware"){
        if(document.getElementById("Date_x0020_Needed_7213a4c9-64f9-49a3-a1ca-98f30d6fc883_$DateTimeFieldDate").value == "" ||
            document.getElementById("Hardware_x0020_Description_6e9cb74b-0230-436c-bc87-78754a6cf8be_$TextField").value == "" ||
            document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").value == ""){
            alert("Please fill all the fields");
            flag=false;
        }else{
            flag=true;  
        }
        console.log("3")
    }    

    else if(document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "Issue Report"){
        console.log("4")
        if(document.getElementById("Reporting_x0020_Own_x0020_Issue__3585143b-e450-4d3f-9f5d-7718ac4ba18b_$DropDownChoice").value == "" ||
            document.getElementById("Issue_x0020_Description_4489ab5d-d95f-4750-87e2-b3e99514292d_$TextField").value == "" ){
            alert("Please fill all the fields");
            flag=false;
        }
        else{
        console.log("4.1")
        // setCookie("it_request_send_to_support", "", 30);
        flag=true;
    }
        
    }
    else{
        console.log("5")
        
        flag=true;
    }
console.log(`flag: ${flag}`)
setCookie("it_request_id", "", 30);
setCookie("it_request_send_to_support", "", 30);
return flag;




}
</script>

<style>



.animation{
  margin-top:20%;
  display:inline-block;
  margin-bottom:5%;
}

h1{
  font-size:32px;
  font-weight:400;
  text-transform:uppercase;
  margin:0;
}
p{
  font-size:16px;
  font-weight:700;
  margin:0;
}



.one, .two, .three {
  display:block;
  float:left;
}

.one {
  background: url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%0A%09%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aa%3D%22http%3A%2F%2Fns.adobe.com%2FAdobeSVGViewerExtensions%2F3.0%2F%22%0A%09%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2281px%22%20height%3D%2280.5px%22%20viewBox%3D%220%200%2081%2080.5%22%20style%3D%22overflow%3Ascroll%3Benable-background%3Anew%200%200%2081%2080.5%3B%22%0A%09%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23383838%3B%7D%0A%3C%2Fstyle%3E%0A%3Cdefs%3E%0A%3C%2Fdefs%3E%0A%3Cpath%20class%3D%22st0%22%20d%3D%22M30.3%2C68.2c1.2%2C0.2%2C2.3%2C0.9%2C3.8%2C1.2c1.6%2C0.3%2C2.7%2C0.6%2C4%2C0.4l4.9%2C9.6c0.6%2C0.9%2C1.4%2C1.1%2C2.3%2C0.9l15.3-4.9%0A%09c0.5-0.3%2C1-1%2C0.9-2.3l-1.8-10.6c2-1.6%2C3.6-3.7%2C5.3-5.8l10.5%2C0.6c1.1%2C0.6%2C2.1-0.4%2C2.3-1.1L81%2C40.7c0.2-0.8-0.4-2.1-1.1-2.3l-10.2-3.8%0A%09c-0.3-2.5-1.4-4.8-2.5-7.5l5.9-8.5c0.6-1.1%2C0.4-1.9-0.2-2.9l-12-10.7c-0.3-0.5-1.6-0.3-2.5%2C0.3l-8%2C6.9c-1.2-0.2-2.3-0.9-3.8-1.2%0A%09c-1.6-0.3-2.7-0.6-4-0.4L37.7%2C1c-0.6-0.9-1.4-1.1-2.3-0.9L20.1%2C5c-0.5%2C0.3-1%2C1-0.9%2C2.3l1.8%2C10.6c-2%2C1.6-3.6%2C3.7-5.3%2C5.8L5.3%2C23%0A%09c-0.8-0.2-1.7%2C0.4-2%2C1.6L0%2C40.2c-0.2%2C0.8%2C0.4%2C2.1%2C1.1%2C2.3l9.8%2C3.7c0.7%2C2.6%2C1.4%2C5.2%2C2.5%2C7.5l-6%2C8.9c-0.6%2C0.7-0.4%2C2%2C0.3%2C2.5l12%2C10.7%0A%09c0.7%2C0.5%2C1.9%2C0.8%2C2.4%2C0.1L30.3%2C68.2z%20M26.7%2C37.3c1.6-7.4%2C9.1-12.3%2C16.5-10.8S55.6%2C35.7%2C54%2C43.1c-1.6%2C7.4-9.1%2C12.3-16.5%2C10.7%0A%09C30.1%2C52.3%2C25.1%2C44.7%2C26.7%2C37.3L26.7%2C37.3z%22%2F%3E%0A%3C%2Fsvg%3E');
  width:80px;
  height:80px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  margin-top:-10px;
  margin-right:8px;
}

.two {
  background: url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%0A%09%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aa%3D%22http%3A%2F%2Fns.adobe.com%2FAdobeSVGViewerExtensions%2F3.0%2F%22%0A%09%20x%3D%220px%22%20y%3D%220px%22%20width%3D%22103px%22%20height%3D%22103.7px%22%20viewBox%3D%220%200%20103%20103.7%22%0A%09%20style%3D%22overflow%3Ascroll%3Benable-background%3Anew%200%200%20103%20103.7%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23F6921E%3B%7D%0A%3C%2Fstyle%3E%0A%3Cdefs%3E%0A%3C%2Fdefs%3E%0A%3Cpath%20class%3D%22st0%22%20d%3D%22M87.3%2C64.8c0.3-1.5%2C1.1-2.9%2C1.6-4.9c0.4-2%2C0.7-3.5%2C0.5-5.1l12.3-6.3c1.2-0.8%2C1.4-1.8%2C1.1-2.9l-6.3-19.6%0A%09c-0.4-0.6-1.3-1.3-2.9-1.1l-13.5%2C2.3c-2.1-2.5-4.7-4.7-7.4-6.8l0.8-13.4C74.3%2C5.8%2C73%2C4.5%2C72%2C4.3L52.1%2C0c-1-0.2-2.7%2C0.5-2.9%2C1.5%0A%09l-4.8%2C13c-3.2%2C0.4-6.1%2C1.8-9.5%2C3.2l-10.9-7.5c-1.4-0.8-2.5-0.5-3.7%2C0.3L6.5%2C25.8c-0.6%2C0.4-0.4%2C2%2C0.4%2C3.2l8.8%2C10.2%0A%09c-0.3%2C1.5-1.1%2C2.9-1.5%2C4.9c-0.4%2C2-0.7%2C3.5-0.6%2C5.1L1.2%2C55.4c-1.2%2C0.8-1.4%2C1.8-1.1%2C2.9l6.3%2C19.6c0.4%2C0.6%2C1.3%2C1.3%2C2.9%2C1.1l13.5-2.3%0A%09c2.1%2C2.5%2C4.7%2C4.7%2C7.4%2C6.8l-0.8%2C13.4c-0.2%2C1%2C0.6%2C2.2%2C2.1%2C2.5l20%2C4.2c1%2C0.2%2C2.7-0.5%2C2.9-1.5l4.7-12.6c3.3-0.9%2C6.6-1.7%2C9.5-3.2L80.1%2C94%0A%09c0.9%2C0.7%2C2.5%2C0.5%2C3.2-0.4L97%2C78.3c0.7-0.9%2C1-2.4%2C0.1-3.1L87.3%2C64.8z%20M47.8%2C69.5C38.3%2C67.5%2C32%2C57.8%2C34%2C48.3%0A%09c2-9.5%2C11.7-15.8%2C21.2-13.8c9.5%2C2%2C15.7%2C11.7%2C13.7%2C21.2C66.9%2C65.2%2C57.3%2C71.5%2C47.8%2C69.5L47.8%2C69.5z%22%2F%3E%0A%3C%2Fsvg%3E');
  width:100px;
  height:100px;
  background-size:100% 100%;
  background-repeat:no-repeat;
}

/* pap */
/*
.two {
  background: url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%0A%09%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aa%3D%22http%3A%2F%2Fns.adobe.com%2FAdobeSVGViewerExtensions%2F3.0%2F%22%0A%09%20x%3D%220px%22%20y%3D%220px%22%20width%3D%22103px%22%20height%3D%22103.7px%22%20viewBox%3D%220%200%20103%20103.7%22%0A%09%20style%3D%22overflow%3Ascroll%3Benable-background%3Anew%200%200%20103%20103.7%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%235197d6%3B%7D%0A%3C%2Fstyle%3E%0A%3Cdefs%3E%0A%3C%2Fdefs%3E%0A%3Cpath%20class%3D%22st0%22%20d%3D%22M87.3%2C64.8c0.3-1.5%2C1.1-2.9%2C1.6-4.9c0.4-2%2C0.7-3.5%2C0.5-5.1l12.3-6.3c1.2-0.8%2C1.4-1.8%2C1.1-2.9l-6.3-19.6%0A%09c-0.4-0.6-1.3-1.3-2.9-1.1l-13.5%2C2.3c-2.1-2.5-4.7-4.7-7.4-6.8l0.8-13.4C74.3%2C5.8%2C73%2C4.5%2C72%2C4.3L52.1%2C0c-1-0.2-2.7%2C0.5-2.9%2C1.5%0A%09l-4.8%2C13c-3.2%2C0.4-6.1%2C1.8-9.5%2C3.2l-10.9-7.5c-1.4-0.8-2.5-0.5-3.7%2C0.3L6.5%2C25.8c-0.6%2C0.4-0.4%2C2%2C0.4%2C3.2l8.8%2C10.2%0A%09c-0.3%2C1.5-1.1%2C2.9-1.5%2C4.9c-0.4%2C2-0.7%2C3.5-0.6%2C5.1L1.2%2C55.4c-1.2%2C0.8-1.4%2C1.8-1.1%2C2.9l6.3%2C19.6c0.4%2C0.6%2C1.3%2C1.3%2C2.9%2C1.1l13.5-2.3%0A%09c2.1%2C2.5%2C4.7%2C4.7%2C7.4%2C6.8l-0.8%2C13.4c-0.2%2C1%2C0.6%2C2.2%2C2.1%2C2.5l20%2C4.2c1%2C0.2%2C2.7-0.5%2C2.9-1.5l4.7-12.6c3.3-0.9%2C6.6-1.7%2C9.5-3.2L80.1%2C94%0A%09c0.9%2C0.7%2C2.5%2C0.5%2C3.2-0.4L97%2C78.3c0.7-0.9%2C1-2.4%2C0.1-3.1L87.3%2C64.8z%20M47.8%2C69.5C38.3%2C67.5%2C32%2C57.8%2C34%2C48.3%0A%09c2-9.5%2C11.7-15.8%2C21.2-13.8c9.5%2C2%2C15.7%2C11.7%2C13.7%2C21.2C66.9%2C65.2%2C57.3%2C71.5%2C47.8%2C69.5L47.8%2C69.5z%22%2F%3E%0A%3C%2Fsvg%3E');
  width:100px;
  height:100px;
  background-size:100% 100%;
  background-repeat:no-repeat;
}
*/
/* pap */

.three {
  background: url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%0A%09%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aa%3D%22http%3A%2F%2Fns.adobe.com%2FAdobeSVGViewerExtensions%2F3.0%2F%22%0A%09%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2281px%22%20height%3D%2280.5px%22%20viewBox%3D%220%200%2081%2080.5%22%20style%3D%22overflow%3Ascroll%3Benable-background%3Anew%200%200%2081%2080.5%3B%22%0A%09%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23383838%3B%7D%0A%3C%2Fstyle%3E%0A%3Cdefs%3E%0A%3C%2Fdefs%3E%0A%3Cpath%20class%3D%22st0%22%20d%3D%22M30.3%2C68.2c1.2%2C0.2%2C2.3%2C0.9%2C3.8%2C1.2c1.6%2C0.3%2C2.7%2C0.6%2C4%2C0.4l4.9%2C9.6c0.6%2C0.9%2C1.4%2C1.1%2C2.3%2C0.9l15.3-4.9%0A%09c0.5-0.3%2C1-1%2C0.9-2.3l-1.8-10.6c2-1.6%2C3.6-3.7%2C5.3-5.8l10.5%2C0.6c1.1%2C0.6%2C2.1-0.4%2C2.3-1.1L81%2C40.7c0.2-0.8-0.4-2.1-1.1-2.3l-10.2-3.8%0A%09c-0.3-2.5-1.4-4.8-2.5-7.5l5.9-8.5c0.6-1.1%2C0.4-1.9-0.2-2.9l-12-10.7c-0.3-0.5-1.6-0.3-2.5%2C0.3l-8%2C6.9c-1.2-0.2-2.3-0.9-3.8-1.2%0A%09c-1.6-0.3-2.7-0.6-4-0.4L37.7%2C1c-0.6-0.9-1.4-1.1-2.3-0.9L20.1%2C5c-0.5%2C0.3-1%2C1-0.9%2C2.3l1.8%2C10.6c-2%2C1.6-3.6%2C3.7-5.3%2C5.8L5.3%2C23%0A%09c-0.8-0.2-1.7%2C0.4-2%2C1.6L0%2C40.2c-0.2%2C0.8%2C0.4%2C2.1%2C1.1%2C2.3l9.8%2C3.7c0.7%2C2.6%2C1.4%2C5.2%2C2.5%2C7.5l-6%2C8.9c-0.6%2C0.7-0.4%2C2%2C0.3%2C2.5l12%2C10.7%0A%09c0.7%2C0.5%2C1.9%2C0.8%2C2.4%2C0.1L30.3%2C68.2z%20M26.7%2C37.3c1.6-7.4%2C9.1-12.3%2C16.5-10.8S55.6%2C35.7%2C54%2C43.1c-1.6%2C7.4-9.1%2C12.3-16.5%2C10.7%0A%09C30.1%2C52.3%2C25.1%2C44.7%2C26.7%2C37.3L26.7%2C37.3z%22%2F%3E%0A%3C%2Fsvg%3E');
  width:80px;
  height:80px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  margin-top:-50px;
  margin-left:-10px;
}

@keyframes spin-one {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-359deg) ;
    transform: rotate(-359deg) ;
  }
}

.spin-one {
  -webkit-animation: spin-one 1.5s infinite linear;
  animation: spin-one 1.5s infinite linear;
}

@keyframes spin-two {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-359deg);
    transform: rotate(359deg);
  }
}

.spin-two {
  -webkit-animation: spin-two 2s infinite linear;
  animation: spin-two 2s infinite linear;
}
</style>

   <div class="box" align="center">
    <div class="animation">
     <div class="one spin-one"></div>
     <div class="two spin-two"></div>
     <div class="three spin-one"></div>
    </div>
  <h1>Under maintenance</h1>
  <p>For the meantime just send a ticket or email to Tech Support (<a href="mailto:support@houseofit.com.au?subject=Your%20Issue%20Here&body=Your%20description%20and%20problem%20here">support@houseofit.com.au</a>)</p>
   </div>

