var shuffleSequence = seq ("intro", anyOf ("practice"), shuffle (randomize (anyOf ("adj_tr", "adj_in", "sr_tr", "sr_in")), randomize ("filler")));

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

["practice", "AcceptabilityJudgment", {s: "Luis's house is far from the city center."}],
["practice", "AcceptabilityJudgment", {s: "Neighbors saw that the glass in the door was broken."}],
  
    [["q1",[200,2]], "AcceptabilityJudgment", {s: {html: "<b>Which struggling students</b> did the teacher encourage to succeed without treating their friends like idiots?"}}],
    [["q2",[200,2]], "AcceptabilityJudgment", {s: {html: "<b>Which struggling students</b> did the teacher encourage their friends to succeed without treating like idiots?"}}],  
  

// experimental sentences

[["subj_rel", 1], "AcceptabilityJudgment", {s: "They knew the athlete who finally beat the runner last year."}],
[["subj_rel", 2], "AcceptabilityJudgment", {s: "They investigated the witness who was clearly pointing to the murderer during the trial."}],
[["subj_rel", 3], "AcceptabilityJudgment", {s: "They applauded the actor who brought the director to the Oscars that year."}],
[["subj_rel", 4], "AcceptabilityJudgment", {s: "They censored the program that severely denounced the politician through the radio."}],


// Fillers

["filler", "DashedSentence", {s: "בגלל_שהתינוקות זחלו כשעה בחדר הם התעייפו .לקראת_הצהריים"},"Form", {s: {html:"<p>למה התינוקות התעייפו?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],  
["filler", "DashedSentence", {s: "אחרי_שהקריינית טעתה במהלך החדשות היא נאלצה .להתנצל"},"Form", {s: {html:"<p>"למה הקריינית נאלצה להתנצל?"</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],
["filler", "DashedSentence", {s: "אחרי_שהסטודנטים השתתפו בשלושה_סמינרים מתקדמים הם התבקשו לתת .משוב"},"Form", {s: {html:"<p>מה הסטודנטים התבקשו לתת?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],
["filler", "DashedSentence", {s: "אחרי_שהשופטת קראה את_פסק_הדין המחמיר הנאשם התעלף בבית .המשפט"},"Form", {s: {html:"<p>מה השופטת קראה?</p> <p> <input type="text" class="obligatory" size="100"></p> <p> <br> </p>"}}],

]; //
