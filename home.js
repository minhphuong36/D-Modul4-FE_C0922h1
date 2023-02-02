class Blog {
    id;
    title;
    content;
    img;


    constructor(id, title, content, img) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._img = img;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }

    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }
}

// var blog1 = new Blog(1, "anh bon", "yeu em nhieu", "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/07/chup-anh-sen-ho-tay.jpg");
// var blog2 = new Blog(2, "anh bon2", "yeu em nhieu", "https://lapvui.com/wp-content/uploads/2022/04/tu-the-chup-anh-voi-hoa-sen-thumb.jpg");
// var blog3 = new Blog(3, "anh bon3", "yeu em nhieu", "https://sheis.vn/wp-content/uploads/2022/05/cac-tu-the-chup-anh-voi-hoa-sen-11.jpg");
//
// arrBlog = [blog1, blog2, blog3];
// localStorage.setItem('blog', JSON.stringify(arrBlog));
let blog = JSON.parse(localStorage.getItem('blog'));
display(blog);

function display(arrBlog) {
    let str = '';
    for (let i = 0; i < arrBlog.length; i++) {
        str += `<div class="col-sm-4">
            <h2>${arrBlog[i]._title}</h2>
            <img src="${arrBlog[i]._img}" width="300" height="200">
            <p>${arrBlog[i]._content}</p>
            <a type="button" class="btn btn-warning" onclick="editBlog(${i})">Edit</a>
            <a type="button" class="btn btn-danger" onclick="deleteBlog(${i})">Delete</a>
        </div>`
    }

    document.getElementById("show").innerHTML = str;
    localStorage.setItem('blog', JSON.stringify(blog));
}

function editBlog(index) {
 createBlog();
    let blogEdit = blog[index];
    document.getElementById("id").value =blogEdit._id;
    document.getElementById("title").value = blogEdit._title;
    document.getElementById("content").value = blogEdit._content;
    document.getElementById("img").value =blogEdit._img;
    document.getElementById("index").value = index;
}

function deleteBlog(index){
    if (confirm("Do you want to delete Blog")) {
        blog.splice(index, 1);
        display(blog)
        localStorage.setItem('blog',JSON.stringify(blog));
    }
}

function createBlog() {
    let addBlog = "";
    addBlog += `
<div class="add">
  <input type="hidden" id="index" ><br>
  <input type="text" id="id" ><br>
  <input type="text" placeholder="Title" id="title" ><br>
  <input type="text" placeholder="Content" id="content" ><br>
  <input type="text" placeholder="Link-Img" id="img" ><br>
  <input type="submit" value="Create" onclick="addBlog()" id="addBlog">
</div>
`
    document.getElementById("add-blog").innerHTML = addBlog;
    localStorage.setItem('blog', JSON.stringify(blog));
}


function addBlog() {
    let index = document.getElementById("index").value;
    let id = document.getElementById("id").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let img = document.getElementById("img").value;

    var newBlog = new Blog(id, title, content, img);
    if(index != "") {
        blog.splice(index, 1, newBlog);
    }else {
        blog.push(newBlog);
    }

    display(blog);
    localStorage.setItem('blog', JSON.stringify(blog));
    document.getElementById("add-blog").innerHTML = "";

}



