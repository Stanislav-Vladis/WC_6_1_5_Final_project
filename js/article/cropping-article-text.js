const textLimitTo768px = 165;
const textLimitTo1120px = 1111111111;
const articleText = document.querySelectorAll('.main__article-text');
let textLength = 0;
let innerTextFromArticle;

articleText.forEach(function (elem) {
  innerTextFromArticle = elem.innerText;

  if (textLength >= textLimitTo768px) {
    elem.style.display = 'none';
  } else if (textLength + innerTextFromArticle.length > textLimitTo768px) {
    innerTextFromArticle = innerTextFromArticle.substring(0, textLimitTo768px - textLength);
  }
  elem.innerText = innerTextFromArticle;
  textLength += innerTextFromArticle.length;
});
