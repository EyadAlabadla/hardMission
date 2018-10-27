#pragma strict

public var text:String;
public var text1:String;
var style:GUIStyle;

function Start () {

text = "حاول ترتيب القطع بالشكل الصحيح لتربط جميع أجزاء الطائرة مع بعضهم بإمكانك دائما استخدام زر اعادة الترتيب";
text1 = "أو زر حل إذا تعبت من المحاولات المتكررة";
}

function Update () {

}

function OnGUI()
{
	GUI.Label(Rect(770,15,1,1),UnityArabicSupport.ArabicFixer.Fix(text),style);
	GUI.Label(Rect(770,35,1,1),UnityArabicSupport.ArabicFixer.Fix(text1),style);
}