<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">

var listItem;
var list;
var title;
var clientContext;
var item1;
var value;
var source;
var weburl;
var currentListGUID;
 
function getSetListItem()
{
  source=document.URL;
  clientContext = SP.ClientContext.get_current();
  if (clientContext != undefined && clientContext != null)
  {
    weburl=_spPageContextInfo.webServerRelativeUrl;
    currentListGUID = SP.ListOperation.Selection.getSelectedList();
    if(currentListGUID === "undefined" || currentListGUID === null)
    {
      alert('Please select one row');
    }
    else{
      var webSite = clientContext.get_web();
      var ctx = GetCurrentCtx();
      title =ctx.ListTitle;
      list = webSite.get_lists().getByTitle(title);
      var selectedItems = SP.ListOperation.Selection.getSelectedItems(clientContext);
      if(Object.keys(selectedItems).length>1)
      {alert('Please select only one row');}
      else{
        for (var item in selectedItems)
        {
          item1=selectedItems[item].id;
        }
        listItem = list.getItemById(item1);
        clientContext.load(this.listItem);
        clientContext.executeQueryAsync(Function.createDelegate(this, this.OnLoadSuccess),
        Function.createDelegate(this, this.OnLoadFailed));
        ShowDialog();
      }
    }
  }
}
 
function OnLoadSuccess(sender, args)
{
  value = this.listItem.get_item("FileLeafRef");
}
 
function ShowDialog()
{
  var options =
  {
    autoSize: true,
    allowMaximize: true,
    title: 'Version History',
    showClose: true,
    url:weburl+'_layouts/15/Versions.aspx?list=' + currentListGUID + '&ID='+item1+'&Source='+weburl+'/Lists/'+title+'/AllItems.aspx',
  };
  SP.UI.ModalDialog.showModalDialog(options);
}

</script>


<input id="btnGetSetListItem" onclick="getSetListItem()" type="button" value="Version History" />