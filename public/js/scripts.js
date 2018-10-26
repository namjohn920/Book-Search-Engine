function findBook() {
    var userSearch = document.getElementById('userInput').value;
    var bookResult = document.getElementById('result');
    var title = document.getElementById('title');

    title.className = 'hidden';
    bookResult.innerHTML = "";

    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
        dataType: "JSON",
        success: function(book){
            console.log(book);
            for(var i=0; book.items.length; i++){
                var wrapperDiv = document.createElement('div');
                wrapperDiv.className = 'media';
                //create img element for images
                var image = document.createElement('img');
                image.className = 'mr-3'
                image.src = book.items[i].volumeInfo.imageLinks.thumbnail;
                //create div element with class of media-body
                var div = document.createElement('div');
                div.className= 'media-body';
                //create Header for body
                var header = document.createElement('h5');
                header.className = 'mt-0';
                header.innerHTML = book.items[i].volumeInfo.title;
                //append header to the body
                div.appendChild(header);
                wrapperDiv.appendChild(image);
                wrapperDiv.appendChild(div);
                //create h6 element for author
                var author = document.createElement('h6');
                author.innerHTML = book.items[i].volumeInfo.authors;
                div.appendChild(author);
               
                //create paragraph for country
                var p = document.createElement('p');
                p.innerHTML = 'Country: ' + book.items[i].accessInfo.country;
                div.appendChild(p);
                
                //create paragraph for pageCount
                var pageCount = document.createElement('p');
                pageCount.innerHTML = 'Pages: ' + book.items[i].volumeInfo.pageCount;
                div.appendChild(pageCount);
                // create element for date
                var publishedYear = document.createElement('p');
                publishedYear.innerHTML = 'Published: ' + book.items[i].volumeInfo.publishedDate;
                div.appendChild(publishedYear);
                //create element for description
                var desc = document.createElement('p');
                desc.innerHTML = book.items[i].volumeInfo.description;
                div.appendChild(desc);
                //create hr wto seperate every books
                var line = document.createElement('hr');
                //Make Every elements as children element of book result
                bookResult.appendChild(wrapperDiv);
                bookResult.appendChild(line);

            }
        }
    });
}