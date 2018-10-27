#pragma strict

var life:float = 100;
var player:Transform;
private var dis:float;
private var hit:RaycastHit;
private var die:boolean = false;
private var timer:float = 7;
private var fx:float = 0;

function Start () {

animation["walk"].speed = 0.3;
animation["attack_Melee"].speed = 0.3;
player = GameObject.Find("player").transform;

}
function Update () {

timer -= Time.deltaTime * 3;

if(timer < 0)
{
	if(Mathf.Abs(fx - transform.position.x) < 2)
	{
		transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.LookRotation(Vector3(Random.Range(70,390),50,Random.Range(100,400)) - transform.position),0.1);
	}
	fx = transform.position.x;
	timer = 7;
}

dis = Vector3.Distance(transform.position,player.position);
Physics.Raycast(transform.position + transform.up * 2,transform.forward,hit,100);

if(!die)
{
	if(dis > 40 && life == 100)
	{
		if(hit.transform != null && hit.distance < 7)
		{
			transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.LookRotation(Vector3(Random.Range(70,390),50,Random.Range(100,400)) - transform.position),0.1);
		}
		if(rigidbody.velocity.magnitude < 10)
		{
			animation.Play("walk");
			transform.rigidbody.AddForce(transform.forward * 50);
		}
	}else
	{
		if(dis > 10)
		{
			transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.LookRotation(player.position - transform.position),0.1);
			if(rigidbody.velocity.magnitude < 10)
			{
				animation.Play("walk");
				transform.rigidbody.AddForce(transform.forward * 100);
			}
		}else
		{
			transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.LookRotation(player.position - transform.position),0.1);
			animation.Play("attack_Melee");
			player.GetComponent(general).life -= Time.deltaTime * 20;
		}
	}
}

if(life < 0)
{
	die = true;
	animation["death"].speed = 0.1;
	animation.Play("death");
	GameObject.Destroy(this.gameObject,2);
}

}