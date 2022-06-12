function initPage() {

    // Add arrows to trip headings
    const tripheadings = document.getElementsByTagName('h3');
    const arrowsvg = `<svg width="10" height="10" viewBox="0 0 10 10" class="droparrow" `
        +`xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">`
        +`<path style="stroke-width:1;stroke-linejoin:round;" `
        +`d="M 1.1517591,2.9637924 4.9865781,7.6621763 8.8213969,2.9637924 Z" /></svg>`;
    [...tripheadings].map(h =>
        h.innerHTML = arrowsvg + h.innerHTML);

    // Fold trips section
    const trips = document.getElementsByClassName('outline-3');

    [...trips].map(outline =>
        [...outline.children].map(div =>
            div.tagName !== 'H3' ? div.classList.toggle('inactive') : null));

    [...tripheadings].map(h3 =>
        h3.addEventListener('click', function() {
            console.log('click');
            [...this.parentElement.children].map(div =>
                div.tagName !== 'H3' ? div.classList.toggle('inactive'): null);
            this.getElementsByClassName('droparrow')[0].classList.toggle('dropped');
        }));

}
