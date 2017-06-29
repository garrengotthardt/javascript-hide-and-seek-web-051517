function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  document.querySelectorAll('.ranked-list li').forEach((li) => {
    li.innerHTML = parseInt(li.innerHTML) + n
  })
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}
