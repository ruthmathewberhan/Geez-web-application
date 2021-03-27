import productdb, {
    bulkcreate
} from './module.js'

const db = productdb("levelTwoGeezDB",{
    verb: `++id, verbG, verbAm, verbQ, verbA, verbB, verbM, verbGi, verbW`,
    sentence: `++id, qene, fetchi, secret `


});

// vars for verbs 

const verbGeez = document.querySelector('.verb');
const verbQuest = document.querySelector('.verbQ');
const verbAction = document.querySelector('.verbA');
const verbBoy = document.querySelector('.verbB');
const verbMen = document.querySelector('.verbM');
const verbGirl = document.querySelector('.verbG');
const verbWomen = document.querySelector('.verbW');
const GverbInput = document.querySelector('#search-verbG');
const AverbInput = document.querySelector('#search-verbA');
const GverbButton = document.querySelector('#searchbtn-verbG');
const AverbButton = document.querySelector('#searchbtn-verbA');



// populate the verb database

bulkcreate(db.verb, {
    verbG: "ነበረ",
    verbAm: "ተቀመጠ",
    verbQ: "ይነብሮ ፡  ይቀመጥ (ትዕዛዝ)",
    verbA: "ነቢር ፡ መቀመጥ",
    verbB: "ነባሪ ፡ የተቀመጠ ወንድ",
    verbM: "ነባሪያን ፡ የተቀመጡ ወንዶች",
    verbGi: "ነባሪት ፡ የተቀመጠች ሴት",
    verbW: "ነባሪያተ ፡ የተቀመጡ ሴቶች",
})

bulkcreate(db.verb, {
    verbG: "ሖረ",
    verbAm: "ሄደ",
    verbQ: "ይሑር ፡  ይሂድ (ትዕዛዝ)",
    verbA: "ሐዊር ፡ መሄድ",
    verbB: "ሐዋሪ ፡ የሄደ ወንድ",
    verbM: "ሐዋሪያን ፡ የሄዱ ወንዶች",
    verbGi: "ሐዋሪተ ፡ የሄደች ሴት",
    verbW: "ሐዋሪያት ፡ የሄዱ ሴቶች",
})
bulkcreate(db.verb, {
    verbG: "ተምህረ",
    verbAm: "ተማረ",
    verbQ: "ይተመሀር ፡  ይማር (ትዕዛዝ)",
    verbA: "ተምህሮ/ተምህሮት ፡ መሄድ",
    verbB: "ሐዋሪ ፡ የሄደ ወንድ",
    verbM: "ሐዋሪያን ፡ የሄዱ ወንዶች",
    verbGi: "ሐዋሪተ ፡ የሄደች ሴት",
    verbW: "ሐዋሪያት ፡ የሄዱ ሴቶች",
})

bulkcreate(db.verb, {
    verbG: "ሖረ",
    verbAm: "ሄደ",
    verbQ: "ይሑር ፡  ይሂድ (ትዕዛዝ)",
    verbA: "ሐዊር ፡ መሄድ",
    verbB: "ሐዋሪ ፡ የሄደ ወንድ",
    verbM: "ሐዋሪያን ፡ የሄዱ ወንዶች",
    verbGi: "ሐዋሪተ ፡ የሄደች ሴት",
    verbW: "ሐዋሪያት ፡ የሄዱ ሴቶች",
})

