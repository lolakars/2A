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
  

// Subject relatives

[["subj_rel", 1], "AcceptabilityJudgment", {s: "They knew the athlete who finally beat the runner last year."}],
[["subj_rel", 2], "AcceptabilityJudgment", {s: "They investigated the witness who was clearly pointing to the murderer during the trial."}],
[["subj_rel", 3], "AcceptabilityJudgment", {s: "They applauded the actor who brought the director to the Oscars that year."}],
[["subj_rel", 4], "AcceptabilityJudgment", {s: "They censored the program that severely denounced the politician through the radio."}],

// Object relatives

[["obj_rel", 1], "AcceptabilityJudgment", {s: "They knew the athlete who finally beat the runner last year."}],
[["obj_rel", 2], "AcceptabilityJudgment", {s: "They investigated the witness who was clearly pointing to the murderer during the trial."}],
[["obj_rel", 3], "AcceptabilityJudgment", {s: "They applauded the actor who brought the director to the Oscars that year."}],
[["obj_rel", 4], "AcceptabilityJudgment", {s: "They censored the program that the politician strongly denounced through the radio."}],

// Fillers

["filler_gram", "AcceptabilityJudgment", {s: "The fruit vendor has asked the client if she needs a plastic bag."}],
["filler_gram", "AcceptabilityJudgment", {s: "They saw that the lawyer had deliberately manipulated the evidence to win the case"}],
["filler_ungram", "AcceptabilityJudgment", {s: "The explorer was watching out for a wild animal out of the jungle."}],
["filler_ungram", "AcceptabilityJudgment", {s: "They denounced that the footballer had been unfairly penalized in the final."}],

]; //
