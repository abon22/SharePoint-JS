//function to open pages in a dialog
function openInDialog(dlgWidth, dlgHeight, dlgAllowMaximize,dlgShowClose,needCallbackFunction, pageUrl) 
{    
    var options = { url: pageUrl, width: dlgWidth, height: dlgHeight, allowMaximize: dlgAllowMaximize,
        showClose: dlgShowClose		
		};
		
	if(needCallbackFunction)
	{
		options.dialogReturnValueCallback = Function.createDelegate(null, CloseDialogCallback);
	}
    SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
}

function CloseDialogCallback(dialogResult, returnValue)
{
	//if user click on OK or Save
     if(dialogResult == SP.UI.DialogResult.OK)
     {  // refresh parent page
 		//SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.RefreshPage', SP.UI.DialogResult.OK); 
//document.getElementById('ExpenseItemFilter5').empty();	 
ExecuteOrDelayUntilScriptLoaded(checkuserprofile,'sp.js');
ExecuteOrDelayUntilScriptLoaded(init_comp_accessories,'sp.js');
ExecuteOrDelayUntilScriptLoaded(init_furniture_fixtures_items,'sp.js');
ExecuteOrDelayUntilScriptLoaded(init_computer_soft_prog_items,'sp.js');
ExecuteOrDelayUntilScriptLoaded(init_others_items,'sp.js');
     }
     // if user click on Close or Cancel
     else if(dialogResult == SP.UI.DialogResult.cancel)
     {	// Do Nothing or add any logic you want 
     }
     else
     {//alert("else " + dialogResult);
     }
}
