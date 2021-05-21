//  objects
 var student={
     Name:"Beth",
     Age:23,
    ID:37069806,
 };
 console.log(student);

let person={
    Fname:"Beth",
    Lname:"Wanjiru",
     Age:24,
     City:"Kenya"


 };
 console.log(person);

let book={
     Author:"Chinua Achebe",     Title:"Things Fall Apart",
     Pages:326
};
 console.log(book);


// // Arrays
 var library=[
    {
        Title:"Born a Crime",
        Author:"Trevor Nosh",
        ReadingStatus:"true"
    },
    {
        Title:"Crawling out of darkness",
        Author:"Terry Gobanga",
        ReadingStatus:"true"
    },
    {
        Title:"Gifted Hands",
        Author:"Ben Carson",
        ReadingStatus:"false"
    }

];
var readBook=true;
for (var i=0; i<library.length; i++){  

    if (!readBook) {
       console.log("Already read" ); 
    }
    else{
       console.log("You still need to read" );
    }
}

var library=[
    {
        Title:"Born a Crime",
        Author:"Trevor Nosh",
        ReadingStatus:"true"
    },
    {
        Title:"Crawling out of darkness",
        Author:"Terry Gobanga",
        ReadingStatus:"true"
    },
    {
        Title:"Gifted Hands",
        Author:"Ben Carson",
        ReadingStatus:"false"
    }

];
var readBook=true;
for (var i=0; i<library.length; i++){  

    if (readBook) {
       console.log("Already read" ); 
    }
    else{
       console.log("You still need to read" );
    }
}

var library = [ 
    {
        title: 'Born a crime',
        author: 'Trevor Noah',
        readingStatus: true
    },
    {
        title: 'Crawling out of Darkness',
        author: 'Terry Gobanga',
        readingStatus: true
    },
    {
        title: 'Gifted Hands',
        author: 'Ben Carson',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }

    




    


