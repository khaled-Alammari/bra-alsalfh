import {moveTo} from "./main.js";

const games = document.getElementsByClassName("games")[0];
const anime = document.getElementsByClassName("anime")[0];
const subjects = [games, anime];

for (let i = 0; i < subjects.length; i++) {
    subjects[i].addEventListener("click", _ => {
        for(let j = 0; j < subjects.length; j++) {
            subjects[j].style.opacity = "0";
        };
        subjects[i].style.opacity = "1";
        moveTo("players", 1500);
    });
};

games.addEventListener("click", _ => {
    localStorage.setItem("topic",[
        "اوفرواتش",
        "فورتنايت",
        "روكيت ليق",
        "ماين كرافت",
        "هورايزون",
        "انشارتيد",
        "كول اوف ديوتي",
        "فيفا",
        "قراند ثيفت اوتو",
        "تيكن",
        "ريزدينت ايفل",
        "ريد ديد",
        "فول قايز",
        "ايبيكس ليجيند",
        "ببجي",
        "كراش",
        "دبل يو دبل يو اي",
        "ليتل بيق",
        "ليقو",
        "راي مان"
    ]);
});

anime.addEventListener("click", _ => {
    localStorage.setItem("topic",[
        "هنتر",
        "ناروتو",
        "بوروتو",
        "هجوم العمالقة",
        "بوكو نو هيرو",
        "ون بنش مان",
        "موب سايكو",
        "الخطايا السبع المميتة",
        "بليتش",
        "سورد ارت اونلاين",
        "ديث نوت",
        "بوكو داكي",
        "كونان",
        "ميراي نيكي",
        "باكي",
        "قاتل الشياطين",
        "دكتور ستون",
        "نيفيرلاند",
        "هاجيمي نو ايبو",
        "جوجوتسو كايسين"
    ]);
});