    pragma solidity >=0.4.18;
    import "./Hospital.sol";
    contract Health {
        struct Patient{
       string fName;
       string lName;
       uint age;
       uint Doctor_assigned;
       string Dob;
        }
        
        mapping (uint => Patient) map;
    
       event PatientInfo(
         string fName,
         string lName,
         uint age
         );
     
        event PatientInfo1(
            /*uint Doctor_assigned,*/
       string Dob
            );
           
    function setPatient(uint _Pid,string memory _fName, string memory _lName,uint _age) public {
           map[_Pid].fName = _fName;
           map[_Pid].lName = _lName;
           map[_Pid].age = _age;
          
          emit PatientInfo(_fName,_lName,_age);
            }
            
    function setPatient1(uint _Pid,string memory _Dob/*,uint _Doctor_assigned*/) public{
            map[_Pid].Dob = _Dob;
           
          /*map[_Pid].Doctor_assigned = _Doctor_assigned;*/
            emit PatientInfo1(_Dob/*,_Doctor_assigned*/);
         
    }
    
       function getPatient(uint _Pid) view public returns (string memory ,string memory ,string memory, uint, uint) {
           return (map[_Pid].fName, map[_Pid].lName, map[_Pid].Dob, map[_Pid].age, map[_Pid].Doctor_assigned);
       }
       
       function request_doc(address _addrHospital,uint _no)public {
           Hospital H = Hospital(_addrHospital);
            H.add_patient(_no);
       }
       
       function setDid(uint _Pid, uint _Did)public{
           map[_Pid].Doctor_assigned = _Did;
       }

       function doctor_view(uint _Did, uint _Pid) public view returns(string memory ,string memory ,string memory, uint, uint){
          if(_Did==map[_Pid].Doctor_assigned) 
          {
              return(map[_Pid].fName, map[_Pid].lName, map[_Pid].Dob, map[_Pid].age, map[_Pid].Doctor_assigned);
          }
      }
      
    }
    