function agecalculate(){
    var dobInput = document.querySelector("#dobinput").value;
    var dob = new Date(dobInput);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();

    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }

    document.querySelector('#ageInput').value = age;
     
}


function update(){
    var n=document.querySelector("#nameinput");
    var e=document.querySelector("#emailinput");
    var d=document.querySelector("#dobinput");
    var ex = document.querySelector("#experienceinput");
    var dept = document.querySelector("#deptinput");
    var add = document.querySelector("#addressinput");
    var desig = document.querySelector("#designationinput");
    var sal = document.querySelector("#salaryinput");
    var age = document.querySelector("#ageInput");
    var gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';

    var detailscontainer = document.querySelector("#detailscontainer");
    var detailsEntered = document.createElement("div");
    detailsEntered.className = "detailsentered";
    window.confirm("Do you want to submit this form?")
    
    var employeeDetails= {
        name:n.value,
        email:e.value,
        dob:d.value,
        experience:ex.value,
        department:dept.value,
        address:add.value,
        designation:desig.value,
        salary:sal.value,
        age:age.value,
        gender:gender,

    }
    detailsEntered.innerHTML = '<h2> Details Entered</h2>' +
        '<p>Name:' + employeeDetails.name + '</p>' +
        '<p>Email:' + employeeDetails.email + '</p>' +
        '<p>DOB:' + employeeDetails.dob + '</p>' +
        '<p>Age:' + employeeDetails.age + '</p>' +
        '<p>Gender:' + employeeDetails.gender + '</p>' +
        '<p>Experience:' + employeeDetails.experience + '</p>' +
        '<p>Department:' + employeeDetails.department + '</p>' +
        '<p>Address:' + employeeDetails.address + '</p>' +
        '<p>Designation:' + employeeDetails.designation + '</p>' +
        '<p>Salary:' + employeeDetails.salary + '</p>';

        detailscontainer.innerHTML = ''; // Clear 
        detailscontainer.append(detailsEntered);

        saveEmployeeDetails(employeeDetails);

        // Clear form inputs
        n.value = '';
        e.value = '';
        d.value = '';
        ex.value = '';
        dept.value = '';
        add.value = '';
        desig.value = '';
        sal.value = '';
        age.value = '';
        if (gender) {
            gender.checked = false;
        }

}
function saveEmployeeDetails(employeeDetails){
    fetch('http://localhost:3001/register',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',

        },
        body: JSON.stringify(employeeDetails),


    })
    .then(response =>response.text())
    .then(message=>console.log(message))
    .catch(error => console.error('Error:',error));

    
}