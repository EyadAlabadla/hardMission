#pragma strict

var walking:AudioSource;

function Start () {
walking.Play();
}

function Update () {

if(Input.GetKeyDown("w"))
{
	walking.Play();
}else
{
	walking.Stop();
}

}