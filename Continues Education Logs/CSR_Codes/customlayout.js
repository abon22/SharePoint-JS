SP.SOD.executeFunc("clienttemplates.js", "SPClientTemplates", function() {

  function init() {
    var templates = {};
    
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides({

      OnPreRender: function(ctx) {
        if (!ctx.FormContext)
          return;
        var listId = ctx.FormContext.listAttributes.Id;
        var templ = templates[listId] || document.querySelector
        ("[data-list-id='" + listId + "']") || 
        document.querySelector("[data-role='form']");
        if (!templ)
          return;
        if (!templates[listId])
        {
          var table = document.querySelector("#WebPart"+ 
          ctx.FormUniqueId + " .ms-formtable");
          table.style.display = 'none';
          table.parentNode.insertBefore(templ, table);
          templ.style.display = '';
          templates[listId] = templ;
        }
        var field = ctx.ListSchema.Field[0];
        var el = document.querySelector('tr > td > span#'+
        ctx.FormUniqueId + listId + field.Name);
        var target = templ.querySelector("[data-field~='" + 
        field.Name + "']") || templ.querySelector("[data-field='\*']");
        if (target && el && field.Name != "Attachments")
        {
          if (target.attributes['data-field'].value=='*' || 
          target.attributes['data-field'].value.indexOf(' ') != -1)
          {
            target.style.display = 'none';
            var cloned=target.cloneNode(true);
            cloned.setAttribute("data-field", field.Name);
            cloned.style.display = '';
            target.parentNode.insertBefore(cloned, target);
            target = cloned;
          }
          var html = target.innerHTML;
          field.Value = Encoding.HtmlEncode(ctx.ListData.Items[0][field.Name]);
          html = html.replace(/{[^}]+}/g, function(m) { with (field) return eval(m); });
          target.innerHTML=html;
          var control = target.querySelector("[data-role='field-control']");
          control && control.parentNode.replaceChild(el, control);
        }
      }
      
    });
  }

  RegisterModuleInit(SPClientTemplates.Utility.ReplaceUrlTokens
  ("~siteCollection/Style Library/customlayout.js"), init);
  init();

});