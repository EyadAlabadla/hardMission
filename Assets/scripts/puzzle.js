#pragma strict

private var hitRight:RaycastHit;
private var hitLeft:RaycastHit;
private var hitUp:RaycastHit;
private var hitDown:RaycastHit;

function Start () {

}

function Update () {

Physics.Raycast(transform.position,-Vector3.right,hitRight,7);
Physics.Raycast(transform.position,Vector3.right,hitLeft,7);
Physics.Raycast(transform.position,Vector3.up,hitUp,7);
Physics.Raycast(transform.position,-Vector3.up,hitDown,7);

}

function OnMouseDown()
{
	if(hitRight.transform == null)
	{
		transform.position.x -= 10;
	}
	if(hitLeft.transform == null)
	{
		transform.position.x += 10;
	}
	if(hitUp.transform == null)
	{
		transform.position.y += 10;
	}
	if(hitDown.transform == null)
	{
		transform.position.y -= 10;
	}
}