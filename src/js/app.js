
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

web3.eth.defaultAccount = web3.eth.accounts[0];

var PatientContract = web3.eth.contract([
  {
	  "constant": false,
	  "inputs": [
		  {
			  "name": "_Pid",
			  "type": "uint256"
		  },
		  {
			  "name": "_Did",
			  "type": "uint256"
		  }
	  ],
	  "name": "setDid",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
  },
  {
	  "constant": false,
	  "inputs": [
		  {
			  "name": "_addrHospital",
			  "type": "address"
		  },
		  {
			  "name": "_no",
			  "type": "uint256"
		  }
	  ],
	  "name": "request_doc",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
  },
  {
	  "constant": true,
	  "inputs": [
		  {
			  "name": "_Pid",
			  "type": "uint256"
		  }
	  ],
	  "name": "getPatient",
	  "outputs": [
		  {
			  "name": "",
			  "type": "string"
		  },
		  {
			  "name": "",
			  "type": "string"
		  },
		  {
			  "name": "",
			  "type": "string"
		  },
		  {
			  "name": "",
			  "type": "uint256"
		  },
		  {
			  "name": "",
			  "type": "uint256"
		  }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
  },
  {
	  "constant": false,
	  "inputs": [
		  {
			  "name": "_Pid",
			  "type": "uint256"
		  },
		  {
			  "name": "_Dob",
			  "type": "string"
		  }
	  ],
	  "name": "setPatient1",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
  },
  {
	  "constant": true,
	  "inputs": [
		  {
			  "name": "_Did",
			  "type": "uint256"
		  },
		  {
			  "name": "_Pid",
			  "type": "uint256"
		  }
	  ],
	  "name": "doctor_view",
	  "outputs": [
		  {
			  "name": "",
			  "type": "string"
		  },
		  {
			  "name": "",
			  "type": "string"
		  },
		  {
			  "name": "",
			  "type": "string"
		  },
		  {
			  "name": "",
			  "type": "uint256"
		  },
		  {
			  "name": "",
			  "type": "uint256"
		  }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
  },
  {
	  "constant": false,
	  "inputs": [
		  {
			  "name": "_Pid",
			  "type": "uint256"
		  },
		  {
			  "name": "_fName",
			  "type": "string"
		  },
		  {
			  "name": "_lName",
			  "type": "string"
		  },
		  {
			  "name": "_age",
			  "type": "uint256"
		  }
	  ],
	  "name": "setPatient",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
  },
  {
	  "anonymous": false,
	  "inputs": [
		  {
			  "indexed": false,
			  "name": "fName",
			  "type": "string"
		  },
		  {
			  "indexed": false,
			  "name": "lName",
			  "type": "string"
		  },
		  {
			  "indexed": false,
			  "name": "age",
			  "type": "uint256"
		  }
	  ],
	  "name": "PatientInfo",
	  "type": "event"
  },
  {
	  "anonymous": false,
	  "inputs": [
		  {
			  "indexed": false,
			  "name": "Dob",
			  "type": "string"
		  }
	  ],
	  "name": "PatientInfo1",
	  "type": "event"
  }
]);
var HospitalContract = web3.eth.contract([
  {
	  "constant": false,
	  "inputs": [
		  {
			  "name": "_Did",
			  "type": "uint256"
		  },
		  {
			  "name": "_Pid",
			  "type": "uint256"
		  }
	  ],
	  "name": "setPid",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
  },
  {
	  "constant": false,
	  "inputs": [
		  {
			  "name": "_pid",
			  "type": "uint256"
		  }
	  ],
	  "name": "add_patient",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
  },
  {
	  "constant": true,
	  "inputs": [
		  {
			  "name": "_addrPatient",
			  "type": "address"
		  },
		  {
			  "name": "_Did",
			  "type": "uint256"
		  },
		  {
			  "name": "_Pid",
			  "type": "uint256"
		  }
	  ],
	  "name": "view_patient",
	  "outputs": [
		  {
			  "name": "",
			  "type": "string"
		  },
		  {
			  "name": "",
			  "type": "string"
		  },
		  {
			  "name": "",
			  "type": "string"
		  },
		  {
			  "name": "",
			  "type": "uint256"
		  },
		  {
			  "name": "",
			  "type": "uint256"
		  }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
  },
  {
	  "constant": false,
	  "inputs": [
		  {
			  "name": "_Pid",
			  "type": "uint256"
		  }
	  ],
	  "name": "remove_Pid",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
  },
  {
	  "constant": true,
	  "inputs": [
		  {
			  "name": "",
			  "type": "uint256"
		  }
	  ],
	  "name": "doctors_list",
	  "outputs": [
		  {
			  "name": "",
			  "type": "uint256"
		  }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
  },
  {
	  "constant": true,
	  "inputs": [],
	  "name": "request_list",
	  "outputs": [
		  {
			  "name": "",
			  "type": "uint256[]"
		  }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
  },
  {
	  "constant": false,
	  "inputs": [
		  {
			  "name": "_did",
			  "type": "uint256"
		  }
	  ],
	  "name": "add_doctor",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
  },
  {
	  "constant": true,
	  "inputs": [
		  {
			  "name": "_Did",
			  "type": "uint256"
		  }
	  ],
	  "name": "getDoctor",
	  "outputs": [
		  {
			  "name": "",
			  "type": "string"
		  },
		  {
			  "name": "",
			  "type": "string"
		  },
		  {
			  "name": "",
			  "type": "uint256"
		  }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
  },
  {
	  "constant": false,
	  "inputs": [
		  {
			  "name": "_addrPatient",
			  "type": "address"
		  },
		  {
			  "name": "_Pid",
			  "type": "uint256"
		  },
		  {
			  "name": "_Did",
			  "type": "uint256"
		  }
	  ],
	  "name": "setPid_and_Did",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
  },
  {
	  "constant": false,
	  "inputs": [
		  {
			  "name": "_Did",
			  "type": "uint256"
		  },
		  {
			  "name": "_fName",
			  "type": "string"
		  },
		  {
			  "name": "_lName",
			  "type": "string"
		  }
	  ],
	  "name": "setDoctor",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
  },
  {
	  "constant": true,
	  "inputs": [
		  {
			  "name": "",
			  "type": "uint256"
		  }
	  ],
	  "name": "patients_list",
	  "outputs": [
		  {
			  "name": "",
			  "type": "uint256"
		  }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
  },
  {
	  "constant": true,
	  "inputs": [],
	  "name": "get_did",
	  "outputs": [
		  {
			  "name": "",
			  "type": "uint256[]"
		  }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
  },
  {
	  "anonymous": false,
	  "inputs": [
		  {
			  "indexed": false,
			  "name": "fName",
			  "type": "string"
		  },
		  {
			  "indexed": false,
			  "name": "lName",
			  "type": "string"
		  }
	  ],
	  "name": "DoctorInfo",
	  "type": "event"
  }
]);

var Patient = PatientContract.at('0xfa80D454049c57Cd334f1F79DaBA35c91d3589d3');
var Hospital = HospitalContract.at('0x193eD9ed86E30C78Fd66Ed65cF6e784493Fc8e8A');


var patientEvent = Patient.PatientInfo();	

var patientEvent1 = Patient.PatientInfo1();	


patientEvent.watch(function(error, result){
		  if (!error)
			  {
				 
				  $("#hash1").html('Block hash 1: ' + result.blockHash);
				  console.log(result);
				  $("#patient3").html("Name : " + (result.args.fName) + ' ' + (result.args.lName)+ ' ' + (result.args.age));
			  } else {
				 
				  console.log(" event error");
			  }
  });

  patientEvent1.watch(function(error, result){
		  if (!error)
			  {
			
				  $("#hash2").html('Block hash 2: ' + result.blockHash);
				  console.log(result);
				  $("#patient4").html("DOB : " + (result.args.Dob) );
			  } else {
				 
				  console.log(" event error");
			  }
  });
  
  $("#P_submit").click(function(error, result) {
	$("#loader").show();
	Patient.setPatient($("#P_pid").val(), $("#P_fname").val(),$("#P_lname").val(),$("#P_age").val());
	Patient.setPatient1($("#P_pid").val(), $("#P_dob").val());
  console.log("success");
});

$("#P_get").click(function() {
	
	Patient.getPatient($("#P_getpid").val(),function(error, result){
	if(!error)
				  {
					  $("#P_getfname").html(result[0]);
					  $("#P_getlname").html(result[1]);
					  $("#P_getage").html(result[3].c);
					  $("#P_getdob").html(result[2]);
					  $("#P_getdid").html(result[4].c);
					  console.log(result);
				  }
			  else
				  console.error(" Get error");
		  });
	  });

	  $("#P_req").click(function() {
	$("#loader").show();
	Patient.request_doc('0x193eD9ed86E30C78Fd66Ed65cF6e784493Fc8e8A',$("#P_reqpid").val());
});

// .............DOCTOR...............

	var DoctorEvent = Hospital.DoctorInfo();	

	DoctorEvent.watch(function(error, result){
		  if (!error)
			  {
				$("#insTrans2").html('Block hash: ' + result.blockHash);
				  $("#loader").hide();
				  console.log(result);
				  $("#patient").html("Name : " + (result.args.fName)+" "+ (result.args.lName) );
			  } else {
				  $("#loader").hide();
				  console.log(" event error");
			  }
			});

$("#button").click(function() {
	Hospital.add_doctor($("#Did").val());
	Hospital.setDoctor($("#Did").val(), $("#fname").val(),$("#lname").val());
   
});


$("#button1").click(function() {
  
Hospital.getDoctor($("#Did").val(),function(error, result){
  if(!error)
			  {
				  $("#patient").html(result[0]+' ' + result[1] +" "+result[2]);
				  console.log(result);
			  }
		  else
			  console.error(" Get error");
	  });     
  });
  
  $("#button8").click(function() {
  
  Hospital.view_patient('0xfa80D454049c57Cd334f1F79DaBA35c91d3589d3',$("#D_Did").val(),$("#D_Pid").val(),function(error, result){
  if(!error)
				{
					$("#patient").html(result[0]+' ' + result[1] +" "+result[2] +" "+result[3] +" "+result[4]);
					console.log(result);
					if(result[4]==0)
					{
					  alert("This Patient is not assigned to you");
					}
				}
			else
				console.error(" Get error");
		});     
	});

//........Hospital..........

  $("#button2").click(function() {
	Hospital.get_did(function(error,result){
	  if(!error)
	  {
		result.forEach(function(ele){
		  document.getElementById("patient2").innerHTML+=(ele.c)+"<br>";
		  console.log(ele.c);
		});
		
	  }
	  else
			  console.error(" Get error");
	});
  });


  $("#button3").click(function() {
	Hospital.request_list(function(error,result){
	  if(!error)
	  {
		result.forEach(function(ele){
		  document.getElementById("patient5").innerHTML+=(ele.c)+"<br>";
		  console.log(ele.c);
		});
		
	  }
	  else
			  console.error(" Get error");
	});
  });

  $("#button7").click(function() {
	$("#loader").show();
  Hospital.setPid_and_Did('0xfa80D454049c57Cd334f1F79DaBA35c91d3589d3',$("#assign_Pid").val(),$("#assign_Did").val());
  Hospital.remove_Pid($("#assign_Pid").val());
});

 
