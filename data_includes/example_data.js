var shuffleSequence = seq ("intro", anyOf ("practice"), shuffle (randomize (anyOf ("a", "b", "c", "d")), randomize ("filler")));

var practiceItemTypes = ["prac"];

var sendingResultsMessage = "Results are being sent to the server.";
var completionMessage = "The results have been sent to the server. Thank you very much!";
var progressBarText = "Progress bar";
var pageTitle = "Experiment";

var defaults = [
   "DashedSentence", {
        mode: "self-paced reading"
    },
    "FlashSentence", {
        timeout: 1500,
    },
      instructions: "ENTER יש לכתוב תשובה לשאלה וללחוץ על המקש",
    },
//"FlashSentence" here is an open question that requires the answer to be written by the participant. What will be the command for the question to appear on the screen during writing the answer?
  "Form", {
      hideProgressBar: true,
      continueOnReturn: true,
      saveReactionTime: true,
    },
];

var items = [

["intro", "Form", {
    html: {include: "example_intro.html"},
    validators: {
        age: function (s) {if (s.match (/ ^ \ d + $ /)) return true; else return "Wrong value for \ u2018edad \ u2019"; }
        }
    }],

// Practice

["practice", "DashedSentence", {s: "Luis's house is far from the city center."}],
["practice", "DashedSentence", {s: "Neighbors saw that the glass in the door was broken."}],
  
  
// experimental sentences

[["a", [1,1]], "DashedSentence", {s: "אחרי_שקבוצת_הכדורגל שיחקה שני_משחקים נוספים בוטלו על_ידי .ההנהלה"},"Form", {s: {html:"<p>מה קבוצת_הכדורגל שיחקה?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],  
[["b", [2,1]], "DashedSentence", {s: "אחרי_שקבוצת_הכדורגל הגיעה שני_משחקים נוספים בוטלו על_ידי .ההנהלה"},"Form", {s: {html:"<p>למה קבוצת_הכדורגל הגיעה?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],  
[["c", [3,1]], "DashedSentence", {s: "המנהלים קבעו לקבוצת_הכדורגל ששיחקה שני_משחקים נוספים בשבוע .הקרוב"},"Form", {s: {html:"<p>מה קבוצת_הכדורגל שיחקה?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],  
[["d", [4,1]], "DashedSentence", {s: "המנהלים קבעו לקבוצת_הכדורגל שהגיעה שני_משחקים נוספים בשבוע .הקרוב"},"Form", {s: {html:"<p>למה קבוצת_הכדורגל הגיעה?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],  
  
[["a", [1,2]], "DashedSentence", {s: "בגלל_שהתינוקות זחלו כשעה בחדר הם התעייפו .לקראת_הצהריים"},"Form", {s: {html:"<p>למה התינוקות התעייפו?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],  
[["b", [2,2]], "DashedSentence", {s: "בגלל_שהתינוקות זחלו כשעה בחדר הם התעייפו .לקראת_הצהריים"},"Form", {s: {html:"<p>למה התינוקות התעייפו?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],  
[["c", [3,2]], "DashedSentence", {s: "בגלל_שהתינוקות זחלו כשעה בחדר הם התעייפו .לקראת_הצהריים"},"Form", {s: {html:"<p>למה התינוקות התעייפו?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],  
[["d", [4,2]], "DashedSentence", {s: "בגלל_שהתינוקות זחלו כשעה בחדר הם התעייפו .לקראת_הצהריים"},"Form", {s: {html:"<p>למה התינוקות התעייפו?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],  
  
// Fillers

["filler", "DashedSentence", {s: "בגלל_שהתינוקות זחלו כשעה בחדר הם התעייפו .לקראת_הצהריים"},"Form", {s: {html:"<p>למה התינוקות התעייפו?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],  
["filler", "DashedSentence", {s: "אחרי_שהקריינית טעתה במהלך החדשות היא נאלצה .להתנצל"},"Form", {s: {html:"<p>"למה הקריינית נאלצה להתנצל?"</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],
["filler", "DashedSentence", {s: "אחרי_שהסטודנטים השתתפו בשלושה_סמינרים מתקדמים הם התבקשו לתת .משוב"},"Form", {s: {html:"<p>מה הסטודנטים התבקשו לתת?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],
["filler", "DashedSentence", {s: "אחרי_שהשופטת קראה את_פסק_הדין המחמיר הנאשם התעלף בבית .המשפט"},"Form", {s: {html:"<p>מה השופטת קראה?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],

]; //
