
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
		"constant": false,
		"inputs": [
			{
				"name": "_Did",
				"type": "uint256"
			},
			{
				"name": "_DOB",
				"type": "string"
			},
			{
				"name": "_specialization",
				"type": "string"
			}
		],
		"name": "setDoctor1",
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
			},
			{
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setDoctor",
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
		"name": "DoctorInfo",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "DOB",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "specialization",
				"type": "string"
			}
		],
		"name": "DoctorInfo1",
		"type": "event"
	}
]);

var Patient = PatientContract.at('0x50d2a69f094373e6D1693EB6786046A5877cD967');
var Hospital = HospitalContract.at('0xE1555d6820D178D089FABcCD94D9D6E8ac1829BD');


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
					  if((result[4].c)==0)
					  {
						$("#P_getdid").html("No Doctor Assigned");
					  }
					  else
						$("#P_getdid").html(result[4].c);
					  console.log(result);
				  }
			  else
				  console.error(" Get error");
		  });
	  });

	  $("#P_req").click(function() {
	$("#loader").show();
	Patient.request_doc('0xE1555d6820D178D089FABcCD94D9D6E8ac1829BD',$("#P_reqpid").val());
});

// .............DOCTOR...............

	var DoctorEvent = Hospital.DoctorInfo();
	
	var DoctorEvent1 = Hospital.DoctorInfo1();

	DoctorEvent.watch(function(error, result){
		  if (!error)
			  {
				$("#hash3").html('Block hash: ' + result.blockHash);
				  console.log(result);
			  } else {
				  console.log(" event error");
			  }
			});
			DoctorEvent1.watch(function(error, result){
				if (!error)
					{
					  $("#hash4").html('Block hash: ' + result.blockHash);
					  
						console.log(result);
				  
					} else {
					  
						console.log(" event error");
					}
				  });

$("#D_submit").click(function() {
	Hospital.add_doctor($("#D_did").val());
	Hospital.setDoctor($("#D_did").val(), $("#D_fname").val(),$("#D_lname").val(),$("#D_age").val());
	Hospital.setDoctor1($("#D_did").val(), $("#D_dob").val(),$("#D_spec").val());

});
$("#D_get").click(function() {
  
Hospital.getDoctor($("#D_getdid").val(),function(error, result){
  if(!error)
			  {
				  $("#D_getfname").html(result[0]);
				  $("#D_getlname").html(result[1]);
				  if((result[2].c)==0)
				  {
					$("#D_getpid").html("No patient assigned");
				  }
				  else
				  $("#D_getage").html(result[2].c);
				  $("#D_getdob").html(result[3]);
				  $("#D_getspec").html(result[4]);
				  if((result[5].c)==0)
				  {
					$("#D_getpid").html("No patient assigned");
				  }
				  else
				  $("#D_getpid").html(result[5].c);

				  console.log(result);
			  }
		  else
			  console.error(" Get error");
	  });     
  });
  
  $("#D_getpatient").click(function() {
  
  Hospital.view_patient('0x50d2a69f094373e6D1693EB6786046A5877cD967',$("#D_Pdid").val(),$("#D_Ppid").val(),function(error, result){
  if(!error)
				{
					$("#D_Pfname").html(result[0]);
					$("#D_Plname").html(result[1]);
					$("#D_Page").html(result[3].c);
					$("#D_Pdob").html(result[2]);
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

  $("#H_Dlist").click(function() {
	Hospital.get_did(function(error,result){
	  if(!error)
	  {
		result.forEach(function(ele){
		  document.getElementById("H_dlist").innerHTML+=(ele.c)+"<br>";
		 
		  console.log(ele.c);
		});
		
	  }
	  else
			  console.error(" Get error");
	});
  });


  $("#H_Plist").click(function() {
	Hospital.request_list(function(error,result){
	  if(!error)
	  {
		result.forEach(function(ele){
		  document.getElementById("H_plist").innerHTML+=(ele.c)+"<br>";
		  console.log(ele.c);
		});
		
	  }
	  else
			  console.error(" Get error");
	});
  });
 
  $("#H_assign").click(function() {
	
  Hospital.setPid_and_Did('0x50d2a69f094373e6D1693EB6786046A5877cD967',$("#H_assign_pid").val(),$("#H_assign_did").val());
  Hospital.remove_Pid($("#H_assign_pid").val());
});

 
