const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
const port = 8000;

var jsonParser = bodyParser.json()

const chats = [{"chatId":1,"destinaratyId":"ddcc54e5-4e93-4591-a597-135504450601","destinaraty":"obumfrey0","lastMessage":"2021-08-02T14:59:46Z"},
{"chatId":2,"destinaratyId":"754eae32-799a-45dd-8b28-8bb9de754dc5","destinaraty":"keat1","lastMessage":"2021-04-24T18:28:44Z"},
{"chatId":3,"destinaratyId":"67e0b3b8-0fdc-4591-a229-71a63c6cf827","destinaraty":"khadfield2","lastMessage":"2022-07-14T13:07:17Z"},
{"chatId":4,"destinaratyId":"65b71baa-846e-4e23-9e89-cdded137a7ee","destinaraty":"elade3","lastMessage":"2021-12-01T07:13:39Z"},
{"chatId":5,"destinaratyId":"ad37d69f-9bc6-4010-a465-ae14cc84763d","destinaraty":"fcoogan4","lastMessage":"2021-07-15T11:26:49Z"},
{"chatId":6,"destinaratyId":"4f773541-edd3-4461-9c2b-30165cf7a5ea","destinaraty":"jbeastall5","lastMessage":"2021-11-13T22:12:28Z"},
{"chatId":7,"destinaratyId":"cc5dd5be-1ea1-44cb-903f-572f46bf9565","destinaraty":"gminard6","lastMessage":"2021-08-04T12:54:45Z"},
{"chatId":8,"destinaratyId":"d9566a4a-56cc-4a5a-8371-3421cda9ab55","destinaraty":"mreihm7","lastMessage":"2021-08-18T01:00:33Z"},
{"chatId":9,"destinaratyId":"d4cc5070-8a89-4839-834f-5652f37a052b","destinaraty":"dpepin8","lastMessage":"2021-03-15T11:55:44Z"},
{"chatId":10,"destinaratyId":"af5d90ca-4ae5-49b0-80cf-e5bcda8507c7","destinaraty":"ofreckelton9","lastMessage":"2021-11-02T00:37:14Z"},
{"chatId":11,"destinaratyId":"f4cba504-2367-4a50-ab0d-cc9f5611553f","destinaraty":"savarda","lastMessage":"2021-11-05T23:10:30Z"},
{"chatId":12,"destinaratyId":"2cdd25d2-24b0-498e-90eb-8f12f7b4d7fb","destinaraty":"omaciloryb","lastMessage":"2022-05-24T06:42:01Z"},
{"chatId":13,"destinaratyId":"aef3734e-d95f-4f48-874e-5b7c3dd9df42","destinaraty":"nverlingc","lastMessage":"2022-04-01T04:06:03Z"},
{"chatId":14,"destinaratyId":"06870237-ce6a-44c9-a682-091ec11de4c1","destinaraty":"idymentd","lastMessage":"2022-07-11T22:08:33Z"},
{"chatId":15,"destinaratyId":"8cf5ae4b-0a81-433f-ac69-d1633aae91c8","destinaraty":"bpoppye","lastMessage":"2021-12-09T13:54:16Z"},
{"chatId":16,"destinaratyId":"65f20f48-688f-42fa-8057-4bf986ba5065","destinaraty":"aclementsf","lastMessage":"2021-12-20T16:06:04Z"},
{"chatId":17,"destinaratyId":"349eba66-5af9-4536-95d5-a9c51a870e4a","destinaraty":"fskelingtong","lastMessage":"2022-11-28T22:22:12Z"},
{"chatId":18,"destinaratyId":"bd7f7ba7-3bcd-4914-ba0e-648f76c1b366","destinaraty":"jprimaroloh","lastMessage":"2021-12-09T11:41:00Z"},
{"chatId":19,"destinaratyId":"676b20e4-d702-48d1-8573-407596199c01","destinaraty":"mgonnini","lastMessage":"2022-09-09T08:37:47Z"},
{"chatId":20,"destinaratyId":"7ee5a2a7-1f4c-4cbf-93f3-a63a41a1a8ea","destinaraty":"agabbetisj","lastMessage":"2021-11-09T15:03:31Z"},
{"chatId":21,"destinaratyId":"32835d51-f3bc-41a0-9ae6-d488e5e8cc5d","destinaraty":"rtilzeyk","lastMessage":"2021-05-28T18:20:03Z"},
{"chatId":22,"destinaratyId":"5503fedc-5ee1-468f-b500-d86530b7ba2c","destinaraty":"plutzl","lastMessage":"2021-07-05T22:07:46Z"},
{"chatId":23,"destinaratyId":"06faa79f-75f3-43cc-9dc2-e4224cb64085","destinaraty":"dsetterm","lastMessage":"2021-03-24T18:08:15Z"},
{"chatId":24,"destinaratyId":"1fe1a39a-97c0-4ebd-baad-43dd4c052126","destinaraty":"fbaslern","lastMessage":"2022-01-10T04:51:42Z"},
{"chatId":25,"destinaratyId":"5118cd92-77ec-43a5-a123-0278c2111437","destinaraty":"sbacopo","lastMessage":"2021-02-11T09:18:26Z"},
{"chatId":26,"destinaratyId":"e32dcd17-6d14-42ac-b8d0-a6ee10c1f2d4","destinaraty":"creddingtonp","lastMessage":"2022-03-04T10:42:58Z"},
{"chatId":27,"destinaratyId":"b38e8ea4-0ea4-4f03-aed6-7136a98ae68e","destinaraty":"mshortoq","lastMessage":"2022-09-13T22:35:05Z"},
{"chatId":28,"destinaratyId":"fcf11c13-a27f-49eb-a86c-835b3253c323","destinaraty":"miannuzzir","lastMessage":"2022-08-30T04:21:16Z"},
{"chatId":29,"destinaratyId":"94cd7737-26cd-4035-b182-be30d728b44c","destinaraty":"fgroartys","lastMessage":"2022-04-05T21:35:55Z"},
{"chatId":30,"destinaratyId":"a499eceb-094d-4f51-845a-576e0bda9e60","destinaraty":"cmatist","lastMessage":"2022-07-11T23:47:57Z"},
{"chatId":31,"destinaratyId":"4df17afb-1a27-498b-b76d-1921a54b6c48","destinaraty":"apallisu","lastMessage":"2022-04-15T08:23:37Z"},
// {"chatId":32,"destinaratyId":"4c1d4cd2-4210-40e6-829a-4b19c0c087b5","destinaraty":"codugganv","lastMessage":"2022-04-28T23:39:55Z"},
// {"chatId":33,"destinaratyId":"f94d2013-486f-4001-a84f-669a3b959f6d","destinaraty":"rbatrickw","lastMessage":"2022-01-10T11:15:51Z"},
// {"chatId":34,"destinaratyId":"8815fe89-2558-4350-b1e0-40b3b86fe041","destinaraty":"bstorrarx","lastMessage":"2022-12-18T07:49:14Z"},
// {"chatId":35,"destinaratyId":"caff9313-75fa-4c2d-8f11-b94e2c651d2a","destinaraty":"eabreharty","lastMessage":"2022-09-13T09:44:09Z"},
// {"chatId":36,"destinaratyId":"2cd4af07-7d35-4ad8-befb-540414b15c7f","destinaraty":"btonbyez","lastMessage":"2021-09-12T13:36:13Z"},
// {"chatId":37,"destinaratyId":"d07a1c2f-5ae4-4cc0-897c-ca81ced5b148","destinaraty":"aalpes10","lastMessage":"2022-05-07T16:21:28Z"},
// {"chatId":38,"destinaratyId":"9167c3af-ceee-4c62-a2eb-712376f80fa4","destinaraty":"jhadleigh11","lastMessage":"2021-04-22T20:04:08Z"},
// {"chatId":39,"destinaratyId":"3fbef619-6991-4bd6-9e7a-276542f6b8c9","destinaraty":"hgout12","lastMessage":"2021-04-12T04:58:04Z"},
// {"chatId":40,"destinaratyId":"928107c9-3fde-426e-83c7-17c52742c95f","destinaraty":"lwhitmell13","lastMessage":"2021-01-29T12:36:24Z"},
// {"chatId":41,"destinaratyId":"d76617a5-33e3-44de-baa1-4bd40113497b","destinaraty":"khanley14","lastMessage":"2022-01-07T16:47:38Z"},
// {"chatId":42,"destinaratyId":"45f9714e-2b8d-41c0-a4df-d332f13e6c21","destinaraty":"adominec15","lastMessage":"2022-04-10T00:17:49Z"},
// {"chatId":43,"destinaratyId":"031bc7ce-49c2-4817-8dcb-aa783423cddf","destinaraty":"cguyan16","lastMessage":"2022-11-13T23:29:55Z"},
// {"chatId":44,"destinaratyId":"3255fe01-7200-4b88-9967-2fef97c0d992","destinaraty":"bocooney17","lastMessage":"2022-08-29T19:16:10Z"},
// {"chatId":45,"destinaratyId":"df42a54c-59c3-417d-8dd2-ed5c968b40d6","destinaraty":"dbrowett18","lastMessage":"2021-05-16T04:29:59Z"},
// {"chatId":46,"destinaratyId":"6b209854-cc2f-4809-b8fd-e6d6070e6569","destinaraty":"peck19","lastMessage":"2021-07-02T09:26:01Z"},
// {"chatId":47,"destinaratyId":"ed1fbdfd-d97d-4785-8767-3882469da9a5","destinaraty":"iorafferty1a","lastMessage":"2022-01-31T09:03:11Z"},
// {"chatId":48,"destinaratyId":"5343d277-44a2-4d4e-a22d-2dd3620b889f","destinaraty":"jstedall1b","lastMessage":"2021-06-20T11:26:41Z"},
// {"chatId":49,"destinaratyId":"1bf474d3-6e69-4f56-a784-5861ec08a5fe","destinaraty":"pvaller1c","lastMessage":"2022-05-30T20:56:38Z"},
// {"chatId":50,"destinaratyId":"50802164-9100-46d2-b992-9a1052d4ddf6","destinaraty":"lscollan1d","lastMessage":"2021-01-15T13:13:19Z"},
// {"chatId":51,"destinaratyId":"fcdf4c3a-2607-4ace-a4b3-99c1b42881cb","destinaraty":"emugglestone1e","lastMessage":"2022-06-05T01:50:44Z"},
// {"chatId":52,"destinaratyId":"9ad4381b-ac65-429b-a6e9-a849aec28ac1","destinaraty":"fnunnerley1f","lastMessage":"2022-11-17T18:15:12Z"},
// {"chatId":53,"destinaratyId":"cdbdc0a8-a8fd-466c-8a9c-3183469f9172","destinaraty":"clafont1g","lastMessage":"2022-02-16T18:01:39Z"},
// {"chatId":54,"destinaratyId":"050a733a-d942-4ce8-8655-e5ce73aa7ed2","destinaraty":"obruty1h","lastMessage":"2022-02-28T22:41:31Z"},
// {"chatId":55,"destinaratyId":"5a83bae9-8c47-4638-a725-4803c67599cd","destinaraty":"bchristophers1i","lastMessage":"2021-09-25T00:14:27Z"},
// {"chatId":56,"destinaratyId":"97705719-ce11-4634-b205-068f4ede27f4","destinaraty":"ppitsall1j","lastMessage":"2021-08-15T07:11:25Z"},
// {"chatId":57,"destinaratyId":"d79fc07c-8036-49e7-b2e4-b31cc38478d1","destinaraty":"cwhanstall1k","lastMessage":"2022-09-12T16:36:34Z"},
// {"chatId":58,"destinaratyId":"242a872b-b992-47c9-84ce-c892f30f2b7c","destinaraty":"dbottomore1l","lastMessage":"2021-10-25T07:38:06Z"},
// {"chatId":59,"destinaratyId":"984d90b4-b861-40da-81ca-5e6c445e93bf","destinaraty":"cshewen1m","lastMessage":"2021-02-05T15:15:16Z"},
// {"chatId":60,"destinaratyId":"28298df5-77b9-457e-9552-aafa2f4d1556","destinaraty":"arosenhaus1n","lastMessage":"2022-12-17T00:59:27Z"},
// {"chatId":61,"destinaratyId":"2a1a92c1-9a01-493c-9cde-e068687b9a0f","destinaraty":"mfryd1o","lastMessage":"2021-11-16T13:31:14Z"},
// {"chatId":62,"destinaratyId":"5258d22f-e401-4753-909b-41f7d1803648","destinaraty":"dsplaven1p","lastMessage":"2022-12-24T20:47:20Z"},
// {"chatId":63,"destinaratyId":"412f0e82-5d3e-48e5-8ef4-0d28790309cc","destinaraty":"cohalligan1q","lastMessage":"2022-07-18T04:39:16Z"},
// {"chatId":64,"destinaratyId":"4b0cb6a8-ce2a-4413-b18d-bc901bcb8adc","destinaraty":"tostick1r","lastMessage":"2021-04-01T00:42:53Z"},
// {"chatId":65,"destinaratyId":"ee4ba67a-9a11-4f59-8cee-00353f48aaf9","destinaraty":"ireiners1s","lastMessage":"2022-10-26T14:20:09Z"},
// {"chatId":66,"destinaratyId":"04d0f1ee-5711-4e3e-a9bf-781a26ac7032","destinaraty":"rcuerda1t","lastMessage":"2021-12-04T08:39:37Z"},
// {"chatId":67,"destinaratyId":"c4252d93-9605-4ae1-aec0-9b8800a41ffa","destinaraty":"jshackell1u","lastMessage":"2023-01-01T23:39:57Z"},
// {"chatId":68,"destinaratyId":"319c898b-c102-4c13-9769-e79e0967f1b1","destinaraty":"dparslow1v","lastMessage":"2022-11-20T11:18:18Z"},
// {"chatId":69,"destinaratyId":"76b4c31b-772e-4551-bfb6-5edc6a78a602","destinaraty":"aparidge1w","lastMessage":"2021-04-05T08:44:31Z"},
// {"chatId":70,"destinaratyId":"c08877fa-ffde-4f2f-ad8a-c506669e4a1d","destinaraty":"slamacraft1x","lastMessage":"2022-05-05T09:05:00Z"},
// {"chatId":71,"destinaratyId":"c71dece5-4cff-429d-9eac-2a34721eade1","destinaraty":"dcrosetto1y","lastMessage":"2021-11-22T15:21:36Z"},
// {"chatId":72,"destinaratyId":"b898e6dc-ec2d-4318-9665-8d6eb0008fd1","destinaraty":"rwitherspoon1z","lastMessage":"2022-04-01T09:53:38Z"},
// {"chatId":73,"destinaratyId":"76f9d145-c767-4853-a563-770c674daa38","destinaraty":"omanterfield20","lastMessage":"2021-01-10T03:11:32Z"},
// {"chatId":74,"destinaratyId":"51c06786-a23d-466a-8be2-ab2dc854721e","destinaraty":"ipostgate21","lastMessage":"2022-02-26T12:07:30Z"},
// {"chatId":75,"destinaratyId":"26f351c2-e48c-4b97-9e04-a0a4648598c3","destinaraty":"jbruyett22","lastMessage":"2022-07-15T11:14:11Z"},
// {"chatId":76,"destinaratyId":"c4af7be6-ff92-4001-8891-375a900213f0","destinaraty":"vbeltzner23","lastMessage":"2021-05-20T00:26:07Z"},
// {"chatId":77,"destinaratyId":"7c526e95-452a-49cf-86dc-37af18d69a0c","destinaraty":"avaneeden24","lastMessage":"2023-01-01T17:06:55Z"},
// {"chatId":78,"destinaratyId":"98d07095-f471-45d7-bc7d-94fc1ab0e998","destinaraty":"kmotton25","lastMessage":"2021-09-27T11:49:03Z"},
// {"chatId":79,"destinaratyId":"e7ee1367-bc4c-43fb-a1cc-cb19c9d25b82","destinaraty":"nlucock26","lastMessage":"2022-02-24T17:39:35Z"},
// {"chatId":80,"destinaratyId":"c373e2b0-a65b-4612-9e0e-4600d27b68a5","destinaraty":"pcopnell27","lastMessage":"2021-07-22T18:55:43Z"},
// {"chatId":81,"destinaratyId":"b65ab95e-78f5-4427-8a4c-548feaca25f6","destinaraty":"jkimmings28","lastMessage":"2022-05-01T23:16:39Z"},
// {"chatId":82,"destinaratyId":"e5bf77f9-6e17-4060-9457-bbecc5deac85","destinaraty":"dfeatherstonehaugh29","lastMessage":"2021-05-19T11:24:40Z"},
// {"chatId":83,"destinaratyId":"4e56bbef-a8f7-40e0-a27f-b9a50d3439c7","destinaraty":"ctuttle2a","lastMessage":"2022-11-27T11:14:55Z"},
// {"chatId":84,"destinaratyId":"c6f48f5c-24b1-4782-8bde-f733ecc2fd28","destinaraty":"afolonin2b","lastMessage":"2022-08-12T23:31:28Z"},
// {"chatId":85,"destinaratyId":"026036a8-697d-4143-ad2e-63d22c7a79eb","destinaraty":"cshorrock2c","lastMessage":"2021-08-12T23:08:45Z"},
// {"chatId":86,"destinaratyId":"e979d236-e8da-4502-824d-20f1d7ea3574","destinaraty":"ycollip2d","lastMessage":"2021-08-05T20:03:11Z"},
// {"chatId":87,"destinaratyId":"ff24163a-d7b5-4d81-8bc7-dbd4dbe15ab1","destinaraty":"chaslum2e","lastMessage":"2021-12-12T06:27:57Z"},
// {"chatId":88,"destinaratyId":"eefa1215-5483-4a77-9e98-bc4146738f4a","destinaraty":"pcoryndon2f","lastMessage":"2021-01-08T13:02:07Z"},
// {"chatId":89,"destinaratyId":"8ca1f7b6-55a0-4ca9-a4ac-d3b3c2fd0a65","destinaraty":"rorris2g","lastMessage":"2021-03-22T23:50:07Z"},
// {"chatId":90,"destinaratyId":"669f0141-b637-450a-985e-07f165e5cba9","destinaraty":"bbazoche2h","lastMessage":"2021-06-04T16:37:58Z"},
// {"chatId":91,"destinaratyId":"d9a8401e-4d28-44e4-8204-3b75c9c35d9c","destinaraty":"vpiniur2i","lastMessage":"2021-08-29T03:47:29Z"},
// {"chatId":92,"destinaratyId":"21ede8e6-43e6-4c09-8a40-b9f394a64b3a","destinaraty":"pprigg2j","lastMessage":"2022-10-14T03:36:05Z"},
// {"chatId":93,"destinaratyId":"014dce24-289e-4516-9e12-d848996a8d44","destinaraty":"mkahane2k","lastMessage":"2022-09-23T20:07:06Z"},
// {"chatId":94,"destinaratyId":"0f7d9169-5aed-4ca7-807d-01097ce214e2","destinaraty":"bdrinkel2l","lastMessage":"2021-01-12T20:28:42Z"},
// {"chatId":95,"destinaratyId":"e7a6e533-23eb-4798-90d8-aa0c6a4c31ee","destinaraty":"apuddin2m","lastMessage":"2021-10-29T08:52:56Z"},
// {"chatId":96,"destinaratyId":"c912f85b-e5f2-45db-9c0e-d8212721206a","destinaraty":"vbrouard2n","lastMessage":"2022-06-04T01:50:21Z"},
// {"chatId":97,"destinaratyId":"eccee509-f761-4c70-a086-c239028fd17b","destinaraty":"sviney2o","lastMessage":"2022-07-21T07:00:49Z"},
{"chatId":98,"destinaratyId":"707113ce-f439-46c1-bde5-b88a87a19510","destinaraty":"kjugging2p","lastMessage":"2021-06-22T00:18:36Z"},
// {"chatId":99,"destinaratyId":"cd43f040-6bcc-42ca-87ee-65d885a9543e","destinaraty":"trimmer2q","lastMessage":"2021-12-22T02:04:16Z"},
// {"chatId":100,"destinaratyId":"e5d3eb34-2fec-4207-b397-0b5593f3520a","destinaraty":"cwormstone2r","lastMessage":"2021-08-28T02:00:44Z"}
]
const messages = [
	{messageID:2, chatId:2, destinaraty: "keat1", message: "Estas???", createdBy: "developer", createdAt:"2021-04-24T18:28:44Z"},
	{messageID:3, chatId:3, destinaraty: "khadfield2", message: "Estas???", createdBy: "developer", createdAt:"2022-07-14T13:07:17Z"},
	{messageID:4, chatId:4, destinaraty: "elade3", message: "Estas???", createdBy: "developer", createdAt:"2021-12-01T07:13:39Z"},
	{messageID:5, chatId:5, destinaraty: "fcoogan4", message: "Estas???", createdBy: "developer", createdAt:"2021-07-15T11:26:49Z"},
	{messageID:6, chatId:6, destinaraty: "jbeastall5", message: "Estas???", createdBy: "developer", createdAt:"2021-11-13T22:12:28Z"},
	{messageID:7, chatId:7, destinaraty: "gminard6", message: "Estas???", createdBy: "developer", createdAt:"2021-08-04T12:54:45Z"},
	{messageID:8, chatId:8, destinaraty: "mreihm7", message: "Estas???", createdBy: "developer", createdAt:"2021-08-18T01:00:33Z"},
	{messageID:9, chatId:9, destinaraty: "dpepin8", message: "Estas???", createdBy: "developer", createdAt:"2021-03-15T11:55:44Z"},
	{messageID:10, chatId:10, destinaraty: "ofreckelton9", message: "Estas???", createdBy: "developer", createdAt:"2021-11-02T00:37:14Z"},
	{messageID:11, chatId:11, destinaraty: "savarda", message: "Estas???", createdBy: "developer", createdAt:"2021-11-05T23:10:30Z"},
	{messageID:12, chatId:12, destinaraty: "omaciloryb", message: "Estas???", createdBy: "developer", createdAt:"2022-05-24T06:42:01Z"},
	{messageID:13, chatId:13, destinaraty: "nverlingc", message: "Estas???", createdBy: "developer", createdAt:"2022-04-01T04:06:03Z"},
	{messageID:14, chatId:14, destinaraty: "idymentd", message: "Estas???", createdBy: "developer", createdAt:"2022-07-11T22:08:33Z"},
	{messageID:15, chatId:15, destinaraty: "bpoppye", message: "Estas???", createdBy: "developer", createdAt:"2021-12-09T13:54:16Z"},
	{messageID:16, chatId:16, destinaraty: "aclementsf", message: "Estas???", createdBy: "developer", createdAt:"2021-12-20T16:06:04Z"},
	{messageID:17, chatId:17, destinaraty: "fskelingtong", message: "Estas???", createdBy: "developer", createdAt:"2022-11-28T22:22:12Z"},
	{messageID:18, chatId:18, destinaraty: "jprimaroloh", message: "Estas???", createdBy: "developer", createdAt:"2021-12-09T11:41:00Z"},
	{messageID:19, chatId:19, destinaraty: "mgonnini", message: "Estas???", createdBy: "developer", createdAt:"2022-09-09T08:37:47Z"},
	{messageID:20, chatId:20, destinaraty: "agabbetisj", message: "Estas???", createdBy: "developer", createdAt:"2021-11-09T15:03:31Z"},
	{messageID:21, chatId:21, destinaraty: "rtilzeyk", message: "Estas???", createdBy: "developer", createdAt:"2021-05-28T18:20:03Z"},
	{messageID:22, chatId:22, destinaraty: "plutzl", message: "Estas???", createdBy: "developer", createdAt:"2021-07-05T22:07:46Z"},
	{messageID:23, chatId:23, destinaraty: "dsetterm", message: "Estas???", createdBy: "developer", createdAt:"2021-03-24T18:08:15Z"},
	{messageID:24, chatId:24, destinaraty: "fbaslern", message: "Estas???", createdBy: "developer", createdAt:"2022-01-10T04:51:42Z"},
	{messageID:25, chatId:25, destinaraty: "sbacopo", message: "Estas???", createdBy: "developer", createdAt:"2021-02-11T09:18:26Z"},
	{messageID:26, chatId:26, destinaraty: "creddingtonp", message: "Estas???", createdBy: "developer", createdAt:"2022-03-04T10:42:58Z"},
	{messageID:27, chatId:27, destinaraty: "mshortoq", message: "Estas???", createdBy: "developer", createdAt:"2022-09-13T22:35:05Z"},
	{messageID:28, chatId:28, destinaraty: "miannuzzir", message: "Estas???", createdBy: "developer", createdAt:"2022-08-30T04:21:16Z"},
	{messageID:29, chatId:29, destinaraty: "fgroartys", message: "Estas???", createdBy: "developer", createdAt:"2022-04-05T21:35:55Z"},
	{messageID:30, chatId:30, destinaraty: "cmatist", message: "Estas???", createdBy: "developer", createdAt:"2022-07-11T23:47:57Z"},
	{messageID:31, chatId:31, destinaraty: "apallisu", message: "Estas???", createdBy: "developer", createdAt:"2022-04-15T08:23:37Z"},
	{messageID:32, chatId:1, destinaraty: "developer", message: "Hey bro", createdBy: "kjugging2p", createdAt: "2021-08-27T00:00:44Z"},
	{messageID:33, chatId:1, destinaraty: "kjugging2p", message: "Cuentame?", createdBy: "developer", createdAt: "2021-08-27T00:01:44Z"},
	{messageID:34, chatId:1, destinaraty: "developer", message: "Que vas a hacer el sabado", createdBy: "kjugging2p", createdAt: "2021-08-27T00:02:00Z"},
	{messageID:35, chatId:1, destinaraty: "developer", message: "???", createdBy: "kjugging2p", createdAt: "2021-08-27T00:02:01Z"},
	{messageID:36, chatId:1, destinaraty: "kjugging2p", message: "Mala mia que dure tanto para responder, Estaba haciendo algo", createdBy: "developer", createdAt: "2021-08-27T01:02:01Z"},
	{messageID:37, chatId:1, destinaraty: "kjugging2p", message: "No voy a poder, tengo un compromiso ese dia", createdBy: "developer", createdAt: "2021-08-27T01:02:30Z"},
	{messageID:38, chatId:1, destinaraty: "developer", message: "Ok", createdBy: "kjugging2p", createdAt: "2021-08-27T01:03:01Z"},
]
let config = {
	username: "developer",
	photo: "",
}

app.get('/chats', (req, res) => {
	res.json(chats)
});

app.get('/chat/:chatId', (req, res) => {
	const chatId = req.params.chatId;
	const chat = chats.filter(chat => chat.chatId === parseInt(chatId));
	if (!chat) {
	  res.status(404).send('Chat not found');
	} else {
	  res.json(chat);
	}
  });
app.get('/chat/:chatId/messages', (req, res) => {
	const chatId = req.params.chatId;
	const chat = messages.filter(messages => messages.chatId === parseInt(chatId));
	if (!chat) {
	  res.status(404).send('Chat not found');
	} else {
	  res.json(chat);
	}
  });
app.get('/config', (req, res) => {
  res.json(config)
});

app.post('/config', jsonParser , (req, res) => {
	config = {username: req.body.username, photo: req.body.photo}
	res.send("ok")
});

app.listen(port, () => {
  console.log(`ChatAPI running on port: ${port}`)
})