function my_script(orgs){
    console.log('script called.');
    var org = orgs;
    console.log('org assigned.');

    function make_drop_down(list_of_orgs, element_id){
        select_elem = document.getElementById(element_id)
        if(select_elem){
            for(var i = 0; i < list_of_orgs.length; i++) {
                var option = document.createElement('option');
                option.innerHTML = list_of_orgs[i];
                option.value = list_of_orgs[i];
                select_elem.appendChild(option);
            }
        }       
    };

    console.log("Making Drop Downs!!");
    make_drop_down(org, 'drop_down_1');
    console.log("Made Drop Downs!!");

};
function my_script(vdc){
    console.log('script called.');
    var vdc = vdc;
    console.log('vdc assigned.');

    function make_drop_down(list_of_vdc, element_id){
        select_elem = document.getElementById(element_id)
        if(select_elem){
            for(var i = 0; i < list_of_vdc.length; i++) {
                var option = document.createElement('option');
                option.innerHTML = list_of_vdc[i];
                option.value = list_of_vdc[i];
                select_elem.appendChild(option);
            }
        }       
    };

    console.log("Making Drop Downs!!");
    make_drop_down(vdc, 'drop_down_1');
    console.log("Made Drop Downs!!");

};
function my_script(vc){
    console.log('script called.');
    var vc = vc;
    console.log('vc assigned.');

    function make_drop_down(list_of_vc, element_id){
        select_elem = document.getElementById(element_id)
        if(select_elem){
            for(var i = 0; i < list_of_vc.length; i++) {
                var option = document.createElement('option');
                option.innerHTML = list_of_vc[i];
                option.value = list_of_vc[i];
                select_elem.appendChild(option);
            }
        }       
    };

    console.log("Making Drop Downs!!");
    make_drop_down(vc, 'drop_down_1');
    console.log("Made Drop Downs!!");

};

function checkboxes(vmlist){
    console.log('script called.');
    var vmlist = vmlist;
    console.log('vmlist assigned.');

    function make_checkboxes(list_of_vms, element_id){
        select_elem = document.getElementById(element_id)
        if(select_elem){
            for(var i = 0; i < list_of_vms.length; i++) {
                var checkBox = document.createElement('input');
                var label = document.createElement("label");
                checkBox.type = "checkbox";
                checkBox.value = list_of_vms[i];
                select_elem.appendChild(checkBox);
                select_elem.appendChild(label);
                label.appendChild(document.createTextNode(list_of_vms[i]));
            }
        }       
    };

    console.log("Making Drop Downs!!");
    make_checkboxes(vdc, 'drop_down_1');
    console.log("Made Drop Downs!!");

};

function myFunction1()
{
   document.forms[0].submit();
};
function myFunction2()
{
   document.forms[0].submit();
};
function myFunction3()
{
   document.forms[0].submit();
};
function myFunction4()
{
   document.forms[0].submit();
};
