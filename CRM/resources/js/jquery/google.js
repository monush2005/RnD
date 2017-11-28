				
$(document).on('change','.langpair',function(){
	var chatContainer1 = $(this).closest(".consumer-chat-container");
	//console.log("here in this block"+chatContainer1);
$(chatContainer1).find(".message-text").val('');
	uniId =$(chatContainer1).find(".message-text").attr('id');
	var cParent =$(chatContainer1).find(".message-text").parent('div');
	var oTextArea = $(cParent).html();
	$(chatContainer1).find(".message-text").remove();
	$(cParent).html(oTextArea);
	var data = this.value;
	var options = {
	        sourceLanguage: google.elements.transliteration.LanguageCode.ENGLISH,
	        destinationLanguage: [google.elements.transliteration.LanguageCode[data]],
	        shortcutKey: 'ctrl+g',
	        transliterationEnabled: true
	    };
			var control = new google.elements.transliteration.TransliterationControl(options);
			 control.makeTransliteratable([uniId]);	
				  
				  //$("#language_name").text(data);
				/*  var destinationLanguage="";
				   destinationLanguage = google.elements.transliteration.LanguageCode[data];
				  control.setLanguagePair('en', destinationLanguage);*/
				});
				
	


    //console.log(options);

    var control = new google.elements.transliteration.TransliterationControl(options);