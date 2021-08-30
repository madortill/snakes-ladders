//
//
//
// data on the game subjects (colors, images, names...)
const SUBJECTS = {
    // name of subject - מקראות ישראל
    "reading": {
        "number": 2,
        "sub-name": "מקראות ישראל",
        "snakes-img": "../assets/images/opening/snakes-blue.svg",
        "img-sub": "../assets/images/opening/book.svg",
        "icon": "../assets/images/opening/icon-book.svg",
        "color-bg-opening": "--dark-blue",
        "color-bg": "--blue",
        "filter-btn-color": "drop-shadow(0px 2px 9px #08083a31)",
        "gradient": "--blue-gradient",
        "filter-bg-mission-and-questions": "none"
    },
    // name of subject - פיקוד
    "command": {
        "number": 0,
        "sub-name": "הדרכה ופיקוד",
        // "sub-name": "פיקוד",
        "snakes-img": "../assets/images/opening/snakes-green.svg",
        "img-sub": "../assets/images/opening/commander.svg",
        "icon": "../assets/images/opening/icon-commander.svg",
        "color-bg-opening": "--dark-green",
        "color-bg": "--green",
        "filter-btn-color": "brightness(1.3) hue-rotate(290deg) drop-shadow(0px 2px 9px #08083a31)",
        "gradient": "--green-gradient",
        "filter-bg-mission-and-questions": "hue-rotate(286deg) opacity(0.7)"
    },
    // name of subject - היכר הסביבה 
    "environment": {
        "number": 1,
        "sub-name": "הכרת הדרום",
        "snakes-img": "../assets/images/opening/snakes-teal.svg",
        "img-sub": "../assets/images/opening/binoculaes.svg",
        "icon": "../assets/images/opening/icon-binoculaes.svg",
        "color-bg-opening": "--dark-teal",
        "color-bg": "--teal",
        "filter-btn-color": "brightness(1.7) hue-rotate(331deg) drop-shadow(0px 2px 9px #08083a31)",
        "gradient": "--teal-gradient",
        "filter-bg-mission-and-questions": "hue-rotate(313deg) opacity(0.5)"
    }
};

