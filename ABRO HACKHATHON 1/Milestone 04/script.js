// // get references to the form and display area 
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
// // Handle form submission
// form.addEventListener('submit', (event: Event) => {
//     event.preventDefault(); //prevent page from reloading
//     //    collect input values
//     const name = (document.getElementById('name') as HTMLInputElement).value
//     const email = (document.getElementById('email') as HTMLInputElement).value
//     const phone = (document.getElementById('phone') as HTMLInputElement).value
//     const education = (document.getElementById('education') as HTMLInputElement).value
//     const experience = (document.getElementById('experience') as HTMLInputElement).value
//     const skills = (document.getElementById('skills') as HTMLInputElement).value
//     // generate the resume content dynamically 
//     const resumeHTML = `
//     <h2><b>Editable Resume</b></h2>
//     <h3><b>Personal Information</b></h3>
//     <p><b>Name:</b><span contenteditable="true>${name}</span></p>
//     <p><b>Name:</b><span contenteditable="true>${email}</span></p>
//     <p><b>Name:</b><span contenteditable="true>${phone}</span></p>
//     <h3>Education</h3>
//     <p contenteditable="true>${education}</p>
//     <h3>Experience</h3>
//     <p contenteditable="true>${experience}</p>
//     <h3>Skills</h3>
//     <p contenteditable="true>${skills}</p>
//     `;
//     // Display the generated resume 
//     if(resumeDisplayElement){
//         resumeDisplayElement.innerHTML = resumeHTML;
//     }else{
//         console.error('baap ko mt sikha chll')
//     }
// })
// ----------------------------------------------------------
// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page from reloading
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h2><b>Editable Resume</b></h2>\n        <h3><b>Personal Information</b></h3>\n        <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        \n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        \n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        \n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Resume display element not found.');
    }
});
