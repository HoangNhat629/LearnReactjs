import React, { Component } from "react";
import {
  Container,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col,
} from "reactstrap";
import { CartContext } from "./cart";
class Products extends Component {
  state = {
    Products: [
      {
        id: "c98aa3da-55f5-410b-82f9-6d2881d839af",
        name: "Grand Marnier",
        discription:
          "leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien",
        imgURL: "http://dummyimage.com/237x100.png/ff4444/ffffff",
      },
      {
        id: "511eccca-ef3d-46f1-973f-aae3e84c3277",
        name: "Sauce - Hoisin",
        discription:
          "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea",
        imgURL: "http://dummyimage.com/160x100.png/dddddd/000000",
      },
      {
        id: "16c5a846-dfea-4594-9027-008374c59f9a",
        name: "Wine - Fontanafredda Barolo",
        discription:
          "odio porttitor id consequat in consequat ut nulla sed accumsan felis",
        imgURL: "http://dummyimage.com/154x100.png/cc0000/ffffff",
      },
      {
        id: "ab9674aa-97a0-45f2-9ec6-01ca721957c9",
        name: "Soup - Campbells Mushroom",
        discription:
          "quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor",
        imgURL: "http://dummyimage.com/153x100.png/cc0000/ffffff",
      },
      {
        id: "ad67d1e1-a69c-4636-b7fc-b3ccca6dc61a",
        name: "Bar Special K",
        discription:
          "diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue",
        imgURL: "http://dummyimage.com/177x100.png/ff4444/ffffff",
      },
      {
        id: "03d337fc-a136-4b6d-88b5-fa1efa74ceb9",
        name: "Zucchini - Yellow",
        discription:
          "elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed",
        imgURL: "http://dummyimage.com/219x100.png/5fa2dd/ffffff",
      },
      {
        id: "c41fff22-1c0e-4a0f-907a-465eb5f67d53",
        name: "Wine - Prosecco Valdobienne",
        discription:
          "habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
        imgURL: "http://dummyimage.com/171x100.png/ff4444/ffffff",
      },
      {
        id: "24f4e1ea-47ab-4812-8259-7831544612fa",
        name: "Chinese Foods - Chicken Wing",
        discription:
          "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique",
        imgURL: "http://dummyimage.com/185x100.png/dddddd/000000",
      },
      {
        id: "470fd14b-190d-47ec-8761-fc9c6259482f",
        name: "Appetizer - Sausage Rolls",
        discription:
          "volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh",
        imgURL: "http://dummyimage.com/183x100.png/ff4444/ffffff",
      },
      {
        id: "2a446bf1-b3eb-41ce-973b-bf2193be9230",
        name: "Shallots",
        discription:
          "justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit",
        imgURL: "http://dummyimage.com/122x100.png/cc0000/ffffff",
      },
      {
        id: "53348f92-3cdb-4b6f-8503-3ae5a15bdc21",
        name: "Chocolate Bar - Coffee Crisp",
        discription:
          "vel nulla eget eros elementum pellentesque quisque porta volutpat erat",
        imgURL: "http://dummyimage.com/207x100.png/5fa2dd/ffffff",
      },
      {
        id: "a439bbbd-11c9-4e11-8bd9-837767f6583d",
        name: "Sprouts - Peppercress",
        discription:
          "orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris",
        imgURL: "http://dummyimage.com/248x100.png/cc0000/ffffff",
      },
      {
        id: "4d9ce65c-29e1-4e74-92ea-bfa8b556e110",
        name: "Lemonade - Strawberry, 591 Ml",
        discription:
          "dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient",
        imgURL: "http://dummyimage.com/226x100.png/5fa2dd/ffffff",
      },
      {
        id: "ce0191fe-589d-44e7-a991-abed8f797d34",
        name: "Kirsch - Schloss",
        discription:
          "semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
        imgURL: "http://dummyimage.com/100x100.png/ff4444/ffffff",
      },
      {
        id: "b972a79a-e08e-4bd0-a37d-716d264bc321",
        name: "Wine - Prosecco Valdobienne",
        discription:
          "magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien",
        imgURL: "http://dummyimage.com/147x100.png/dddddd/000000",
      },
      {
        id: "770562ab-bdd1-49f5-a986-50901726a9e8",
        name: "Cheese - Mozzarella, Buffalo",
        discription:
          "justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse",
        imgURL: "http://dummyimage.com/206x100.png/cc0000/ffffff",
      },
      {
        id: "fa50bef8-291e-45d6-8460-1c33ea51c646",
        name: "Chilli Paste, Ginger Garlic",
        discription:
          "libero non mattis pulvinar nulla pede ullamcorper augue a suscipit",
        imgURL: "http://dummyimage.com/118x100.png/ff4444/ffffff",
      },
      {
        id: "27e93311-0e6f-4aee-a9a6-6c39027763b0",
        name: "Jam - Apricot",
        discription:
          "venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet",
        imgURL: "http://dummyimage.com/201x100.png/ff4444/ffffff",
      },
      {
        id: "8f1a69b4-f02f-4116-9805-c5fbd8215086",
        name: "Oil - Olive",
        discription:
          "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum",
        imgURL: "http://dummyimage.com/184x100.png/dddddd/000000",
      },
      {
        id: "b3c1f9b8-ea86-43f1-a34f-d4744b8abca6",
        name: "Dry Ice",
        discription:
          "volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna",
        imgURL: "http://dummyimage.com/232x100.png/ff4444/ffffff",
      },
      {
        id: "b4f6782f-47e0-41fa-a21a-a05015e30e91",
        name: "Coffee - Beans, Whole",
        discription:
          "sapien a libero nam dui proin leo odio porttitor id consequat",
        imgURL: "http://dummyimage.com/122x100.png/dddddd/000000",
      },
      {
        id: "ee614492-a149-45d8-bbc3-421bab085dad",
        name: "Tea Peppermint",
        discription:
          "aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis",
        imgURL: "http://dummyimage.com/151x100.png/ff4444/ffffff",
      },
      {
        id: "de1fe347-777f-4fac-94be-e5ea61769c04",
        name: "Oranges",
        discription:
          "sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu",
        imgURL: "http://dummyimage.com/115x100.png/ff4444/ffffff",
      },
      {
        id: "1e1c2f01-787e-4e46-bd48-9fab74b842ed",
        name: "Clams - Bay",
        discription:
          "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla",
        imgURL: "http://dummyimage.com/137x100.png/5fa2dd/ffffff",
      },
      {
        id: "615e62fe-2a00-4b8f-bd6c-f5c1df41a406",
        name: "Wine - Port Late Bottled Vintage",
        discription:
          "ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
        imgURL: "http://dummyimage.com/160x100.png/5fa2dd/ffffff",
      },
      {
        id: "4a7ca003-2b54-4db2-843c-4dd5686a25eb",
        name: "Container - Clear 32 Oz",
        discription:
          "eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat",
        imgURL: "http://dummyimage.com/118x100.png/cc0000/ffffff",
      },
      {
        id: "04bd1637-6c25-4ba6-ba5a-df3cdffdf1c3",
        name: "Bread Roll Foccacia",
        discription: "pede justo eu massa donec dapibus duis at velit eu est",
        imgURL: "http://dummyimage.com/165x100.png/5fa2dd/ffffff",
      },
      {
        id: "ff7ee2c3-9de5-4b8a-a753-41e46a1a1d01",
        name: "Chips Potato Salt Vinegar 43g",
        discription:
          "semper rutrum nulla nunc purus phasellus in felis donec semper sapien",
        imgURL: "http://dummyimage.com/188x100.png/cc0000/ffffff",
      },
      {
        id: "0491a595-04e4-4c77-a506-8453a1302557",
        name: "Beans - Fava, Canned",
        discription:
          "mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue",
        imgURL: "http://dummyimage.com/139x100.png/dddddd/000000",
      },
      {
        id: "b102a06e-b6d3-4ec1-8e7f-121ec2ee21d8",
        name: "Lamb - Shoulder, Boneless",
        discription:
          "vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa",
        imgURL: "http://dummyimage.com/134x100.png/5fa2dd/ffffff",
      },
      {
        id: "eac82ae2-5b9d-43a5-830a-1fa7adda298a",
        name: "Fish - Halibut, Cold Smoked",
        discription:
          "id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra",
        imgURL: "http://dummyimage.com/108x100.png/ff4444/ffffff",
      },
      {
        id: "5d3d4280-9864-4eda-956d-e9ee89c78320",
        name: "Syrup - Monin, Irish Cream",
        discription:
          "eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum",
        imgURL: "http://dummyimage.com/158x100.png/cc0000/ffffff",
      },
      {
        id: "01700d66-f679-426c-81e9-a047eb7de73b",
        name: "Wine - Guy Sage Touraine",
        discription:
          "sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis",
        imgURL: "http://dummyimage.com/137x100.png/ff4444/ffffff",
      },
      {
        id: "a949da92-9106-4675-9811-aaf4bbb7fd0d",
        name: "Soup - Knorr, Ministrone",
        discription:
          "quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio",
        imgURL: "http://dummyimage.com/217x100.png/ff4444/ffffff",
      },
      {
        id: "b25a0690-edea-4439-858d-53d9848ddb5a",
        name: "Chocolate - Chips Compound",
        discription:
          "dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis",
        imgURL: "http://dummyimage.com/189x100.png/ff4444/ffffff",
      },
      {
        id: "d0f60f65-8a1a-4b86-8741-5fd3d8a13f3f",
        name: "Liquid Aminios Acid - Braggs",
        discription:
          "fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis",
        imgURL: "http://dummyimage.com/232x100.png/dddddd/000000",
      },
      {
        id: "5f26982e-3a2a-44bd-8c3f-0e167488a4f2",
        name: "Sea Bass - Fillets",
        discription:
          "vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed",
        imgURL: "http://dummyimage.com/120x100.png/cc0000/ffffff",
      },
      {
        id: "4d430647-29c5-4bb6-a0e2-cffbab34d458",
        name: "Salt - Table",
        discription:
          "purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes",
        imgURL: "http://dummyimage.com/225x100.png/dddddd/000000",
      },
      {
        id: "cb895a4c-fdbb-418a-b2bf-49d3d7362c42",
        name: "The Pop Shoppe - Black Cherry",
        discription:
          "sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia",
        imgURL: "http://dummyimage.com/123x100.png/5fa2dd/ffffff",
      },
      {
        id: "35cd3de9-3ca6-4f24-a001-63c9a51f7f8c",
        name: "Gatorade - Xfactor Berry",
        discription:
          "amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis",
        imgURL: "http://dummyimage.com/161x100.png/dddddd/000000",
      },
      {
        id: "211bd53d-9cf7-40c7-aeac-a6529060e9d6",
        name: "Water - Spring Water 500ml",
        discription:
          "felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar",
        imgURL: "http://dummyimage.com/184x100.png/5fa2dd/ffffff",
      },
      {
        id: "c460d62e-45d5-4e48-8bd5-537f0a10d6d1",
        name: "Wine - Niagara Peninsula Vqa",
        discription:
          "eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien",
        imgURL: "http://dummyimage.com/191x100.png/ff4444/ffffff",
      },
      {
        id: "8ddd0451-e472-4e14-932e-48657f1e705c",
        name: "Ham - Black Forest",
        discription:
          "praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante",
        imgURL: "http://dummyimage.com/186x100.png/ff4444/ffffff",
      },
      {
        id: "641bdf53-63d0-43c5-83c3-f60861b0e5db",
        name: "Campari",
        discription:
          "sapien a libero nam dui proin leo odio porttitor id consequat in consequat",
        imgURL: "http://dummyimage.com/152x100.png/dddddd/000000",
      },
      {
        id: "eadef6d2-c76e-42f1-a190-d9b6511a66c4",
        name: "Soup - Campbells Beef Noodle",
        discription:
          "enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus",
        imgURL: "http://dummyimage.com/152x100.png/cc0000/ffffff",
      },
      {
        id: "5972d290-125e-40fb-81d8-9093a192fce1",
        name: "Onions - Spanish",
        discription:
          "in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices",
        imgURL: "http://dummyimage.com/221x100.png/ff4444/ffffff",
      },
      {
        id: "b834a2e6-274f-4664-994e-0d08603180cd",
        name: "Napkin - Dinner, White",
        discription:
          "morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
        imgURL: "http://dummyimage.com/119x100.png/ff4444/ffffff",
      },
      {
        id: "492c8903-ef35-4367-b178-3545a61eac64",
        name: "Doilies - 10, Paper",
        discription:
          "congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
        imgURL: "http://dummyimage.com/152x100.png/dddddd/000000",
      },
      {
        id: "a65d5d14-9a6a-4818-9249-91d7102debce",
        name: "Bread Bowl Plain",
        discription:
          "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel",
        imgURL: "http://dummyimage.com/210x100.png/dddddd/000000",
      },
      {
        id: "1f18d7cd-5599-4291-a092-d966e48401f8",
        name: "Limes",
        discription:
          "rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis",
        imgURL: "http://dummyimage.com/169x100.png/5fa2dd/ffffff",
      },
      {
        id: "75c9664b-d665-42ec-95c0-545655fa7fd6",
        name: "Veal - Bones",
        discription:
          "morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum",
        imgURL: "http://dummyimage.com/160x100.png/cc0000/ffffff",
      },
      {
        id: "bed0a7d9-e1a2-4c50-aead-e3df19a91b87",
        name: "Beef - Top Butt",
        discription:
          "massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies",
        imgURL: "http://dummyimage.com/148x100.png/cc0000/ffffff",
      },
      {
        id: "d5f25cdd-4623-4ffa-b890-e7d546df83a5",
        name: "Soup - Campbells",
        discription:
          "aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum",
        imgURL: "http://dummyimage.com/222x100.png/ff4444/ffffff",
      },
      {
        id: "67bffae5-d481-47e1-b809-fad93173d4f2",
        name: "Pernod",
        discription:
          "nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat",
        imgURL: "http://dummyimage.com/247x100.png/dddddd/000000",
      },
      {
        id: "22484bfc-dacf-4f4a-8988-16e4dbe6a8cf",
        name: "Port - 74 Brights",
        discription:
          "amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus",
        imgURL: "http://dummyimage.com/119x100.png/ff4444/ffffff",
      },
      {
        id: "35052c32-ac92-482d-8daa-7438b59b7449",
        name: "Watercress",
        discription:
          "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis",
        imgURL: "http://dummyimage.com/234x100.png/ff4444/ffffff",
      },
      {
        id: "ad00e70a-48e5-48a2-8e3a-53fabf6c1fc4",
        name: "Pate - Peppercorn",
        discription:
          "magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
        imgURL: "http://dummyimage.com/206x100.png/dddddd/000000",
      },
      {
        id: "2af464fc-522a-41d3-bb2d-4391948a0d84",
        name: "Dr. Pepper - 355ml",
        discription:
          "suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
        imgURL: "http://dummyimage.com/213x100.png/5fa2dd/ffffff",
      },
      {
        id: "31e1a301-ec31-4ac5-a338-8139167c5388",
        name: "Lemon Pepper",
        discription:
          "est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante",
        imgURL: "http://dummyimage.com/119x100.png/dddddd/000000",
      },
      {
        id: "22740611-3546-4ac9-9379-7f30955b147d",
        name: "Wine - White, Chardonnay",
        discription:
          "suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus",
        imgURL: "http://dummyimage.com/237x100.png/5fa2dd/ffffff",
      },
      {
        id: "80ee77e0-10b3-48a2-abd0-d59d1db47a71",
        name: "Soup - Campbells, Butternut",
        discription:
          "sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
        imgURL: "http://dummyimage.com/158x100.png/dddddd/000000",
      },
      {
        id: "c6f963cc-cf68-4a15-b840-6cbd1d251aa7",
        name: "Sugar - Palm",
        discription:
          "in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus",
        imgURL: "http://dummyimage.com/137x100.png/cc0000/ffffff",
      },
      {
        id: "c82d0cc2-db69-46a8-9362-915940d04d92",
        name: "Dc - Sakura Fu",
        discription:
          "ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse",
        imgURL: "http://dummyimage.com/102x100.png/dddddd/000000",
      },
      {
        id: "2d717735-cecb-469f-97af-174ae2264af0",
        name: "Dome Lid Clear P92008h",
        discription:
          "nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus",
        imgURL: "http://dummyimage.com/206x100.png/ff4444/ffffff",
      },
      {
        id: "bfd3259a-5375-477f-a221-40a7dcd2ccd2",
        name: "Mudslide",
        discription:
          "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis",
        imgURL: "http://dummyimage.com/216x100.png/5fa2dd/ffffff",
      },
      {
        id: "b42b1ba6-09c6-4ff9-b784-76cf12abad7a",
        name: "Longos - Lasagna Veg",
        discription:
          "in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit",
        imgURL: "http://dummyimage.com/107x100.png/cc0000/ffffff",
      },
      {
        id: "dd994d75-7788-44c3-9b37-8e8246d81b73",
        name: "Mayonnaise",
        discription:
          "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus",
        imgURL: "http://dummyimage.com/146x100.png/ff4444/ffffff",
      },
      {
        id: "030dcb5b-3101-4866-bb60-7d1e09573560",
        name: "Pork Salted Bellies",
        discription:
          "ut dolor morbi vel lectus in quam fringilla rhoncus mauris",
        imgURL: "http://dummyimage.com/226x100.png/cc0000/ffffff",
      },
      {
        id: "58a5d270-2e44-4022-ae0f-d068a27adf6a",
        name: "Juice - Mango",
        discription:
          "rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat",
        imgURL: "http://dummyimage.com/212x100.png/5fa2dd/ffffff",
      },
      {
        id: "adcb9ef6-26fb-4c76-a0d2-e5df5c47f1ce",
        name: "Cheese - Brie, Triple Creme",
        discription:
          "parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis",
        imgURL: "http://dummyimage.com/190x100.png/dddddd/000000",
      },
      {
        id: "023eded8-2988-4410-93ad-22cc6c66a36b",
        name: "Wine - Soave Folonari",
        discription:
          "cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus",
        imgURL: "http://dummyimage.com/140x100.png/dddddd/000000",
      },
      {
        id: "2a07adeb-63d1-4da3-9b6c-df6d272a04f6",
        name: "Muffin Puck Ww Carrot",
        discription:
          "vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien",
        imgURL: "http://dummyimage.com/231x100.png/cc0000/ffffff",
      },
      {
        id: "858f1729-c453-453c-bd9a-fbf05143e4c3",
        name: "Shrimp - 150 - 250",
        discription:
          "turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet",
        imgURL: "http://dummyimage.com/213x100.png/dddddd/000000",
      },
      {
        id: "91d0759b-5d11-4a48-9945-06861434dfd9",
        name: "Muffin Puck Ww Carrot",
        discription:
          "donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan",
        imgURL: "http://dummyimage.com/244x100.png/5fa2dd/ffffff",
      },
      {
        id: "67c1e357-6b6b-477b-bd35-ca39a87bfa3b",
        name: "Muffin - Bran Ind Wrpd",
        discription:
          "tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis",
        imgURL: "http://dummyimage.com/137x100.png/5fa2dd/ffffff",
      },
      {
        id: "3d12f573-2229-457e-be3e-0ae75ead7160",
        name: "Tea - Lemon Green Tea",
        discription:
          "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis",
        imgURL: "http://dummyimage.com/157x100.png/cc0000/ffffff",
      },
      {
        id: "22c5e7fb-eac6-4df2-817d-da5b1d57de3e",
        name: "Lobster - Canned Premium",
        discription:
          "aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a",
        imgURL: "http://dummyimage.com/230x100.png/5fa2dd/ffffff",
      },
      {
        id: "7e24c036-d839-478a-8eb6-c420cae4866f",
        name: "Shallots",
        discription:
          "pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
        imgURL: "http://dummyimage.com/149x100.png/ff4444/ffffff",
      },
      {
        id: "df28474f-5ea5-4f2f-8f44-f6c283d27291",
        name: "Chicken - Ground",
        discription:
          "imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum",
        imgURL: "http://dummyimage.com/223x100.png/5fa2dd/ffffff",
      },
      {
        id: "f9750ead-d52b-4aad-938e-49398ae529fc",
        name: "Cheese - Valancey",
        discription:
          "rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo",
        imgURL: "http://dummyimage.com/160x100.png/dddddd/000000",
      },
      {
        id: "325ce296-0c44-4dcd-8b6e-e810b3a9308b",
        name: "Calaloo",
        discription:
          "feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",
        imgURL: "http://dummyimage.com/202x100.png/5fa2dd/ffffff",
      },
      {
        id: "0cb4e293-c743-46a5-adf7-dc6c0baa48b3",
        name: "Plastic Wrap",
        discription:
          "blandit non interdum in ante vestibulum ante ipsum primis in faucibus",
        imgURL: "http://dummyimage.com/166x100.png/ff4444/ffffff",
      },
      {
        id: "6fe83c51-bd54-4e24-848a-bfbcd234f3ba",
        name: "Eel Fresh",
        discription:
          "erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit",
        imgURL: "http://dummyimage.com/113x100.png/ff4444/ffffff",
      },
      {
        id: "835f8c15-2051-4918-b70c-1147734f6cb6",
        name: "Wine - Red, Wolf Blass, Yellow",
        discription:
          "tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim",
        imgURL: "http://dummyimage.com/123x100.png/ff4444/ffffff",
      },
      {
        id: "7da965ae-fea4-4298-93d5-35cfaeecfbff",
        name: "Mix Pina Colada",
        discription:
          "in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie",
        imgURL: "http://dummyimage.com/132x100.png/cc0000/ffffff",
      },
      {
        id: "58e11ab2-725f-46dd-8fec-4a6d0ed11417",
        name: "Pork - Side Ribs",
        discription:
          "non mauris morbi non lectus aliquam sit amet diam in magna",
        imgURL: "http://dummyimage.com/204x100.png/cc0000/ffffff",
      },
      {
        id: "3883ec9d-cf40-40eb-8f18-58e4f1e88f88",
        name: "Pasta - Fettuccine, Egg, Fresh",
        discription:
          "nullam varius nulla facilisi cras non velit nec nisi vulputate",
        imgURL: "http://dummyimage.com/205x100.png/cc0000/ffffff",
      },
      {
        id: "2ba02994-b041-4b5f-8291-4447f9687442",
        name: "Compound - Rum",
        discription:
          "quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie",
        imgURL: "http://dummyimage.com/245x100.png/dddddd/000000",
      },
      {
        id: "ebea7bc2-a8b9-4297-a5fd-52f0aec4ce32",
        name: "Mushroom - Shitake, Dry",
        discription:
          "sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor",
        imgURL: "http://dummyimage.com/110x100.png/dddddd/000000",
      },
      {
        id: "a430fe3b-1a9b-4e7c-a006-070769631bd8",
        name: "Pastry - Baked Scones - Mini",
        discription:
          "morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede",
        imgURL: "http://dummyimage.com/211x100.png/ff4444/ffffff",
      },
      {
        id: "0dc42266-03e2-4b00-b2b0-63049490c405",
        name: "Ham Black Forest",
        discription:
          "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
        imgURL: "http://dummyimage.com/190x100.png/ff4444/ffffff",
      },
      {
        id: "048dd024-ac4d-499d-9034-958d2f9a5a64",
        name: "Coffee - Decafenated",
        discription:
          "tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis",
        imgURL: "http://dummyimage.com/106x100.png/ff4444/ffffff",
      },
      {
        id: "e00e3cbc-815e-465c-b628-8b5e315936d1",
        name: "Corn Shoots",
        discription:
          "nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget",
        imgURL: "http://dummyimage.com/187x100.png/cc0000/ffffff",
      },
      {
        id: "ed329a36-d5c9-4f0b-9563-d50e16332803",
        name: "Crab - Soft Shell",
        discription:
          "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi",
        imgURL: "http://dummyimage.com/183x100.png/ff4444/ffffff",
      },
      {
        id: "3750967f-1d19-452d-bb51-38df3326a3cf",
        name: "Bagel - Sesame Seed Presliced",
        discription:
          "potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam",
        imgURL: "http://dummyimage.com/244x100.png/ff4444/ffffff",
      },
      {
        id: "85992e9d-065a-49f2-ac56-8bb2c1279428",
        name: "Bread - Roll, Canadian Dinner",
        discription:
          "lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi",
        imgURL: "http://dummyimage.com/102x100.png/dddddd/000000",
      },
      {
        id: "3bc7168a-e3e5-46e4-b570-46dbb560a530",
        name: "Sugar - Cubes",
        discription:
          "pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit",
        imgURL: "http://dummyimage.com/166x100.png/ff4444/ffffff",
      },
      {
        id: "4bed3c67-63b8-4324-8f82-89a38b39606f",
        name: "Wine - White, Schroder And Schyl",
        discription:
          "sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent",
        imgURL: "http://dummyimage.com/155x100.png/cc0000/ffffff",
      },
      {
        id: "fd0a6ba2-3495-4cce-a66e-def620b0272b",
        name: "Swiss Chard - Red",
        discription:
          "et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum",
        imgURL: "http://dummyimage.com/106x100.png/5fa2dd/ffffff",
      },
      {
        id: "0a6bd0a3-2fb2-4afb-9e93-da67c6dc7747",
        name: "Veal - Round, Eye Of",
        discription:
          "nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor",
        imgURL: "http://dummyimage.com/240x100.png/5fa2dd/ffffff",
      },
    ],
  };
  render() {
    const { Products } = this.state;
    return (
      <Container>
        <h2>Products</h2>

        <Row>
          {Products.map((Product) => (
            <Col sm="4">
              <Card>
                <CardImg
                  alt="Card image cap"
                  src={Product.imgURL}
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">{Product.name}</CardTitle>
                  <CardText>{Product.discription}</CardText>
                  <CartContext.Consumer>
                    {({ addToCart }) => (
                      <Button onClick={() => addToCart(Product)}>
                        Add to cart
                      </Button>
                    )}
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default Products;
