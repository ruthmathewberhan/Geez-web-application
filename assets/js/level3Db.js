import productdb, {
    bulkcreate
} from './module.js'

const db = productdb("levelThreeGeezDB", {
    qene: `++id, qene, fetchi, secret `


});

// vars for qene

const qene1 = document.querySelector('.qene');
const difinition = document.querySelector('.difinitioin');
const secret1 = document.querySelector('.secret');
const next = document.querySelector('.next');

// populate the datatbase

bulkcreate(db.qene, {
    qene: "ደራሴ ድርሰት ይብል በዘደረሰ ድርሰቱ፡፡ ፍቅረ ደብረ ድማህ ልዕልት እስከመቃብር ውእቱ፡፡",
    fechi: "የድርሰት ደራሲ በደረሰው ድርሰት እንዲህ ይላል፡፡ የታላቋ የደብረ ድማህ ልዕልት ፍቅር እስከ መቃብር ነው፡፡",
    secret: "ደራሲ ሐዲስ ዓለማየሁ ለደብረ ድማህ ቅዱስ ጊዮርጊስ ያላቸው ፍቅር እስከመቃብር ነው፡፡",

})

bulkcreate(db.qene, {
    qene: "ለዓለመዓለም ይነብር ወይሄሉ ዝክረ ስመ ጻድቅ መፍትው፡፡ እስመ ከመ ሐዲስ ይትነሣእ ኩለሄ ስመ ዚአሁ ሕያው፡፡",
    fechi: "የተወዳጁ የጻድቅ መታሰቢያ ስም ለዘለዓለም ይኖራል፡፡ ልክ ሕያው የሆነው የሐዲስ ዓለማየሁ ስም ሁልጊዜ እንደሚነሣ የጻድቅ መታሰቢያ ስም ለዘለዓለም ይኖራል፡፡",
    secret: "የቅኔው መነሻ “ዝክረ ጻድቅ ለዓለም ይሔሉ፡፡” የሚለው መዝሙረ ዳዊት ሲሆን ቅኔው የጻድቅ ስም ለዘለዓለም ሲነሣ እንደሚኖር ሐዲስ ዓለማየሁም በሥራቸው ሕያው ስለሆኑ ለዘለዓለም ይታወሳሉ እንደማለት ነው፡፡",

})

bulkcreate(db.qene, {
    qene: "ዘመነ ምሕረት ኮነ ዘመነ ሥጋዌ ቅውም፡፡ ግእዝ ወእንግሊዝኛ አንበሳ ወላሕም፡፡ ",
    fechi: " ቋሚ የሆነው ዘመነ ሥጋዌ የምሕረት ዘመን ሆነ፡፡ በደብረ ማርቆስ ጫካ ውስጥ አንበሳና ላም በጋራ ተሰማርተዋልና፡፡ ",
    secret: " በዚህ በተሻሻለው ዘመን አንበሳና ላም የሆኑት ግእዝና እንግሊዝኛ አቻላቻ ሆነው በአንድ ጉባኤ ላይ ቀረቡ፡፡ አንበሳው ግእዝ ሲሆን በላም የተመሰለው ደግሞ እንግሊዝኛ ነው፡፡",

})

bulkcreate(db.qene, {
    qene: " ሕንጻ ደብረ ማርቆስ ተጋብኦ ከመ ይባርኩ መጽኡ ወተጋብኡ ቅድምና፡፡ ምሁራን ዘኢትዮጵያ ጽንፈ ባሕር ወጣና፡፡ ምሁራነ ጊዜ ዐቢይ እምድኅረ ሰምዑ በዜና፡፡ ክብረ ተጋብኦ ማርቆስ አምሳለ ሲና፡፡ ሐዋርያ ዘርእየ በፓና፡፡",
    fechi: " የደብረ ማርቆስን የመሰብሰቢያ ሕንጻ ይመርቁ ዘንድ የኢትዮጵያ ምሁራን ከባሕር ጠረፍና ከጣና አካባቢ ጭምር አስቀድመው መጡ፣ ተሰባሰቡ፡፡ የዐቢይ ዘመን ምሁራን በዜና ከሰሙ በኋላ መጡ፡፡ የሲና አምሳያ የሆነው የማርቆስ የክብር ጉባኤ ሐዋርያው በፓና ያየው ብርሃን ነውና፡፡",
    secret: "  ምሁራን የደብረ ማርቆስን የባህል ዐውደ ጥናት ያደምቁ ዘንድ ከየአቅጣጫው መጡ፡፡ የዕውቀት ብርሃንም ፈነጠቁበት፡፡",

})