//
//
//
// questions and missions on every game subject
const DATA = {
    // name of subject - מקראות ישראל
    "reading": {
        "questions": [
            {
                question: "כאן תופיע שאלה לדוגמה שיש לה רק תשובה אחת נכונה",
                ans1: "דוגמה לתשובה לא נכונה",
                ans2: "דוגמה לתשובה לא נכונה בכלל",
                ans3: "דוגמה לתשובה נכונה",
                ans4: "דוגמה לתשובה לא נכונה",
                correctAns: "3",
            },
            {
                question: "כאן תופיע שאלה לדוגמה שיש לה רק תשובה אחת נכונה",
                ans1: "דוגמה לתשובה לא נכונה",
                ans2: "דוגמה לתשובה נכונה",
                ans3: "דוגמה לתשובה לא נכונה בכלל",
                ans4: "דוגמה לתשובה לא נכונה",
                correctAns: "2",
            },
            // {
            //     question: "",
            //     ans1: "",
            //     ans2: "",
            //     ans3: "",
            //     ans4: "",
            //     correctAns: "",
            // },
        ],
        "missions": {
            "individuals": [
                "כאן יהיה רשום משימה שצריך לבצע, ובמידה והקבוצה הצליחה יש ללחוץ על הכפתור המתאים, ולהפך",
            ],
            "groups": [
                "כאן יהיה רשום משימה שצריך לבצע, ובמידה והקבוצה הצליחה יש ללחוץ על הכפתור המתאים, ולהפך",
            ]
        },
        "newInfo": [
            "מידע חדש על הנושא שלא הכרתם",
            "מידע חדש על הנושא שלא הכרתם",
            "מידע חדש על הנושא שלא הכרתם",
        ]
    },
    // name of subject - פיקוד
    "command": {
        "questions": [
            {
                question: "כאן תופיע שאלה לדוגמה שיש לה רק תשובה אחת נכונה",
                ans1: "דוגמה לתשובה לא נכונה",
                ans2: "דוגמה לתשובה לא נכונה בכלל",
                ans3: "דוגמה לתשובה נכונה",
                ans4: "דוגמה לתשובה לא נכונה",
                correctAns: "3",
            },
            {
                question: "כאן תופיע שאלה לדוגמה שיש לה רק תשובה אחת נכונה",
                ans1: "דוגמה לתשובה לא נכונה",
                ans2: "דוגמה לתשובה נכונה",
                ans3: "דוגמה לתשובה לא נכונה בכלל",
                ans4: "דוגמה לתשובה לא נכונה",
                correctAns: "2",
            },
            // {
            //     question: "",
            //     ans1: "",
            //     ans2: "",
            //     ans3: "",
            //     ans4: "",
            //     correctAns: "",
            // },
        ],
        "missions": {
            "individuals": [
                "כאן יהיה רשום משימה שצריך לבצע, ובמידה והקבוצה הצליחה יש ללחוץ על הכפתור המתאים, ולהפך",
            ],
            "groups": [
                "כאן יהיה רשום משימה שצריך לבצע, ובמידה והקבוצה הצליחה יש ללחוץ על הכפתור המתאים, ולהפך",
            ]
        },
        "newInfo": [
            `חסר תוכן שעוד לא הוכנס`,
            "מידע חדש על הנושא שלא הכרתם",
        ]
    },
    // name of subject - היכר הסביבה 
    "environment": {
        "questions": [
            {
                question: `באר שבע הוקמה ע"י האיפריה העותמאנית ב:`,
                ans1: `1948`,
                ans2: `1889`,
                ans3: `1990`,
                ans4: `1900`,
                correctAns: `4`,
            },
            {
                question: `צומת הנגב לידו שוכנת קריית ההדרכה כונה בעבר:`,
                ans1: `צומת המים`,
                ans2: `צומת הדלק`,
                ans3: `צומת נפט`,
                ans4: `צומת הגבס`,
                correctAns: `3`,
            },
            {
                question: `הקצה הצפוני של כביש 40 הצמוד לקריית ההדרכה הוא:`,
                ans1: `צומת אשדוד`,
                ans2: `צומת רעננה`,
                ans3: `צומת ציחר`,
                ans4: `צומת בית ליד`,
                correctAns: `2`,
            },
            {
                question: `מקור עצי השיטה שבנגב הוא: `,
                ans1: `מדבריות ערב`,
                ans2: `הרי האלפים`,
                ans3: `מזרח אפריקה `,
                ans4: `מדבר גוביי`,
                correctAns: `3`,
            },
            {
                question: `הנבטים התפרסמו ב:`,
                ans1: `חקלאות`,
                ans2: `נוודות ומסחר `,
                ans3: `תעשיית נחושת`,
                ans4: `פיסול ברונזה`,
                correctAns: `2`,
            },
            {
                question: `ערוץ הנחל הזורם במרכז קריית ההדרכה הוא יובל של:`,
                ans1: `נחל ציון`,
                ans2: `נחל שקמה`,
                ans3: `נחל סכר`,
                ans4: `נחל רמון`,
                correctAns: `3`,
            },
            {
                question: `ירוחם קמה כמעברה ב:`,
                ans1: `1947`,
                ans2: `1951`,
                ans3: `1960`,
                ans4: `1948`,
                correctAns: `2`,
            },
            {
                question: `קריית ההדרכה שייכת מוניציפלית ל:`,
                ans1: `מועמה איזורית רמת הנגב`,
                ans2: `באר שבע`,
                ans3: `ירוחם`,
                ans4: `מועצה איזורית בני שמעון`,
                correctAns: `3`,
            },
            {
                question: `מבין היישובים הבאים מי היישוב הבדואי הקרוב ביותר לקריית ההדרכה:`,
                ans1: `רהט`,
                ans2: `לקייה`,
                ans3: `שגב שלום`,
                ans4: `תל שבע`,
                correctAns: `3`,
            },
            {
                question: `המועצה התעשייתית נאות חובב נקראה בעבר:`,
                ans1: `גני חובב`,
                ans2: `רמת חובב`,
                ans3: `תפארת חובב`,
                ans4: `מעלה חובב`,
                correctAns: `2`,
            },
            {
                question: `נחל ציון נשפך ל:`,
                ans1: `ים המלח`,
                ans2: `הים התיכון`,
                ans3: `מפרץ אילת `,
                ans4: `הירדן`,
                correctAns: `1`,
            },
            {
                question: `האלוף אריאל שרון היה:`,
                ans1: `אלוף פיקוד צפון`,
                ans2: `אלוף פיקוד דרום`,
                ans3: `אלוף פיקוד מרכז`,
                ans4: `ראש אמ"ן`,
                correctAns: `2`,
            },
            {
                question: `המבצע שעבר ליד קריית ההדרכה של היום מבין מבצעי מלחמת העצמאות:`,
                ans1: `מבצע חורב`,
                ans2: `מבצע דני`,
                ans3: `מצבע חירום`,
                ans4: `מבצע יואב`,
                correctAns: `1`,
            },
            {
                question: `המצבע בו נתפסה מה שהיום אילת במלחמת העצמאות:`,
                ans1: `מבצע יבוסי`,
                ans2: `מצבע הנגב`,
                ans3: `מבצע שיטה במדבר`,
                ans4: `מבצע עובדה`,
                correctAns: `4`,
            },
            {
                question: `דוד בן גוריון עבר להתגורר בשדה בוקר ב:`,
                ans1: `1942`,
                ans2: `1953`,
                ans3: `1957`,
                ans4: `1961`,
                correctAns: `2`,
            },
            {
                question: `חיל הטנ"א נקרא בעבר:`,
                ans1: `טכנולוגיה `,
                ans2: `אחזקה`,
                ans3: `רק"ם`,
                ans4: `חימוש`,
                correctAns: `4`,
            },
            {
                question: `חיל הלוגסטיקה נקראה בעבר:`,
                ans1: `חיל התחזוקה `,
                ans2: `חיל האפסנאות`,
                ans3: `חיל האוכל והאספקה`,
                ans4: `אף תשובה לא נכונה`,
                correctAns: `1`,
            },
            {
                question: `חיל התקשוב נקרא בעבר:`,
                ans1: `חיל התקשורת`,
                ans2: `חיל המורס`,
                ans3: `חיל הקשר`,
                ans4: `חיל התמסורת`,
                correctAns: `3`,
            },
            {
                question: `מי מהבה"דים הבאים לא עבר לקריית ההדרכה מצריפין:`,
                ans1: `בה"ד 13`,
                ans2: `בה"ד 20`,
                ans3: `בה"ד 6`,
                ans4: `בה"ד 10`,
                correctAns: `1`,
            },
            {
                question: `הבה"ד הראשון שעבר לקריית ההדרכה:`,
                ans1: `בה"ד 7`,
                ans2: `בה"ד 13`,
                ans3: `בה"ד החינוך`,
                ans4: `בה"ד 20`,
                correctAns: `2`,
            },
            {
                question: `מפקדת קריית ההדרכה עברה למשכנה הקבוע ב:`,
                ans1: `2015`,
                ans2: `2014`,
                ans3: `2013`,
                ans4: `2000`,
                correctAns: `1`,
            },
            {
                question: `קאמפ א-שרף ממערב לכביש 40 מול קריית ההדרכה היה:`,
                ans1: `מחנה חיפוש המים המרכזי בנגב`,
                ans2: `מחנה כורי גבס`,
                ans3: `בסיס מכ"ם`,
                ans4: `מחנה לסוללי הכבישים בנגב`,
                correctAns: `3`,
            },
            {
                question: `בסמוך לב"ש היה קיים ישוב בשם:`,
                ans1: `בית רותם`,
                ans2: `בית אשל`,
                ans3: `בית השיטה`,
                ans4: `בית זוגן`,
                correctAns: `2`,
            },
            {
                question: `שלושת המצפים בנגב קמו ב:`,
                ans1: `1943`,
                ans2: `1950`,
                ans3: `1948`,
                ans4: `1970`,
                correctAns: `1`,
            },
            {
                question: `באיזה שנה קמו 11 הנקודות בנגב:`,
                ans1: `1935`,
                ans2: `1946`,
                ans3: `1933`,
                ans4: `1900`,
                correctAns: `2`,
            },
            {
                question: `העולים הראשונים שהגיעו ב1951 לירוחם הגיעו מ:`,
                ans1: `מרוקו`,
                ans2: `עירק`,
                ans3: `הודו`,
                ans4: `רומניה`,
                correctAns: `4`,
            },
            {
                question: `מכתש רמון קרוי ע"ש:`,
                ans1: `אילן רמון`,
                ans2: `נחל רמון המנקז את המכתש`,
                ans3: `אסף רמון`,
                ans4: `פרי הרימון ועם הזמן הושמטה ה-י'`,
                correctAns: `2`,
            },
            {
                question: `מה המכנה המשותף לבסיס נבטים,רמון ועובדה:`,
                ans1: `הוקמו לאחר נסיגת צה"ל מסיני בהתאם להסכמי קאמפ דיויד`,
                ans2: `שלושתם מהווים את בסיס מערך התובלה בצה"ל`,
                ans3: `בסיסי חיל אוויר שהוקמו ע"י הגרמנים`,
                ans4: `שלושתם הועברו מבקעת הירח`,
                correctAns: `1`,
            },
            {
                question: `במפעלי אורון וצין מפקים:`,
                ans1: `גבס`,
                ans2: `חרסית`,
                ans3: `אספלסט`,
                ans4: `פופסט`,
                correctAns: `4`,
            },
            {
                question: `היכן מפיקים היום אשלג:`,
                ans1: `סדום`,
                ans2: `עין גדי`,
                ans3: `נאות הכיכר`,
                ans4: `קלי"ה`,
                correctAns: `1`,
            },
            {
                question: `חלק נכבד משמורות הטבע בנגב הן:`,
                ans1: `מחנות קבע`,
                ans2: `שטחי חקלאות`,
                ans3: `קיבוצים ומושבים`,
                ans4: `שטחי אש`,
                correctAns: `4`,
            },
            {
                question: `מרבית האוכלוסייה הבדואית בנגב מתגוררת ב:`,
                ans1: `7 עיירות וערים ויישובי הפזורה`,
                ans2: `פזורות ו4 עיירות`,
                ans3: `רק ביישובים בלתי מוכרים`,
                ans4: `אוהלים`,
                correctAns: `1`,
            },
            {
                question: `נחל חווארים נשפך ל:`,
                ans1: `נחל פארן`,
                ans2: `נחל הבשור`,
                ans3: `נחל חתירה`,
                ans4: `נחל צין`,
                correctAns: `4`,
            },
            {
                question: `המכתש הכי גדול בנגב הוא:`,
                ans1: `מכתש רמון `,
                ans2: `מכתש גדול`,
                ans3: `הכתש קטן`,
                ans4: `מכתש החול`,
                correctAns: `1`,
            },
            {
                question: `שמו החדש של המכתש הגדול:`,
                ans1: `מכתש החולות הצבעוניים`,
                ans2: `מכתש דימונה `,
                ans3: `מכתש הצבעים`,
                ans4: `מכתש ירוחם`,
                correctAns: `4`,
            },
            {
                question: `מי מהסרטים הבאים מזוהה עם ירוחם:`,
                ans1: `בדרון הדיונה`,
                ans2: `סוף העולם שמאלה`,
                ans3: `תפוחים מן המדבר`,
                ans4: `פונדק החולות`,
                correctAns: `2`,
            },
            {
                question: `הרכס אשר בשוליו ממוקמת קריית ההדרכה:`,
                ans1: `הר השחור`,
                ans2: `רכס דימונה`,
                ans3: `רכס חובב`,
                ans4: `רכס ירוחם`,
                correctAns: `1`,
            },
            {
                question: `חלמונית גדולה פורחת כל שנה בסתיו ליד:`,
                ans1: `מצפה רמון `,
                ans2: `שבטה`,
                ans3: `קריית ההדרכה`,
                ans4: `ירוחם`,
                correctAns: `4`,
            },
            {
                question: `בה"ד 1 הועבר לנגב ב1968 מ:`,
                ans1: `מחווה אלון `,
                ans2: `מחנה סירקין`,
                ans3: `מחנה תל השומר`,
                ans4: `ירוחם`,
                correctAns: `2`,
            },
            {
                question: `לפני שעבר לנגב בראשית שנות ה-90 היה ממוקם ביה"ס לנ"מ של צה"ל ב:`,
                ans1: `הרצליה`,
                ans2: `רעננה`,
                ans3: `הוד השרון`,
                ans4: `תל אביב (שדה דב)`,
                correctAns: `1`,
            },
            {
                question: `אירועי דרום אדום מתקיימים גם בשטח המועצה הבאה:`,
                ans1: `רמת הנגב`,
                ans2: `תמר`,
                ans3: `אשכול `,
                ans4: `חבל אילות`,
                correctAns: `3`,
            },
            {
                question: `מרבית עצי הזית ברמת הנגב מושקים באמצעות:`,
                ans1: `מים מותפלים`,
                ans2: `מי תהום מליחים`,
                ans3: `אגירת מי שטפונות`,
                ans4: `מי המוביל הארצי`,
                correctAns: `2`,
            },
            {
                question: `ממשית היא גם:`,
                ans1: `תחנת דרכים צלבנית`,
                ans2: `בירת ישראל בימי דוד`,
                ans3: `אכסנית ממלוכית`,
                ans4: `עיר בזנטית`,
                correctAns: `4`,
            },
            {
                question: `עין צין ועין עקרבים מזוהמים בשפכי:`,
                ans1: `אשלג`,
                ans2: `ירוחם ודימונה`,
                ans3: `פוספט`,
                ans4: `אבן חול`,
                correctAns: `3`,
            },
            {
                question: `מעלה פלמ"ח בנחל חתירה נקרא גם:`,
                ans1: `נקב אל פלמח`,
                ans2: `נקב אל יהוד`,
                ans3: `נקב אל פינג'אן`,
                ans4: `נקב אל כפייה`,
                correctAns: `2`,
            },
            {
                question: `הפלמחניקים כינו את הר צין כ:`,
                ans1: `הר ההר`,
                ans2: `ההר הבודד`,
                ans3: `ההר המזמר`,
                ans4: `הר האלוקים`,
                correctAns: `1`,
            },
            {
                question: `יער שוקדה מפורסם בעיקר בזכות:`,
                ans1: `פריחת האירוסים`,
                ans2: `המפגש בין כיפה אדומה והזאב`,
                ans3: `פריחת הכלניות`,
                ans4: `פריחת הנרקיסים`,
                correctAns: `3`,
            },
            {
                question: `סביב המגדל הטרמו-סולארי באשלים יש כ:`,
                ans1: `10,000 מראות`,
                ans2: `100 מראות`,
                ans3: `חצי מילון מראות`,
                ans4: `50,000 מראות`,
                correctAns: `4`,
            },
            {
                question: `קיבוץ משאבי שדה נקרא בראשית ימיו:`,
                ans1: `דרומה`,
                ans2: `נגבה`,
                ans3: `ציונה`,
                ans4: `חלוצה`,
                correctAns: `4`,
            },
            {
                question: `המעלה שהבריטים פרצו בחיבור בין הנגב לערבה:`,
                ans1: `מעלה הנחשים`,
                ans2: `מעלה החרקים`,
                ans3: `מעלה העקרבים`,
                ans4: `מעלה הקרציות`,
                correctAns: `4`,
            },
            // {
            //     question: ``,
            //     ans1: ``,
            //     ans2: ``,
            //     ans3: ``,
            //     ans4: ``,
            //     correctAns: ``,
            // },
        ],
        "missions": {
            "individuals": [
                `עליך לשיר את המנון קריית ההדרכה אשר נכתב ע"י אורי אזולאי והולחן ע"י אפי נצר.`,
                `עליך לאסוף חיילים אקראיים ולבנות בעזרתם מפה אנושית של ישראל (תוך 3 דקות).`,
                `עליך להביא ציטוט מפיו של בן גוריון על הנגב.`,
                `עליך להביא ציטוט של בן גוריון על צה"ל כצבא העם.`,
                `עליך לשיר שיר שמוזכר בו הנגב או הדרום.`,
                `עליך למנות בשם של עיר, מושב, קיבוץ, ויישוב קהילתי בדואי בנגב.`,
                `עליך תוך 20 שניות לומר את כל הבה"דים שנמצאים בקריית ההדרכה.`,
                `עליך לעשות 'אוס' של 5 שורות על הבה"ד שלכם (כפי שנהוג בחלק מחדרי האוכל הצבאיים בערבי שבת).`,
                `עליך למנות לפחות 3 שמות מפקדי בה"דים בקריית ההדרכה.`,
                `עליך להצביע מיידית לכיוונה של גבעת אריאל שרון.`,
            ],
            "groups": [
                `עליכם לשיר את המנון קריית ההדרכה אשר נכתב ע"י אורי אזולאי והולחן ע"י אפי נצר.`,
                `עליכם לשרטט אנושית את מפת ישראל.`,
                `עליכם להביא 3 ציטוטים מפיו של בן גוריון על הנגב.`,
                `פיתחו שעון! - חצי דקה. עליכם לציין 3 שירים שמוזכרים בהם הנגב או הדרום.`,
                `פיתחו שעון - דקה אחת. עליכם למנות 6 ישובים בנגב.`,
                `פיתחו שעון - 10 שניות. עליכם לומר את כל הבה"דים שנמצאים בקריית ההדרכה.`,
                `על כל חברי הקבוצה לעשות 'אוס' על הבה"ד (כפי שנהוג בחלק מחדרי האוכל הצבאיים בערבי שבת).`,
                `עליכם למנות לפחות 3 שמות של מפקדי בה"דים בקריית ההדרכה`,
                `עליכם להצביע מיידית ובתאום מלא לכיוונה של גבעת אריאל שרון.`
            ]
        },
        "newInfo": [
            `אירוס טוביה הפורח בנגב קרוי ע"ש טוביה קושניר אשר נפל בקרב הל"ה במלחמת יום העצמאות.`,
            `הנגב מהווה כ60% משטחה של מדינת ישראל.`,
            `ב"ג בחזונו ראה כחמישה מילון יהודים מתגוררים בנגב אשר יעסקו בעיקר בתעשיית המינרלים ובחקלאות מדברית.`,
            `בקיבות רביבים בשנותיו הראשונות הוקם מפעל לשימורי דגים אשר נדוגו במפרץ אילת.`,
            `לחלק נכבד מעולי ארצות האיסלאם אשר יושבו בעיירות הפיתוח ומושבי העוליםםבנגב הובטח שהם יישבו בערים הגדולות.`,
            `אחד המאפיינים של אקלים מדברי הוא פער גדול בין טמפ' היום לטמפ' הלילה- משרעת טמפרטורות.`,
            `לקראת הקמת קריית ההדרכה טענו המתכננים שערוץ הנחל ליד חדר האוכל יזרום אחת לכמה שנים, רק בחורף 2020-2021 הוא זרם פעמיים....`,
            `חברת מבט לנגב הוקמה במיוחד עבור הקמת ואחזקת קריית ההדרכה.`,
            `קריית ההדרכה הייתה אמורה להקרא במקור ע"ש דוד בן גוריון, לאחר מותו של אריאל שרון הוחלט לקרוא את את המחנה על שמו לאור הערכה על החלטתו למקם את קריית ההדרכה במקומה הנוכחי.`,
            `ב2004 התנהל קמפיין ציבורי נגד הקמת קריית ההדרכה במקומה הנוכחי נוכח הקרבה לאזור התתעשייה של רמת חובב שהיה ידוע במוקדי הזיהום שלו.`,
            `בעקבות הלחץ הציבורי כנגד הקמת קריית ההדרכה בסמיכות לרמת חובב הושקעו סכומים גבוהים בשיפור איכות הסביבה במפעלים.`,
            `בעקבות הקמת קריית ההדרכה הוכפלו הנתיבים בכביש 40 מדרום לבאר שבע ועד לצומת הכניסה למחנה.`,
            `באגם ירוחם קיננה בשנים האחרונות ציפור בשם פופירייה שנכחדה מנופי הארץ לאחר ייבוש החולה.`,
            `קיבוץ חצרים אשר עלה לקרקע כחלק מ 11 הנקודות במוצאי יום כיפורים 1946 נחשב לחלוץ עולמי בפתרון השקיה באמצעות טפטפות.`,
            `לאונברסיטת ב"ג יש 2 קמפוסים מחוץ לבאר שבע: קמפוס האוניברסיטה באילת והמכונים לחקר המדבר בשדה בוקר.`,
            `המדרשה בשדה בוקר, לימים מדרשת בן גוריון היא פרי חזונו של דוד בן גוריון שראה בעיני רוחו את המקום כאוקספורד ויבנה בנגב.`,
            `עפ"י נתוני הרשות לקידום האוכלוסייה הבדואית בנגב רק כ2% מהבדואים בנגב מעורבים בפלילים.`,
            `מושבות הנשרים המקננות היציבות ביותר בארץ נמצאות בנגב ולא בגולן כפי שהיה נהוג בעבר.`,
            `שיטפונות בנחלי הנגב יכולים לזרום בעוצמה כה גדולה עד כדי הפיכת סמיטריילר כפול.`,
            `מטבח קריית ההדרכה מופעל ע"י חברת לי-בר ערוך לבישול של 30,000 מנות ביום.`,
            `אוניברסיטת בן גוריון בנגב היא השלישית בגודלה בישראל.`,
            `בשנים הקרובות מתוכננות לקום בנגב קריות המודיעין בסמוך לצומת שוקת והתקשוב בבאר שבע בסמוך לאונברסיטת בן גוריון.`,
            `קריית ההדרכה עברה לשיוך מוניציפלי לירוחם מרמת הנגב כחלק מתפיסה רחבה של צדק חלוקתי במוקדי הכנסה בארנונה בין המועצות השונות.`,
            `ממפעלי ים המלח שבסדום יוצא מסוע ענק החוצה את מצוק העתקים ומסיע אשלג אל מסוף הרכבת במישור רותם.`,
            `לקריית ההדרכה תוכנן קו רכבת והמשך של כביש 6 אך שני פרוקטים אלו מושהים בנתיים.`,
            `מפקדי הבה"דים בקריית ההדרכה כפופים למפקדי החילות הראשיים.`,
            `בירוחם הוקם מלון חברתי אשר ממומן בין האשר באמצעות תרומות ורווחיו אמורים לחזור כשירותים קהילתיים לתושבי המועצה.`,
            `לנרקיס המוכר 'כמלך הביצה' יש מספר ריכוזי פריחה מרשימים בנגב כמו בנחל דימונה, נחל מסעד ונחל חצץ.`,
            `מכתש רמון הוכרז כשמורה עולמית לצפייה בכוכבים נוכח צמצום זיהום האור באיזור.`,
            `ברמת הנגב הוקמו 23 חוות בודדים ביוזמת ראש המועצה הקודם שמוליק ריפמן ז"ל אשר ראה בחזונו את החוות כמשלבות בין חקלאות ותיירות מדברית.`,
            `בקריית ההדרכה נסלל שביל מטיילים באורך של כ- 2 ק"מ המקנה היכרות עם הטבע,נוף,היסטוריה וארכיאולוגיה של האזור.`,
            `בחולות נחל סכר הסמוכים לבסיס קיימים מספר ריכוזי פריחה מרשימים של אירוס הנגב.`,
            `באולם המרכזי של קריית ההדרכה בו 800 מושבים ניתן לעלות את מרבית ההצגות הרפרטואריות אשר מועלות בארץ.`,
            `בבה"דים בקריית ההדרכה יש מספר מתחמי מדמים (סימולטור) יעודיים כמו מדמה אירוע רב נפגעים בבה"ד 10, מדמה מעצר בבה"ד 13 ומדמה נהיגה בבה"ד 6.`,
            `בקריית ההדרכה קיימת שלוחה של יד-ושם המופעלת ע"י צוות ייעודי שלהם למען הנחלת זיכרון השואה.`,
            `בקריית ההדרכה אמור להחנך לקראת 2022 מרכז חדשני להחלת מורשת צה"ל וערכיו.`,
            `הגישה הנהוגה בקריית ההדרכה בנוגע לרצף וקיצור ההכשרות באמצעות ביטול מרבית התורנויות של החיילים הינה פורצת דרך בצה"ל.`,
            `נחל פארן הזורם בנגב הינו הנחל הארוך ביותר בישראל.`,
            `כל המכתשים בנגב נוצרו כתוצאה מתהליכי בלייה במסלע.`,
            `בן גוריון דיבר על הקמת עיר הבה"דים בנגב לראשונה כבר ב-1956.`,
        ]
    }
};


