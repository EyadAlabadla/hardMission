#pragma strict

var style:GUIStyle;
var text:String;
var text1:String;
var text2:String;

function Start () {

text = "لقد تمت المهمة بنجاح";
text1 = "اشكركم على لعب اللعبة وارجو ان تكونوا قد استمتعتم";
text2 = "المطور : إياد العبادلة";

}

function Update () {

}

function OnGUI()
{
	GUI.Label(Rect(400,100,1,1),UnityArabicSupport.ArabicFixer.Fix(text),style);
	GUI.Label(Rect(400,200,1,1),UnityArabicSupport.ArabicFixer.Fix(text1),style);
	GUI.Label(Rect(400,300,1,1),UnityArabicSupport.ArabicFixer.Fix(text2),style);
}