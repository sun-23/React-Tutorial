import React, { useState } from "react";
import Item from "./item";
import SelectItem from "./SelectItem";
import Item404 from "./Item404";

function App() {
  const array1 = [
    {
      id: 0,
      name: "i9 9900K",
      img:
        "https://www.jib.co.th/img_master/product/medium/20181105084030_32103_23_1.jpg",
      type: "CPU"
    },
    {
      id: 1,
      name: "RYZEN 3950X",
      img:
        "https://www.jib.co.th/img_master/product/medium/20190709140702_34443_24_1.png",
      type: "CPU"
    },
    {
      id: 2,
      name: "RYZEN 3700X",
      img:
        "https://www.jib.co.th/img_master/product/medium/2019071808565334512_1.jpg",
      type: "CPU"
    },
    {
      id: 3,
      name: "i5 9400F",
      img:
        "https://www.jib.co.th/img_master/product/medium/20180801084323_28760_24_1.png",
      type: "CPU"
    },
    {
      id: 4,
      name: "i3 9100",
      img:
        "https://www.jib.co.th/img_master/product/medium/2019051308592633759_1.png",
      type: "CPU"
    },
    {
      id: 5,
      name: "RYZEN 3600",
      img:
        "https://www.jib.co.th/img_master/product/medium/20190723152420_34419_24_1.png",
      type: "CPU"
    },
    {
      id: 6,
      name: "i9 9900K",
      img:
        "https://www.jib.co.th/img_master/product/medium/20181105084030_32103_23_1.jpg",
      type: "CPU"
    },
    {
      id: 7,
      name: "RYZEN 3950X",
      img:
        "https://www.jib.co.th/img_master/product/medium/20190709140702_34443_24_1.png",
      type: "CPU"
    },
    {
      id: 8,
      name: "RYZEN 3700X",
      img:
        "https://www.jib.co.th/img_master/product/medium/2019071808565334512_1.jpg",
      type: "CPU"
    },
    {
      id: 9,
      name: "i5 9400F",
      img:
        "https://www.jib.co.th/img_master/product/medium/20180801084323_28760_24_1.png",
      type: "CPU"
    },
    {
      id: 10,
      name: "i3 9100",
      img:
        "https://www.jib.co.th/img_master/product/medium/2019051308592633759_1.png",
      type: "CPU"
    },
    {
      id: 11,
      name: "RYZEN 3600",
      img:
        "https://www.jib.co.th/img_master/product/medium/20190723152420_34419_24_1.png",
      type: "CPU"
    },
    {
      id: 12,
      name: "i9 9900K",
      img:
        "https://www.jib.co.th/img_master/product/medium/20181105084030_32103_23_1.jpg",
      type: "CPU"
    },
    {
      id: 13,
      name: "RYZEN 3950X",
      img:
        "https://www.jib.co.th/img_master/product/medium/20190709140702_34443_24_1.png",
      type: "CPU"
    },
    {
      id: 14,
      name: "RYZEN 3700X",
      img:
        "https://www.jib.co.th/img_master/product/medium/2019071808565334512_1.jpg",
      type: "CPU"
    },
    {
      id: 15,
      name: "i5 9400F",
      img:
        "https://www.jib.co.th/img_master/product/medium/20180801084323_28760_24_1.png",
      type: "CPU"
    },
    {
      id: 16,
      name: "i3 9100",
      img:
        "https://www.jib.co.th/img_master/product/medium/2019051308592633759_1.png",
      type: "CPU"
    },
    {
      id: 17,
      name: "RYZEN 3600",
      img:
        "https://www.jib.co.th/img_master/product/medium/20190723152420_34419_24_1.png",
      type: "CPU"
    },
    {
      id: 18,
      name: "RTX 2060",
      img:
        "https://www.jib.co.th/img_master/product/medium/2019081411260234773_1.jpg?v=347731566206470",
      type: "GPU"
    },
    {
      id: 19,
      name: "RTX 2070",
      img:
        "https://www.jib.co.th/img_master/product/medium/2018102709011432007_1.jpg?v=320071571908382",
      type: "GPU"
    },
    {
      id: 20,
      name: "RTX 2070super",
      img:
        "https://www.jib.co.th/img_master/product/medium/2019082713570534902_1.jpg?v=349021567072622",
      type: "GPU"
    },
    {
      id: 21,
      name: "RTX 2080",
      img:
        "https://www.jib.co.th/img_master/product/medium/2019042914091933629_1.jpg?v=336291562308931",
      type: "GPU"
    },
    {
      id: 22,
      name: "RTX 2080super",
      img:
        "https://www.jib.co.th/img_master/product/medium/2019080513300834659_1.jpg?v=346591568178996",
      type: "GPU"
    },
    {
      id: 23,
      name: "RTX 2080Ti",
      img:
        "https://www.jib.co.th/img_master/product/medium/2019121713392936084_1.jpg?v=360841577342462",
      type: "GPU"
    }
  ];

  const componentObj = {
    CPU: {
      type: "CPU",
      select: {
        id: 0,
        name: "Please Select CPU",
        img: "",
        type: "CPU"
      }
    },
    GPU: {
      type: "GPU",
      select: {
        id: 0,
        name: "Please Select GPU",
        img: "",
        type: "GPU"
      }
    }
  };

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(9);
  const [productShow, setShow] = useState([]);
  const [component, setComponent] = useState(componentObj);

  //show product is this type
  function onSelect(type) {
    //console.log("select id : ", type);
    setShow(
      array1.filter(item => {
        return item.type == type;
      })
    );

    setDisplayMin(0);
  }

  // set data component obj
  function Add(compo) {
    //console.log("component add : ", compo);
    setComponent({
      ...component,
      [compo.type]: {
        type: compo.type,
        select: compo
      }
    });

    //console.log(
    //  "component ",
    //  component[compo.type].type,
    //  component[compo.type].select
    //);
  }

  // set display product
  function setDisplayMin(num) {
    if (productShow.length >= 9) {
      setMin(num);
      setMax(num + 9);
    } else {
      setMin(0);
      setMax(9);
    }
  }

  return (
    <div className="divShop">
      <div className="flex-Select">
        <h1>Select Components</h1>
        <SelectItem
          data={component["CPU"]}
          onSelect={onSelect}
          selectData={component["CPU"].select}
        />
        <SelectItem
          data={component["GPU"]}
          onSelect={onSelect}
          selectData={component["GPU"].select}
        />
      </div>
      <div className="flex-product">
        <div>
          {productShow.length == 0 ? (
            <Item404 />
          ) : (
            productShow.map((product, id) => {
              //filter page under 9 product
              return id >= min && id <= max ? (
                <Item key={id} onAdd={Add} data={product} />
              ) : null;
            })
          )}
        </div>
        <div className="btnPage">
          <button onClick={setDisplayMin.bind(this, 0)}>1</button>
          <button onClick={setDisplayMin.bind(this, 10)}>2</button>
        </div>
      </div>
    </div>
  );
}

export default App;