bulkcreate(db.qene, {
    qene: " አጭር መወድስ ለነ ለነ ለሕዝበ ጉባኤ ዘቆመ፡፡ ያብጽሐነ አምላከ ጉባኤ ከመ ዩም አመ፡፡",
    fechi: " ለእኛ ለእኛ ለጉባኤተኞች የቆመው የጉባኤ አምላክ ልክ እንደዛሬው ሁሉ ለሚቀጥለው ዓመት ጉባኤም ያድርሰን፡፡",
    secret: " የጉባኤው ተሳታፊዎች ሁሉ ለሚቀጥለው የጉባኤ ዓመት ፈጣሪ እንዲያደርሳቸው መልካም ምኞት መመኘት ነው።",

})

bulkcreate(db.qene, {
    qene: " አመ ወድቀ ግእዝ አረጋዊ በዘሳባውያን ፍና፡፡ ለአንሥኦቱ ትረውጽ እንታክቲ ወለተ ምሁራን ኅሊና፡፡ ",
    fechi: " ሽማግሌው ግእዝ በሳባውያን ጐዳና ላይ በወደቀ ጊዜ፤ የምሁራን ኅሊና የሆነች ሴት ታነሣው ዘንድ ትሮጣለች፡፡",
    secret: " አንድ ሽማግሌ በመንገድ ላይ ሲወድቅ አንዲት ሴት ታነሣው ዘንድ እንደምትሮጥ ምሁራንም በመውደቅ ላይ ያለውን የግእዝ ቋንቋ ያነሱት ዘንድ ጥናት እያካሄዱበት ነው፡፡",

})

