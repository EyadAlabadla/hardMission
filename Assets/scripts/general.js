#pragma strict

private var hit:RaycastHit;
private var shooting:boolean = false;
var shotSound:AudioSource;
var getSomething:AudioSource;
var cam:Transform;
var cross:Texture2D;
var smoke:Transform;
var blood:Transform;

var lifeGUI:Texture2D;
var life:float = 300;

//var muzzlePic:Transform;
//var muzzleLight:Transform;
private var showMuzzle:boolean = false;
//var muzzleRotation:Transform;

private var timer:float = 0.5;

@HideInInspector public var getWing:boolean = false;
@HideInInspector public var getFan:boolean = false;
@HideInInspector public var getBody:boolean = false;
@HideInInspector public var getIron:boolean = false;
@HideInInspector public var getWheels:boolean = false;

private var wings:UI.Image;
private var fan:UI.Image;
private var body:UI.Image;
private var iron:UI.Image;
private var wheels:UI.Image;

private var textField:UI.Text;
public var text:String;

function Awake()
{
	wings = GameObject.Find("wingsUI").GetComponent(UI.Image);
	fan = GameObject.Find("fanUI").GetComponent(UI.Image);
	body = GameObject.Find("bodyUI").GetComponent(UI.Image);
	iron = GameObject.Find("ironUI").GetComponent(UI.Image);
	wheels = GameObject.Find("wheelsUI").GetComponent(UI.Image);
	textField = GameObject.Find("notesField").GetComponent(UI.Text);
}

function Start ()
{
	//Screen.lockCursor = true;
	
	text = "هنا سيتم كتابة كافة التعليمات والملاحظات لمساعدتك في اللعبة";
	yield WaitForSeconds(6);
	text = "أنت الآن ضائع على جزيرة غريبة";
	yield WaitForSeconds(5);
	text = "الطائرة تحطمت وقطعها تناثرت على الجزيرة";
	yield WaitForSeconds(5);
	text = "عليك ان تجمع قطع الطائرة الضائعة وتعيد تركيبها";
	yield WaitForSeconds(5);
	text = "الجزيرة صغيرة لذلك حاول استكشافها وايجاد القطع، سيتم تركيب القطع التي تجدها في المجسم هنا";
	yield WaitForSeconds(5);
	text = "تستطيع الآن المشي واستكشاف الجزيرة عن طريق أزرار " + "W,A,S,D" + " أو بالأسهم";
	//GetComponent(CharacterMotor).canControl = true;
	//starting = true;
	yield WaitForSeconds(5);
	text = "لحسن حظك فإنك تمتلك سلاح، تستطيع استخدامه عن طريق الضغط على زر الفأرة الأيسر";
	yield WaitForSeconds(5);
	text = "الطريق على الأرض يساعدك على ايجاد طريقك";
}


function Update ()
{
	if(Input.GetMouseButtonDown(0))
	{
		shotSound.Play();
		shooting = true;
		//showMuzzle = true;
	}
	if(Input.GetMouseButtonUp(0))
	{
		shotSound.Stop();
		shooting = false;
		//showMuzzle = false;
	}
	
	if(shooting)
	{
		Physics.Raycast(cam.position,cam.forward,hit,100);
		if(hit.transform != null && hit.transform.tag != "border" && hit.transform.tag != "monster")
		{
			GameObject.Instantiate(smoke,hit.point,Quaternion.identity);
		}
		if(hit.transform != null && hit.transform.tag == "monster")
		{
			GameObject.Instantiate(blood,hit.point,Quaternion.identity);
			hit.transform.GetComponent(monster).life -= 50 * Time.deltaTime;
		}
	}
	
	if(life < 0)
	{
		Application.LoadLevel(Application.loadedLevel);
	}
	if(showMuzzle)
	{
		//muzzlePic.renderer.material.color.a = 1;
		//muzzleRotation.localRotation = Quaternion.AngleAxis(Random.Range(0,359), Vector3.forward);
		//muzzleLight.light.enabled = true;
		timer -= Time.deltaTime * 10;
		if(timer < 0)
		{
		//muzzlePic.renderer.material.color.a = 0;
	//	muzzleLight.light.enabled = false;
		timer = 0.5;
		}
	}else
	{
		//muzzlePic.renderer.material.color.a = 0;
		//muzzleLight.light.enabled = false;
	}
	textField.text = UnityArabicSupport.ArabicFixer.Fix(text);
}

function OnGUI ()
{
	GUI.DrawTexture (Rect (Screen.width/2-4.5, Screen.height/2-4.5 , 9, 9),cross);
	GUI.DrawTexture (Rect (370, 52.5 , life, 20),lifeGUI);
}
function OnTriggerEnter(other:Collider)
{
	if(other.transform.tag == "wheels")
	{
		Destroy(other.gameObject);
		getSomething.Play();
		getWheels = true;
		wheels.color.a = 1;
		text = "لقد وجدت العجلات";
	}
	
	if(other.transform.tag == "wing")
	{
		Destroy(other.gameObject);
		getSomething.Play();
		getWing = true;
		wings.color.a = 1;
		text = "لقد وجدت الأجنحة";
	}
	
	if(other.transform.tag == "fan")
	{
		Destroy(other.gameObject);
		getSomething.Play();
		getFan = true;
		fan.color.a = 1;
		text = "لقد وجدت المروحة";
	}
	
	if(other.transform.tag == "body")
	{
		Destroy(other.gameObject);
		getSomething.Play();
		getBody = true;
		body.color.a = 1;
		text = "لقد وجدت جسم الطائرة";
	}
	
	if(other.transform.tag == "iron")
	{
		Destroy(other.gameObject);
		getSomething.Play();
		getIron = true;
		iron.color.a = 1;
		text = "لقد وجدت الحديد";
	}
	
	if(getWing && getFan && getBody && getIron && getWheels)
	{
		text = "لقد جمعت جميع قطع الطائرة، عد الآن إليها، اضغط زر " + "H " + "عندما تصل اليها";
		if(Input.GetKeyDown(KeyCode.H))
		{
			if(Vector3.Distance(transform.position,Vector3(300,52,94)) < 15)
			{
				Application.LoadLevel("puzzle");
			}
		}
	}
}