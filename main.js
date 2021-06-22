const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22",
    "Item 23",
    "Item 24",
    "Item 25",
    "Item 26",
    "Item 27",
    "Item 28",
    "Item 29",
    "Item 30",
    "Item 31",
    "Item 32",
    "Item 33",
    "Item 34",
    "Item 35",
    "Item 36",
    "Item 37",
    "Item 38",
    "Item 39",
    "Item 40",
    "Item 41",
    "Item 42",
    "Item 43",
    "Item 44",
    "Item 45",
    "Item 46",
    "Item 47",
    "Item 48",
    "Item 49",
    "Item 50",
    "Item 51",
    "Item 52",
];

const listElement = document.getElementById("list");
const paginationElement = document.getElementById("pagination");

let currentPage = 1;
let rows = 5;

function DisplayList(items, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedItems = items.slice(start, end);
    for (let i = 0; i < paginatedItems.length; i++){
        let item = paginatedItems[i];
        let itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerText = item;

        wrapper.appendChild(itemElement);
    }

}


function SetupPagination(items, wrapper, rowsPerPage) {
    wrapper.innerHTML = "";
    let pageCount = Math.ceil(items.length / rowsPerPage);
    for (let i = 1; i < pageCount + 1; i++){
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

function PaginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;

    if (currentPage === page) button.classList.add('active');

    button.addEventListener('click', function () {
        currentPage = page;
        DisplayList(items, listElement, rows, currentPage);

        let currentBtn = document.querySelector('.pagenumbers button.active');
        currentBtn.classList.remove('active');

        button.classList.add('active');
    });

    return button;
}


// DisplayList(listItems, listElement, rows, currentPage);
// SetupPagination(listItems, paginationElement, rows)

$('#list').pagination({
    dataSource: items,
    callback: function(data, pagination) {
        var html = template(items);
        $('#data-container').html(html);
    }
})

function template(data) {
      var html = '<ul>';
        $.each(data, function(index, item) {
          html += '<li>'+ item +'</li>';
        });
     
      html += '</ul>';
      return html;
    }