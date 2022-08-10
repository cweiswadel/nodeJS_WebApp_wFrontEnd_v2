const curQueryParam = document.getElementById('curQueryParam');

const uncheckOtherButtons = (queryParam, buttonToToggleON) => {
    //list of all html elements with the Class name 'paramToggle'
    var paramEles_Arr = document.getElementsByClassName("paramToggle");
    let eleIDs = [], eleID, butListObj = {}; // empty array to store element IDs
    for (var i = 0; i < paramEles_Arr.length; i++) {
        eleID = paramEles_Arr[i].id;
        eleIDs.push(eleID);
    }

    butListObj.sort = eleIDs.filter(ele => ele.startsWith('sort'));
    butListObj.registered = eleIDs.filter(ele => ele.startsWith('reg'));
    butListObj.score = eleIDs.filter(ele => ele.startsWith('score'));
    butListObj.name = eleIDs.filter(ele => ele.startsWith('name'));

    console.log(butListObj); 
    let buttonGrp = butListObj[queryParam], curEle;
    console.log(buttonGrp);
    for (let i = 0; i < buttonGrp.length; i++) {
        curEle = document.getElementById(buttonGrp[i])
        curEle.checked = false;
        // console.log(buttonGrp[i].checked);
    }
    buttonToToggleON.checked = true;
    // console.log(buttonToToggleON.checked);
}

const sortToggleFN = exports.sortToggleFN = () => {
    // const curQueryParam = document.getElementById('curQueryParam');
    const queryParam = 'sort';
    const sortASCBut = document.getElementById('sortASCToggle');
    const sortASCParam = { sort: 'ASC' };

    const sortDESCBut = document.getElementById('sortDESCToggle');
    const sortDESCParam = { sort: 'DESC' };



    sortASCBut.addEventListener("change", (event) => {
        if (event.target.checked) { //checkbox is toggled, param should be set
            uncheckOtherButtons(queryParam, sortASCBut);
            curQueryParam.dataset.sort = sortASCParam.sort;
        } else { //checkbox is untoggled, param should NOT be set
            delete curQueryParam.dataset.sort;
        }
    })

    sortDESCBut.addEventListener("change", (event) => {
        if (event.target.checked) { //checkbox is toggled, param should be set
            uncheckOtherButtons(queryParam, sortDESCBut);
            curQueryParam.dataset.sort = sortDESCParam.sort;
        } else { //checkbox is untoggled, param should NOT be set
            delete curQueryParam.dataset.sort;
        }
    })
}

const registeredToggleFN = exports.registeredToggleFN = () => {
    const regToggleButY = document.getElementById('regToggleYES');
    const regToggleButN = document.getElementById('regToggleNO');
    const regToggleParamObj = {
        registeredY: 'yes',
        registeredN: 'no'
    };

    regToggleButY.addEventListener("change", (event) => {
        if (event.target.checked) { //checkbox is toggled, param should be set
            curQueryParam.dataset.registered = regToggleParamObj.registeredY;
        } else { //checkbox is untoggled, param should NOT be set
            delete curQueryParam.dataset.registered;
        }
    })

    regToggleButN.addEventListener("change", (event) => {
        if (event.target.checked) { //checkbox is toggled, param should be set
            curQueryParam.dataset.registered = regToggleParamObj.registeredN;
        } else { //checkbox is untoggled, param should NOT be set
            delete curQueryParam.dataset.registered;
        }
    })
}

const queryParamToggles = exports.queryParamToggles = () => {
    sortToggleFN();
    registeredToggleFN();
} 
