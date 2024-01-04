const textLimitTo768px = 165;
const textLimitTo1120px = 237;
const articleText = document.querySelectorAll('.main__article-text');
let textLimit = 0;
let textLength = 0;
let innerTextFromArticle;

if (window.innerWidth <= 768) textLimit = textLimitTo768px;
if (window.innerWidth <= 1120) textLimit = textLimitTo1120px;

articleText.forEach(function (elem) {
  innerTextFromArticle = elem.innerText;

  if (textLength >= textLimit) {
    elem.style.display = 'none';
  } else if (textLength + innerTextFromArticle.length > textLimit) {
    innerTextFromArticle = innerTextFromArticle.substring(0, textLimit - textLength);
  }
  elem.innerText = innerTextFromArticle;
  textLength += innerTextFromArticle.length;
});
