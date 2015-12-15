
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    console.log(sendResponse)
    chrome.tts.speak(request.toSay, {
      rate: 1,
      onEvent: function(event) {
        if (event.type == "end"){
          sendResponse({success: true, end:true});
        }
      },
      'lang': request.lang,
      }, function(evt) {
    });
    return true;
  });

