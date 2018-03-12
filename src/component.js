export default function(innerHtml = 'Hello World') {
  const element = document.createElement('div');

  element.innerHTML = innerHtml;

  return element;
};