//
//
//
// GAME MAP:
// 
// E = empty space
// NI = new info 
// BH = black hole
// ST + number = snake and the end of his tail + his serial number (example: ST2)
// SH + number = snake head + his serial number (example: SH2)
// LB + number = ladder bottom (example: LB4)
// LT + number = ladder top (example: LT4)
const MAP = [
    /*start 0*/"START", /*1*/"E", /*2*/"E", /*3*/"ST1", /*4*/"ST2",/*5*/"LB1",/*6*/"ST3",/*7*/"ST4", /*8*/"LB2",/*9*/"E", /*10*/"NI",
    /*11*/"E", /*12*/"LB3", /*13*/"E", /*14*/"LT2",/*15*/"E",/*16*/"LB4",/*17*/"NI", /*18*/"SH3",/*19*/"SH2", /*20*/"ST5",
    /*21*/"E", /*22*/"NI", /*23*/"E", /*24*/"SH1",/*25*/"SH5",/*26*/"LT1",/*27*/"ST6", /*28*/"BH",/*29*/"LT4", /*30*/"E",
    /*31*/"SH4", /*32*/"LT3", /*33*/"E", /*34*/"ST7",/*35*/"ST8",/*36*/"E",/*37*/"NI", /*38*/"LB5",/*39*/"E", /*40*/"ST9",
    /*41*/"LB6", /*42*/"NI", /*43*/"ST10", /*44*/"ST11",/*45*/"LB7",/*46*/"SH10",/*47*/"E", /*48*/"BH",/*49*/"ST12", /*50*/"E",
    /*51*/"LT5", /*52*/"LB8", /*53*/"SH8", /*54*/"E",/*55*/"SH7",/*56*/"SH6",/*57*/"NI", /*58*/"LT8",/*59*/"BH", /*60*/"SH9",
    /*61*/"E", /*62*/"NI", /*63*/"SH12", /*64*/"LT6",/*65*/"LT7",/*66*/"E",/*67*/"E", /*68*/"ST13",/*69*/"ST14", /*70*/"NI",
    /*71*/"LB9", /*72*/"SB15", /*73*/"LB10", /*74*/"SH11",/*75*/"NI",/*76*/"ST16",/*77*/"BH", /*78*/"E",/*79*/"LB11", /*80*/"SH16",
    /*81*/"E", /*82*/"LT10", /*83*/"E", /*84*/"ST17",/*85*/"E",/*86*/"SH14",/*87*/"LB12", /*88*/"SH13",/*89*/"E", /*90*/"NI",
    /*91*/"LT12", /*92*/"LT9", /*93*/"E", /*94*/"SH17",/*95*/"NI",/*96*/"SH15",/*97*/"LT11", /*98*/"E",/*99*/"E",
    /*100*/"END", /*101*/"END",/*102*/"END",/*103*/"END",/*104*/"END",/*105*/"END"
];


