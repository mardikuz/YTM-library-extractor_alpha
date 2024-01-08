
const format = document.querySelector('#format');
const copyButton = document.querySelector('#clipboard');
const downloadButton = document.querySelector('#download');
let downloadLink;


const playlists = chrome.storage.sync.get('URL').then((result) => {
	const array = result.URL;
	JSONConverter(array);
});

format.addEventListener('change', () => {
  if (format.value === 'json') {
    JSONConverter();
  }
  downloadButton.removeAttribute('disabled');
  downloadButton.addEventListener('click', downloadLink.click());
});



// elements.forEach(element => {
//   if (element.href) {
//     hrefValues.push(element.href);
//   }
// });

function JSONConverter(hrefValues) {
	window.alert(hrefValues[1]);
  const filteredArray = hrefValues.filter(href => href.startsWith('https://music.youtube.com/playlist'));
  console.log(filteredArray);
  const jsonContent = JSON.stringify(filteredArray, null, 2);

  const blob = new Blob([jsonContent], { type: 'application/json' });

  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');

  a.href = url;

  let link = { url: url, filename: 'playlists.json' };
  chrome.downloads.download(link);

  // a.download = 'playlists.json';
  // console.log(a);
  // downloadLink = a;

  // URL.revokeObjectURL(url);
}

// downloadButtonHandler(){
//   downloadLink.click();
// }

//convertAndDownload(hrefValues);