bulkcreate(db.verb, {
    verbG: "አእመረ",
    verbAm: "አወቀ",
    verbQ: "ያእሞር፡ ይወቅ (ትዕዛዝ)",
    verbA: "አእሞሮ/አእሞሮት ፡ ማወቅ (ድርጊት)",
    verbB: "አእማሪ ፡ አዋቂ ወንድ (ነጠላ ወንድ)",
    verbM: "አእማሪያን ፡ አዋቂ ወንዶች (ብዙ ወንዶች)",
    verbGi: " አእማሪት ፡አዋቂ ሴት (ነጠላ ሴት) ",
    verbW: " አእማሪያት ፡ አዋቂ ሴቶች (ብዙ ሴቶች)",
})
bulkcreate(db.verb, {
    verbG: "በከየ",
    verbAm: "አለቀሰ",
    verbQ: "ይብኪ ፡  ያለቀስ (ትእዛዝ) ",
    verbA: " በክዮ/በክዮት ፡ ማልቀስ (ድርጊት)",
    verbB: " በካዩ ፡ የሚያለቅስ ወንድ (ነጠላ ወንድ)",
    verbM: " በካይያን ፡ የሚያለቅሱ ወንዶች (ብዙ ወንዶች)  ",
    verbGi: "በካይት ፡ የምታለቅስ ሴት (ነጠላ ሴት)",
    verbW: " በካይያት ፡ የሚያለቅሱ ሴቶች (ብዙ ሴቶች) ",
})
bulkcreate(db.verb, {
    verbG: "ሐመ",
    verbAm: "ታመመ",
    verbQ: " ይሕምም ፤ የታመም (ትዕዛዝ)",
    verbA: " ሐሚሞ/ሐሚሞት ፡ መታመም (ድርጊት)",
    verbB: " ሐማሚ ፡ የታመመ ወንድ (ነጠላ ወንድ)",
    verbM: " ሐማሞያን ፡የታመሙ ወንዶች (ብዙ ወንዶች)",
    verbGi: " ሐማሚት ፡ የታመመች ሴት (ነጠላ ሴት) ",
    verbW: " ሐማሞያት ፡ የታመሙ ሴቶች (ብዙ ሴቶች)",
})
bulkcreate(db.verb, {
    verbG: "ፈጠረ",
    verbAm: "ፈጠረ",
    verbQ: "ይፍጠር ፡ ይፍጠር (ትዕዛዝ)",
    verbA: "ፈጢር/ፈጥሮት ፡ መፍጠር (ድርጊት)",
    verbB: "ፈጣሪ ፡ የፈጠረ ወንድ (ነጠላ ወንድ)",
    verbM: "ፈጣሪያን ፡ የፈጠሩ ወንዶች (ብዙ ወንዶች) ",
    verbGi: "ፈጣሪት ፡ ያፈጠረች ሴት (ነጠላ ሴት) ",
    verbW: " ፈጣሪያት ፡ የፈጠሩ ሴቶች (ብዙ ሴቶች)",
})
bulkcreate(db.verb, {
    verbG: "መሐረ",
    verbAm: "አስተማረ",
    verbQ: " ይምህር ፡ ያስተምር ተዕዛዝ) ",
    verbA: " ምሂር/ምሂሮት ፡ ማሰተማር (ድርጊት)",
    verbB: "መሓሪ ፡ የሚያስተምር ወንድ (ነጠላ ወንድ)",
    verbM: "መሓሪያን ፡ የሚያስተምሩ ወንዶች (ብዙ ወንዶች)",
    verbGi: "መሓሪት ፡ የምታስተምር ሴት (ነጠላ ሴት) ",
    verbW: "መሓሪያት ፡ የሚያስተምሩ ሴቶች (ብዙ ሴቶች)",
})



/// add even listner to the search 
GverbButton.addEventListener('click', searchGeezVerb);
AverbButton.addEventListener('click', searchAmharicVerb);


/// function for search using Geez word 

function searchGeezVerb(){

    //check if search input is empty
    if (GverbInput.value == '') {
        GverbInput.style.borderColor = "red";
        return;//Avoiding else statement
    }
   
    GverbInput.style.borderColor = '#ebebeb';

    //get search letter input

    var word = GverbInput.value;

    if(word == "ነበረ") {
        db.verb.get(1, function(rowOne) {
            verbGeez.innerHTML = `${rowOne['verbG']} (ግስ) : ${rowOne['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowOne['verbQ'];
            verbAction.innerHTML = rowOne['verbA'];
            verbBoy.innerHTML = rowOne['verbB'];
            verbMen.innerHTML = rowOne['verbM'];
            verbGirl.innerHTML = rowOne['verbGi'];
            verbWomen.innerHTML = rowOne['verbW'];
            
        })
    } else if(word == "ሖረ") {
        db.verb.get(2, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    }

    else if(word == "አእመረ") {
        db.verb.get(4, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    } 
    else if(word == "በከየ") {
        db.verb.get(5, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    }
    else if(word == "ሐመ") {
        db.verb.get(6, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    }

    else if(word == "ፈጠረ") {
        db.verb.get(7, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    }

    else if(word == "መሐረ") {
        db.verb.get(8, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    }


    
}

    

// function for search using Geez word 

function searchAmharicVerb(){

    //check if search input is empty
    if (AverbInput.value == '') {
        AverbInput.style.borderColor = "red";
        return;//Avoiding else statement
    }
   
    AverbInput.style.borderColor = '#ebebeb';

    //get search letter input

    var word = AverbInput.value;

    if(word == "ተቀመጠ") {
        db.verb.get(1, function(rowOne) {
            verbGeez.innerHTML = `${rowOne['verbG']} (ግስ) : ${rowOne['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowOne['verbQ'];
            verbAction.innerHTML = rowOne['verbA'];
            verbBoy.innerHTML = rowOne['verbB'];
            verbMen.innerHTML = rowOne['verbM'];
            verbGirl.innerHTML = rowOne['verbGi'];
            verbWomen.innerHTML = rowOne['verbW'];
            
        })
    } else if(word == "ሄደ") {
        db.verb.get(2, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    }

    else if(word == "አወቀ") {
        db.verb.get(4, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    }

    else if(word == "አለቀሰ") {
        db.verb.get(5, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    }

    else if(word == "ታመመ") {
        db.verb.get(6, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    }

    else if(word == "ፈጠረ") {
        db.verb.get(7, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    }

    else if(word == "አስተማረ") {
        db.verb.get(8, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    }

    
}

    
