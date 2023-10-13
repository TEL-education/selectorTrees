const galleryContainer = document.querySelector('.gallery__content');

const trees =
    [
      {
        src: './assets/trees/birch.jpg',
        heading: 'Березка',
        id: 'birch',
        name: 'birch-tree',
        class: 'birchTree',
        'data-type': 'trees',
      },
      {
        src: './assets/trees/chestnut.jpg',
        heading: 'Каштан',
        id: 'chestnut',
        name: 'chestnut-tree',
        class: 'chestnutTree',
        'data-type': 'trees',
      },
      {
        src: './assets/trees/linden.jpg',
        heading: 'Липа',
        id: 'linden',
        name: 'linden-tree',
        class: 'lindenTree',
        'data-type': 'trees',
      },
      {
        src: './assets/trees/maple.jpg',
        heading: 'Клен',
        id: 'maple',
        name: 'maple-tree',
        class: 'mapleTree',
        'data-type': 'trees',
      },
      {
        src: './assets/trees/oak.jpg',
        heading: 'Дуб',
        id: 'oak',
        name: 'oak-tree',
        class: 'oakTree',
        'data-type': 'trees',
      },
      {
        src: './assets/trees/rowan.jpg',
        heading: 'Рябина',
        id: 'rowan',
        name: 'rowan-tree',
        class: 'rowanTree',
        'data-type': 'trees',
      },
    ];

const init = () => {
  galleryContainer.innerHTML = '';

  trees.forEach((imageObject) => {
    galleryContainer.append(createVariantImgChild(imageObject))
  })
}

const createVariantImgChild = (imageObject) => {
  const rootDiv = document.createElement('div');
  const image = document.createElement('img')
  const heading = document.createElement('h1')
  for (const [key, value] of Object.entries(imageObject)) {
    image.setAttribute(key, value);
  }
  heading.textContent = imageObject.heading
  rootDiv.classList.add('imageContainer');
  rootDiv.classList.add('box-shadow');
  rootDiv.append(image);
  rootDiv.append(heading);
  return rootDiv;
}

init()
