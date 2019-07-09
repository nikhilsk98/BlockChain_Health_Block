    pragma solidity >=0.4.18;
     import "./Health.sol";
    contract Doctor{
        struct doctors{
            string fName;
            string lName;
            uint Pid;
        }
    
        mapping(uint => doctors) map;
        
        
       event DoctorInfo(
         string fName,
         string lName
         
         );
         
         function setDoctor(uint _Did,string memory _fName, string memory _lName /*,string memory _Pid*/) public {
           map[_Did].fName = _fName;
           map[_Did].lName = _lName;
         
          
          emit DoctorInfo(_fName,_lName/*,_Pid*/);
            }
            
             function getDoctor(uint _Did) view public returns (string memory ,string memory , uint) {
           return (map[_Did].fName, map[_Did].lName,map[_Did].Pid);
       }
       
       function setPid(uint _Did, uint _Pid)public {
           map[_Did].Pid = _Pid;
       }

       function view_patient(address _addrPatient,uint _Did,uint _Pid)public view  returns(string memory ,string memory ,string memory, uint, uint){
           Health A = Health(_addrPatient);
           return A.doctor_view(_Did,_Pid);
       }
    }
    
    contract Hospital is Doctor{
          uint[] public patients_list;
          uint[] public doctors_list;
          
          function add_doctor(uint _did)public{
              doctors_list.push(_did);
          }
          
           function get_did()public view  returns(uint[] memory){
              return doctors_list;
          }
          
          function add_patient(uint _pid)public{
              patients_list.push(_pid);
          }
          
          function request_list()public view  returns(uint[] memory){
              return patients_list;
          }
          
          function setPid_and_Did(address _addrPatient, uint _Pid, uint _Did)public{
              Health patient = Health(_addrPatient);
              Doctor.setPid(_Did,_Pid);
              patient.setDid(_Pid,_Did);
              
          }

           function remove_Pid(uint _Pid)public{
              for(uint i=0;i<patients_list.length;i++){
             if(_Pid==patients_list[i])
             {
                 for(uint j = i;j<patients_list.length-1;j++)
                 {
                     patients_list[j] = patients_list[j+1];
                 }
                delete patients_list[patients_list.length-1];
                patients_list.length--;
             }
         }
          }
          
          
    }