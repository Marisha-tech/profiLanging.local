const $leftLinks = document.querySelectorAll('.left-menu a'),
    $mapLinks = document.querySelectorAll('.map a'),
    $info = document.querySelector('.info');

const requestData = (id = 1) => {
    fetch('data.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            $info.innerHTML = `
			<h2>${data[id - 1].district}</h2>
			<p>${data[id - 1].info}</p>
		`;
        });
};

requestData();

$leftLinks.forEach(el => {
    //при наведении на наименование округа подсвечивается граница на карте
    el.addEventListener('mouseenter', (e) => {
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let color = self.dataset.color;
        let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
        let currentPolygon = currentElement.querySelectorAll('polygon');
        let currentPath = currentElement.querySelectorAll('path');
        if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
        if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
        self.classList.add('active');
    });

    //при убирании наведения убираем выделение округа
    el.addEventListener('mouseleave', (e) => {
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
        let currentPolygon = currentElement.querySelectorAll('polygon');
        let currentPath = currentElement.querySelectorAll('path');
        if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
        if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
        self.classList.remove('active');
    });
});

$mapLinks.forEach(el => {
    //при наведении на определенный округ на карте подсвечивается наименование округа в списке
    el.addEventListener('mouseenter', (e) => {
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let color = self.dataset.color;
        let currentElement = document.querySelector(`.left-menu a[href="${selfClass}"]`);
        let currentPolygon = self.querySelectorAll('polygon');
        let currentPath = self.querySelectorAll('path');
        if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
        if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
        currentElement.classList.add('active');
    });

    //при отведении мыши с определенныго округа на карте убирается подсвечивание наименование округа в списке
    el.addEventListener('mouseleave', (e) => {
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let currentElement = document.querySelector(`.left-menu a[href="${selfClass}"]`);
        let currentPolygon = self.querySelectorAll('polygon');
        let currentPath = self.querySelectorAll('path');
        if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
        if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
        currentElement.classList.remove('active');
    });

    el.addEventListener('click', (e) => {
        e.preventDefault();
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let currentElement = document.querySelector(`.left-menu a[href="${selfClass}"]`);
        let id = parseInt(currentElement.dataset.id);
        requestData(id);
    });
});
