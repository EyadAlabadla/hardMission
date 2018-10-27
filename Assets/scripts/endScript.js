#pragma strict

var cam:Transform;
var sound:AudioSource;
private var lower:boolean = false;


function Start () {

yield WaitForSeconds(2);
animation.Play();
yield WaitForSeconds(2);
cam.parent = null;
lower = true;
yield;
transform.GetComponent(endGUI).enabled = true;
}

function Update () {
if(lower)
{
	sound.volume -= Time.deltaTime;
}

}