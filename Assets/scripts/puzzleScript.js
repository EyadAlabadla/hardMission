#pragma strict

var p1:Transform;
var p2:Transform;
var p3:Transform;
var p4:Transform;
var p5:Transform;
var p6:Transform;
var p7:Transform;
var p8:Transform;
var p9:Transform;
var p10:Transform;
var p11:Transform;
var p12:Transform;
var p13:Transform;
var p14:Transform;
var p15:Transform;


private var s1:Vector3 = Vector3(15,15,-9.98);
private var s2:Vector3 = Vector3(5,15,-9.98);
private var s3:Vector3 = Vector3(-5,15,-9.98);
private var s4:Vector3 = Vector3(-15,15,-9.98);
private var s5:Vector3 = Vector3(15,5,-9.98);
private var s6:Vector3 = Vector3(5,5,-9.98);
private var s7:Vector3 = Vector3(-5,5,-9.98);
private var s8:Vector3 = Vector3(-15,5,-9.98);
private var s9:Vector3 = Vector3(15,-5,-9.98);
private var s10:Vector3 = Vector3(5,-5,-9.98);
private var s11:Vector3 = Vector3(-5,-5,-9.98);
private var s12:Vector3 = Vector3(-15,-5,-9.98);
private var s13:Vector3 = Vector3(15,-15,-9.98);
private var s14:Vector3 = Vector3(5,-15,-9.98);
private var s15:Vector3 = Vector3(-5,-15,-9.98);

private var f1:Vector3;
private var f2:Vector3;
private var f3:Vector3;
private var f4:Vector3;
private var f5:Vector3;
private var f6:Vector3;
private var f7:Vector3;
private var f8:Vector3;
private var f9:Vector3;
private var f10:Vector3;
private var f11:Vector3;
private var f12:Vector3;
private var f13:Vector3;
private var f14:Vector3;
private var f15:Vector3;

function Start () {

Screen.lockCursor = false;

f1 = p1.position;
f2 = p2.position;
f3 = p3.position;
f4 = p4.position;
f5 = p5.position;
f6 = p6.position;
f7 = p7.position;
f8 = p8.position;
f9 = p9.position;
f10 = p10.position;
f11 = p11.position;
f12 = p12.position;
f13 = p13.position;
f14 = p14.position;
f15 = p15.position;

}

function Update () {

if(p1.position == s1 &&
p2.position == s2 &&
p3.position == s3 &&
p4.position == s4 &&
p5.position == s5 &&
p6.position == s6 &&
p7.position == s7 &&
p8.position == s8 &&
p9.position == s9 &&
p10.position == s10 &&
p11.position == s11 &&
p12.position == s12 &&
p13.position == s13 &&
p14.position == s14 &&
p15.position == s15)
{
	win();
}

}

function OnGUI()
{
	if(GUI.Button(Rect(450,460,100,30),UnityArabicSupport.ArabicFixer.Fix("إعادة الترتيب")))re();
	if(GUI.Button(Rect(250,460,100,30),UnityArabicSupport.ArabicFixer.Fix("حل")))solve();
}

function re()
{
	p1.position = f1;
	p2.position = f2;
	p3.position = f3;
	p4.position = f4;
	p5.position = f5;
	p6.position = f6;
	p7.position = f7;
	p8.position = f8;
	p9.position = f9;
	p10.position = f10;
	p11.position = f11;
	p12.position = f12;
	p13.position = f13;
	p14.position = f14;
	p15.position = f15;
}
function solve()
{
	p1.position = s1;
	p2.position = s2;
	p3.position = s3;
	p4.position = s4;
	p5.position = s5;
	p6.position = s6;
	p7.position = s7;
	p8.position = s8;
	p9.position = s9;
	p10.position = s10;
	p11.position = s11;
	p12.position = s12;
	p13.position = s13;
	p14.position = s14;
	p15.position = s15;
}
function win()
{
	p1.GetComponent(puzzle).enabled = false;
	p2.GetComponent(puzzle).enabled = false;
	p3.GetComponent(puzzle).enabled = false;
	p4.GetComponent(puzzle).enabled = false;
	p5.GetComponent(puzzle).enabled = false;
	p6.GetComponent(puzzle).enabled = false;
	p7.GetComponent(puzzle).enabled = false;
	p8.GetComponent(puzzle).enabled = false;
	p9.GetComponent(puzzle).enabled = false;
	p10.GetComponent(puzzle).enabled = false;
	p11.GetComponent(puzzle).enabled = false;
	p12.GetComponent(puzzle).enabled = false;
	p13.GetComponent(puzzle).enabled = false;
	p14.GetComponent(puzzle).enabled = false;
	p15.GetComponent(puzzle).enabled = false;
	yield WaitForSeconds(1);
	Application.LoadLevel("End");
}