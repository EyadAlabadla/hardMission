#pragma strict

var red:Material;
var black:Material;
var body:Transform;
var tail:Transform;
var wheel1red:Transform;
var wheel1black:Transform;
var wheel2red:Transform;
var wheel2black:Transform;
var seat:Transform;
var wing1:Transform;
var wing2:Transform;
var fan:Transform;
private var script:general;

function Awake ()
{
	script = GameObject.Find("player").GetComponent(general);
}

function Update ()
{
	if(script.getWing)
	{
		wing1.renderer.material = red;
		wing2.renderer.material = red;
	}
	
	if(script.getFan)
	{
		fan.renderer.material = red;
	}
	
	if(script.getBody)
	{
		body.renderer.material = red;
		tail.renderer.material = red;
		seat.renderer.material = red;
	}
	
	if(script.getWheels)
	{
		wheel1red.renderer.material = red;
		wheel1black.renderer.material = black;
		wheel2red.renderer.material = red;
		wheel2black.renderer.material = black;
	}
}