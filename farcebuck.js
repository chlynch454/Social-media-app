function main(){
    document.querySelector('#f_submit').addEventListener('click',function(){
        let un = document.querySelector('#f_username').value;
        let m = document.querySelector('#f_message').value;
        let template = document.querySelector("#post_template_html");
        let post = template.content.cloneNode(true);
        post.querySelector('.post_username_place').innerHTML = un;
        post.querySelector('.post_message_place').innerHTML = m;
        
        let comment_template = document.querySelector("#comment_template_html");
        let output_elm = post.querySelector('.post_output_place');
        let input_elm = post.querySelector('.post_input_place');
        function onCommentSubmit(){
            let comment = comment_template.content.cloneNode(true);
            comment.querySelector('.comment_message_place').innerHTML = input_elm.value;
            output_elm.appendChild(comment)
        }
    
        post.querySelector('.post_comment_button').addEventListener('click', onCommentSubmit);
        document.querySelector('#post_output').appendChild(post);
    });
}

window.addEventListener('load', main);

// if(document.getElementById("form").value.length == 0)
// {
//     alert("Please fill out all required fields")
// }

// const checkEmpty = document.querySelector('#checkIt');
// checkEmpty.addEventListener('input', function() {
//   if (checkEmpty.value && // if exists AND
//     checkEmpty.value.length > 0 && // if value has at least one character
//     checkEmpty.value.trim().length > 0 // if value is not just spaces
//     )};

// const inputFields = document.querySelectorAll("input");

// const validInputs = Array.from(inputFeilds).filter( input => input.value !== "");

// <input type="text" id="checkIt" required />