#pragma strict


var style:GUIStyle;




var starting:boolean = false;

function Awake()
{
	
}

function Start () {
}


function Update () {


}

function OnGUI()
{
	
	GUI.Label(Rect(770,60,1,1),UnityArabicSupport.ArabicFixer.Fix("خط الحياة : "),style);
}