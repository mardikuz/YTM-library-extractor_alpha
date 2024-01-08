console.log("Hello from content.js");
const elements = document.querySelectorAll('.yt-simple-endpoint.style-scope.yt-formatted-string');
const URLs = [];

//convert each node in the NodeList to a string and then
//add it into an array

for(const element of elements){
  URLs.push(element.href);
}


chrome.storage.sync.set({ URL: URLs })
  .then(() => {
    console.log('Elements saved');
  });

  const playlists = chrome.storage.sync.get('URL').then((result) => {
    console.log(result.URL);
  });  

/*update the script to work with the new youtube music interface
i will paste here the full html interface so you can update the script: 
/*<!-- write the popup for the extension in this file
i want the popup to have a box containing a text like 
"choose the desired format"
i will further add the necessary code to make the popup work
inside this box which will have an outline, i want it to have a droplist with
the following options: json, text (.txt), xml, html, csv and markdown
no need for a default value in the droplist because there will be a clipboard 
button for the user if he wants to copy the text to the clipboard instead
of downloading it
below the first box, i want another box containing a button that
will copy the text to the clipboard
below the second box, i want another box containing a button that
will download the text as a file -->


<html>
<head>
  <title>Youtube Music Extractor</title>
  <link rel="stylesheet" type="text/css" href="assets/styles/standard.css">
  <script src="src/playlist extractor.js" defer></script>
</head>
<body>
  <div class="container">
    <div class="box">
      <div class="title">Choose the desired format</div>
      <div class="droplist">
        <select id="format">
          <option value="json">JSON</option>
          <option value="text">Text (.txt)</option>
          <option value="xml">XML</option>
          <option value="html">HTML</option>
          <option value="csv">CSV</option>
          <option value="markdown">Markdown</option>
        </select>
      </div>
    </div>
    <div class="box">
      <div class="title">Copy to clipboard</div>
      <div class="button">
        <button id="clipboard">Copy</button>
      </div>
    </div>
    <div class="box">
      <div class="title">Download as file</div>
      <div class="button">
        <button id="download">Download</button>
      </div>
    </div>
  </div>
</body>
</html>

start by selecting the format from the droplist
then select the copy button
then select the download button
then create the functions for each button
start*/


