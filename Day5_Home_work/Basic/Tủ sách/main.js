var bookshelf=[];
let bookNumber = prompt("Insert the number of books")
while (bookNumber>0){
    let bookInfo=prompt("Insert the infomation of book")
    console.log(bookInfo)
    bookNumber--;
    console.log(bookshelf.push(bookInfo))
}
console.log(bookshelf)

