import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
  import { getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyChE48dwUb_2NGTW41LY4pJ8Boy_GYvAN8",
    authDomain: "practice-7f1b8.firebaseapp.com",
    databaseURL: "https://practice-7f1b8-default-rtdb.firebaseio.com",
    projectId: "practice-7f1b8",
    storageBucket: "practice-7f1b8.appspot.com",
    messagingSenderId: "726002321264",
    appId: "1:726002321264:web:28c1d63eba96f4ae78f1b5",
    measurementId: "G-P1QL233TMM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();
let publish_btn = document.getElementById("publish-btn");
publish_btn.addEventListener("click", () => {
  let blog_heading = document.getElementById("blog-heading").value;
let blog_content = document.getElementById("blog-content").value;
  alert("Published Blog Post");
  // let published_blog = document.getElementById("publish-content");
  const publishedDate = new Date().toLocaleString();
  insertData();
  // Create new blog element
 const blogElement = document.createElement('div');
 blogElement.innerHTML = `<div class="div"></div>
 <h1 id="h2">${blog_heading}</h1>
<p id="on"><b>Published on:</b> ${publishedDate}</p>
    <p class="para">${blog_content}</p>
    <button class="editBtn">Edit</button>
    <button class="deleteBtn">Delete</button>
`;
  // Add event listeners for edit and delete buttons
  const editBtn = blogElement.querySelector('.editBtn');
  editBtn.addEventListener('click', function () {
    let blog_heading = document.getElementById("blog-heading").value;
    let blog_content = document.getElementById("blog-content").value;
    const New_heading = prompt('Enter new title:', blog_heading);
    const New_content = prompt('Edit blog', blog_content)
    if (New_heading !== null || New_content !== null) {
      blogElement.querySelector('h2').textContent = New_heading;
      blogElement.querySelector('.para').textContent = New_content;
      let uniqueId = auth.currentUser.uid;
      update(ref(database, "blog/" + uniqueId), {
        New_heading: New_heading,
        New_content: New_content
      })
        .then(function () {
          alert("Blog updated successfully");
        })
        .catch(function (error) {
          alert("Error updating blog: " + error);
        });
        document.getElementById("blog-heading").value = "";
        document.getElementById("blog-content").value = "";
    }
  });

  const deleteBtn = blogElement.querySelector('.deleteBtn');
  deleteBtn.addEventListener('click', function () {
    const confirmDelete = confirm('Are you sure you want to delete this blog?');
    if (confirmDelete) {
      let uniqueId = auth.currentUser.uid;
      remove(ref(database, "blog/" + uniqueId))
        .then(function () {
          alert("Blog deleted successfully");
        })
        .catch(function (error) {
          alert("Error deleting blog: " + error);
        });
      blogElement.innerHTML = ""
    }
  });
  // Append new blog to the list
  myblog.appendChild(blogElement);
getData();
});
function insertData() {
  let blog_heading = document.getElementById("blog-heading").value;
  let blog_content = document.getElementById("blog-content").value;
  let uniqueId = auth.currentUser.uid;
  console.log(uniqueId);
  set(ref(database, "blog/" + uniqueId), {
    blog_heading: blog_heading,
    blog_content: blog_content
  }).then((resolve) => {
    console.log("load Successfully");

  }).catch((error) => {
    console.log("Unload");
  })
}
const getData = () =>{
  const dbRef = ref(getDatabase());
  let uniqueId = auth.currentUser.uid;
get(child(dbRef, `blog/${uniqueId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);})}