// מפת הבסיס בלי כלום עליה
// const MAP = [
//     /*start 0*/"START", /*1*/"E", /*2*/"E", /*3*/"E", /*4*/"E",/*5*/"E",/*6*/"E",/*7*/"E", /*8*/"E",/*9*/"E", /*10*/"E",
//     /*11*/"E", /*12*/"E", /*13*/"E", /*14*/"E",/*15*/"E",/*16*/"E",/*17*/"E", /*18*/"E",/*19*/"E", /*20*/"E",
//     /*21*/"E", /*22*/"E", /*23*/"E", /*24*/"E",/*25*/"E",/*26*/"E",/*27*/"E", /*28*/"E",/*29*/"E", /*30*/"E",
//     /*31*/"E", /*32*/"E", /*33*/"E", /*34*/"E",/*35*/"E",/*36*/"E",/*37*/"E", /*38*/"E",/*39*/"E", /*40*/"E",
//     /*41*/"E", /*42*/"E", /*43*/"E", /*44*/"E",/*45*/"E",/*46*/"E",/*47*/"E", /*48*/"E",/*49*/"E", /*50*/"E",
//     /*51*/"E", /*52*/"E", /*53*/"E", /*54*/"E",/*55*/"E",/*56*/"E",/*57*/"E", /*58*/"E",/*59*/"E", /*60*/"E",
//     /*61*/"E", /*62*/"E", /*63*/"E", /*64*/"E",/*65*/"E",/*66*/"E",/*67*/"E", /*68*/"E",/*69*/"E", /*70*/"E",
//     /*71*/"E", /*72*/"E", /*73*/"E", /*74*/"E",/*75*/"E",/*76*/"E",/*77*/"E", /*78*/"E",/*79*/"E", /*80*/"E",
//     /*81*/"E", /*82*/"E", /*83*/"E", /*84*/"E",/*85*/"E",/*86*/"E",/*87*/"E", /*88*/"E",/*89*/"E", /*90*/"E",
//     /*91*/"E", /*92*/"E", /*93*/"E", /*94*/"E",/*95*/"E",/*96*/"E",/*97*/"E", /*98*/"E",/*99*/"E",
//     /*100*/"END", /*101*/"END",/*102*/"END",/*103*/"END",/*104*/"END",/*105*/"END"
// ];
