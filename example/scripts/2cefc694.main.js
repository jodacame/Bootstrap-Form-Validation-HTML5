$(function(){$("form").html5validate()}),jQuery.fn.html5validate=function(){var a=$(this),b=$("<div class='alert alert-danger'></div>"),c=$("<ul></ul>");b.append(c),a.prepend(b.hide()),console.log("a"),a.on("click",":submit",function(d){b.hide(),c.empty(),a[0].checkValidity()||a.find(":invalid").each(function(a,e){message=e.validationMessage||"Invalid value.",label=$(this).attr("title")||"Error";var f=$("<li>"+label+": "+message+"</li>");b.show(),c.append(f),d.preventDefault()})})};