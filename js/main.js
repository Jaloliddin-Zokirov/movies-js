let elList = document.querySelector('.js-list')

const date = function(a) {
  return (Math.round(a / 31536000) + 1970);
}

for (item of films) {
  let newItem = document.createElement("li");
  let newBox = document.createElement("div");
  let elTitle = document.createElement("h2");
  let elId = document.createElement("span");
  let elImg = document.createElement("img");
  let elGenres = document.createElement("p");
  let elOverview = document.createElement("p");
  let data = document.createElement("time");
  elTitle.textContent = `${item.title}`;
  elId.textContent = `${item.id}`;
  elImg.src = `${item.poster}`;
  elGenres.textContent = `action: ${item.genres}`;
  elOverview.textContent = `${item.overview}`;
  data.textContent = `Release date of the film: ${date(item.release_date)}`;

  elImg.setAttribute('class','img')
  elTitle.setAttribute('class', 'subject')
  elId.setAttribute('class', 'id')
  elGenres.setAttribute('class', 'gener')
  elOverview.setAttribute('class', 'over')
  data.setAttribute('class', 'data')
  newBox.setAttribute('class', 'box')
  newItem.setAttribute('class','item')


  newItem.appendChild(elImg)
  newBox.appendChild(elTitle)
  newBox.appendChild(elId)
  newBox.appendChild(elGenres)
  newBox.appendChild(elOverview)
  newBox.appendChild(data)

  newItem.appendChild(newBox)
  elList.appendChild(newItem);
}