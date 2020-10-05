let eventList = {"next":
{"data":{"type":"detonation","loc_x":77,"loc_y":27,"time":29384},"next":
{"data":{"type":"unitStartMove","unitID":345,"time":32765},"next":
{"data":{"type":"detonation","loc_x":79,"loc_y":27,"time":33341},"next":
{"next":null}}}}};
let newEvent = {"type":"detonation","loc_x":75,"loc_y":26,"time":28890};

console.log("1     list == ", JSON.stringify(eventList));
list = {"next":{data: newEvent,	next: eventList.next}};
console.log("2 add list == ", JSON.stringify(list));

if(eventList.next.data.time<newEvent.time)
{list}

let addEvent = function(eventList, newEvent)
{
	if (eventList.data == undefined)
	{
		if (eventList.next == null)
		{
			eventList = {data: newEvent ,	next: eventList};
		}
		else
		{
			eventList.next = addEvent(eventList.next, newEvent );
		}
	}
	else
	{
		if (eventList.data <= newEvent )
		{
			eventList.next = addEvent(eventList.next, newEvent );
		}
		else
		{
			eventList = {data: newEvent ,	next: eventList};
		}
	}
	return eventList;
}
