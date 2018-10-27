#pragma strict

var takeOff:AudioSource;
var engine:AudioSource;
var explosion:AudioSource;
var tako:Texture2D;
var showName:boolean = false;
var style:GUIStyle;
var style1:GUIStyle;
var style2:GUIStyle;

var gui:boolean = true;

function Start () {

}

function Update () {

}

function OnGUI()
{
	if(gui)
	{
		GUI.Label(Rect(780,20,1,1),UnityArabicSupport.ArabicFixer.Fix("زنقة تاكو الألعاب ربيع 2013         المطور : إياد العبادلة" + "        eyad_alabadla@outlook.com"),style);
		GUI.Label(Rect(780,50,1,1),UnityArabicSupport.ArabicFixer.Fix("كافة الأصوات المستخدمة تم تنزيلها من موقع         " + "soundbible.com"),style1);
		GUI.Label(Rect(780,70,1,1),UnityArabicSupport.ArabicFixer.Fix("المجسمات ثلاثية الأبعاد تم تنزيلها من موقع           " + "turbosquid.com" + "        أو من       " + "Unity Asset Store"),style1);
		if(GUI.Button(Rect(350,225,100,50),UnityArabicSupport.ArabicFixer.Fix("إبدأ اللعبة")))starting();
		GUI.DrawTexture(Rect(511,307,279,183),tako);
	}
	if(showName)
	{
		GUI.Label(Rect(400,50,1,1),UnityArabicSupport.ArabicFixer.Fix("المهمة الصعبة"),style2);
	}
}

function starting()
{
	gui = false;
	GameObject.Find("firstplane").animation.Play();
	takeOff.Play();
	yield WaitForSeconds(6);
	animation.Play("one-two");
	yield WaitForSeconds(0.5);
	engine.Play();
	yield WaitForSeconds(6);
	engine.Stop();
	explosion.Play();
	animation.Play("two-three");
	yield WaitForSeconds(5);
	showName = true;
	yield WaitForSeconds(5);
	Application.LoadLevel("mission");
}