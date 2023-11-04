let selectedrow = null;
let id = document.getElementById("i1");
let name1 = document.getElementById("i2");
let phone = document.getElementById("i3");
let email = document.getElementById("i4");

//view btn 

function change() {
    let form = document.getElementById('form');
    form.setAttribute('class','none');

    let form1 = document.getElementById('ShowData1');
    document.getElementById('ShowData1').style.display = "block";

    // -----------------
    let vd = document.getElementById('vd');
    
      vd.setAttribute('class','none');
     
    console.log('hii')

     document.getElementById('vf').setAttribute('class','visible');;
    // ele.style.removeProperty("display");
   

    
    // var form1 = document.getElementById('ShowData1');
    // form1.style.removeProperty("display");
    // document.getElementById('ShowData1').style.display = "block";
    
   
}

function back()
{ var form1 = document.getElementById('ShowData1');
    form1.style.removeProperty("display");
    let nm = document.getElementById('form');
    nm.setAttribute('class','visible');
    
    let vd = document.getElementById('vd');
    vd.setAttribute('class','visible');


    

    document.getElementById('ShowData1').style.display = "none";
    
    // var ele = document.querySelector(".vf");
    let vf = document.getElementById('vf');
    vf.setAttribute('class','none');
   
    
    // ele.setAttribute('class','none');
    console.log("Hiii")
  
}



//When user click on submit button 

function submitData()
{
    

    let data = fetchData();
    if (selectedrow==null) {
        addData(data);
    }
    else{
        updateData(data);
    }
    clearForm();
}

//function to fetch data 

function fetchData(){   
    let data = {};
    data.id=document.getElementById("i1").value;
    data.name=document.getElementById("i2").value;
    data.phone=document.getElementById("i3").value;
    data.email=document.getElementById("i4").value;
    return data;
}


function addData(data) {
    let table = document.getElementById("studentList").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(length-1);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML =data.id;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML =data.name;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML =data.phone;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML =data.email;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onclick ="editData(this)">EDIT</button>
    <button onclick="deleteData(this)">DELETE</button>`;
}

function clearForm() {
    document.getElementById("i1").value ="";
    document.getElementById("i2").value ="";
    document.getElementById("i3").value ="";
    document.getElementById("i4").value ="";
    selectedrow=null;
}


function deleteData(btn){
        row = btn.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
   
}

function editData(btn)
{


    selectedrow = btn.parentElement.parentElement;
    document.getElementById("i1").value = selectedrow.cells[0].innerHTML;
    document.getElementById("i2").value = selectedrow.cells[1].innerHTML;
    document.getElementById("i3").value = selectedrow.cells[2].innerHTML;
    document.getElementById("i4").value = selectedrow.cells[3].innerHTML;
}

function updateData(data)
{


   
    selectedrow.cells[0].innerHTML = data.id;
    selectedrow.cells[1].innerHTML= data.name;
    selectedrow.cells[2].innerHTML = data.phone;
    selectedrow.cells[3].innerHTML = data.email;
}
