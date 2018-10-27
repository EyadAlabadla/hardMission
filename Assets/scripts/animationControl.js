#pragma strict

var animator:Transform;

private var idle:String = "soldierIdle";
private var goBack:String = "soldierWalk";
private var goForward:String = "soldierRun";
private var run:String = "soldierSprint";
private var goRight:String = "soldierSpinRight";
private var goLeft:String = "soldierSpinLeft";

function Start () {

}

function Update ()
{
	if(Input.GetAxis("Vertical") == 0 && Input.GetAxis("Horizontal") == 0)
	{
		animator.animation.CrossFade(idle);
	}
	
	if(Input.GetAxis("Vertical") > 0)
	{
		animator.animation.CrossFade(goForward);
	}
	
	if(Input.GetAxis("Vertical") < 0)
	{
		animator.animation.CrossFade(goBack);
	}
	
	if(Input.GetAxis("Horizontal") > 0)
	{
		animator.animation.CrossFade(goRight);
	}	
	if(Input.GetAxis("Horizontal") < 0)
	{
		animator.animation.CrossFade(goLeft);
	}

}