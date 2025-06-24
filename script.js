document.getElementById('generateButton').addEventListener('click', generateEmoji);
document.getElementById('copyButton').addEventListener('click', copyEmoji);

function generateEmoji() {
  const emojis = ['😀', '😊', '😍', '🤩', '😎', '😂', '😜', '😇', '🥳', '🎉', '🚀'];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const emoji = emojis[randomIndex];
  document.getElementById('emojiDisplay').textContent = emoji;
  document.getElementById('copyButton').style.display = '';
  document.querySelector('.buttons').style.marginTop = '';
}

function copyEmoji() {
  const emojiText = document.getElementById('emojiDisplay').textContent;
  const tempInput = document.createElement('textarea');
  tempInput.value = emojiText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  alert('Emoji copied to clipboard!');
}