bulkcreate(db.qene, {
    qene: " በሥርዓተ አበው ቀደምት ዘሐጸንኪዮሙ፣ ለደሃራውያን ውሉድ እመ ብዙኃን ኢትዮጵያ። እንበለ አሐቲ ድካም ወእንበለ ንስቲት ጉዕትያ። ጀርመን ዕቅብት ዘብእስኪ መጻሕፍተ ሀብታተ ቤትኪ ተካፈለት ነያ፡፡ ወዘንተ ተመነያ፣ አዋልደ ሮሜ ወዐረብ አሀተ ገሊላ ወሰማርያ፡፡ ወእንዘ ጀርመን ትፈትነኪ ትፈትነኪ ኬንያ፡፡ ከመ ሶርያ ለገባዖን ወከመ ገባኦን ለሶርያ፡፡ ወእንተ መውዕያ ለፀር አመነፀርኪ ህብልያ፡፡ አዕዛኒነ ኢይስምዓ ወአዕይንቲነ ኢይርዓያ፡፡ እስመ ኢናፍቅር ንሕነ ዘጸላዕትነ ጉህልያ፡፡ አዕዛኒነ ኢይስምዓ ወአዕይንቲነ ኢይርዓያ፡፡ ",
    fechi: " የብዙዎች እናት የሆንሺው ኢትዮጵያ ያለምንም ድካምና ልፋት በቀደሙት አባቶች ሥርዓት ያሳደግሻቸው የኋለኞቹ ልጆች እያሉ በዕቁባትነት (በጭን ገረድነት) የተቀመጠቺው ጀርመን (የባልሽ ቅምጥ የሆነችው ጀርመን)የቤትሽን መጻሕፍት ሀብታት (ንብረቶችን) ተካፈለች፡፡ ሰማርያና የገለሊላ እህቶች የሆኑት የዐረብና የሮማ ልጆችም ሀብት የመካፈልን ነገር (መጻሕፍት መውሰድን) ተመኙ፡፡ ጀርመን ስትፈትንሽ በቅርብ ያለቺው ኬንያም ትፈትንሻለች፡፡ ሶርያ ገባዖንን፣ ገባኦን ደግሞ ሶርያን እንደምትፈትን ኬንያም ልትፈትንሽ (መጻሕፍትን ልትዘርፍሽ) ትችላለች፡፡ የጠላት ማሸነፊያ የሆነውን ዘረፋን እያየሽ ከአስተናገድሽ (እያየሽ ዝም ካልሽ) ጆሮዎቻችን አይስሙ፣ ዓይኖቻችንም አይዩ፡፡ የጠላታችንን አጥፊነት እኛ አንወድምና፡፡ ይህ ከሚሆን ጆሮዎቻችን ከመስማት፣ ዓይኖቻችን ከማየት ቢጐድሉ ይሻላል፡፡",
    secret: " ባል ሲሞት የባልን ንብረት እካፈላለሁ ብላ በቅምጥነት ልጅ የወሰደች ወይንም ያልወሰደች ሴት ዋናይቱን የቤት እመቤት እንደምትሞግታት በቅምጥነት የተመሰለቺው ጀርመንም ምንም ሳትሠራና ሳትደክም የኢትዮጵያ ሊቃውንት የጻፉዋቸውን መጻሕፍት ዘርፋ ወሰደች፡፡ የእርስዋን ተግባር ያዩ ሌሎች አገሮችም ዘረፉ፡፡ ለዘረፋ ያሰፈሰፉ ሌሎች ሀገሮችም ስለአሉ መጻሕፍትን በትጋት እንጠብቃቸው፡፡ ወስብሐት ለእግዚአብሔር፡፡ ",

})
// add event listner to the button

next.addEventListener('click', nextQene);

var index = 1;

function nextQene() {
    

    if (index == 1) {

        db.qene.get(1, function (rowOne) {
            qene1.innerHTML = rowOne['qene'];
            difinition.innerHTML = rowOne['fechi'];
            secret1.innerHTML = rowOne['secret'];
        })

        index += 1;
    }

    else if (index == 2) {

        db.qene.get(2, function (rowSix) {
            qene1.innerHTML = rowSix['qene'];
            difinition.innerHTML = rowSix['fechi'];
            secret1.innerHTML = rowSix['secret'];
        })

        index += 1;
    }

    else if (index == 3) {

        db.qene.get(3, function (rowTwo) {
            qene1.innerHTML = rowTwo['qene'];
            difinition.innerHTML = rowTwo['fechi'];
            secret1.innerHTML = rowTwo['secret'];
        })

        index += 1;
    }

    else if (index == 4) {

        db.qene.get(4, function (rowThree) {
            qene1.innerHTML = rowThree['qene'];
            difinition.innerHTML = rowThree['fechi'];
            secret1.innerHTML = rowThree['secret'];
        })

        index += 1;
    }

    else if (index == 5) {

        db.qene.get(5, function (rowFour) {
            qene1.innerHTML = rowFour['qene'];
            difinition.innerHTML = rowFour['fechi'];
            secret1.innerHTML = rowFour['secret'];
        })

        index += 1;
    }

    else if (index == 6) {

        db.qene.get(6, function (rowFive) {
            qene1.innerHTML = rowFive['qene'];
            difinition.innerHTML = rowFive['fechi'];
            secret1.innerHTML = rowFive['secret'];
        })

        index += 1;
    }

    else if (index == 7) {

        db.qene.get(7, function (rowSeven) {
            qene1.innerHTML = rowSeven['qene'];
            difinition.innerHTML = rowSeven['fechi'];
            secret1.innerHTML = rowSeven['secret'];
        })

        index += 1;
    }

    if (index > 8) {
        index = 1;
    }


}