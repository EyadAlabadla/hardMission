#pragma strict

var thunder:AudioSource;
var thunderTime:float;

function Start () {

thunderTime = Random.Range(30,60);

}

function FixedUpdate () {

thunderTime -= Time.deltaTime;
if(thunderTime < 0)
{
	thunder.Play();
	thunderTime = Random.Range(30,60);
}

}