#pragma strict

var text = "";

function Start () {
	gameObject.guiText.text = UnityArabicSupport.ArabicFixer.Fix(text);
}

function Update () {

}